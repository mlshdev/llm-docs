> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpassdescriptor/getsamplepositions()](https://developer.apple.com/documentation/metal/mtlrenderpassdescriptor/getsamplepositions())

# getSamplePositions()

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS

Returns the programmable sample positions set for a render pass.

## Declaration

```swift
func getSamplePositions() -> [MTLSamplePosition]
```

<a id="return-value"></a>

## Return Value

An array of programmable sample positions.

## See Also

### Using programmable sample positions

- [MTLSamplePositionMake(\_:\_:)](../mtlsamplepositionmake%28____%29.md): Returns a new sample position on a subpixel grid.
- [setSamplePositions(\_:)](setsamplepositions%28__%29.md): Sets the programmable sample positions for a render pass.
