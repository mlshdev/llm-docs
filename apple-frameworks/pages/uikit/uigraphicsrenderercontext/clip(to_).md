> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderercontext/clip(to:)](https://developer.apple.com/documentation/uikit/uigraphicsrenderercontext/clip(to:))

# clip(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Sets the clipping mask for the drawing context to the specified rectangle.

## Declaration

```swift
func clip(to rect: CGRect)
```

## Parameters

- `rect`: The rectangle to which the drawing context is clipped, specified in the Core Graphics coordinate space with values in points.

<a id="Discussion"></a>

## Discussion

To restrict the active drawing area to the specified rectangle, call this method before executing drawing commands.

To use a more complex shape as a clipping mask, use the [clip(to:mask:)](../../coregraphics/cgcontext/clip%28to_mask_%29.md) method on the underlying Core Graphics context, accessed through the [cgContext](cgcontext.md) property.

# clipToRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Sets the clipping mask for the drawing context to the specified rectangle.

## Declaration

```objectivec
- (void) clipToRect:(CGRect) rect;
```

## Parameters

- `rect`: The rectangle to which the drawing context is clipped, specified in the Core Graphics coordinate space with values in points.

<a id="Discussion"></a>

## Discussion

To restrict the active drawing area to the specified rectangle, call this method before executing drawing commands.

To use a more complex shape as a clipping mask, use the [CGContextClipToMask](../../coregraphics/cgcontext/clip%28to_mask_%29.md) method on the underlying Core Graphics context, accessed through the [CGContext](cgcontext.md) property.
