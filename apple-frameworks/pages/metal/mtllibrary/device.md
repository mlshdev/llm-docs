> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtllibrary/device

# device (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The Metal device object that created the library.

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

You can only use the library with this [MTLDevice](../mtldevice.md).

## See Also

### Identifying the library

- [label](label.md): A string that identifies the library.

# device (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The Metal device object that created the library.

## Declaration

```objectivec
@property (readonly) id<MTLDevice> device;
```

<a id="discussion"></a>

## Discussion

You can only use the library with this [MTLDevice](../mtldevice.md).

## See Also

### Identifying the library

- [label](label.md): A string that identifies the library.
