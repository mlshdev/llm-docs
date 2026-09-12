> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetproviding/widgetdidendediting()](https://developer.apple.com/documentation/notificationcenter/ncwidgetproviding/widgetdidendediting())

# widgetDidEndEditing() (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Called when a widget’s editing session ends.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
optional func widgetDidEndEditing()
```

<a id="Discussion"></a>

## Discussion

This method is called when a user chooses the widget’s end editing button or when editing is deactivated because editing begins in a different widget. This method can be called when [widgetAllowsEditing](widgetallowsediting.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Supporting Editing

- [widgetAllowsEditing](widgetallowsediting.md): Deprecated. A Boolean value indicating whether the widget can be edited by users.
- [widgetDidBeginEditing()](widgetdidbeginediting%28%29.md): Deprecated. Called when a user chooses the widget’s begin editing button.

# widgetDidEndEditing (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Called when a widget’s editing session ends.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (void) widgetDidEndEditing;
```

<a id="Discussion"></a>

## Discussion

This method is called when a user chooses the widget’s end editing button or when editing is deactivated because editing begins in a different widget. This method can be called when [widgetAllowsEditing](widgetallowsediting.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Supporting Editing

- [widgetAllowsEditing](widgetallowsediting.md): Deprecated. A Boolean value indicating whether the widget can be edited by users.
- [widgetDidBeginEditing](widgetdidbeginediting%28%29.md): Deprecated. Called when a user chooses the widget’s begin editing button.
