> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/scoringscale/passfail(passdescription:faildescription:)](https://developer.apple.com/documentation/evaluations/scoringscale/passfail(passdescription:faildescription:))

# passFail(passDescription:failDescription:)

**Framework:** Evaluations  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a binary pass or fail scoring scale.

## Declaration

```swift
static func passFail(passDescription: String, failDescription: String) -> ScoringScale
```

## Parameters

- `passDescription`: Rubric guidance for what constitutes a pass.
- `failDescription`: Rubric guidance for what constitutes a fail.

## See Also

### Creating a scale

- [numeric(\_:)](numeric%28__%29.md): Creates a scoring scale from a numeric dictionary.
- [custom(\_:)](custom%28__%29.md): Creates a scoring scale from a typed score level enum.
- [init(options:)](init%28options_%29.md): Creates a scoring scale with explicit options.
