> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/coreanalyticssendevent](https://developer.apple.com/documentation/driverkit/ioservice/coreanalyticssendevent)

# CoreAnalyticsSendEvent

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t CoreAnalyticsSendEvent(uint64_t options, OSString *eventName, OSDictionary *eventPayload);
```

## See Also

### Instance Methods

- [AdjustBusy](adjustbusy.md)
- [ClientCrashed](clientcrashed.md)
- [ConfigureReport](configurereport.md)
- [CopyName](copyname.md)
- [CopyProviderProperties](copyproviderproperties.md)
- [CopySystemStateNotificationService](copysystemstatenotificationservice.md)
- [CreateDefaultDispatchQueue](createdefaultdispatchqueue.md)
- [GetBusyState](getbusystate.md)
- [GetProvider](getprovider.md)
- [JoinPMTree](joinpmtree.md)
- [RemoveProperty](removeproperty.md)
- [RequireMaxBusStall](requiremaxbusstall.md)
- [SetLegend](setlegend.md)
- [SetPowerOverride](setpoweroverride.md)
- [StateNotificationItemCopy](statenotificationitemcopy.md)
