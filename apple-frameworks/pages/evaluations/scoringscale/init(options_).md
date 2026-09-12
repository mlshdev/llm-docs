> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/scoringscale/init(options:)](https://developer.apple.com/documentation/evaluations/scoringscale/init(options:))

# init(options:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a scoring scale with explicit options.

## Declaration

```swift
init(options: [ScaleOption])
```

## Parameters

- `options`: The scale options. Sorted by value descending.

## See Also

### Creating a scale

- [passFail(passDescription:failDescription:)](passfail%28passdescription_faildescription_%29.md): Creates a binary pass or fail scoring scale.
- [numeric(\_:)](numeric%28__%29.md): Creates a scoring scale from a numeric dictionary.
- [custom(\_:)](custom%28__%29.md): Creates a scoring scale from a typed score level enum.
