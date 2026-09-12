> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstringdrawingcontext/totalbounds](https://developer.apple.com/documentation/appkit/nsstringdrawingcontext/totalbounds)

# totalBounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The most recent bounding rectangle that the system used to draw the string.

## Declaration

```swift
var totalBounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the bounding rectangle that was last used when calling the [draw(with:options:context:)](https://developer.apple.com/documentation/foundation/nsattributedstring/draw%28with:options:context:%29) method. The rectangle is specified in the coordinate system of the drawn string. (The origin of the bounds corresponds to neither a view the string might have been drawn into nor the origin of a possible [draw(in:)](https://developer.apple.com/documentation/foundation/nsattributedstring/draw%28in:%29) call.)

# totalBounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The most recent bounding rectangle that the system used to draw the string.

## Declaration

```objectivec
@property (readonly) CGRect totalBounds;
```

<a id="Discussion"></a>

## Discussion

This property contains the bounding rectangle that was last used when calling the [drawWithRect:options:context:](https://developer.apple.com/documentation/foundation/nsattributedstring/draw%28with:options:context:%29) method. The rectangle is specified in the coordinate system of the drawn string. (The origin of the bounds corresponds to neither a view the string might have been drawn into nor the origin of a possible [drawInRect:](https://developer.apple.com/documentation/foundation/nsattributedstring/draw%28in:%29) call.)
