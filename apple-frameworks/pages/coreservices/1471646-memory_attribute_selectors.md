> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471646-memory_attribute_selectors](https://developer.apple.com/documentation/coreservices/1471646-memory_attribute_selectors)

# Memory Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for memory.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltOSAttr](1471646-memory_attribute_selectors/gestaltosattr.md)
- [gestaltSysZoneGrowable](1471646-memory_attribute_selectors/gestaltsyszonegrowable.md)
- [gestaltLaunchCanReturn](1471646-memory_attribute_selectors/gestaltlaunchcanreturn.md)
- [gestaltLaunchFullFileSpec](1471646-memory_attribute_selectors/gestaltlaunchfullfilespec.md)
- [gestaltLaunchControl](1471646-memory_attribute_selectors/gestaltlaunchcontrol.md): If this bit is set, the Process Manager is available.
- [gestaltTempMemSupport](1471646-memory_attribute_selectors/gestalttempmemsupport.md): If `true`, there is temporary memory support.
- [gestaltRealTempMemory](1471646-memory_attribute_selectors/gestaltrealtempmemory.md): If `true`, temporary memory handles are real.
- [gestaltTempMemTracked](1471646-memory_attribute_selectors/gestalttempmemtracked.md): If `true`, temporary memory handles are tracked.
- [gestaltIPCSupport](1471646-memory_attribute_selectors/gestaltipcsupport.md)
- [gestaltSysDebuggerSupport](1471646-memory_attribute_selectors/gestaltsysdebuggersupport.md)
- [gestaltNativeProcessMgrBit](1471646-memory_attribute_selectors/gestaltnativeprocessmgrbit.md)
- [gestaltAltivecRegistersSwappedCorrectlyBit](1471646-memory_attribute_selectors/gestaltaltivecregistersswappedcorrectlybit.md)
