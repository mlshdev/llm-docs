> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/callplatformfunction](https://developer.apple.com/documentation/driverkit/ioservice/callplatformfunction)

# CallPlatformFunction

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t CallPlatformFunction(OSString *functionName, bool waitForFunction, OSDictionary *inParam, OSDictionary **outParam);
```

## Parameters

- `functionName`: Name of the function to be called.
- `waitForFunction`: If true, CallPlatformFunction will not return until the function has been called.
- `inParam`: Dictionary containing the input parameters.
- `outParam`: Pointer to a storage that will contain the output parameters.

<a id="return-value"></a>

## Return Value

An IOReturn code; kIOReturnSuccess if the function was successfully executed, kIOReturnUnsupported if a service to execute the function could not be found. Other return codes may be returned by the function.

<a id="discussion"></a>

## Discussion

Calls the platform function with the given name.
