> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/copyproperties](https://developer.apple.com/documentation/driverkit/ioservice/copyproperties)

# CopyProperties

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the registry properties associated with the current service.

## Declaration

```objectivec
virtual kern_return_t CopyProperties(OSDictionary **properties);
```

## Parameters

- `properties`: A variable for storing the properties. On return, the variable contains a dictionary with the properties, or `NULL` if the service has no registered properties. If this method returns a valid dictionary, you are responsible for releasing that dictionary when you are finished with it.

  It is a programmer error to specify `NULL` or an invalid pointer for this parameter.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../error-codes.md).

## See Also

### Managing the Registry Properties

- [SetProperties](setproperties.md): Sends the dictionary of properties to the current service object.
- [SearchProperty](searchproperty.md): Searches for a property with the specified name in the current service or one of its parent services, and returns the corresponding value.
- [IOPropertyName](../iopropertyname.md): A string type for specifying the name of a property in the system’s registry.
- [IORegistryPlaneName](../ioregistryplanename.md): A string type for specifying the name of a plane in the system’s registry.
- [Search Options](../3325572-search_options.md): Options to apply when searching for registry properties.
