> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3180694-copyproperties](https://developer.apple.com/documentation/kernel/ioservice/3180694-copyproperties)

# CopyProperties

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS 10.15+

Returns the registry properties associated with the current service.

## Declaration

```objectivec
virtual kern_return_t CopyProperties(OSDictionary **properties);
```

```objectivec
kern_return_t CopyProperties(OSDictionary **properties, OSDispatchMethod supermethod);
```

## Parameters

- `properties`: A variable for storing the properties. On return, the variable contains a dictionary with the properties, or `NULL` if the service has no registered properties. If this method returns a valid dictionary, you are responsible for releasing that dictionary when you are finished with it.

  It is a programmer error to specify `NULL` or an invalid pointer for this parameter.

<a id="return_value"></a>

## Return Value

[kIOReturnSuccess](https://developer.apple.com/documentation/driverkit/kioreturnsuccess) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](https://developer.apple.com/documentation/driverkit/error-codes).

## See Also

### Managing the Registry Properties

- [SetProperties](https://developer.apple.com/documentation/driverkit/ioservice/setproperties): Sends the dictionary of properties to the current service object.
- [SearchProperty](https://developer.apple.com/documentation/driverkit/ioservice/searchproperty): Searches for a property with the specified name in the current service or one of its parent services, and returns the corresponding value.
- [IOPropertyName](https://developer.apple.com/documentation/driverkit/iopropertyname): A string type for specifying the name of a property in the system's registry.
- [IORegistryPlaneName](https://developer.apple.com/documentation/driverkit/ioregistryplanename): A string type for specifying the name of a plane in the system's registry.
- [Search Options](https://developer.apple.com/documentation/driverkit/3325572-search_options): Options to apply when searching for registry properties.
