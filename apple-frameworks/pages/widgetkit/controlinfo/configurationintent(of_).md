> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/controlinfo/configurationintent(of:)](https://developer.apple.com/documentation/widgetkit/controlinfo/configurationintent(of:))

# configurationIntent(of:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · watchOS 26.0+

Gets the associated App Intent.

## Declaration

```swift
func configurationIntent<Intent>(of intentType: Intent.Type = Intent.self) -> Intent? where Intent : ControlConfigurationIntent
```

## Parameters

- `intentType`: The expected type for the App Intent.

<a id="return-value"></a>

## Return Value

An App Intent that contains the user-edited values or nil if there is no associated App Intent or the type does not match `intentType`.
