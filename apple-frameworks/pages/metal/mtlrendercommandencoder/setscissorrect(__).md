> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setscissorrect(_:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setscissorrect(_:))

# setScissorRect(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures a rectangle for the fragment scissor test.

## Declaration

```swift
func setScissorRect(_ rect: MTLScissorRect)
```

## Parameters

- `rect`: An [MTLScissorRect](../mtlscissorrect.md) instance that represents a rectangle that needs to lie completely within the current render attachment.

<a id="discussion"></a>

## Discussion

The rendering pipeline discards any fragments that lie outside the scissor rectangle.

The default scissor rectangle is the same size as the current render attachment, with its origin coordinates in the upper-left corner at `(0, 0)`.

> **Note**

>  You can change the render pass’s scissor rectangle configuration by calling this method again or by calling the [setScissorRects(\_:)](setscissorrects%28__%29.md) method.

## See Also

### Configuring viewport and scissor behavior

- [setViewport(\_:)](setviewport%28__%29.md): Configures the render pipeline with a viewport that applies a transformation and a clipping rectangle.
- [setViewports(\_:)](setviewports%28__%29.md): Configures the render pipeline with multiple viewports that apply transformations and clipping rectangles.
- [setScissorRects(\_:)](setscissorrects%28__%29.md): Configures multiple rectangles for the fragment scissor test.

# setScissorRect: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Configures a rectangle for the fragment scissor test.

## Declaration

```objectivec
- (void) setScissorRect:(MTLScissorRect) rect;
```

## Parameters

- `rect`: An [MTLScissorRect](../mtlscissorrect.md) instance that represents a rectangle that needs to lie completely within the current render attachment.

<a id="discussion"></a>

## Discussion

The rendering pipeline discards any fragments that lie outside the scissor rectangle.

The default scissor rectangle is the same size as the current render attachment, with its origin coordinates in the upper-left corner at `(0, 0)`.

> **Note**

>  You can change the render pass’s scissor rectangle configuration by calling this method again or by calling the [setScissorRects(\_:)](setscissorrects%28__%29.md) method.

## See Also

### Configuring viewport and scissor behavior

- [setViewport:](setviewport%28__%29.md): Configures the render pipeline with a viewport that applies a transformation and a clipping rectangle.
- [setViewports:count:](setviewports_count_.md): Configures the render pipeline with multiple viewports that apply transformations and clipping rectangles.
- [setScissorRects:count:](setscissorrects_count_.md): Configures multiple rectangles for the fragment scissor test.
