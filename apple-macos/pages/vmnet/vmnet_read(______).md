> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_read(_:_:_:)](https://developer.apple.com/documentation/vmnet/vmnet_read(_:_:_:))

# vmnet_read(\_:\_:\_:) (Swift)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Attempts to read a specified number of packets from an interface.

## Declaration

```swift
func vmnet_read(_ interface: interface_ref, _ packets: UnsafeMutablePointer<vmpktdesc>, _ pktcnt: UnsafeMutablePointer<Int32>) -> vmnet_return_t
```

## Parameters

- `interface`: The interface reference.
- `packets`: On return, this parameter is populated with an array of packets read.
- `pktcnt`: The number of packets to read. On return, this parameter is populated with the number of packets read, or `0` no packets are available to be read.

<a id="Return-Value"></a>

## Return Value

Returns `vmnet` on success, or an error code on failure. See `vmnet` for possible values.

<a id="Discussion"></a>

## Discussion

Each packet buffer passed should be at least as large as the value of [vmnet_max_packet_size_key](vmnet_max_packet_size_key.md) for the interface.

## See Also

### Reading and Writing Packets

- [vmnet_write(\_:\_:\_:)](vmnet_write%28______%29.md): Attempts to write specified packets to an interface.

# vmnet_read (Objective-C)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Attempts to read a specified number of packets from an interface.

## Declaration

```objectivec
vmnet_return_t vmnet_read(interface_ref interface, struct vmpktdesc *packets, int *pktcnt);
```

## Parameters

- `interface`: The interface reference.
- `packets`: On return, this parameter is populated with an array of packets read.
- `pktcnt`: The number of packets to read. On return, this parameter is populated with the number of packets read, or `0` no packets are available to be read.

<a id="Return-Value"></a>

## Return Value

Returns `vmnet` on success, or an error code on failure. See `vmnet` for possible values.

<a id="Discussion"></a>

## Discussion

Each packet buffer passed should be at least as large as the value of [vmnet_max_packet_size_key](vmnet_max_packet_size_key.md) for the interface.

## See Also

### Reading and Writing Packets

- [vmnet_write](vmnet_write%28______%29.md): Attempts to write specified packets to an interface.
