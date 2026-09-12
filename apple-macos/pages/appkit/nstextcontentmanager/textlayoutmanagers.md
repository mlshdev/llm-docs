> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanager/textlayoutmanagers](https://developer.apple.com/documentation/appkit/nstextcontentmanager/textlayoutmanagers)

# textLayoutManagers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The array of text layout managers associated with this text content manager.

## Declaration

```swift
var textLayoutManagers: [NSTextLayoutManager] { get }
```

<a id="Discussion"></a>

## Discussion

This property is KVO-compliant.

## See Also

### Working with layout managers

- [primaryTextLayoutManager](primarytextlayoutmanager.md): The primary text layout manager for this content.
- [automaticallySynchronizesTextLayoutManagers](automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [addTextLayoutManager(\_:)](addtextlayoutmanager%28__%29.md): Adds the layout manager you provide to the list of layout managers.
- [removeTextLayoutManager(\_:)](removetextlayoutmanager%28__%29.md): Removes the layout manager you specifiy from the list of layout managers.
- [synchronizeTextLayoutManagers(\_:)](synchronizetextlayoutmanagers%28__%29.md): Synchronizes changes to all nonprimary text layout managers.

# textLayoutManagers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The array of text layout managers associated with this text content manager.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSTextLayoutManager *> * textLayoutManagers;
```

<a id="Discussion"></a>

## Discussion

This property is KVO-compliant.

## See Also

### Working with layout managers

- [primaryTextLayoutManager](primarytextlayoutmanager.md): The primary text layout manager for this content.
- [automaticallySynchronizesTextLayoutManagers](automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [addTextLayoutManager:](addtextlayoutmanager%28__%29.md): Adds the layout manager you provide to the list of layout managers.
- [removeTextLayoutManager:](removetextlayoutmanager%28__%29.md): Removes the layout manager you specifiy from the list of layout managers.
- [synchronizeTextLayoutManagers:](synchronizetextlayoutmanagers%28__%29.md): Synchronizes changes to all nonprimary text layout managers.
