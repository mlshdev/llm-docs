> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472872-colorsync_manager_version_select](https://developer.apple.com/documentation/coreservices/1472872-colorsync_manager_version_select)

# ColorSync Manager Version Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify version information for the ColorSync Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltColorMatchingVersion](1472872-colorsync_manager_version_select/gestaltcolormatchingversion.md): The selector for obtaining version information. Use when calling the `Gestalt` function to determine whether the ColorSync Manager is available.
- [gestaltColorSync10](1472872-colorsync_manager_version_select/gestaltcolorsync10.md): A `Gestalt` response value of `gestaltColorSync10` indicates version 1.0 of the ColorSync Manager is present. This version supports general purpose color matching only and does not provide QuickDraw-specific matching functions.
- [gestaltColorSync11](1472872-colorsync_manager_version_select/gestaltcolorsync11.md): A `Gestalt` response value of `gestaltColorSync11` indicates version 1.0.3 of the ColorSync Manager is present.
- [gestaltColorSync104](1472872-colorsync_manager_version_select/gestaltcolorsync104.md): A `Gestalt` response value of `gestaltColorSync104` indicates version 1.4 of the ColorSync Manager is present.
- [gestaltColorSync105](1472872-colorsync_manager_version_select/gestaltcolorsync105.md): A `Gestalt` response value of `gestaltColorSync105` indicates version 1.5 of the ColorSync Manager is present.
- [gestaltColorSync20](1472872-colorsync_manager_version_select/gestaltcolorsync20.md): A `Gestalt` response value of `gestaltColorSync20` indicates version 2.0 of the ColorSync Manager is present.
- [gestaltColorSync21](1472872-colorsync_manager_version_select/gestaltcolorsync21.md): A `Gestalt` response value of `gestaltColorSync21` indicates version 2.1 of the ColorSync Manager is present.
- [gestaltColorSync211](1472872-colorsync_manager_version_select/gestaltcolorsync211.md)
- [gestaltColorSync212](1472872-colorsync_manager_version_select/gestaltcolorsync212.md)
- [gestaltColorSync213](1472872-colorsync_manager_version_select/gestaltcolorsync213.md)
- [gestaltColorSync25](1472872-colorsync_manager_version_select/gestaltcolorsync25.md): A `Gestalt` response value of `gestaltColorSync25` indicates version 2.5 of the ColorSync Manager is present.
- [gestaltColorSync26](1472872-colorsync_manager_version_select/gestaltcolorsync26.md)
- [gestaltColorSync261](1472872-colorsync_manager_version_select/gestaltcolorsync261.md)
- [gestaltColorSync30](1472872-colorsync_manager_version_select/gestaltcolorsync30.md)
