> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsharedtexturehandle/device](https://developer.apple.com/documentation/metal/mtlsharedtexturehandle/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

The device object that created the texture.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

A texture is always associated with the [MTLDevice](../mtldevice.md) that created it and can be used only with that device.

## See Also

### Identifying the shared texture handle

- [label](label.md): A string that identifies the texture.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

The device object that created the texture.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

A texture is always associated with the [MTLDevice](../mtldevice.md) that created it and can be used only with that device.

## See Also

### Identifying the shared texture handle

- [label](label.md): A string that identifies the texture.
