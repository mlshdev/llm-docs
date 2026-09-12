> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osstring/3180974-getcstringnocopy](https://developer.apple.com/documentation/kernel/osstring/3180974-getcstringnocopy)

# getCStringNoCopy

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns a pointer to the OSString object's internal data buffer.

## Declaration

```objectivec
const char * getCStringNoCopy(void);
```

```objectivec
virtual const char * getCStringNoCopy(void);
```

<a id="return_value"></a>

## Return Value

A pointer to the string or NULL if the OSString has zero length. The string will be null terminated.

## See Also

### Getting a C String

- [OSStringPtr](https://developer.apple.com/documentation/driverkit/osstringptr)
