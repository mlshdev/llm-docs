> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/dynamicrange](https://developer.apple.com/documentation/swiftui/image/dynamicrange)

# Image.DynamicRange

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
struct DynamicRange
```

## Topics

### Getting dynamic range values

- [standard](dynamicrange/standard.md): Restrict the image content dynamic range to the standard range.
- [high](dynamicrange/high.md): Allow image content to use an unrestricted extended range.
- [constrainedHigh](dynamicrange/constrainedhigh.md): Allow image content to use some extended range. This is appropriate for placing HDR content next to SDR content.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying dynamic range

- [allowedDynamicRange(\_:)](alloweddynamicrange%28__%29.md): Returns a new image configured with the specified allowed dynamic range.
- [allowedDynamicRange](../environmentvalues/alloweddynamicrange.md): The allowed dynamic range for the view, or nil.
