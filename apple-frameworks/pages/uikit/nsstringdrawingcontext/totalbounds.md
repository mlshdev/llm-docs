> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsstringdrawingcontext/totalbounds](https://developer.apple.com/documentation/uikit/nsstringdrawingcontext/totalbounds)

# totalBounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The most recent bounding rectangle that the system used to draw the string.

## Declaration

```swift
var totalBounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the bounding rectangle that was last used when calling the [draw(with:options:context:)](../../foundation/nsattributedstring/draw%28with_options_context_%29.md) method. The rectangle is specified in the coordinate system of the drawn string. (The origin of the bounds corresponds to neither a view the string might have been drawn into nor the origin of a possible [draw(in:)](../../foundation/nsattributedstring/draw%28in_%29.md) call.)

# totalBounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The most recent bounding rectangle that the system used to draw the string.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect totalBounds;
```

<a id="Discussion"></a>

## Discussion

This property contains the bounding rectangle that was last used when calling the [drawWithRect:options:context:](../../foundation/nsattributedstring/draw%28with_options_context_%29.md) method. The rectangle is specified in the coordinate system of the drawn string. (The origin of the bounds corresponds to neither a view the string might have been drawn into nor the origin of a possible [drawInRect:](../../foundation/nsattributedstring/draw%28in_%29.md) call.)
