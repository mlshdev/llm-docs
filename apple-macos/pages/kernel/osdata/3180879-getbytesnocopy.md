> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdata/3180879-getbytesnocopy](https://developer.apple.com/documentation/kernel/osdata/3180879-getbytesnocopy)

# getBytesNoCopy

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns a pointer to the OSData object's internal data buffer.

## Declaration

```objectivec
const void * getBytesNoCopy(void);
```

```objectivec
virtual const void * getBytesNoCopy(void);
```

<a id="return_value"></a>

## Return Value

A pointer to the data or NULL if the OSData has zero length.

## See Also

### Getting Bytes

- [getBytesNoCopy](3433842-getbytesnocopy.md): Returns a pointer to the OSData object's internal data buffer.
