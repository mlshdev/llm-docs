> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/scoringscale](https://developer.apple.com/documentation/evaluations/scoringscale)

# ScoringScale

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A scoring scale that defines the set of options a judge can assign.

## Declaration

```swift
struct ScoringScale
```

## Mentioned In

- [Designing effective model-judge evaluators](designing-effective-model-judges.md)

<a id="overview"></a>

## Overview

Use the factory methods to create scales from numeric dictionaries, pass or fail pairs, or typed [ScoreLevel](scorelevel.md) enums:

```swift
// Numeric scale
let _ = ScoringScale.numeric([5: "Flawless", 3: "Readable", 1: "Incomprehensible"])

// Pass or fail
let _ = ScoringScale.passFail(passDescription: "Safe", failDescription: "Unsafe")

// Typed enum
enum SafetyLevel: ScoreLevel {
    case safe, unsafe
    var guideDescription: String { self == .safe ? "Safe" : "Unsafe" }
    var value: Double { self == .safe ? 1 : 0 }
}
let _ = ScoringScale.custom(SafetyLevel.self)
```

## Topics

### Creating a scale

- [passFail(passDescription:failDescription:)](scoringscale/passfail%28passdescription_faildescription_%29.md): Creates a binary pass or fail scoring scale.
- [numeric(\_:)](scoringscale/numeric%28__%29.md): Creates a scoring scale from a numeric dictionary.
- [custom(\_:)](scoringscale/custom%28__%29.md): Creates a scoring scale from a typed score level enum.
- [init(options:)](scoringscale/init%28options_%29.md): Creates a scoring scale with explicit options.

### Inspecting a scale

- [options](scoringscale/options.md): The scale options, ordered from highest to lowest value.
- [ScaleOption](scaleoption.md): A single option in a scoring scale.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining scales

- [ScoreLevel](scorelevel.md): A type that defines individual levels within a scoring scale.
