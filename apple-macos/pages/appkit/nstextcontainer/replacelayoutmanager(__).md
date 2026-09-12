> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontainer/replacelayoutmanager(_:)](https://developer.apple.com/documentation/appkit/nstextcontainer/replacelayoutmanager(_:))

# replaceLayoutManager(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

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
- [textLayoutManager](textlayoutmanager.md)
- [textView](textview.md): The text container’s text view.

# replaceLayoutManager: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

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
- [textLayoutManager](textlayoutmanager.md)
- [textView](textview.md): The text container’s text view.
