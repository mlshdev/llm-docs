> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanager/primarytextlayoutmanager](https://developer.apple.com/documentation/appkit/nstextcontentmanager/primarytextlayoutmanager)

# primaryTextLayoutManager (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The primary text layout manager for this content.

## Declaration

```swift
var primaryTextLayoutManager: NSTextLayoutManager? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to an [NSTextLayoutManager](../nstextlayoutmanager.md) not in `textLayoutManagers` resets it to `nil`. It automatically synchronizes pending edits before switching to a new primary object. The operation is synchronous.

This property is KVO-compliant.

## See Also

### Working with layout managers

- [textLayoutManagers](textlayoutmanagers.md): The array of text layout managers associated with this text content manager.
- [automaticallySynchronizesTextLayoutManagers](automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [addTextLayoutManager(\_:)](addtextlayoutmanager%28__%29.md): Adds the layout manager you provide to the list of layout managers.
- [removeTextLayoutManager(\_:)](removetextlayoutmanager%28__%29.md): Removes the layout manager you specifiy from the list of layout managers.
- [synchronizeTextLayoutManagers(\_:)](synchronizetextlayoutmanagers%28__%29.md): Synchronizes changes to all nonprimary text layout managers.

# primaryTextLayoutManager (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The primary text layout manager for this content.

## Declaration

```objectivec
@property (strong, nullable) NSTextLayoutManager * primaryTextLayoutManager;
```

<a id="Discussion"></a>

## Discussion

Setting this property to an [NSTextLayoutManager](../nstextlayoutmanager.md) not in `textLayoutManagers` resets it to `nil`. It automatically synchronizes pending edits before switching to a new primary object. The operation is synchronous.

This property is KVO-compliant.

## See Also

### Working with layout managers

- [textLayoutManagers](textlayoutmanagers.md): The array of text layout managers associated with this text content manager.
- [automaticallySynchronizesTextLayoutManagers](automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [addTextLayoutManager:](addtextlayoutmanager%28__%29.md): Adds the layout manager you provide to the list of layout managers.
- [removeTextLayoutManager:](removetextlayoutmanager%28__%29.md): Removes the layout manager you specifiy from the list of layout managers.
- [synchronizeTextLayoutManagers:](synchronizetextlayoutmanagers%28__%29.md): Synchronizes changes to all nonprimary text layout managers.
