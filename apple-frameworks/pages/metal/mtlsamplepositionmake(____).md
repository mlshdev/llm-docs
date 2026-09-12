> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplepositionmake(_:_:)](https://developer.apple.com/documentation/metal/mtlsamplepositionmake(_:_:))

# MTLSamplePositionMake(\_:\_:) (Swift)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a new sample position on a subpixel grid.

## Declaration

```swift
func MTLSamplePositionMake(_ x: Float, _ y: Float) -> MTLSamplePosition
```

## Parameters

- `x`: The x coordinate.
- `y`: The y coordinate.

<a id="return-value"></a>

## Return Value

The new sample position.

## See Also

### Using programmable sample positions

- [setSamplePositions(\_:)](mtlrenderpassdescriptor/setsamplepositions%28__%29.md): Sets the programmable sample positions for a render pass.
- [getSamplePositions()](mtlrenderpassdescriptor/getsamplepositions%28%29.md): Returns the programmable sample positions set for a render pass.

# MTLSamplePositionMake (Objective-C)

**Framework:** Metal  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns a new sample position on a subpixel grid.

## Declaration

```objectivec
static MTLSamplePosition MTLSamplePositionMake(float x, float y);
```

## Parameters

- `x`: The x coordinate.
- `y`: The y coordinate.

<a id="return-value"></a>

## Return Value

The new sample position.

## See Also

### Using programmable sample positions

- [setSamplePositions:count:](mtlrenderpassdescriptor/setsamplepositions_count_.md): Sets the programmable sample positions for a render pass.
- [getSamplePositions:count:](mtlrenderpassdescriptor/getsamplepositions_count_.md): Retrieves the programmable sample positions set for a render pass.
