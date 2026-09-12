> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketbufferpool/create](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketbufferpool/create)

# Create

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

Creates a new packet buffer pool object and allocates space for the specified number of packets.

## Declaration

```objectivec
static kern_return_t Create(OSObject *poolOwner, const char name[1024], uint32_t packetCount, uint32_t bufferCount, uint32_t bufferSize, IOUserNetworkPacketBufferPool **pool);
```

## Parameters

- `poolOwner`: The object that owns the packet buffer pool. Typically, you specify your custom [IOUserNetworkEthernet](../iousernetworkethernet.md) object as the owner of a pool, but you may choose a different object.
- `name`: The name to assign to the pool.
- `packetCount`: The number of packets to support in the pool.
- `bufferCount`: The number of buffers to create to store the packet data. Specify a value that is the same size or larger than the value in `packetCount`.
- `bufferSize`: The number of bytes in each packet buffer.
- `pool`: On return, the newly allocated packet buffer pool, or `NULL` if an error occurred.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if the method created the pool successfully.

<a id="Discussion"></a>

## Discussion

Use this method to create a new packet buffer pool object for your driver, and use that pool when creating the submission and completion queues you use to manage packets. This method allocates a contiguous block of wired memory to store the specified number of packets.

## See Also

### Creating a Buffer Pool

- [init](init.md): Initializes the network packet buffer pool object.
- [free](free.md): Releases the resources owned by the network packet buffer pool object.
