> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragpreview/view](https://developer.apple.com/documentation/uikit/uidragpreview/view)

# view (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The view associated with the drag item preview.

## Declaration

```swift
var view: UIView { get }
```

<a id="Discussion"></a>

## Discussion

The drag item preview uses the view to create a visual snapshot that’s displayed while the user drags the item across the screen. Changes you make to the view don’t appear in the preview after the snapshot is taken, and the preview doesn’t make changes or move the view. Any visual changes or movement made by the preview are applied to the snapshot only.

# view (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The view associated with the drag item preview.

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * view;
```

<a id="Discussion"></a>

## Discussion

The drag item preview uses the view to create a visual snapshot that’s displayed while the user drags the item across the screen. Changes you make to the view don’t appear in the preview after the snapshot is taken, and the preview doesn’t make changes or move the view. Any visual changes or movement made by the preview are applied to the snapshot only.
