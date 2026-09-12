> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472719-mixed_mode_manager_selectors](https://developer.apple.com/documentation/coreservices/1472719-mixed_mode_manager_selectors)

# Mixed Mode Manager Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify version and feature availability information for the Mixed Mode Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltMixedModeAttr](1472719-mixed_mode_manager_selectors/gestaltmixedmodeattr.md): The Gestalt selector you pass to determine what version of Mixed Mode Manager is present.
- [gestaltMixedModePowerPC](1472719-mixed_mode_manager_selectors/gestaltmixedmodepowerpc.md): True if Mixed Mode supports PowerPC ABI calling conventions
- [gestaltPowerPCAware](1472719-mixed_mode_manager_selectors/gestaltpowerpcaware.md): Old name for `gestaltMixedModePowerPC`
- [gestaltMixedModeCFM68K](1472719-mixed_mode_manager_selectors/gestaltmixedmodecfm68k.md): True if Mixed Mode supports CFM-68K calling conventions
- [gestaltMixedModeCFM68KHasTrap](1472719-mixed_mode_manager_selectors/gestaltmixedmodecfm68khastrap.md): True if CFM-68K Mixed Mode implements `_MixedModeDispatch` (versions 1.0.1 and prior did not)
- [gestaltMixedModeCFM68KHasState](1472719-mixed_mode_manager_selectors/gestaltmixedmodecfm68khasstate.md): True if CFM-68K Mixed Mode exports Save/RestoreMixedModeState
