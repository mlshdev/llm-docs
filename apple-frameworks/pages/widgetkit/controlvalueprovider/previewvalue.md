> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlvalueprovider/previewvalue](https://developer.apple.com/documentation/widgetkit/controlvalueprovider/previewvalue)

# previewValue

**Framework:** WidgetKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A value to be shown while previewing the control in the add sheet.

## Declaration

```swift
var previewValue: Self.Value { get }
```

<a id="discussion"></a>

## Discussion

This value should be generated quickly and cheaply. Calculate more expensive and accurate values in [currentValue()](currentvalue%28%29.md).
