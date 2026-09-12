> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osnumber/withnumber-5rcqv](https://developer.apple.com/documentation/driverkit/osnumber/withnumber-5rcqv)

# withNumber

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Allocates an OSNumber object with value and size.

## Declaration

```objectivec
static OSNumberPtr withNumber(uint64_t value, size_t numberOfBits);
```

## Parameters

- `value`: Value the OSNumber holds.
- `numberOfBits`: Size of the value. Only 8, 16, 32, or 64 are valid sizes.

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSNumber with reference count 1 to be released by the caller.

<a id="Discussion"></a>

## Discussion

Allocates an OSNumber object with value and size.

## See Also

### Creating a Number Object

- [withNumber](withnumber-2c6oe.md): Allocates an OSNumber object with value from a c-string and size.
- [OSNumberCreateWithUInt64Value](../osnumbercreatewithuint64value.md)
- [free](free.md)
- [OSNumberPtr](../osnumberptr.md)
