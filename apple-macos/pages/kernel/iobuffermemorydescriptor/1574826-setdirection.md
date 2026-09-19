> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/1574826-setdirection

# setDirection

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Changes the direction associated with the buffer’s memory transfers.

## Declaration

```objectivec
virtual void setDirection(IODirection direction);
```

## Parameters

- `direction`: The new direction of transfers.

## See Also

### Configuring the Descriptor

- [getCapacity](1574844-getcapacity.md): Returns the number of bytes the buffer is capable of holding.
- [setLength](1574850-setlength.md): Sets the length of the data in the buffer.
