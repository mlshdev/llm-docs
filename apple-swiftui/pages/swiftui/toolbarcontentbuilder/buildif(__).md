> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarcontentbuilder/buildif(_:)](https://developer.apple.com/documentation/swiftui/toolbarcontentbuilder/buildif(_:))

# buildIf(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
static func buildIf<Content>(_ content: Content?) -> Content? where Content : CustomizableToolbarContent
```

## See Also

### Building conditional toolbar content

- [buildEither(first:)](buildeither%28first_%29.md)
- [buildEither(second:)](buildeither%28second_%29.md)
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md)
