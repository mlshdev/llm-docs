> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/scoringscale/custom(_:)](https://developer.apple.com/documentation/evaluations/scoringscale/custom(_:))

# custom(\_:)

**Framework:** Evaluations  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a scoring scale from a typed score level enum.

## Declaration

```swift
static func custom<Level>(_ level: Level.Type) -> ScoringScale where Level : ScoreLevel
```

## Parameters

- `level`: The score level type.

<a id="discussion"></a>

## Discussion

The method enumerates all cases and converts them to [ScaleOption](../scaleoption.md) values.

## See Also

### Creating a scale

- [passFail(passDescription:failDescription:)](passfail%28passdescription_faildescription_%29.md): Creates a binary pass or fail scoring scale.
- [numeric(\_:)](numeric%28__%29.md): Creates a scoring scale from a numeric dictionary.
- [init(options:)](init%28options_%29.md): Creates a scoring scale with explicit options.
