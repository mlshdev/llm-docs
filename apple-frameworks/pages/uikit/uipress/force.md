> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipress/force](https://developer.apple.com/documentation/uikit/uipress/force)

# force (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The force of the button press.

## Declaration

```swift
var force: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

While all buttons can be “down” or “up”, some physical buttons also have a notion of a “force” with which they’re pressed. For analog buttons, force returns a value between 0 and 1, and for digital buttons it returns 0 or 1.

## See Also

### Getting a press object’s gesture recognizers

- [gestureRecognizers](gesturerecognizers.md): The gesture recognizers that are receiving the press.

# force (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The force of the button press.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat force;
```

<a id="Discussion"></a>

## Discussion

While all buttons can be “down” or “up”, some physical buttons also have a notion of a “force” with which they’re pressed. For analog buttons, force returns a value between 0 and 1, and for digital buttons it returns 0 or 1.

## See Also

### Getting a press object’s gesture recognizers

- [gestureRecognizers](gesturerecognizers.md): The gesture recognizers that are receiving the press.
