> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/estimaterender(_:from:to:at:)](https://developer.apple.com/documentation/coreimage/cicontext/estimaterender(_:from:to:at:))

# estimateRender(\_:from:to:at:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a task with estimated resource statistics for a render, without executing the render.

## Declaration

```swift
func estimateRender(_ image: CIImage, from fromRect: CGRect, to destination: CIRenderDestination, at atPoint: CGPoint) throws -> CIRenderTask
```

## Parameters

- `image`: The [CIImage](../ciimage.md) to estimate the render for.
- `fromRect`: The region of [CIImage](../ciimage.md) to render.
- `destination`: The [CIRenderDestination](../cirenderdestination.md) to estimate the render to.
- `atPoint`: The point in the destination where the origin of `fromRect` is placed.

<a id="return-value"></a>

## Return Value

 A [CIRenderTask](../cirendertask.md) you can query for estimated statistics, or `nil` if `fromRect` doesn’t intersect `image.extent` or if estimation fails.

<a id="discussion"></a>

## Discussion

Call this method to analyze the cost of a render before you execute it. Query the returned task’s `plannedPixelsProcessed`, `plannedPixelsOverdrawn`, `plannedPassCount`, and `plannedPeakMemory` properties to get the estimated statistics.

The method renders as if the image is cropped to `fromRect` and places the origin of `fromRect` at `atPoint` in the destination.

# estimateRender:fromRect:toDestination:atPoint:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a task with estimated resource statistics for a render, without executing the render.

## Declaration

```objectivec
- (CIRenderTask *) estimateRender:(CIImage *) image fromRect:(CGRect) fromRect toDestination:(CIRenderDestination *) destination atPoint:(CGPoint) atPoint error:(NSError **) error;
```

## Parameters

- `image`: The [CIImage](../ciimage.md) to estimate the render for.
- `fromRect`: The region of [CIImage](../ciimage.md) to render.
- `destination`: The [CIRenderDestination](../cirenderdestination.md) to estimate the render to.
- `atPoint`: The point in the destination where the origin of `fromRect` is placed.
- `error`: On output, the error that caused estimation to fail, or `nil` if estimation succeeded.

<a id="return-value"></a>

## Return Value

 A [CIRenderTask](../cirendertask.md) you can query for estimated statistics, or `nil` if `fromRect` doesn’t intersect `image.extent` or if estimation fails.

<a id="discussion"></a>

## Discussion

Call this method to analyze the cost of a render before you execute it. Query the returned task’s `plannedPixelsProcessed`, `plannedPixelsOverdrawn`, `plannedPassCount`, and `plannedPeakMemory` properties to get the estimated statistics.

The method renders as if the image is cropped to `fromRect` and places the origin of `fromRect` at `atPoint` in the destination.
