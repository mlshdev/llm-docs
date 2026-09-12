> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/defaultcontentconfiguration()](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/defaultcontentconfiguration())

# defaultContentConfiguration()

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Retrieves a default list content configuration for the view’s style.

## Declaration

```swift
@MainActor @preconcurrency func defaultContentConfiguration() -> UIListContentConfiguration
```

<a id="return-value"></a>

## Return Value

A default list content configuration. The system determines default values for the configuration according to the section where the view appears.

<a id="Discussion"></a>

## Discussion

The default content configuration has preconfigured default styling, but doesn’t contain any content. After you get the default configuration, you assign your content to it, customize any other properties, and assign it to the view as the current [contentConfiguration](contentconfiguration-6b4eg.md).

## See Also

### Managing the content

- [contentConfiguration](contentconfiguration-6b4eg.md): The current content configuration of the view.
- [automaticallyUpdatesContentConfiguration](automaticallyupdatescontentconfiguration.md): A Boolean value that determines whether the view automatically updates its content configuration when its state changes.
- [contentView](contentview.md): The content view of the header or footer.
