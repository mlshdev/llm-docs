> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mididriverkit/iousermididevice/requestdeviceconfigurationchange

# RequestDeviceConfigurationChange

**Interface language:** Objective-C

**Framework:** MIDIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
kern_return_t RequestDeviceConfigurationChange(uint64_t changeAction, OSObject *changeInfo);
```

## See Also

### Instance Methods

- [AbortDeviceConfigurationChange](abortdeviceconfigurationchange.md)
- [AddEntity](addentity.md)
- [GetBaseClassID](getbaseclassid.md)
- [GetClassID](getclassid.md)
- [GetDeviceIsRunning](getdeviceisrunning.md)
- [GetEntities](getentities.md)
- [PerformDeviceConfigurationChange](performdeviceconfigurationchange.md)
- [RemoveEntity](removeentity.md)
- [SetProperties](setproperties.md)
- [StartIO](startio.md)
- [StopIO](stopio.md)
- [free](free.md)
- [init](init.md)
