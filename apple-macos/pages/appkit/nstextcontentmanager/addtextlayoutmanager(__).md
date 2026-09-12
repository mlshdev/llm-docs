> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanager/addtextlayoutmanager(_:)](https://developer.apple.com/documentation/appkit/nstextcontentmanager/addtextlayoutmanager(_:))

# addTextLayoutManager(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Adds the layout manager you provide to the list of layout managers.

## Declaration

```swift
func addTextLayoutManager(_ textLayoutManager: NSTextLayoutManager)
```

## Parameters

- `textLayoutManager`: The layout manager to add.

## See Also

### Working with layout managers

- [primaryTextLayoutManager](primarytextlayoutmanager.md): The primary text layout manager for this content.
- [textLayoutManagers](textlayoutmanagers.md): The array of text layout managers associated with this text content manager.
- [automaticallySynchronizesTextLayoutManagers](automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [removeTextLayoutManager(\_:)](removetextlayoutmanager%28__%29.md): Removes the layout manager you specifiy from the list of layout managers.
- [synchronizeTextLayoutManagers(\_:)](synchronizetextlayoutmanagers%28__%29.md): Synchronizes changes to all nonprimary text layout managers.

# addTextLayoutManager: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Adds the layout manager you provide to the list of layout managers.

## Declaration

```objectivec
- (void) addTextLayoutManager:(NSTextLayoutManager *) textLayoutManager;
```

## Parameters

- `textLayoutManager`: The layout manager to add.

## See Also

### Working with layout managers

- [primaryTextLayoutManager](primarytextlayoutmanager.md): The primary text layout manager for this content.
- [textLayoutManagers](textlayoutmanagers.md): The array of text layout managers associated with this text content manager.
- [automaticallySynchronizesTextLayoutManagers](automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [removeTextLayoutManager:](removetextlayoutmanager%28__%29.md): Removes the layout manager you specifiy from the list of layout managers.
- [synchronizeTextLayoutManagers:](synchronizetextlayoutmanagers%28__%29.md): Synchronizes changes to all nonprimary text layout managers.
