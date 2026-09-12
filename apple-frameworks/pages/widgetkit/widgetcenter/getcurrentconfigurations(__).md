> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetcenter/getcurrentconfigurations(_:)](https://developer.apple.com/documentation/widgetkit/widgetcenter/getcurrentconfigurations(_:))

# getCurrentConfigurations(\_:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

Retrieves information about user-configured widgets.

## Declaration

```swift
@preconcurrency func getCurrentConfigurations(_ completion: @escaping @Sendable (Result<[WidgetInfo], any Error>) -> Void)
```

## Parameters

- `completion`: A completion handler called when the widget information is available.

## Mentioned In

- [Making a configurable widget](../making-a-configurable-widget.md)

## See Also

### Getting Widget Information

- [shared](shared.md): The shared widget center.
- [WidgetCenter.UserInfoKey](userinfokey.md): An object that defines keys for accessing information in a user info dictionary.
