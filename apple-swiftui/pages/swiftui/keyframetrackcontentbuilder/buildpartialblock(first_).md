> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/keyframetrackcontentbuilder/buildpartialblock(first:)](https://developer.apple.com/documentation/swiftui/keyframetrackcontentbuilder/buildpartialblock(first:))

# buildPartialBlock(first:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func buildPartialBlock<K>(first: K) -> K where Value == K.Value, K : KeyframeTrackContent
```

## See Also

### Building keyframe track content

- [buildArray(\_:)](buildarray%28__%29.md)
- [buildBlock()](buildblock%28%29.md)
- [buildEither(first:)](buildeither%28first_%29.md)
- [buildEither(second:)](buildeither%28second_%29.md)
- [buildExpression(\_:)](buildexpression%28__%29.md)
- [buildPartialBlock(accumulated:next:)](buildpartialblock%28accumulated_next_%29.md)
- [KeyframeTrackContentBuilder.Conditional](conditional.md): Conforms when `Value` conforms to `Animatable`. A conditional result from the result builder.
