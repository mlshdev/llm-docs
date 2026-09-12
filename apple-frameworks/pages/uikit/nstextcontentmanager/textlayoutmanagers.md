> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentmanager/textlayoutmanagers](https://developer.apple.com/documentation/uikit/nstextcontentmanager/textlayoutmanagers)

# textLayoutManagers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
