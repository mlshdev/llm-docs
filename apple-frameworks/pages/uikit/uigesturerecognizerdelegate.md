> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizerdelegate](https://developer.apple.com/documentation/uikit/uigesturerecognizerdelegate)

# UIGestureRecognizerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods implemented by the delegate of a gesture recognizer to fine-tune an app’s gesture-recognition behavior.

## Declaration

```swift
@MainActor protocol UIGestureRecognizerDelegate : NSObjectProtocol
```

## Mentioned In

- [Preferring one gesture over another](preferring-one-gesture-over-another.md)

<a id="overview"></a>

## Overview

The delegates receive messages from a gesture recognizer, and their responses to these messages enable them to affect the operation of the gesture recognizer or to specify a relationship between it and another gesture recognizer, such as allowing simultaneous recognition or setting up a dynamic failure requirement.

An example of a situation where dynamic failure requirements are useful is in an app that attaches a screen-edge pan gesture recognizer to a view. In this case, you might want all other relevant gesture recognizers associated with that view’s subtree to require the screen-edge gesture recognizer to fail so you can prevent any graphical glitches that might occur when the other recognizers get canceled after starting the recognition process. To do this, you could use code similar to the following:

**Swift**

```swift
let myScreenEdgePanGestureRecognizer = UIScreenEdgePanGestureRecognizer(target: self, action:#selector(handleScreenEdgePan))
myScreenEdgePanGestureRecognizer.delegate = self
    // Configure the gesture recognizer and attach it to the view.
 
...
 
func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldBeRequiredToFailBy otherGestureRecognizer: UIGestureRecognizer) -> Bool {
    guard let myView = myScreenEdgePanGestureRecognizer.view,
          let otherView = otherGestureRecognizer.view else { return false }
    
    return gestureRecognizer == myScreenEdgePanGestureRecognizer &&
           otherView.isDescendant(of: myView)}
```

**Objective-C**

```objc
UIScreenEdgePanGestureRecognizer *myScreenEdgePanGestureRecognizer;
...
myScreenEdgePanGestureRecognizer = [[UIScreenEdgePanGestureRecognizer alloc] initWithTarget:self action:@selector(handleScreenEdgePan:)];
myScreenEdgePanGestureRecognizer.delegate = self;
// Configure the gesture recognizer and attach it to the view.
...
 - (BOOL)gestureRecognizer:(UIGestureRecognizer *)gestureRecognizer shouldBeRequiredToFailByGestureRecognizer:(UIGestureRecognizer *)otherGestureRecognizer {
    BOOL result = NO;
    if ((gestureRecognizer == myScreenEdgePanGestureRecognizer) && [[otherGestureRecognizer view] isDescendantOfView:[gestureRecognizer view]]) {
        result = YES;
    }
    return result;
 }
```

## Topics

### Regulating gesture recognition

- [gestureRecognizerShouldBegin(\_:)](uigesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should begin interpreting touches.
- [gestureRecognizer(\_:shouldReceive:)](uigesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29-16fuh.md): Asks the delegate if a gesture recognizer should receive an object representing a touch.
- [gestureRecognizer(\_:shouldReceive:)](uigesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29-73vzu.md): Asks the delegate if a gesture recognizer should receive an object representing a press.
- [gestureRecognizer(\_:shouldReceive:)](uigesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29-evxd.md): Asks the delegate if a gesture recognizer should receive an object representing a touch or press event.

### Controlling simultaneous gesture recognition

- [gestureRecognizer(\_:shouldRecognizeSimultaneouslyWith:)](uigesturerecognizerdelegate/gesturerecognizer%28__shouldrecognizesimultaneouslywith_%29.md): Asks the delegate if two gesture recognizers should be allowed to recognize gestures simultaneously.

### Setting up failure requirements

- [gestureRecognizer(\_:shouldRequireFailureOf:)](uigesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md): Asks the delegate if a gesture recognizer should require another gesture recognizer to fail.
- [gestureRecognizer(\_:shouldBeRequiredToFailBy:)](uigesturerecognizerdelegate/gesturerecognizer%28__shouldberequiredtofailby_%29.md): Asks the delegate if a gesture recognizer should be required to fail by another gesture recognizer.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITableViewCell](uitableviewcell.md)

## See Also

### Custom gestures

- [Implementing a custom gesture recognizer](implementing-a-custom-gesture-recognizer.md): Discover when and how to build your own gesture recognizers.
- [UIGestureRecognizer](uigesturerecognizer.md): The base class for concrete gesture recognizers.
- [Supporting gesture interaction in your apps](supporting-gesture-interaction-in-your-apps.md): Enrich your app’s user experience by supporting standard and custom gesture interaction.

# UIGestureRecognizerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods implemented by the delegate of a gesture recognizer to fine-tune an app’s gesture-recognition behavior.

## Declaration

```objectivec
@protocol UIGestureRecognizerDelegate <NSObject>
```

## Mentioned In

- [Preferring one gesture over another](preferring-one-gesture-over-another.md)

<a id="overview"></a>

## Overview

The delegates receive messages from a gesture recognizer, and their responses to these messages enable them to affect the operation of the gesture recognizer or to specify a relationship between it and another gesture recognizer, such as allowing simultaneous recognition or setting up a dynamic failure requirement.

An example of a situation where dynamic failure requirements are useful is in an app that attaches a screen-edge pan gesture recognizer to a view. In this case, you might want all other relevant gesture recognizers associated with that view’s subtree to require the screen-edge gesture recognizer to fail so you can prevent any graphical glitches that might occur when the other recognizers get canceled after starting the recognition process. To do this, you could use code similar to the following:

**Swift**

```swift
let myScreenEdgePanGestureRecognizer = UIScreenEdgePanGestureRecognizer(target: self, action:#selector(handleScreenEdgePan))
myScreenEdgePanGestureRecognizer.delegate = self
    // Configure the gesture recognizer and attach it to the view.
 
...
 
func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldBeRequiredToFailBy otherGestureRecognizer: UIGestureRecognizer) -> Bool {
    guard let myView = myScreenEdgePanGestureRecognizer.view,
          let otherView = otherGestureRecognizer.view else { return false }
    
    return gestureRecognizer == myScreenEdgePanGestureRecognizer &&
           otherView.isDescendant(of: myView)}
```

**Objective-C**

```objc
UIScreenEdgePanGestureRecognizer *myScreenEdgePanGestureRecognizer;
...
myScreenEdgePanGestureRecognizer = [[UIScreenEdgePanGestureRecognizer alloc] initWithTarget:self action:@selector(handleScreenEdgePan:)];
myScreenEdgePanGestureRecognizer.delegate = self;
// Configure the gesture recognizer and attach it to the view.
...
 - (BOOL)gestureRecognizer:(UIGestureRecognizer *)gestureRecognizer shouldBeRequiredToFailByGestureRecognizer:(UIGestureRecognizer *)otherGestureRecognizer {
    BOOL result = NO;
    if ((gestureRecognizer == myScreenEdgePanGestureRecognizer) && [[otherGestureRecognizer view] isDescendantOfView:[gestureRecognizer view]]) {
        result = YES;
    }
    return result;
 }
```

## Topics

### Regulating gesture recognition

- [gestureRecognizerShouldBegin:](uigesturerecognizerdelegate/gesturerecognizershouldbegin%28__%29.md): Asks the delegate if a gesture recognizer should begin interpreting touches.
- [gestureRecognizer:shouldReceiveTouch:](uigesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29-16fuh.md): Asks the delegate if a gesture recognizer should receive an object representing a touch.
- [gestureRecognizer:shouldReceivePress:](uigesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29-73vzu.md): Asks the delegate if a gesture recognizer should receive an object representing a press.
- [gestureRecognizer:shouldReceiveEvent:](uigesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29-evxd.md): Asks the delegate if a gesture recognizer should receive an object representing a touch or press event.

### Controlling simultaneous gesture recognition

- [gestureRecognizer:shouldRecognizeSimultaneouslyWithGestureRecognizer:](uigesturerecognizerdelegate/gesturerecognizer%28__shouldrecognizesimultaneouslywith_%29.md): Asks the delegate if two gesture recognizers should be allowed to recognize gestures simultaneously.

### Setting up failure requirements

- [gestureRecognizer:shouldRequireFailureOfGestureRecognizer:](uigesturerecognizerdelegate/gesturerecognizer%28__shouldrequirefailureof_%29.md): Asks the delegate if a gesture recognizer should require another gesture recognizer to fail.
- [gestureRecognizer:shouldBeRequiredToFailByGestureRecognizer:](uigesturerecognizerdelegate/gesturerecognizer%28__shouldberequiredtofailby_%29.md): Asks the delegate if a gesture recognizer should be required to fail by another gesture recognizer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITableViewCell](uitableviewcell.md)

## See Also

### Custom gestures

- [Implementing a custom gesture recognizer](implementing-a-custom-gesture-recognizer.md): Discover when and how to build your own gesture recognizers.
- [UIGestureRecognizer](uigesturerecognizer.md): The base class for concrete gesture recognizers.
- [Supporting gesture interaction in your apps](supporting-gesture-interaction-in-your-apps.md): Enrich your app’s user experience by supporting standard and custom gesture interaction.
