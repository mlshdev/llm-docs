> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472525-power_manager_attribute_selector](https://developer.apple.com/documentation/coreservices/1472525-power_manager_attribute_selector)

# Power Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability for the Power Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltPowerMgrAttr](1472525-power_manager_attribute_selector/gestaltpowermgrattr.md): The `Gestalt` selector you pass to determine which Power Manager capabilities are available.
- [gestaltPMgrExists](1472525-power_manager_attribute_selector/gestaltpmgrexists.md): If true, the Power Manager is present.
- [gestaltPMgrCPUIdle](1472525-power_manager_attribute_selector/gestaltpmgrcpuidle.md): If true the CPU is capable of going into a low–power-consumption state.
- [gestaltPMgrSCC](1472525-power_manager_attribute_selector/gestaltpmgrscc.md): If true, it is possible to stop the SCC clock, thus effectively turning off the serial ports.
- [gestaltPMgrSound](1472525-power_manager_attribute_selector/gestaltpmgrsound.md): If true, it is possible to turn off power to the sound circuits.
- [gestaltPMgrDispatchExists](1472525-power_manager_attribute_selector/gestaltpmgrdispatchexists.md): If true, Dispatch is present.
- [gestaltPMgrSupportsAVPowerStateAtSleepWake](1472525-power_manager_attribute_selector/gestaltpmgrsupportsavpowerstateatsleepwake.md)
