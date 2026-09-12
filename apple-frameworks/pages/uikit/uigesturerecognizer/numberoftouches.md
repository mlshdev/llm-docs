> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/numberoftouches](https://developer.apple.com/documentation/uikit/uigesturerecognizer/numberoftouches)

# numberOfTouches (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The number of touches involved in the gesture represented by the gesture recognizer.

## Declaration

```swift
var numberOfTouches: Int { get }
```

<a id="return-value"></a>

## Return Value

The number of [UITouch](../uitouch.md) objects in a private array maintained by the receiver. Each of these objects represents a touch in the current gesture.

<a id="Discussion"></a>

## Discussion

Using the value returned by this method in a loop, you can ask for the location of individual touches using the [location(ofTouch:in:)](location%28oftouch_in_%29.md) method.

## See Also

### Getting the touches and location of a gesture

- [location(in:)](location%28in_%29.md): Returns the point computed as the location in a given view of the gesture represented by the gesture recognizer.
- [location(ofTouch:in:)](location%28oftouch_in_%29.md): Returns the location of one of the gesture’s touches in the local coordinate system of a given view.

# numberOfTouches (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The number of touches involved in the gesture represented by the gesture recognizer.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger numberOfTouches;
```

<a id="return-value"></a>

## Return Value

The number of [UITouch](../uitouch.md) objects in a private array maintained by the receiver. Each of these objects represents a touch in the current gesture.

<a id="Discussion"></a>

## Discussion

Using the value returned by this method in a loop, you can ask for the location of individual touches using the [locationOfTouch:inView:](location%28oftouch_in_%29.md) method.

## See Also

### Getting the touches and location of a gesture

- [locationInView:](location%28in_%29.md): Returns the point computed as the location in a given view of the gesture represented by the gesture recognizer.
- [locationOfTouch:inView:](location%28oftouch_in_%29.md): Returns the location of one of the gesture’s touches in the local coordinate system of a given view.
