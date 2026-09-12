> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkcrowndelegate](https://developer.apple.com/documentation/watchkit/wkcrowndelegate)

# WKCrownDelegate (Swift)

**Framework:** WatchKit  
**Kind:** Protocol  
**Availability:** watchOS 3.0+

A collection of methods you can implement to track the user’s interaction with the digital crown, receiving notifications when the user rotates the crown or when rotation stops.

## Declaration

```swift
protocol WKCrownDelegate : NSObjectProtocol
```

## Topics

### Receiving Crown Events

- [crownDidRotate(\_:rotationalDelta:)](wkcrowndelegate/crowndidrotate%28__rotationaldelta_%29.md): Called when the user rotates the crown.
- [crownDidBecomeIdle(\_:)](wkcrowndelegate/crowndidbecomeidle%28__%29.md): Called when the user stops rotating the crown.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Event handling

- [WKCrownSequencer](wkcrownsequencer.md): An object that reports the current state of the digital crown, including its rotational speed when it is in motion.
- [WKGestureRecognizer](wkgesturerecognizer.md): The base class for all other gesture recognizer classes.
- [WKLongPressGestureRecognizer](wklongpressgesturerecognizer.md): A gesture recognizer that interprets a touch event that occurs in the same relative area for an extended period of time.
- [WKPanGestureRecognizer](wkpangesturerecognizer.md): A gesture recognizer that interprets a touch event that moves around the screen.
- [WKSwipeGestureRecognizer](wkswipegesturerecognizer.md): A gesture recognizer that interprets swiping gestures in one or more directions.
- [WKTapGestureRecognizer](wktapgesturerecognizer.md): A gesture recognizer that interprets a touch event occurring and ending in approximately the same area on the screen.

# WKCrownDelegate (Objective-C)

**Framework:** WatchKit  
**Kind:** Protocol  
**Availability:** watchOS 3.0+

A collection of methods you can implement to track the user’s interaction with the digital crown, receiving notifications when the user rotates the crown or when rotation stops.

## Declaration

```objectivec
@protocol WKCrownDelegate <NSObject>
```

## Topics

### Receiving Crown Events

- [crownDidRotate:rotationalDelta:](wkcrowndelegate/crowndidrotate%28__rotationaldelta_%29.md): Called when the user rotates the crown.
- [crownDidBecomeIdle:](wkcrowndelegate/crowndidbecomeidle%28__%29.md): Called when the user stops rotating the crown.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Event handling

- [WKCrownSequencer](wkcrownsequencer.md): An object that reports the current state of the digital crown, including its rotational speed when it is in motion.
- [WKGestureRecognizer](wkgesturerecognizer.md): The base class for all other gesture recognizer classes.
- [WKLongPressGestureRecognizer](wklongpressgesturerecognizer.md): A gesture recognizer that interprets a touch event that occurs in the same relative area for an extended period of time.
- [WKPanGestureRecognizer](wkpangesturerecognizer.md): A gesture recognizer that interprets a touch event that moves around the screen.
- [WKSwipeGestureRecognizer](wkswipegesturerecognizer.md): A gesture recognizer that interprets swiping gestures in one or more directions.
- [WKTapGestureRecognizer](wktapgesturerecognizer.md): A gesture recognizer that interprets a touch event occurring and ending in approximately the same area on the screen.
