> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandencoder/device](https://developer.apple.com/documentation/metal/mtlcommandencoder/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The Metal device from which the command encoder was created.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

This command encoder can only be used with this [MTLDevice](../mtldevice.md).

## See Also

### Identifying the command encoder

- [label](label.md): A string that labels the command encoder.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The Metal device from which the command encoder was created.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

This command encoder can only be used with this [MTLDevice](../mtldevice.md).

## See Also

### Identifying the command encoder

- [label](label.md): A string that labels the command encoder.
