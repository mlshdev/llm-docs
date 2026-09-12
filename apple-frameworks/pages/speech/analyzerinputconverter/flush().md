> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/analyzerinputconverter/flush()](https://developer.apple.com/documentation/speech/analyzerinputconverter/flush())

# flush()

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Completes pending audio conversions.

## Declaration

```swift
final func flush() throws -> [AnalyzerInput]
```

<a id="return-value"></a>

## Return Value

An array of `AnalyzerInput` objects containing completed pending audio conversions.

## See Also

### Converting a buffer

- [convert(\_:at:)](convert%28__at_%29.md): Converts an audio buffer.
