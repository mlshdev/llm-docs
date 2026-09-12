> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/keyframesbuilder/buildeither(second:)](https://developer.apple.com/documentation/swiftui/keyframesbuilder/buildeither(second:))

# buildEither(second:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func buildEither<First, Second>(second component: Second) -> KeyframeTrackContentBuilder<Value>.Conditional<Value, First, Second> where Value == First.Value, First : KeyframeTrackContent, Second : KeyframeTrackContent, First.Value == Second.Value
```

## See Also

### Building keyframes

- [buildArray(\_:)](buildarray%28__%29.md)
- [buildBlock()](buildblock%28%29.md)
- [buildEither(first:)](buildeither%28first_%29.md)
- [buildExpression(\_:)](buildexpression%28__%29.md): Keyframes
- [buildFinalResult(\_:)](buildfinalresult%28__%29.md)
- [buildPartialBlock(accumulated:next:)](buildpartialblock%28accumulated_next_%29.md)
- [buildPartialBlock(first:)](buildpartialblock%28first_%29.md)
