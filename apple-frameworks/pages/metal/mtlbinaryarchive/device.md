> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbinaryarchive/device](https://developer.apple.com/documentation/metal/mtlbinaryarchive/device)

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The Metal device object that created the binary archive.

## Declaration

```swift
var device: any MTLDevice { get }
```

## See Also

### Identifying the archive

- [label](label.md): A string that identifies the library.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The Metal device object that created the binary archive.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

## See Also

### Identifying the archive

- [label](label.md): A string that identifies the library.
