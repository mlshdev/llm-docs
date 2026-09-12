> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizerdelegate](https://developer.apple.com/documentation/appkit/nsgesturerecognizerdelegate)

# NSGestureRecognizerDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods for fine-tuning a gesture recognizer’s behavior.

## Declaration

```swift
protocol NSGestureRecognizerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods in this protocol to establish dynamic dependencies between gesture recognizers and to prevent a single gesture recognizer from acting at all.

## Topics

### Regulating gesture recognition

- [gestureRecognizer(\_:shouldAttemptToRecognizeWith:)](nsgesturerecognizerdelegate/gesturerecognizer%28__shouldattempttorecognizewith_%29.md): Asks the delegate if a gesture recognizer should attempt to recognize gestures for a particular event.
- [gestureRecognizerShouldBegin(\_:)](nsgesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should transition out of the Possible (`NSGestureRecognizerStatePossible`) state.

### Controlling simultaneous gesture recognition

- [gestureRecognizer(\_:shouldRecognizeSimultaneouslyWith:)](nsgesturerecognizerdelegate/gesturerecognizer%28__shouldrecognizesimultaneouslywith_%29.md): Asks the delegate if two gesture recognizers should be allowed to recognize their gestures simultaneously.

### Setting up failure requirements

- [gestureRecognizer(\_:shouldRequireFailureOf:)](nsgesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md): Asks the delegate if the current gesture recognizer must wait to recognize its gesture until the specified gesture recognizer fails.
- [gestureRecognizer(\_:shouldBeRequiredToFailBy:)](nsgesturerecognizerdelegate/gesturerecognizer%28__shouldberequiredtofailby_%29.md): Asks the delegate if the current gesture recognizer must fail before another gesture recognizer is allowed to recognize its gesture.

### Controlling touch reception

- [gestureRecognizer(\_:shouldReceive:)](nsgesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29.md): Called, for a new touch, before the system calls the `touchesBegan:withEvent:` method on the gesture recognizer. Return `NO` to prevent the gesture recognizer from seeing this touch.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Custom Gestures

- [NSGestureRecognizer](nsgesturerecognizer.md): An object that monitors events and calls its action method when a predefined sequence of events occur.

# NSGestureRecognizerDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods for fine-tuning a gesture recognizer’s behavior.

## Declaration

```objectivec
@protocol NSGestureRecognizerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods in this protocol to establish dynamic dependencies between gesture recognizers and to prevent a single gesture recognizer from acting at all.

## Topics

### Regulating gesture recognition

- [gestureRecognizer:shouldAttemptToRecognizeWithEvent:](nsgesturerecognizerdelegate/gesturerecognizer%28__shouldattempttorecognizewith_%29.md): Asks the delegate if a gesture recognizer should attempt to recognize gestures for a particular event.
- [gestureRecognizerShouldBegin:](nsgesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should transition out of the Possible (`NSGestureRecognizerStatePossible`) state.

### Controlling simultaneous gesture recognition

- [gestureRecognizer:shouldRecognizeSimultaneouslyWithGestureRecognizer:](nsgesturerecognizerdelegate/gesturerecognizer%28__shouldrecognizesimultaneouslywith_%29.md): Asks the delegate if two gesture recognizers should be allowed to recognize their gestures simultaneously.

### Setting up failure requirements

- [gestureRecognizer:shouldRequireFailureOfGestureRecognizer:](nsgesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md): Asks the delegate if the current gesture recognizer must wait to recognize its gesture until the specified gesture recognizer fails.
- [gestureRecognizer:shouldBeRequiredToFailByGestureRecognizer:](nsgesturerecognizerdelegate/gesturerecognizer%28__shouldberequiredtofailby_%29.md): Asks the delegate if the current gesture recognizer must fail before another gesture recognizer is allowed to recognize its gesture.

### Controlling touch reception

- [gestureRecognizer:shouldReceiveTouch:](nsgesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29.md): Called, for a new touch, before the system calls the `touchesBegan:withEvent:` method on the gesture recognizer. Return `NO` to prevent the gesture recognizer from seeing this touch.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Custom Gestures

- [NSGestureRecognizer](nsgesturerecognizer.md): An object that monitors events and calls its action method when a predefined sequence of events occur.
