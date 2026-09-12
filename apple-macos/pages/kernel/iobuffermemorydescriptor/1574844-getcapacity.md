> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobuffermemorydescriptor/1574844-getcapacity](https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/1574844-getcapacity)

# getCapacity

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Returns the number of bytes the buffer is capable of holding.

## Declaration

```objectivec
virtual vm_size_t getCapacity(void);
```

## See Also

### Configuring the Descriptor

- [setDirection](1574826-setdirection.md): Changes the direction associated with the buffer’s memory transfers.
- [setLength](1574850-setlength.md): Sets the length of the data in the buffer.
