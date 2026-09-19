> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioservice/updatereport

# UpdateReport

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOReturn UpdateReport(OSData *channels, uint32_t action, uint32_t *outElementCount, uint64_t offset, uint64_t capacity, IOMemoryDescriptor *buffer);
```

## See Also

### Instance Methods

- [AdjustBusy](adjustbusy.md)
- [ClientCrashed](clientcrashed.md)
- [ConfigureReport](configurereport.md)
- [CopyName](copyname.md)
- [CopyProviderProperties](copyproviderproperties.md)
- [CopySystemStateNotificationService](copysystemstatenotificationservice.md)
- [CoreAnalyticsSendEvent](coreanalyticssendevent.md)
- [CreateDefaultDispatchQueue](createdefaultdispatchqueue.md)
- [GetBusyState](getbusystate.md)
- [GetProvider](getprovider.md)
- [JoinPMTree](joinpmtree.md)
- [RemoveProperty](removeproperty.md)
- [RequireMaxBusStall](requiremaxbusstall.md)
- [SetLegend](setlegend.md)
- [SetPowerOverride](setpoweroverride.md)
