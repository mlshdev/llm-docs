> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscenedraginteraction/gestureforfailurerelationships](https://developer.apple.com/documentation/uikit/uiwindowscenedraginteraction/gestureforfailurerelationships)

# gestureForFailureRelationships (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The gesture that the drag interaction adds to the view hierarchy.

## Declaration

```swift
var gestureForFailureRelationships: UIGestureRecognizer { get }
```

<a id="Discussion"></a>

## Discussion

If your app provides other gestures in the same view hierarchy, you may want to set up failure requirements between your app’s gestures and the drag interaction’s gesture. To do this, use the [require(toFail:)](../uigesturerecognizer/require%28tofail_%29.md) method to relate your gestures to this gesture. For example:

**Swift**

```swift
windowDragInteraction.gestureForFailureRelationships.require(toFail: swipeGesture)
```

**Objective-C**

```objc
[windowDragInteraction.gestureForFailureRelationships requireGestureRecognizerToFail:self.swipeGesture];
```

# gestureForFailureRelationships (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

The gesture that the drag interaction adds to the view hierarchy.

## Declaration

```objectivec
@property (nonatomic, readonly) UIGestureRecognizer * gestureForFailureRelationships;
```

<a id="Discussion"></a>

## Discussion

If your app provides other gestures in the same view hierarchy, you may want to set up failure requirements between your app’s gestures and the drag interaction’s gesture. To do this, use the [requireGestureRecognizerToFail:](../uigesturerecognizer/require%28tofail_%29.md) method to relate your gestures to this gesture. For example:

**Swift**

```swift
windowDragInteraction.gestureForFailureRelationships.require(toFail: swipeGesture)
```

**Objective-C**

```objc
[windowDragInteraction.gestureForFailureRelationships requireGestureRecognizerToFail:self.swipeGesture];
```
