> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontainer/replacelayoutmanager(_:)](https://developer.apple.com/documentation/uikit/nstextcontainer/replacelayoutmanager(_:))

# replaceLayoutManager(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Replaces the layout manager for the group of text system objects that contains the text container.

## Declaration

```swift
func replaceLayoutManager(_ newLayoutManager: NSLayoutManager)
```

## Parameters

- `newLayoutManager`: The new layout manager.

<a id="Discussion"></a>

## Discussion

The framework reassigns all text containers and text views attached to the old layout manager to the new layout manager. Unlike setting the [layoutManager](layoutmanager.md) property directly, this method makes all the adjustments necessary to keep the text object relationships intact.

## See Also

### Managing text components

- [layoutManager](layoutmanager.md): The text container’s layout manager.
- [textLayoutManager](textlayoutmanager.md): The [NSTextLayoutManager](../nstextlayoutmanager.md) owning the text container.
- [textView](https://developer.apple.com/documentation/appkit/nstextcontainer/textview): The text container’s text view.

# replaceLayoutManager: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Replaces the layout manager for the group of text system objects that contains the text container.

## Declaration

```objectivec
- (void) replaceLayoutManager:(NSLayoutManager *) newLayoutManager;
```

## Parameters

- `newLayoutManager`: The new layout manager.

<a id="Discussion"></a>

## Discussion

The framework reassigns all text containers and text views attached to the old layout manager to the new layout manager. Unlike setting the [layoutManager](layoutmanager.md) property directly, this method makes all the adjustments necessary to keep the text object relationships intact.

## See Also

### Managing text components

- [layoutManager](layoutmanager.md): The text container’s layout manager.
- [textLayoutManager](textlayoutmanager.md): The [NSTextLayoutManager](../nstextlayoutmanager.md) owning the text container.
- [textView](https://developer.apple.com/documentation/appkit/nstextcontainer/textview): The text container’s text view.
