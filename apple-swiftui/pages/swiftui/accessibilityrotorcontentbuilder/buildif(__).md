> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityrotorcontentbuilder/buildif(_:)](https://developer.apple.com/documentation/swiftui/accessibilityrotorcontentbuilder/buildif(_:))

# buildIf(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
@export(implementation) static func buildIf<Content>(_ content: Content?) -> some AccessibilityRotorContent where Content : AccessibilityRotorContent

```

## See Also

### Building navigation content

- [buildBlock(\_:)](buildblock%28__%29.md)
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
