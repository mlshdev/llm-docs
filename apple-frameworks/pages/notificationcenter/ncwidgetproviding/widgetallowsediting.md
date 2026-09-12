> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetproviding/widgetallowsediting](https://developer.apple.com/documentation/notificationcenter/ncwidgetproviding/widgetallowsediting)

# widgetAllowsEditing (Swift)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

A Boolean value indicating whether the widget can be edited by users.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
optional var widgetAllowsEditing: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When a widget that supports editing sets this property to [true](https://developer.apple.com/documentation/swift/true), it automatically gets a system-provided button in its header area that users choose to begin or end editing. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting Editing

- [widgetDidBeginEditing()](widgetdidbeginediting%28%29.md): Deprecated. Called when a user chooses the widget’s begin editing button.
- [widgetDidEndEditing()](widgetdidendediting%28%29.md): Deprecated. Called when a widget’s editing session ends.

# widgetAllowsEditing (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

A Boolean value indicating whether the widget can be edited by users.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
@property (readonly) BOOL widgetAllowsEditing;
```

<a id="Discussion"></a>

## Discussion

When a widget that supports editing sets this property to [true](https://developer.apple.com/documentation/swift/true), it automatically gets a system-provided button in its header area that users choose to begin or end editing. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting Editing

- [widgetDidBeginEditing](widgetdidbeginediting%28%29.md): Deprecated. Called when a user chooses the widget’s begin editing button.
- [widgetDidEndEditing](widgetdidendediting%28%29.md): Deprecated. Called when a widget’s editing session ends.
