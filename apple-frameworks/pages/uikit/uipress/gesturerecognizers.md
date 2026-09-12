> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipress/gesturerecognizers](https://developer.apple.com/documentation/uikit/uipress/gesturerecognizers)

# gestureRecognizers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The gesture recognizers that are receiving the press.

## Declaration

```swift
var gestureRecognizers: [UIGestureRecognizer]? { get }
```

<a id="Discussion"></a>

## Discussion

The objects held in this array are instances of a subclass of the abstract base class, [UIGestureRecognizer](../uigesturerecognizer.md). If there are no gesture recognizers currently receiving the touch objects, this property holds an empty array.

## See Also

### Getting a press object’s gesture recognizers

- [force](force.md): The force of the button press.

# gestureRecognizers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The gesture recognizers that are receiving the press.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<UIGestureRecognizer *> * gestureRecognizers;
```

<a id="Discussion"></a>

## Discussion

The objects held in this array are instances of a subclass of the abstract base class, [UIGestureRecognizer](../uigesturerecognizer.md). If there are no gesture recognizers currently receiving the touch objects, this property holds an empty array.

## See Also

### Getting a press object’s gesture recognizers

- [force](force.md): The force of the button press.
