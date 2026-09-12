> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetbundlebuilder/buildexpression(_:)](https://developer.apple.com/documentation/swiftui/widgetbundlebuilder/buildexpression(_:))

# buildExpression(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

Builds an expression within the builder.

## Declaration

```swift
@export(implementation) static func buildExpression<Content>(_ content: Content) -> Content where Content : Widget
```

## See Also

### Bundling widgets

- [buildBlock()](buildblock%28%29.md): Builds an empty Widget from a block containing no statements, `{ }`.
- [buildBlock(\_:)](buildblock%28__%29.md)
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Builds an availability check within the builder
- [buildOptional(\_:)](buildoptional%28__%29.md): Produces an optional widget for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.
