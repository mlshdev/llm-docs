> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/systemitem](https://developer.apple.com/documentation/uikit/uibarbuttonitem/systemitem)

# UIBarButtonItem.SystemItem (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that define system-supplied images for bar button items.

## Declaration

```swift
enum SystemItem
```

## Topics

### Constants

- [UIBarButtonItem.SystemItem.done](systemitem/done.md): The system Done button, localized.
- [UIBarButtonItem.SystemItem.cancel](systemitem/cancel.md): The system Cancel button, localized.
- [UIBarButtonItem.SystemItem.edit](systemitem/edit.md): The system Edit button, localized.
- [UIBarButtonItem.SystemItem.save](systemitem/save.md): The system Save button, localized.
- [UIBarButtonItem.SystemItem.add](systemitem/add.md): The system plus button containing an icon of a plus sign.
- [UIBarButtonItem.SystemItem.flexibleSpace](systemitem/flexiblespace.md): Blank space to add between other items.
- [UIBarButtonItem.SystemItem.fixedSpace](systemitem/fixedspace.md): Blank space to add between other items.
- [UIBarButtonItem.SystemItem.compose](systemitem/compose.md): The system compose button.
- [UIBarButtonItem.SystemItem.reply](systemitem/reply.md): The system reply button.
- [UIBarButtonItem.SystemItem.action](systemitem/action.md): The system action button.
- [UIBarButtonItem.SystemItem.organize](systemitem/organize.md): The system organize button.
- [UIBarButtonItem.SystemItem.bookmarks](systemitem/bookmarks.md): The system bookmarks button.
- [UIBarButtonItem.SystemItem.search](systemitem/search.md): The system search button.
- [UIBarButtonItem.SystemItem.refresh](systemitem/refresh.md): The system refresh button.
- [UIBarButtonItem.SystemItem.stop](systemitem/stop.md): The system stop button.
- [UIBarButtonItem.SystemItem.camera](systemitem/camera.md): The system camera button.
- [UIBarButtonItem.SystemItem.trash](systemitem/trash.md): The system trash button.
- [UIBarButtonItem.SystemItem.play](systemitem/play.md): The system play button.
- [UIBarButtonItem.SystemItem.pause](systemitem/pause.md): The system pause button.
- [UIBarButtonItem.SystemItem.rewind](systemitem/rewind.md): The system rewind button.
- [UIBarButtonItem.SystemItem.fastForward](systemitem/fastforward.md): The system fast forward button.
- [UIBarButtonItem.SystemItem.undo](systemitem/undo.md): The system undo button.
- [UIBarButtonItem.SystemItem.redo](systemitem/redo.md): The system redo button.
- [UIBarButtonItem.SystemItem.pageCurl](systemitem/pagecurl.md): Deprecated. The system page curl button.
- [UIBarButtonItem.SystemItem.close](systemitem/close.md): The system close button.
- [UIBarButtonItem.SystemItem.writingTools](systemitem/writingtools.md)

### Initializers

- [init(rawValue:)](systemitem/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating system items

- [init(systemItem:primaryAction:menu:)](init%28systemitem_primaryaction_menu_%29.md): Creates an item using the specified system item, primary action, and context menu.
- [init(barButtonSystemItem:target:action:)](init%28barbuttonsystemitem_target_action_%29.md): Creates an item using the specified system item, target, and action.

# UIBarButtonSystemItem (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that define system-supplied images for bar button items.

## Declaration

```objectivec
enum UIBarButtonSystemItem : NSInteger;
```

## Topics

### Constants

- [UIBarButtonSystemItemDone](systemitem/done.md): The system Done button, localized.
- [UIBarButtonSystemItemCancel](systemitem/cancel.md): The system Cancel button, localized.
- [UIBarButtonSystemItemEdit](systemitem/edit.md): The system Edit button, localized.
- [UIBarButtonSystemItemSave](systemitem/save.md): The system Save button, localized.
- [UIBarButtonSystemItemAdd](systemitem/add.md): The system plus button containing an icon of a plus sign.
- [UIBarButtonSystemItemFlexibleSpace](systemitem/flexiblespace.md): Blank space to add between other items.
- [UIBarButtonSystemItemFixedSpace](systemitem/fixedspace.md): Blank space to add between other items.
- [UIBarButtonSystemItemCompose](systemitem/compose.md): The system compose button.
- [UIBarButtonSystemItemReply](systemitem/reply.md): The system reply button.
- [UIBarButtonSystemItemAction](systemitem/action.md): The system action button.
- [UIBarButtonSystemItemOrganize](systemitem/organize.md): The system organize button.
- [UIBarButtonSystemItemBookmarks](systemitem/bookmarks.md): The system bookmarks button.
- [UIBarButtonSystemItemSearch](systemitem/search.md): The system search button.
- [UIBarButtonSystemItemRefresh](systemitem/refresh.md): The system refresh button.
- [UIBarButtonSystemItemStop](systemitem/stop.md): The system stop button.
- [UIBarButtonSystemItemCamera](systemitem/camera.md): The system camera button.
- [UIBarButtonSystemItemTrash](systemitem/trash.md): The system trash button.
- [UIBarButtonSystemItemPlay](systemitem/play.md): The system play button.
- [UIBarButtonSystemItemPause](systemitem/pause.md): The system pause button.
- [UIBarButtonSystemItemRewind](systemitem/rewind.md): The system rewind button.
- [UIBarButtonSystemItemFastForward](systemitem/fastforward.md): The system fast forward button.
- [UIBarButtonSystemItemUndo](systemitem/undo.md): The system undo button.
- [UIBarButtonSystemItemRedo](systemitem/redo.md): The system redo button.
- [UIBarButtonSystemItemPageCurl](systemitem/pagecurl.md): Deprecated. The system page curl button.
- [UIBarButtonSystemItemClose](systemitem/close.md): The system close button.
- [UIBarButtonSystemItemWritingTools](systemitem/writingtools.md)

## See Also

### Creating system items

- [initWithBarButtonSystemItem:primaryAction:menu:](initwithbarbuttonsystemitem_primaryaction_menu_.md): Creates an item using the specified system item, primary action, and context menu.
- [initWithBarButtonSystemItem:primaryAction:](initwithbarbuttonsystemitem_primaryaction_.md): Creates an item using the specified system item and primary action.
- [initWithBarButtonSystemItem:menu:](initwithbarbuttonsystemitem_menu_.md): Creates an item using the specified system item and context menu.
- [initWithBarButtonSystemItem:target:action:](init%28barbuttonsystemitem_target_action_%29.md): Creates an item using the specified system item, target, and action.
