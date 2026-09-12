> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropproposal/prefersfullsizepreview](https://developer.apple.com/documentation/uikit/uidropproposal/prefersfullsizepreview)

# prefersFullSizePreview (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates that the drag item preview should be shown at its full, original size.

## Declaration

```swift
var prefersFullSizePreview: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set [prefersFullSizePreview](prefersfullsizepreview.md) to [true](https://developer.apple.com/documentation/swift/true) to show the preview at its original size, not scaled down to a smaller size. For example, you might set this property to [true](https://developer.apple.com/documentation/swift/true) when the user moves items from a nearby view and scaling down the preview is distracting.

This property applies only to drag and drop activities performed within the same app.

## See Also

### Configuring a drop proposal

- [isPrecise](isprecise.md): A Boolean value that proposes that the drop interaction define the drop location precisely, such as at a specific point within existing text.

# prefersFullSizePreview (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates that the drag item preview should be shown at its full, original size.

## Declaration

```objectivec
@property (nonatomic) BOOL prefersFullSizePreview;
```

<a id="Discussion"></a>

## Discussion

Set [prefersFullSizePreview](prefersfullsizepreview.md) to [true](https://developer.apple.com/documentation/swift/true) to show the preview at its original size, not scaled down to a smaller size. For example, you might set this property to [true](https://developer.apple.com/documentation/swift/true) when the user moves items from a nearby view and scaling down the preview is distracting.

This property applies only to drag and drop activities performed within the same app.

## See Also

### Configuring a drop proposal

- [precise](isprecise.md): A Boolean value that proposes that the drop interaction define the drop location precisely, such as at a specific point within existing text.
