> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/widgetkit/appintentcontrolvalueprovider/value

# Value

**Framework:** WidgetKit  
**Kind:** Associated Type  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

The type of value provided to the template.

## Declaration

```swift
associatedtype Value
```

<a id="discussion"></a>

## Discussion

When you create a custom provider, Swift infers this type from your implementation of the required `ValueProvider/previewValue(configuration:)` and `ValueProvider/currentValue(configuration:)` methods.
