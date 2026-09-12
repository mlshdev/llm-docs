> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfence/device](https://developer.apple.com/documentation/metal/mtlfence/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The device object that created the fence.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

Only the device that created the fence can use it.

## See Also

### Identifying a fence

- [label](label.md): A string that identifies the fence.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The device object that created the fence.

## Declaration

```objectivec
@property (readonly, nonnull) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

Only the device that created the fence can use it.

## See Also

### Identifying a fence

- [label](label.md): A string that identifies the fence.
