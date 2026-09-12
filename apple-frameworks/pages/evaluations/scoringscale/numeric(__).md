> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/scoringscale/numeric(_:)](https://developer.apple.com/documentation/evaluations/scoringscale/numeric(_:))

# numeric(\_:)

**Framework:** Evaluations  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a scoring scale from a numeric dictionary.

## Declaration

```swift
static func numeric(_ scale: [Double : String]) -> ScoringScale
```

## Parameters

- `scale`: A dictionary mapping numeric scores to rubric guidance.

<a id="discussion"></a>

## Discussion

Each key-value pair maps a numeric score to rubric guidance. The label for each option derives from the numeric value.

## See Also

### Creating a scale

- [passFail(passDescription:failDescription:)](passfail%28passdescription_faildescription_%29.md): Creates a binary pass or fail scoring scale.
- [custom(\_:)](custom%28__%29.md): Creates a scoring scale from a typed score level enum.
- [init(options:)](init%28options_%29.md): Creates a scoring scale with explicit options.
