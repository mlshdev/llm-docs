> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/presentationstyle](https://developer.apple.com/documentation/uikit/uipresentationcontroller/presentationstyle)

# presentationStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The presentation style of the presented view controller.

## Declaration

```swift
var presentationStyle: UIModalPresentationStyle { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to the presentation style of the presented view controller. The presentation controller uses this style to determine the initial appearance of the presented content.

## See Also

### Getting the presentation attributes

- [adaptivePresentationStyle(for:)](adaptivepresentationstyle%28for_%29.md): Returns the presentation style to use for the specified set of traits.
- [adaptivePresentationStyle](adaptivepresentationstyle.md): Returns the presentation style to use when the presented view controller becomes horizontally compact.
- [shouldPresentInFullscreen](shouldpresentinfullscreen.md): A Boolean value indicating whether the presentation covers the entire screen.
- [shouldRemovePresentersView](shouldremovepresentersview.md): A Boolean value indicating whether the presenting view controller’s view should be removed when the presentation animations finish.

# presentationStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The presentation style of the presented view controller.

## Declaration

```objectivec
@property (nonatomic, readonly) UIModalPresentationStyle presentationStyle;
```

<a id="Discussion"></a>

## Discussion

This property is set to the presentation style of the presented view controller. The presentation controller uses this style to determine the initial appearance of the presented content.

## See Also

### Getting the presentation attributes

- [adaptivePresentationStyleForTraitCollection:](adaptivepresentationstyle%28for_%29.md): Returns the presentation style to use for the specified set of traits.
- [adaptivePresentationStyle](adaptivepresentationstyle.md): Returns the presentation style to use when the presented view controller becomes horizontally compact.
- [shouldPresentInFullscreen](shouldpresentinfullscreen.md): A Boolean value indicating whether the presentation covers the entire screen.
- [shouldRemovePresentersView](shouldremovepresentersview.md): A Boolean value indicating whether the presenting view controller’s view should be removed when the presentation animations finish.
