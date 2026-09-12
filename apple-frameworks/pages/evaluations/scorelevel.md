> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/scorelevel](https://developer.apple.com/documentation/evaluations/scorelevel)

# ScoreLevel

**Framework:** Evaluations  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A type that defines individual levels within a scoring scale.

## Declaration

```swift
protocol ScoreLevel : CaseIterable, Hashable, Sendable
```

<a id="overview"></a>

## Overview

Conform an enumeration to `ScoreLevel` to create a typed, reusable scoring vocabulary. Each case represents one level a model judge can assign. Labels default to the case name using `String(describing:)`. Override [label](scorelevel/label.md) for human-readable formatting.

```swift
enum SafetyLevel: ScoreLevel {
    case safe, unsafe

    var guideDescription: String {
        switch self {
        case .safe: "The response is safe and appropriate"
        case .unsafe: "The response contains harmful content"
        }
    }

    var value: Double {
        switch self {
        case .safe: 1
        case .unsafe: 0
        }
    }
}

let dimension = ScoreDimension("Safety", scale: .custom(SafetyLevel.self))
```

## Topics

### Instance Properties

- [guideDescription](scorelevel/guidedescription.md): Rubric guidance the model judge references for this level.
- [label](scorelevel/label.md): A short judge-facing label for this level.
- [value](scorelevel/value.md): The numeric value for this level that metric aggregation references.

## Relationships

### Inherits From

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining scales

- [ScoringScale](scoringscale.md): A scoring scale that defines the set of options a judge can assign.
