> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframesilogetprogressofcurrentpass(_:progressout:)](https://developer.apple.com/documentation/videotoolbox/vtframesilogetprogressofcurrentpass(_:progressout:))

# VTFrameSiloGetProgressOfCurrentPass(\_:progressOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Gets the progress of the current pass.

## Declaration

```swift
func VTFrameSiloGetProgressOfCurrentPass(_ silo: VTFrameSilo, progressOut: UnsafeMutablePointer<Float32>) -> OSStatus
```

## Parameters

- `silo`: The frame silo object.
- `progressOut`: Upon return, contains the progress of the current pass.

<a id="return-value"></a>

## Return Value

`kVTFrameSiloInvalidTimeRangeErr` if any time ranges are non-numeric, overlap or are not in ascending order.

<a id="Discussion"></a>

## Discussion

Calculates the current progress based on the most recent sample buffer added and the current pass time ranges.

## See Also

### Inspecting Frame Silos

- [VTFrameSiloGetTypeID()](vtframesilogettypeid%28%29.md): Retrieves the Core Foundation type identifier for the frame silo object.

# VTFrameSiloGetProgressOfCurrentPass (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Gets the progress of the current pass.

## Declaration

```objectivec
extern OSStatus VTFrameSiloGetProgressOfCurrentPass(VTFrameSiloRef silo, Float32 *progressOut);
```

## Parameters

- `silo`: The frame silo object.
- `progressOut`: Upon return, contains the progress of the current pass.

<a id="return-value"></a>

## Return Value

`kVTFrameSiloInvalidTimeRangeErr` if any time ranges are non-numeric, overlap or are not in ascending order.

<a id="Discussion"></a>

## Discussion

Calculates the current progress based on the most recent sample buffer added and the current pass time ranges.

## See Also

### Inspecting Frame Silos

- [VTFrameSiloGetTypeID](vtframesilogettypeid%28%29.md): Retrieves the Core Foundation type identifier for the frame silo object.
