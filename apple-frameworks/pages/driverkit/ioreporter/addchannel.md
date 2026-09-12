> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioreporter/addchannel](https://developer.apple.com/documentation/driverkit/ioreporter/addchannel)

# addChannel

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Add an additional, similar channel to the reporter.

## Declaration

```objectivec
IOReturn addChannel(uint64_t channelID, const char *channelName);
```

## Parameters

- `channelID`: Identifier for the channel to be added.
- `channelName`: An optional human-readble name for the channel.

<a id="return-value"></a>

## Return Value

Appropriate `IOReturn` code.

<a id="discussion"></a>

## Discussion

The reporter will allocate memory to track a new channel with the provided ID and name (if any). Its other traits (type, etc) will be those provided when the reporter was initialized.  If no channel name is provided and the channelID consists solely of ASCII bytes, those bytes (ignoring any NUL bytes) will be used as the human-readable channel name in user space.  The `IOREPORT_MAKEID()` macro in `IOReportTypes.h` can be used to create ASCII channel IDs.

Locking: same-instance concurrency SAFE, MAY BLOCK

## See Also

### Instance Methods

- [configureReport](configurereport.md): Track IOService::configureReport(), provide sizing info
- [createLegend](createlegend.md): Create a legend entry represending this reporter’s channels.
- [free](free.md)
- [updateReport](updatereport.md): Produce standard reply to IOService::updateReport()
