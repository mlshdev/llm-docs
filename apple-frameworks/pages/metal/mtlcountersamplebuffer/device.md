> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebuffer/device](https://developer.apple.com/documentation/metal/mtlcountersamplebuffer/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The GPU device instance that owns the counter sample buffer.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

You can store a GPU device’s counter set data only with a counter sample buffer that you create from the same device.

## See Also

### Inspecting the counter sample buffer’s configuration

- [label](label.md): A string that identifies the counter sample buffer.
- [sampleCount](samplecount.md): The number of samples in the buffer.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The GPU device instance that owns the counter sample buffer.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

You can store a GPU device’s counter set data only with a counter sample buffer that you create from the same device.

## See Also

### Inspecting the counter sample buffer’s configuration

- [label](label.md): A string that identifies the counter sample buffer.
- [sampleCount](samplecount.md): The number of samples in the buffer.
