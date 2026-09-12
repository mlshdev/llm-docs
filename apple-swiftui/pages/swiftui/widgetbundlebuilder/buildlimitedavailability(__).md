> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetbundlebuilder/buildlimitedavailability(_:)](https://developer.apple.com/documentation/swiftui/widgetbundlebuilder/buildlimitedavailability(_:))

# buildLimitedAvailability(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Builds an availability check within the builder

## Declaration

```swift
@export(implementation) static func buildLimitedAvailability(_ widget: some ControlWidget) -> any Widget & _LimitedAvailabilityWidgetMarker
```

## See Also

### Bundling widgets

- [buildBlock()](buildblock%28%29.md): Builds an empty Widget from a block containing no statements, `{ }`.
- [buildBlock(\_:)](buildblock%28__%29.md)
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
- [buildOptional(\_:)](buildoptional%28__%29.md): Produces an optional widget for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.
