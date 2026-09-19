> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/widgetkit/widgetinfo/widgetconfigurationintent(of:)

# widgetConfigurationIntent(of:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 26.0+ · watchOS 10.0+

Gets the associated App Intent.

## Declaration

```swift
func widgetConfigurationIntent<Intent>(of intentType: Intent.Type = Intent.self) -> Intent? where Intent : WidgetConfigurationIntent
```

## Parameters

- `intentType`: The expected type for the App Intent.

<a id="return-value"></a>

## Return Value

An App Intent that contains the user-edited values or nil if there is no associated App Intent or the type does not match `intentType`.

## Mentioned In

- [Making a configurable widget](../making-a-configurable-widget.md)
