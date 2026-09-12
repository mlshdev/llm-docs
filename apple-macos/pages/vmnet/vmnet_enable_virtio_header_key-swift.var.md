> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_enable_virtio_header_key-swift.var](https://developer.apple.com/documentation/vmnet/vmnet_enable_virtio_header_key-swift.var)

# vmnet_enable_virtio_header_key (Swift)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 15.4+

Enable virtio headers in all packets.

## Declaration

```swift
let vmnet_enable_virtio_header_key: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

For more information, see [5.1.6 Device Operation](https://docs.oasis-open.org/virtio/virtio/v1.1/virtio-v1.1.html) in the Virtio specification

You must not specify this property if [vmnet_enable_checksum_offload_key](vmnet_enable_checksum_offload_key.md) is specified.

# vmnet_enable_virtio_header_key (Objective-C)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 15.4+

Enable virtio headers in all packets.

## Declaration

```objectivec
extern const char * const vmnet_enable_virtio_header_key;
```

<a id="Discussion"></a>

## Discussion

For more information, see [5.1.6 Device Operation](https://docs.oasis-open.org/virtio/virtio/v1.1/virtio-v1.1.html) in the Virtio specification

You must not specify this property if [vmnet_enable_checksum_offload_key](vmnet_enable_checksum_offload_key.md) is specified.
