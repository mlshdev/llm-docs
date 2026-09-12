> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/renamedelegate-o32h](https://developer.apple.com/documentation/uikit/uinavigationitem/renamedelegate-o32h)

# renameDelegate

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The delegate for renaming the navigation item.

## Declaration

```objectivec
@property (nonatomic, weak, readwrite) id<UINavigationItemRenameDelegate> renameDelegate;
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

If you assign a non-`nil` value to this property, UIKit shows an inline text field UI for changing the navigation item’s title. This UI appears when either you or the system calls [rename:](../uiresponderstandardeditactions/rename%28__%29.md) on the navigation controller, which occurs when a person taps Rename in the title menu or when you call [rename:](../uiresponderstandardeditactions/rename%28__%29.md) explicitly.

To show Rename in the navigation item’s title menu, include the Rename menu element in the menu you return from [titleMenuProvider](titlemenuprovider.md). UIKit includes Rename in the set of menu element suggestions it passes in to this closure.

If you only want to show Rename in the title menu, assign a [renameDelegate](renamedelegate-o32h.md) without setting a [titleMenuProvider](titlemenuprovider.md). In this case, UIKit automatically generates a title menu containing the Rename menu element only.

If you set this property to `nil` while a rename operation is in progress, the operation cancels immediately.

## See Also

### Renaming documents

- [UINavigationItemRenameDelegate](../uinavigationitemrenamedelegate-96g5t.md): Methods an object implements to rename a navigation item.
