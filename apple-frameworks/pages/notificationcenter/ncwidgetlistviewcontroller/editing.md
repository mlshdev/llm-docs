> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetlistviewcontroller/editing](https://developer.apple.com/documentation/notificationcenter/ncwidgetlistviewcontroller/editing)

# editing (Swift)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

A Boolean value that indicates whether the list is in editing mode.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
var editing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When you set this property to [true](https://developer.apple.com/documentation/swift/true), the list view controller can display controls for reordering and removing rows. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting Editing

- [showsAddButtonWhenEditing](showsaddbuttonwhenediting.md): Deprecated. A Boolean value that indicates whether an Add (+) button is displayed while the list is in editing mode.

# editing (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

A Boolean value that indicates whether the list is in editing mode.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
@property (assign) BOOL editing;
```

<a id="Discussion"></a>

## Discussion

When you set this property to [true](https://developer.apple.com/documentation/swift/true), the list view controller can display controls for reordering and removing rows. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting Editing

- [showsAddButtonWhenEditing](showsaddbuttonwhenediting.md): Deprecated. A Boolean value that indicates whether an Add (+) button is displayed while the list is in editing mode.
