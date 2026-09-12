> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetproviding/widgetdidbeginediting()](https://developer.apple.com/documentation/notificationcenter/ncwidgetproviding/widgetdidbeginediting())

# widgetDidBeginEditing() (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Called when a user chooses the widget’s begin editing button.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
optional func widgetDidBeginEditing()
```

<a id="Discussion"></a>

## Discussion

This method can be called when [widgetAllowsEditing](widgetallowsediting.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Supporting Editing

- [widgetAllowsEditing](widgetallowsediting.md): Deprecated. A Boolean value indicating whether the widget can be edited by users.
- [widgetDidEndEditing()](widgetdidendediting%28%29.md): Deprecated. Called when a widget’s editing session ends.

# widgetDidBeginEditing (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Called when a user chooses the widget’s begin editing button.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (void) widgetDidBeginEditing;
```

<a id="Discussion"></a>

## Discussion

This method can be called when [widgetAllowsEditing](widgetallowsediting.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Supporting Editing

- [widgetAllowsEditing](widgetallowsediting.md): Deprecated. A Boolean value indicating whether the widget can be edited by users.
- [widgetDidEndEditing](widgetdidendediting%28%29.md): Deprecated. Called when a widget’s editing session ends.
