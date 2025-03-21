import { defineSchema, defineTable } from "convex/server"
import { Infer, v } from "convex/values"

export const INTERVALS = {
    MONTH: "month",
    YEAR: "year",
} as const;

export const intervalValidator = v.union(
    v.literal(INTERVALS.MONTH),
    v.literal(INTERVALS.YEAR),
);

export type Interval = Infer<typeof intervalValidator>;

export default defineSchema({
    users: defineTable({
        createdAt: v.string(),
        email: v.string(),
        name: v.optional(v.string()),
        image: v.optional(v.string()),
        userId: v.string(),
        credits: v.optional(v.string()),
        tokenIdentifier: v.string(),
    }).index("by_token", ["tokenIdentifier"]),

    webhookEvents: defineTable({
        type: v.string(),
        createdAt: v.string(),
        modifiedAt: v.string(),
        data: v.any(),
    }).index("type", ["type"]),
});
