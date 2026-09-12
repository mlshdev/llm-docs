> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/gesturerecognizers](https://developer.apple.com/documentation/uikit/uitouch/gesturerecognizers)

# gestureRecognizers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The gesture recognizers that are receiving the touch object.

## Declaration

```swift
var gestureRecognizers: [UIGestureRecognizer]? { get }
```

<a id="Discussion"></a>

## Discussion

The objects in the array are instances of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md). If there are no gesture recognizers currently receiving the touch, this property contains an empty array.

# gestureRecognizers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The gesture recognizers that are receiving the touch object.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<UIGestureRecognizer *> * gestureRecognizers;
```

<a id="Discussion"></a>

## Discussion

The objects in the array are instances of a subclass of the abstract base class [UIGestureRecognizer](../uigesturerecognizer.md). If there are no gesture recognizers currently receiving the touch, this property contains an empty array.
