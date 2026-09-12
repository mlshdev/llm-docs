> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/device](https://developer.apple.com/documentation/metal/mtlargumentencoder/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The device object that created the argument encoder.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

You can only use the encoder to encode data into buffers created by the same Metal device object.

## See Also

### Identifying the argument encoder

- [label](label.md): A string that identifies the argument buffer.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The device object that created the argument encoder.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

You can only use the encoder to encode data into buffers created by the same Metal device object.

## See Also

### Identifying the argument encoder

- [label](label.md): A string that identifies the argument buffer.
