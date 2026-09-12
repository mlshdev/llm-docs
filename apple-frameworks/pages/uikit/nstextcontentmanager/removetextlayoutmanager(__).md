> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentmanager/removetextlayoutmanager(_:)](https://developer.apple.com/documentation/uikit/nstextcontentmanager/removetextlayoutmanager(_:))

# removeTextLayoutManager(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Removes the layout manager you specifiy from the list of layout managers.

## Declaration

```swift
func removeTextLayoutManager(_ textLayoutManager: NSTextLayoutManager)
```

## Parameters

- `textLayoutManager`: The layout manager to remove.

## See Also

### Working with layout managers

- [primaryTextLayoutManager](primarytextlayoutmanager.md): The primary text layout manager for this content.
- [textLayoutManagers](textlayoutmanagers.md): The array of text layout managers associated with this text content manager.
- [automaticallySynchronizesTextLayoutManagers](automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [addTextLayoutManager(\_:)](addtextlayoutmanager%28__%29.md): Adds the layout manager you provide to the list of layout managers.
- [synchronizeTextLayoutManagers(\_:)](synchronizetextlayoutmanagers%28__%29.md): Synchronizes changes to all nonprimary text layout managers.

# removeTextLayoutManager: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Removes the layout manager you specifiy from the list of layout managers.

## Declaration

```objectivec
- (void) removeTextLayoutManager:(NSTextLayoutManager *) textLayoutManager;
```

## Parameters

- `textLayoutManager`: The layout manager to remove.

## See Also

### Working with layout managers

- [primaryTextLayoutManager](primarytextlayoutmanager.md): The primary text layout manager for this content.
- [textLayoutManagers](textlayoutmanagers.md): The array of text layout managers associated with this text content manager.
- [automaticallySynchronizesTextLayoutManagers](automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [addTextLayoutManager:](addtextlayoutmanager%28__%29.md): Adds the layout manager you provide to the list of layout managers.
- [synchronizeTextLayoutManagers:](synchronizetextlayoutmanagers%28__%29.md): Synchronizes changes to all nonprimary text layout managers.
