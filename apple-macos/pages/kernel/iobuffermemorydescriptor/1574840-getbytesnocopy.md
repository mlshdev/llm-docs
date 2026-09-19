> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/1574840-getbytesnocopy

# getBytesNoCopy

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Returns the virtual address of the beginning of the memory buffer.

## Declaration

```objectivec
virtual void * getBytesNoCopy(void);
```

## See Also

### Getting the Buffer Contents

- [getBytesNoCopy](3516445-getbytesnocopy.md): Returns the virtual address of an offset into the memory buffer.
