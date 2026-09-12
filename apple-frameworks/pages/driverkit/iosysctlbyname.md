> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iosysctlbyname](https://developer.apple.com/documentation/driverkit/iosysctlbyname)

# IOSysCtlByName

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
kern_return_t IOSysCtlByName(const char *name, void *oldp, size_t *oldlenp, void *newp, size_t newlen);
```

## Parameters

- `name`: An ASCII representation of the sysctl vector
- `oldp`: Buffer to receive the system information
- `oldlenp`: Length of the buffer receiving the system information
- `newp`: Buffer containing the value to be set
- `newlen`: Length of the buffer containing the value to be set

<a id="return-value"></a>

## Return Value

kIOReturnSuccess if successful, or an IOReturn code indicating the error

<a id="discussion"></a>

## Discussion

Get or set system information. Depending on the sysctl vector, only priviledged drivers might be able to set certain system information.
