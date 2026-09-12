> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontainer/layoutmanager](https://developer.apple.com/documentation/uikit/nstextcontainer/layoutmanager)

# layoutManager (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The text container’s layout manager.

## Declaration

```swift
unowned(unsafe) var layoutManager: NSLayoutManager? { get set }
```

<a id="Discussion"></a>

## Discussion

Avoid assigning a layout manager directly through this property. Instead, use the [replaceLayoutManager(\_:)](replacelayoutmanager%28__%29.md) method when you want to replace the layout manager. The framework sets the value of this property automatically when you add a text container to your layout manager using the [addTextContainer(\_:)](../nslayoutmanager/addtextcontainer%28__%29.md) method.

## See Also

### Related Documentation

- [addTextContainer(\_:)](../nslayoutmanager/addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.

### Managing text components

- [textLayoutManager](textlayoutmanager.md): The [NSTextLayoutManager](../nstextlayoutmanager.md) owning the text container.
- [replaceLayoutManager(\_:)](replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.
- [textView](https://developer.apple.com/documentation/appkit/nstextcontainer/textview): The text container’s text view.

# layoutManager (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The text container’s layout manager.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) NSLayoutManager * layoutManager;
```

<a id="Discussion"></a>

## Discussion

Avoid assigning a layout manager directly through this property. Instead, use the [replaceLayoutManager:](replacelayoutmanager%28__%29.md) method when you want to replace the layout manager. The framework sets the value of this property automatically when you add a text container to your layout manager using the [addTextContainer:](../nslayoutmanager/addtextcontainer%28__%29.md) method.

## See Also

### Related Documentation

- [addTextContainer:](../nslayoutmanager/addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.

### Managing text components

- [textLayoutManager](textlayoutmanager.md): The [NSTextLayoutManager](../nstextlayoutmanager.md) owning the text container.
- [replaceLayoutManager:](replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.
- [textView](https://developer.apple.com/documentation/appkit/nstextcontainer/textview): The text container’s text view.
