> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/overflowpresentationsource](https://developer.apple.com/documentation/uikit/uinavigationitem/overflowpresentationsource)

# overflowPresentationSource (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The item you can use as an anchor to present a custom UI from the overflow menu button.

## Declaration

```swift
var overflowPresentationSource: (any UIPopoverPresentationControllerSourceItem)? { get }
```

<a id="Discussion"></a>

## Discussion

If the overflow menu button for the navigation item is visible, this property returns a non-`nil` item that you can use as a presentation source — for example, to present a custom popover that anchors to the overflow menu button. Otherwise, this property returns `nil`.

## See Also

### Working with the overflow menu

- [additionalOverflowItems](additionaloverflowitems.md): Additional items to present in the overflow menu.

# overflowPresentationSource (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The item you can use as an anchor to present a custom UI from the overflow menu button.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) id<UIPopoverPresentationControllerSourceItem> overflowPresentationSource;
```

<a id="Discussion"></a>

## Discussion

If the overflow menu button for the navigation item is visible, this property returns a non-`nil` item that you can use as a presentation source — for example, to present a custom popover that anchors to the overflow menu button. Otherwise, this property returns `nil`.

## See Also

### Working with the overflow menu

- [additionalOverflowItems](additionaloverflowitems.md): Additional items to present in the overflow menu.
