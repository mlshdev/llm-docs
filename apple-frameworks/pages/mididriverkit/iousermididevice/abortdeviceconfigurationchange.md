> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mididriverkit/iousermididevice/abortdeviceconfigurationchange

# AbortDeviceConfigurationChange

**Interface language:** Objective-C

**Framework:** MIDIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
virtual kern_return_t AbortDeviceConfigurationChange(uint64_t changeAction, OSObject *changeInfo);
```

## See Also

### Instance Methods

- [AddEntity](addentity.md)
- [GetBaseClassID](getbaseclassid.md)
- [GetClassID](getclassid.md)
- [GetDeviceIsRunning](getdeviceisrunning.md)
- [GetEntities](getentities.md)
- [PerformDeviceConfigurationChange](performdeviceconfigurationchange.md)
- [RemoveEntity](removeentity.md)
- [RequestDeviceConfigurationChange](requestdeviceconfigurationchange.md)
- [SetProperties](setproperties.md)
- [StartIO](startio.md)
- [StopIO](stopio.md)
- [free](free.md)
- [init](init.md)
