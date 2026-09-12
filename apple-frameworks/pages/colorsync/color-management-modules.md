> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/color-management-modules](https://developer.apple.com/documentation/colorsync/color-management-modules)

# Color management modules (Swift)

**Framework:** ColorSync  
**Kind:** API Collection

Work with the Color Management Modules that perform color conversions.

<a id="Overview"></a>

## Overview

A Color Management Module (CMM) performs the calculations for a color conversion. ColorSync includes a default CMM and can load additional CMMs packaged as bundles. Most apps never work with a CMM directly, because ColorSync selects one automatically. You can also enumerate the installed CMMs, choose a preferred CMM for a transform with [kColorSyncPreferredCMM](kcolorsyncpreferredcmm.md), or implement your own by exporting the required entry-point functions from a bundle.

## Topics

### Working with CMMs

- [ColorSyncCMM](colorsynccmm.md): A reference to a Color Management Module (CMM).
- [ColorSyncCMMCreate(\_:)](colorsynccmmcreate%28__%29.md): Creates a CMM object from a CMM bundle.
- [ColorSyncCMMCopyCMMIdentifier(\_:)](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMCopyLocalizedName(\_:)](colorsynccmmcopylocalizedname%28__%29.md): Copies the localized name of a CMM.
- [ColorSyncCMMGetBundle(\_:)](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncCMMGetTypeID()](colorsynccmmgettypeid%28%29.md): Returns the `CFTypeID` for `ColorSyncCMM`s.
- [ColorSyncIterateInstalledCMMs(\_:\_:)](colorsynciterateinstalledcmms%28____%29.md): Iterates over the installed CMMs, invoking a callback for each one.

### Implementing CMM callbacks

- [ColorSyncCMMIterateCallback](colorsynccmmiteratecallback.md): A callback that the framework invokes for each installed CMM during iteration.
- [CMMApplyTransformProc](cmmapplytransformproc.md): A function a CMM provider implements to apply a color transform to image data.
- [CMMCreateTransformPropertyProc](cmmcreatetransformpropertyproc.md): A function a CMM provider implements to create a transform property for a given key.
- [CMMInitializeLinkProfileProc](cmminitializelinkprofileproc.md): A function a CMM provider implements to initialize a device-link profile.
- [CMMInitializeTransformProc](cmminitializetransformproc.md): A function a CMM provider implements to initialize a color transform.

### Registering plug-in entry points

- [kCMMApplyTransformProcName](kcmmapplytransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that applies a color transform.
- [kCMMCreateTransformPropertyProcName](kcmmcreatetransformpropertyprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that creates a transform property.
- [kCMMInitializeLinkProfileProcName](kcmminitializelinkprofileprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a device-link profile.
- [kCMMInitializeTransformProcName](kcmminitializetransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a color transform.

## See Also

### System color management

- [Color devices](color-devices.md): Manage the color profiles assigned to displays, printers, scanners, and cameras.

# Color management modules (Objective-C)

**Framework:** ColorSync  
**Kind:** API Collection

Work with the Color Management Modules that perform color conversions.

<a id="Overview"></a>

## Overview

A Color Management Module (CMM) performs the calculations for a color conversion. ColorSync includes a default CMM and can load additional CMMs packaged as bundles. Most apps never work with a CMM directly, because ColorSync selects one automatically. You can also enumerate the installed CMMs, choose a preferred CMM for a transform with [kColorSyncPreferredCMM](kcolorsyncpreferredcmm.md), or implement your own by exporting the required entry-point functions from a bundle.

## Topics

### Working with CMMs

- [ColorSyncCMMRef](colorsynccmm.md): A reference to a Color Management Module (CMM).
- [ColorSyncCMMCreate](colorsynccmmcreate%28__%29.md): Creates a CMM object from a CMM bundle.
- [ColorSyncCMMCopyCMMIdentifier](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMCopyLocalizedName](colorsynccmmcopylocalizedname%28__%29.md): Copies the localized name of a CMM.
- [ColorSyncCMMGetBundle](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncCMMGetTypeID](colorsynccmmgettypeid%28%29.md): Returns the `CFTypeID` for `ColorSyncCMM`s.
- [ColorSyncIterateInstalledCMMs](colorsynciterateinstalledcmms%28____%29.md): Iterates over the installed CMMs, invoking a callback for each one.

### Implementing CMM callbacks

- [ColorSyncCMMIterateCallback](colorsynccmmiteratecallback.md): A callback that the framework invokes for each installed CMM during iteration.
- [CMMApplyTransformProc](cmmapplytransformproc.md): A function a CMM provider implements to apply a color transform to image data.
- [CMMCreateTransformPropertyProc](cmmcreatetransformpropertyproc.md): A function a CMM provider implements to create a transform property for a given key.
- [CMMInitializeLinkProfileProc](cmminitializelinkprofileproc.md): A function a CMM provider implements to initialize a device-link profile.
- [CMMInitializeTransformProc](cmminitializetransformproc.md): A function a CMM provider implements to initialize a color transform.

### Registering plug-in entry points

- [kCMMApplyTransformProcName](kcmmapplytransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that applies a color transform.
- [kCMMCreateTransformPropertyProcName](kcmmcreatetransformpropertyprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that creates a transform property.
- [kCMMInitializeLinkProfileProcName](kcmminitializelinkprofileprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a device-link profile.
- [kCMMInitializeTransformProcName](kcmminitializetransformprocname.md): The CMM bundle info-dictionary key whose value is the name of the function that initializes a color transform.

## See Also

### System color management

- [Color devices](color-devices.md): Manage the color profiles assigned to displays, printers, scanners, and cameras.
