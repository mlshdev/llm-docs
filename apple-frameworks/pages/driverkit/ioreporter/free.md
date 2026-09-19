> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioreporter/free

# free

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual void free();
```

## See Also

### Instance Methods

- [addChannel](addchannel.md): Add an additional, similar channel to the reporter.
- [configureReport](configurereport.md): Track IOService::configureReport(), provide sizing info
- [createLegend](createlegend.md): Create a legend entry represending this reporter’s channels.
- [updateReport](updatereport.md): Produce standard reply to IOService::updateReport()
