> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osserialization/createfromobject-4rdec](https://developer.apple.com/documentation/driverkit/osserialization/createfromobject-4rdec)

# createFromObject

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static OSSerializationPtr createFromObject(OSObjectPtr const object, OSSerializationPortCopyOutHandler copyOutHandler);
```

## Parameters

- `object`: Object to serialize. Only certain DriverKit classes may be serialized: OSData, OSString, OSNumber, OSBoolean, OSArray, OSDictionary.
- `copyOutHandler`: An optional handler that allows an object to be replaced with a port name before being serialized

<a id="return-value"></a>

## Return Value

NULL on failure, otherwise the allocated OSSerialization with reference count 1 to be released by the caller.

<a id="discussion"></a>

## Discussion

Allocates an OSSerialization object with the serialized data of an object.

Allocates an OSSerialization object with the serialized data of an object.
