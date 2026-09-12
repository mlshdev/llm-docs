> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerstate/device](https://developer.apple.com/documentation/metal/mtlsamplerstate/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The device object that created the sampler.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

A sampler is always associated with the [MTLDevice](../mtldevice.md) that created it and can be used only with that device.

## See Also

### Identifying the sampler

- [label](label.md): A string that identifies the sampler.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The device object that created the sampler.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

A sampler is always associated with the [MTLDevice](../mtldevice.md) that created it and can be used only with that device.

## See Also

### Identifying the sampler

- [label](label.md): A string that identifies the sampler.
