> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlevent/device](https://developer.apple.com/documentation/metal/mtlevent/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The device object that created the event.

## Declaration

```swift
var device: (any MTLDevice)? { get }
```

## See Also

### Identifying the event

- [label](label.md): A string that identifies the event.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The device object that created the event.

## Declaration

```objectivec
@property (readonly, nullable) id<MTLDevice> device;
```

## See Also

### Identifying the event

- [label](label.md): A string that identifies the event.
