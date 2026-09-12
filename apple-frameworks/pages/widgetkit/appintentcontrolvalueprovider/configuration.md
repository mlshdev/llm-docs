> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/appintentcontrolvalueprovider/configuration](https://developer.apple.com/documentation/widgetkit/appintentcontrolvalueprovider/configuration)

# Configuration

**Framework:** WidgetKit  
**Kind:** Associated Type  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

The type of intent used to prepare the value.

## Declaration

```swift
associatedtype Configuration : ControlConfigurationIntent
```

<a id="discussion"></a>

## Discussion

When you create a custom provider, Swift infers this type from your implementation of the required `ValueProvider/previewValue(configuration:)` and `ValueProvider/currentValue(configuration:)` methods.
