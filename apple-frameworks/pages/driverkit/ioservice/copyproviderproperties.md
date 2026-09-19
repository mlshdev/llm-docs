> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioservice/copyproviderproperties

# CopyProviderProperties

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t CopyProviderProperties(OSArray *propertyKeys, OSArray **properties);
```

## See Also

### Instance Methods

- [AdjustBusy](adjustbusy.md)
- [ClientCrashed](clientcrashed.md)
- [ConfigureReport](configurereport.md)
- [CopyName](copyname.md)
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
- [StateNotificationItemCopy](statenotificationitemcopy.md)
