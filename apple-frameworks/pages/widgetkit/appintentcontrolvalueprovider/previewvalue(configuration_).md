> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/appintentcontrolvalueprovider/previewvalue(configuration:)](https://developer.apple.com/documentation/widgetkit/appintentcontrolvalueprovider/previewvalue(configuration:))

# previewValue(configuration:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

A value to be shown while previewing the control in the add sheet.

## Declaration

```swift
func previewValue(configuration: Self.Configuration) -> Self.Value
```

## Parameters

- `configuration`: The intent containing user-editable parameters.

<a id="discussion"></a>

## Discussion

This value should be generated quickly and cheaply. Calculate more expensive and accurate values in [currentValue(configuration:)](currentvalue%28configuration_%29.md).
