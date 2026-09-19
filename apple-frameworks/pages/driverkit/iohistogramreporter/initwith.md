> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iohistogramreporter/initwith

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
