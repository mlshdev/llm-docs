> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollerpreviewing/previewinggesturerecognizerforfailurerelationship](https://developer.apple.com/documentation/uikit/uiviewcontrollerpreviewing/previewinggesturerecognizerforfailurerelationship)

# previewingGestureRecognizerForFailureRelationship (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

A gesture recognizer suitable for setting up failure requirements for a preview’s (peek’s) gestures.

> For more information, see [UIViewControllerPreviewing](../uiviewcontrollerpreviewing.md).

## Declaration

```swift
var previewingGestureRecognizerForFailureRelationship: UIGestureRecognizer { get }
```

<a id="Discussion"></a>

## Discussion

Use this gesture recognizer by implementing a delegate object for it that conforms to the [UIGestureRecognizerDelegate](../uigesturerecognizerdelegate.md) protocol. The protocol methods let you prevent a preview (peek) press from interfering with an app’s other supported gestures. For example, you could delay a preview’s presentation until after other gestures fail, or you could allow simultaneous recognition of a press and other gestures during a preview’s presentation.

For more information, see the [gestureRecognizer(\_:shouldBeRequiredToFailBy:)](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldberequiredtofailby_%29.md) and [gestureRecognizer(\_:shouldRequireFailureOf:)](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md) methods in [UIGestureRecognizerDelegate](../uigesturerecognizerdelegate.md).

## See Also

### Configuring a source view for a 3D Touch previewing view controller

- [sourceRect](sourcerect.md): Deprecated. The rectangle, in the source view’s coordinate system, that responds to a 3D Touch by a user and remains visually sharp while surrounding content blurs.

# previewingGestureRecognizerForFailureRelationship (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 13.0)

A gesture recognizer suitable for setting up failure requirements for a preview’s (peek’s) gestures.

> For more information, see [UIViewControllerPreviewing](../uiviewcontrollerpreviewing.md).

## Declaration

```objectivec
@property (nonatomic, readonly) UIGestureRecognizer * previewingGestureRecognizerForFailureRelationship;
```

<a id="Discussion"></a>

## Discussion

Use this gesture recognizer by implementing a delegate object for it that conforms to the [UIGestureRecognizerDelegate](../uigesturerecognizerdelegate.md) protocol. The protocol methods let you prevent a preview (peek) press from interfering with an app’s other supported gestures. For example, you could delay a preview’s presentation until after other gestures fail, or you could allow simultaneous recognition of a press and other gestures during a preview’s presentation.

For more information, see the [gestureRecognizer:shouldBeRequiredToFailByGestureRecognizer:](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldberequiredtofailby_%29.md) and [gestureRecognizer:shouldRequireFailureOfGestureRecognizer:](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md) methods in [UIGestureRecognizerDelegate](../uigesturerecognizerdelegate.md).

## See Also

### Configuring a source view for a 3D Touch previewing view controller

- [sourceRect](sourcerect.md): Deprecated. The rectangle, in the source view’s coordinate system, that responds to a 3D Touch by a user and remains visually sharp while surrounding content blurs.
