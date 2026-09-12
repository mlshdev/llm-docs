> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/widgetbundlebuilder/buildoptional(_:)](https://developer.apple.com/documentation/swiftui/widgetbundlebuilder/buildoptional(_:))

# buildOptional(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

Produces an optional widget for conditional statements in multi-statement closures that’s only visible when the condition evaluates to true.

## Declaration

```swift
@export(implementation) static func buildOptional(_ widget: (any Widget & _LimitedAvailabilityWidgetMarker)?) -> some Widget

```

<a id="discussion"></a>

## Discussion

Conditional statements in a [WidgetBundleBuilder](../widgetbundlebuilder.md) can contain an `if` statement but not an `else` statement, and the condition can only perform a compiler check for availability, like in the following code:

```swift
var body: some Widget {
    if #available(iOS 16, *) {
        WindowGroup {
            ContentView()
        }
    }
}
```

## See Also

### Bundling widgets

- [buildBlock()](buildblock%28%29.md): Builds an empty Widget from a block containing no statements, `{ }`.
- [buildBlock(\_:)](buildblock%28__%29.md)
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Builds an availability check within the builder
