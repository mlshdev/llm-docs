> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilityrotorcontentbuilder/buildexpression(_:)](https://developer.apple.com/documentation/swiftui/accessibilityrotorcontentbuilder/buildexpression(_:))

# buildExpression(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Builds an expression within the builder.

## Declaration

```swift
@export(implementation) static func buildExpression<Content>(_ content: Content) -> Content where Content : AccessibilityRotorContent
```

## See Also

### Building navigation content

- [buildBlock(\_:)](buildblock%28__%29.md)
- [buildIf(\_:)](buildif%28__%29.md)
