> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkviewdelegate/mtkview(_:drawablesizewillchange:)](https://developer.apple.com/documentation/metalkit/mtkviewdelegate/mtkview(_:drawablesizewillchange:))

# mtkView(\_:drawableSizeWillChange:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Updates the view’s contents upon receiving a change in layout, resolution, or size.

## Declaration

```swift
@MainActor func mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize)
```

## Parameters

- `view`: The view requesting that its contents be updated.
- `size`: The view’s new drawable size.

<a id="Discussion"></a>

## Discussion

Use this method to recompute any view or projection matrices, or to regenerate any buffers to be compatible with the view’s new size.

# mtkView:drawableSizeWillChange: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Updates the view’s contents upon receiving a change in layout, resolution, or size.

## Declaration

```objectivec
- (void) mtkView:(MTKView *) view drawableSizeWillChange:(CGSize) size;
```

## Parameters

- `view`: The view requesting that its contents be updated.
- `size`: The view’s new drawable size.

<a id="Discussion"></a>

## Discussion

Use this method to recompute any view or projection matrices, or to regenerate any buffers to be compatible with the view’s new size.
