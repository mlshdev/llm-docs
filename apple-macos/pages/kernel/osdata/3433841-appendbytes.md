> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdata/3433841-appendbytes](https://developer.apple.com/documentation/kernel/osdata/3433841-appendbytes)

# appendBytes

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15.2+

Appends a buffer of bytes to the OSData object's internal data buffer.

## Declaration

```objectivec
bool appendBytes(const OSData *aDataObj);
```

```objectivec
virtual bool appendBytes(const OSData *aDataObj);
```

## Parameters

- `aDataObj`: An OSData object to copy all bytes from.

<a id="return_value"></a>

## Return Value

true on success or false on failure, due to allocation failure.

## See Also

### Appending Data to the Object

- [appendBytes](https://developer.apple.com/documentation/driverkit/osdata/appendbytes-lbqa): Appends a buffer of bytes to the OSData object's internal data buffer.
