> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/automaticallyupdatescontentconfiguration](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/automaticallyupdatescontentconfiguration)

# automaticallyUpdatesContentConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether the view automatically updates its content configuration when its state changes.

## Declaration

```swift
var automaticallyUpdatesContentConfiguration: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true), the cell automatically calls [updated(for:)](../uicontentconfiguration-9eib5/updated%28for_%29.md) on its [contentConfiguration](contentconfiguration-6b4eg.md) when the view’s [configurationState](configurationstate-7xj7r.md) changes, and applies the updated configuration back to the view. The default value is [true](https://developer.apple.com/documentation/swift/true).

If you override [updateConfiguration(using:)](updateconfiguration%28using_%29.md) to manually update and customize the content configuration, disable automatic updates by setting this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the content

- [defaultContentConfiguration()](defaultcontentconfiguration%28%29.md): Retrieves a default list content configuration for the view’s style.
- [contentConfiguration](contentconfiguration-6b4eg.md): The current content configuration of the view.
- [contentView](contentview.md): The content view of the header or footer.

# automaticallyUpdatesContentConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether the view automatically updates its content configuration when its state changes.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyUpdatesContentConfiguration;
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true), the cell automatically calls [updated(for:)](../uicontentconfiguration-9eib5/updated%28for_%29.md) on its [contentConfiguration](contentconfiguration-6b4eg.md) when the view’s [configurationState](configurationstate-7xj7r.md) changes, and applies the updated configuration back to the view. The default value is [true](https://developer.apple.com/documentation/swift/true).

If you override [updateConfiguration(using:)](updateconfiguration%28using_%29.md) to manually update and customize the content configuration, disable automatic updates by setting this property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing the content

- [defaultContentConfiguration](defaultcontentconfiguration.md): Retrieves a default list content configuration for the view’s style.
- [contentConfiguration](contentconfiguration-r49e.md): The current content configuration of the view.
- [contentView](contentview.md): The content view of the header or footer.
