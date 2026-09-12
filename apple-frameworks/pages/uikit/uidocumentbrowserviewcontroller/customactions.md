> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontroller/customactions](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontroller/customactions)

# customActions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Custom document browser actions.

## Declaration

```swift
var customActions: [UIDocumentBrowserAction] { get set }
```

## Mentioned In

- [Adding custom actions and activities](../adding-custom-actions-and-activities.md)

<a id="Discussion"></a>

## Discussion

By default, this property contains an empty array. Assign an array of [UIDocumentBrowserAction](../uidocumentbrowseraction.md) objects to add custom document browser actions.

Document browser actions can be accessed in two ways:

- *Navigation bar* actions appear in the Navigation bar when the user places the browser into the Select mode.
- *Menu* actions appear when the user long presses on a document or folder.

When triggered, these actions are passed the URLs of the currently selected items.

## See Also

### Adding custom actions

- [UIDocumentBrowserAction](../uidocumentbrowseraction.md): A custom action that you can create and add to a document browser’s Edit menu or navigation bar.

# customActions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Custom document browser actions.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<UIDocumentBrowserAction *> * customActions;
```

## Mentioned In

- [Adding custom actions and activities](../adding-custom-actions-and-activities.md)

<a id="Discussion"></a>

## Discussion

By default, this property contains an empty array. Assign an array of [UIDocumentBrowserAction](../uidocumentbrowseraction.md) objects to add custom document browser actions.

Document browser actions can be accessed in two ways:

- *Navigation bar* actions appear in the Navigation bar when the user places the browser into the Select mode.
- *Menu* actions appear when the user long presses on a document or folder.

When triggered, these actions are passed the URLs of the currently selected items.

## See Also

### Adding custom actions

- [UIDocumentBrowserAction](../uidocumentbrowseraction.md): A custom action that you can create and add to a document browser’s Edit menu or navigation bar.
