> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobuffermemorydescriptor/1574849-appendbytes](https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/1574849-appendbytes)

# appendBytes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Adds the specified data to the end of the memory buffer.

## Declaration

```objectivec
virtual bool appendBytes(const void *bytes, vm_size_t withLength);
```

## Parameters

- `bytes`: A pointer to the bytes to add.
- `withLength`: The number of bytes in the `bytes` parameter.

<a id="return_value"></a>

## Return Value

true if the bytes were appended successfully, or false if an error occurred.
