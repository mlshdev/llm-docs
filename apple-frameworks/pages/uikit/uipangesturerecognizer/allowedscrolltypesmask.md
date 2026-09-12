> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipangesturerecognizer/allowedscrolltypesmask](https://developer.apple.com/documentation/uikit/uipangesturerecognizer/allowedscrolltypesmask)

# allowedScrollTypesMask (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A scroll type mask that enables recognition of scroll events.

## Declaration

```swift
var allowedScrollTypesMask: UIScrollTypeMask { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this mask enables the pan gesture to recognize scroll events, like a mouse scroll movement or a two-finger scroll on a track pad. See [UIScrollType](../uiscrolltype.md).

> **Note**

>  Setting this property doesn’t disable scrolling through touches. To disable touch scrolling, return [false](https://developer.apple.com/documentation/swift/false) from [gestureRecognizer(\_:shouldReceive:)](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29-16fuh.md) or set the [allowedTouchTypes](../uigesturerecognizer/allowedtouchtypes.md) to an empty array.

## See Also

### Tracking scroll events

- [UIScrollTypeMask](../uiscrolltypemask.md): A bit mask identifying the scroll type of a pan gesture.
- [UIScrollType](../uiscrolltype.md): Constants that define the type of the scroll.

# allowedScrollTypesMask (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A scroll type mask that enables recognition of scroll events.

## Declaration

```objectivec
@property (nonatomic) UIScrollTypeMask allowedScrollTypesMask;
```

<a id="Discussion"></a>

## Discussion

Setting this mask enables the pan gesture to recognize scroll events, like a mouse scroll movement or a two-finger scroll on a track pad. See [UIScrollType](../uiscrolltype.md).

> **Note**

>  Setting this property doesn’t disable scrolling through touches. To disable touch scrolling, return [false](https://developer.apple.com/documentation/swift/false) from [gestureRecognizer:shouldReceiveTouch:](../uigesturerecognizerdelegate/gesturerecognizer%28__shouldreceive_%29-16fuh.md) or set the [allowedTouchTypes](../uigesturerecognizer/allowedtouchtypes.md) to an empty array.

## See Also

### Tracking scroll events

- [UIScrollTypeMask](../uiscrolltypemask.md): A bit mask identifying the scroll type of a pan gesture.
- [UIScrollType](../uiscrolltype.md): Constants that define the type of the scroll.
