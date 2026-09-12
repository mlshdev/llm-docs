> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkviewdelegate/draw(in:)](https://developer.apple.com/documentation/metalkit/mtkviewdelegate/draw(in:))

# draw(in:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Draws the view’s contents.

## Declaration

```swift
@MainActor func draw(in view: MTKView)
```

## Parameters

- `view`: The view requesting that its contents be redrawn.

<a id="Discussion"></a>

## Discussion

This method is called on the delegate when it is asked to render into the view.

# drawInMTKView: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Draws the view’s contents.

## Declaration

```objectivec
- (void) drawInMTKView:(MTKView *) view;
```

## Parameters

- `view`: The view requesting that its contents be redrawn.

<a id="Discussion"></a>

## Discussion

This method is called on the delegate when it is asked to render into the view.
