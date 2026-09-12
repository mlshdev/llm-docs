> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebuffer/samplecount](https://developer.apple.com/documentation/metal/mtlcountersamplebuffer/samplecount)

# sampleCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The number of samples in the buffer.

## Declaration

```swift
var sampleCount: Int { get }
```

## See Also

### Inspecting the counter sample buffer’s configuration

- [label](label.md): A string that identifies the counter sample buffer.
- [device](device.md): The GPU device instance that owns the counter sample buffer.

# sampleCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The number of samples in the buffer.

## Declaration

```objectivec
@property (readonly) NSUInteger sampleCount;
```

## See Also

### Inspecting the counter sample buffer’s configuration

- [label](label.md): A string that identifies the counter sample buffer.
- [device](device.md): The GPU device instance that owns the counter sample buffer.
