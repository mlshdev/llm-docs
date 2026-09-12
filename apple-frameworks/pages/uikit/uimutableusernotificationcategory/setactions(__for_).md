> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableusernotificationcategory/setactions(_:for:)](https://developer.apple.com/documentation/uikit/uimutableusernotificationcategory/setactions(_:for:))

# setActions(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sets the actions to display for different alert styles.

> For more information, see [UIMutableUserNotificationCategory](../uimutableusernotificationcategory.md).

## Declaration

```swift
func setActions(_ actions: [UIUserNotificationAction]?, for context: UIUserNotificationActionContext)
```

## Parameters

- `actions`: An array of [UIUserNotificationAction](../uiusernotificationaction.md) objects representing the actions to display for the given context. When displaying the notification to the user, the system displays the action buttons using the same order as the items in this array. If you specify `nil` or an empty array, this method removes the actions for the specified context.
- `context`: The context in which the alert is displayed. For a list of possible values, see [UIUserNotificationActionContext](../uiusernotificationactioncontext.md).

<a id="Discussion"></a>

## Discussion

Use this method to set or change the actions associated with a specific context.

## See Also

### Modifying the action settings

- [identifier](identifier.md): Deprecated. The name of the action group.

# setActions:forContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sets the actions to display for different alert styles.

> For more information, see [UIMutableUserNotificationCategory](../uimutableusernotificationcategory.md).

## Declaration

```objectivec
- (void) setActions:(NSArray<UIUserNotificationAction *> *) actions forContext:(UIUserNotificationActionContext) context;
```

## Parameters

- `actions`: An array of [UIUserNotificationAction](../uiusernotificationaction.md) objects representing the actions to display for the given context. When displaying the notification to the user, the system displays the action buttons using the same order as the items in this array. If you specify `nil` or an empty array, this method removes the actions for the specified context.
- `context`: The context in which the alert is displayed. For a list of possible values, see [UIUserNotificationActionContext](../uiusernotificationactioncontext.md).

<a id="Discussion"></a>

## Discussion

Use this method to set or change the actions associated with a specific context.

## See Also

### Modifying the action settings

- [identifier](identifier.md): Deprecated. The name of the action group.
