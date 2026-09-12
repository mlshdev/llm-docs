> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrendererformat/bounds](https://developer.apple.com/documentation/uikit/uigraphicsrendererformat/bounds)

# bounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The bounds of the graphics context.

## Declaration

```swift
var bounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

This value represents the bounds of every Core Graphics context that the associated graphics renderer creates.

If the graphics renderer itself creates a format object, the bounds are set to those provided to the renderer as part of the initializer.

# bounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The bounds of the graphics context.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect bounds;
```

<a id="Discussion"></a>

## Discussion

This value represents the bounds of every Core Graphics context that the associated graphics renderer creates.

If the graphics renderer itself creates a format object, the bounds are set to those provided to the renderer as part of the initializer.
