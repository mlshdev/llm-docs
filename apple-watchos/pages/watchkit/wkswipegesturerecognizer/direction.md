> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkswipegesturerecognizer/direction](https://developer.apple.com/documentation/watchkit/wkswipegesturerecognizer/direction)

# direction (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The permitted directions of the swipe.

## Declaration

```swift
var direction: WKSwipeGestureRecognizerDirection { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [right](../wkswipegesturerecognizerdirection/right.md). You may specify more than one direction to track swipes in multiple directions with the same gesture recognizer.

# direction (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+

The permitted directions of the swipe.

## Declaration

```objectivec
@property (nonatomic) WKSwipeGestureRecognizerDirection direction;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [WKSwipeGestureRecognizerDirectionRight](../wkswipegesturerecognizerdirection/right.md). You may specify more than one direction to track swipes in multiple directions with the same gesture recognizer.
