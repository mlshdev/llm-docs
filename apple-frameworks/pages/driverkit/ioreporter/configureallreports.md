> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter/configureallreports](https://developer.apple.com/documentation/driverkit/ioreporter/configureallreports)

# configureAllReports

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Calls `configureReport()` on multiple `IOReporter` objects

## Declaration

```objectivec
static IOReturn configureAllReports(OSCollection *reporters, OSData *channels, IOReportConfigureAction action, uint32_t *outCount);
```

## Parameters

- `reporters`: An `OSSet` of `IOReporter` objects.
- `channels`: The full list of channels to configure.
- `action`: The action to perform.
- `outCount`: Count of updated reporters.

<a id="return-value"></a>

## Return Value

`kIOReturnSuccess` if all objects successfully complete [configureReport](configurereport.md).

<a id="discussion"></a>

## Discussion

The OSSet must only contain `IOReporter` instances.  The presence of non-`IOReporter` instances will cause this function to return `kIOReturnBadArgument`.  If any reporter returns an error, the function will immediately return that error.

Per the [configureReport](configurereport.md) documentation, each reporter will search channelList for channels it is reporting and provide a partial response.

## See Also

### Type Methods

- [updateAllReports](updateallreports.md): Calls `updateReport()` on multiple IOReporter objects.
