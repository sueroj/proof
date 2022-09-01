
import { ChallengeCategoryMajor, CompleteStatus, EventTier } from "core/enums/enums"

// Tier Colors
// const EVENT_TIER_COLOR = new Map([
//     [EventTier.TIER_0, '#d9dbdb'],  // Pastel grey
//     [EventTier.TIER_1, '#5bfc7e'],  // Pastel green
//     [EventTier.TIER_2, '#63a2ff'],  // Pastel blue
//     [EventTier.TIER_3, '#9c5bfc'],  // Pastel purple
//     [EventTier.TIER_4, '#fccc5b']   // Pastel orange
// ])

const EVENT_TIER_COLOR = new Map([
    [1, '#d9dbdb'],  // Pastel grey
    [2, '#5bfc7e'],  // Pastel green
    [3, '#63a2ff'],  // Pastel blue
    [4, '#9c5bfc'],  // Pastel purple
    [5, '#fccc5b']   // Pastel orange
])

const EVENT_CATEGORY_COLOR_DEFAULT = '#dbdbdb'              // Pastel grey
const EVENT_CATEGORY_COLOR = new Map([
    [ChallengeCategoryMajor.ZONE, '#ff8c8c'],               // Pastel Red
    [ChallengeCategoryMajor.COURSE, '#4dc95d'],             // Darker Pastel Green
    [ChallengeCategoryMajor.SPRINT, '#9ebdff']              // Pastel Blue
])

// Completion Cavas Colors
const COMPLETE_CANVAS_STANDARD = {
    border: '#00FF00',
    fill: '#292929',
    checkmark: '#00FF00'
}

const COMPLETE_CANVAS_GOLD = {
    border: '#fce303',
    fill: '#d1a92e',
    checkmark: '#fce303'
}

const COMPLETE_CANVAS_SILVER = {
    border: '#c2c2c2',
    fill: '#7d7d7d',
    checkmark: '#c2c2c2'
}

const COMPLETE_CANVAS_BRONZE = {
    border: '#d17d00',
    fill: '#6e4200',
    checkmark: '#d17d00'
}

class ColorScheme {
    readonly MOUSEOVER_DEFAULT: string = '#63a2ff'
    // readonly c_canvas_standard: C_CANVAS = COMPLETION_CANVAS_STANDARD
    // readonly c_canvas_gold: C_CANVAS = COMPLETION_CANVAS_GOLD
    // readonly c_canvas_silver: C_CANVAS = COMPLETION_CANVAS_SILVER
    // readonly c_canvas_bronze: C_CANVAS = COMPLETION_CANVAS_BRONZE

    public get_difficulty_tier_color(difficulty: number) {
        let color = EVENT_TIER_COLOR.get(1) // Default = first element, grey
        for (const [diff, clr] of EVENT_TIER_COLOR.entries()) {
            if (difficulty === diff) {
                color = clr
            }
        }
        return color
    }

    public get_event_category_color(category: ChallengeCategoryMajor) {
        let color = EVENT_CATEGORY_COLOR_DEFAULT
        for (const [cat, clr] of EVENT_CATEGORY_COLOR.entries()) {
            if (category === cat) {
                color = clr
            }
        }
        return color
    }

    public get_completion_canvas(status: CompleteStatus) {
        switch (status) {
            case CompleteStatus.STANDARD_T0:
                return COMPLETE_CANVAS_STANDARD
            case CompleteStatus.GOLD_T3:
                return COMPLETE_CANVAS_GOLD
            case CompleteStatus.SILVER_T2:
                return COMPLETE_CANVAS_SILVER
            case CompleteStatus.BRONZE_T1:
                return COMPLETE_CANVAS_BRONZE
            default:
                return COMPLETE_CANVAS_STANDARD
        }
    }

}

export type C_CANVAS = typeof COMPLETE_CANVAS_STANDARD
const color_scheme = new ColorScheme()
export default color_scheme