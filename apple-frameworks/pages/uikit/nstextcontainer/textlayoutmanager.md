> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontainer/textlayoutmanager](https://developer.apple.com/documentation/uikit/nstextcontainer/textlayoutmanager)

# textLayoutManager (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The [NSTextLayoutManager](../nstextlayoutmanager.md) owning the text container.

## Declaration

```swift
weak var textLayoutManager: NSTextLayoutManager? { get }
```

<a id="discussion"></a>

## Discussion

When non-nil, the legacy `layoutManager` should be `nil`.

## See Also

### Managing text components

- [layoutManager](layoutmanager.md): The text container’s layout manager.
- [replaceLayoutManager(\_:)](replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.
- [textView](https://developer.apple.com/documentation/appkit/nstextcontainer/textview): The text container’s text view.

# textLayoutManager (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The [NSTextLayoutManager](../nstextlayoutmanager.md) owning the text container.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) NSTextLayoutManager * textLayoutManager;
```

<a id="discussion"></a>

## Discussion

When non-nil, the legacy `layoutManager` should be `nil`.

## See Also

### Managing text components

- [layoutManager](layoutmanager.md): The text container’s layout manager.
- [replaceLayoutManager:](replacelayoutmanager%28__%29.md): Replaces the layout manager for the group of text system objects that contains the text container.
- [textView](https://developer.apple.com/documentation/appkit/nstextcontainer/textview): The text container’s text view.
