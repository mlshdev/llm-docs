> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iohistogramreporter/initwith](https://developer.apple.com/documentation/driverkit/iohistogramreporter/initwith)

# initWith

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
bool initWith(IOService *reportingService, IOReportCategories categories, uint64_t channelID, const char *channelName, IOReportUnit unit, int nSegments, IOHistogramSegmentConfig *config);
```

## See Also

### Instance Methods

- [addChannel](addchannel.md)
- [overrideBucketValues](overridebucketvalues.md)
- [tallyValue](tallyvalue.md)
