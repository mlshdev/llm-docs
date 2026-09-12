> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/color-devices](https://developer.apple.com/documentation/colorsync/color-devices)

# Color devices (Swift)

**Framework:** ColorSync  
**Kind:** API Collection

Manage the color profiles assigned to displays, printers, scanners, and cameras.

<a id="Overview"></a>

## Overview

ColorSync tracks the color devices attached to the system and the profiles assigned to each. Register a device, enumerate its profiles, and read or set the factory and custom profiles that describe how it reproduces color. Displays are a color device too: you can find a display’s profile from its display ID and read its gamma and transfer tables. Device profiles are themselves [ColorSyncProfile](colorsyncprofile.md) objects. See [Color profiles](color-profiles.md).

## Topics

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo(\_:\_:)](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncDeviceSetCustomProfiles(\_:\_:\_:)](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncIterateDeviceProfiles(\_:\_:)](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncProfileCreateDeviceProfile(\_:\_:\_:)](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice(\_:\_:\_:)](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice(\_:\_:)](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.

### Identifying device classes

- [kColorSyncCameraDeviceClass](kcolorsynccameradeviceclass.md): The device class for a camera device.
- [kColorSyncDeviceClass](kcolorsyncdeviceclass.md): A key whose value is one of the device-class constants below.
- [kColorSyncDisplayDeviceClass](kcolorsyncdisplaydeviceclass.md): The device class for a display device.
- [kColorSyncPrinterDeviceClass](kcolorsyncprinterdeviceclass.md): The device class for a printer device.
- [kColorSyncScannerDeviceClass](kcolorsyncscannerdeviceclass.md): The device class for a scanner device.

### Describing devices

- [kColorSyncDeviceID](kcolorsyncdeviceid.md): A key whose value is the `CFUUIDRef` identifying the device.
- [kColorSyncDeviceDescription](kcolorsyncdevicedescription.md): A key whose value is the device’s localized name in the current locale.
- [kColorSyncDeviceDescriptions](kcolorsyncdevicedescriptions.md): A key whose value is a `CFDictionary` of the device’s localized names.
- [kColorSyncDeviceModeDescription](kcolorsyncdevicemodedescription.md): A key whose value is the device mode’s localized name in the current locale.
- [kColorSyncDeviceModeDescriptions](kcolorsyncdevicemodedescriptions.md): A key whose value is a `CFDictionary` of the device mode’s localized names.
- [kColorSyncDeviceHostScope](kcolorsyncdevicehostscope.md): A key specifying the host preference scope of a device; currently only `kCFPreferencesCurrentHost` is supported.
- [kColorSyncDeviceUserScope](kcolorsyncdeviceuserscope.md): A key specifying the user preference scope of a device; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`.

### Describing device profiles

- [kColorSyncDeviceDefaultProfileID](kcolorsyncdevicedefaultprofileid.md): A key whose value is the ProfileID of the device’s default profile.
- [kColorSyncDeviceProfileID](kcolorsyncdeviceprofileid.md): A key in the device-profile-info dictionary whose value is the profile’s ProfileID.
- [kColorSyncDeviceProfileURL](kcolorsyncdeviceprofileurl.md): A key whose value is the `CFURLRef` of a device profile.
- [kColorSyncDeviceProfileIsCurrent](kcolorsyncdeviceprofileiscurrent.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the current profile.
- [kColorSyncDeviceProfileIsDefault](kcolorsyncdeviceprofileisdefault.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the default profile.
- [kColorSyncDeviceProfileIsFactory](kcolorsyncdeviceprofileisfactory.md): A key in the device-profile-info dictionary whose value indicates whether the profile is a factory profile.
- [kColorSyncProfileHostScope](kcolorsyncprofilehostscope.md): A key specifying the host preference scope of a profile; currently only `kCFPreferencesCurrentHost` is supported.
- [kColorSyncProfileUserScope](kcolorsyncprofileuserscope.md): A key specifying the user preference scope of a profile; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`.

### Accessing custom and factory profiles

- [kColorSyncCustomProfiles](kcolorsynccustomprofiles.md): A key whose value is a `CFDictionary` describing the device’s custom profiles.
- [kColorSyncFactoryProfiles](kcolorsyncfactoryprofiles.md): A key whose value is a `CFDictionary` describing the device’s factory profiles.
- [kColorSyncDoNotSubstituteProfiles](kcolorsyncdonotsubstituteprofiles.md): An option that, when set to `kCFBooleanTrue`, skips substituting a matching system-provided profile.

### Observing device notifications

- [kColorSyncDeviceProfilesNotification](kcolorsyncdeviceprofilesnotification.md): A notification that ColorSync posts when a device’s profiles change.
- [kColorSyncDeviceRegisteredNotification](kcolorsyncdeviceregisterednotification.md): A notification that ColorSync posts when a device is registered.
- [kColorSyncDeviceUnregisteredNotification](kcolorsyncdeviceunregisterednotification.md): A notification that ColorSync posts when a device is unregistered.
- [kColorSyncDisplayDeviceProfilesNotification](kcolorsyncdisplaydeviceprofilesnotification.md): A notification that ColorSync posts when a display device’s profiles change.
- [kColorSyncRegistrationUpdateWindowServer](kcolorsyncregistrationupdatewindowserver.md): A notification concerning the window server’s device registration.

### Reading display gamma and profiles

- [ColorSyncProfileCreateWithDisplayID(\_:)](colorsyncprofilecreatewithdisplayid%28__%29.md): Creates a profile for the specified display.
- [ColorSyncProfileEstimateGammaWithDisplayID(\_:\_:)](colorsyncprofileestimategammawithdisplayid%28____%29.md): Estimates the gamma of the profile for the specified display.
- [ColorSyncProfileGetDisplayTransferFormulaFromVCGT(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](colorsyncprofilegetdisplaytransferformulafromvcgt%28____________________%29.md): Converts the profile’s `vcgt` tag to formula components used by `CGSetDisplayTransferByFormula`.
- [ColorSyncProfileCreateDisplayTransferTablesFromVCGT(\_:\_:)](colorsyncprofilecreatedisplaytransfertablesfromvcgt%28____%29.md): Creates display transfer tables from the profile’s `vcgt` tag.

### Converting display identifiers

- [CGDisplayCreateUUIDFromDisplayID(\_:)](cgdisplaycreateuuidfromdisplayid%28__%29.md)
- [CGDisplayGetDisplayIDFromUUID(\_:)](cgdisplaygetdisplayidfromuuid%28__%29.md)

## See Also

### System color management

- [Color management modules](color-management-modules.md): Work with the Color Management Modules that perform color conversions.

# Color devices (Objective-C)

**Framework:** ColorSync  
**Kind:** API Collection

Manage the color profiles assigned to displays, printers, scanners, and cameras.

<a id="Overview"></a>

## Overview

ColorSync tracks the color devices attached to the system and the profiles assigned to each. Register a device, enumerate its profiles, and read or set the factory and custom profiles that describe how it reproduces color. Displays are a color device too: you can find a display’s profile from its display ID and read its gamma and transfer tables. Device profiles are themselves [ColorSyncProfileRef](colorsyncprofile.md) objects. See [Color profiles](color-profiles.md).

## Topics

### Registering and enumerating devices

- [ColorSyncDeviceCopyDeviceInfo](colorsyncdevicecopydeviceinfo%28____%29.md): Copies information about a device, resolved for the current host and current user.
- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncDeviceSetCustomProfiles](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncIterateDeviceProfiles](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncProfileCreateDeviceProfile](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.

### Identifying device classes

- [kColorSyncCameraDeviceClass](kcolorsynccameradeviceclass.md): The device class for a camera device.
- [kColorSyncDeviceClass](kcolorsyncdeviceclass.md): A key whose value is one of the device-class constants below.
- [kColorSyncDisplayDeviceClass](kcolorsyncdisplaydeviceclass.md): The device class for a display device.
- [kColorSyncPrinterDeviceClass](kcolorsyncprinterdeviceclass.md): The device class for a printer device.
- [kColorSyncScannerDeviceClass](kcolorsyncscannerdeviceclass.md): The device class for a scanner device.

### Describing devices

- [kColorSyncDeviceID](kcolorsyncdeviceid.md): A key whose value is the `CFUUIDRef` identifying the device.
- [kColorSyncDeviceDescription](kcolorsyncdevicedescription.md): A key whose value is the device’s localized name in the current locale.
- [kColorSyncDeviceDescriptions](kcolorsyncdevicedescriptions.md): A key whose value is a `CFDictionary` of the device’s localized names.
- [kColorSyncDeviceModeDescription](kcolorsyncdevicemodedescription.md): A key whose value is the device mode’s localized name in the current locale.
- [kColorSyncDeviceModeDescriptions](kcolorsyncdevicemodedescriptions.md): A key whose value is a `CFDictionary` of the device mode’s localized names.
- [kColorSyncDeviceHostScope](kcolorsyncdevicehostscope.md): A key specifying the host preference scope of a device; currently only `kCFPreferencesCurrentHost` is supported.
- [kColorSyncDeviceUserScope](kcolorsyncdeviceuserscope.md): A key specifying the user preference scope of a device; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`.

### Describing device profiles

- [kColorSyncDeviceDefaultProfileID](kcolorsyncdevicedefaultprofileid.md): A key whose value is the ProfileID of the device’s default profile.
- [kColorSyncDeviceProfileID](kcolorsyncdeviceprofileid.md): A key in the device-profile-info dictionary whose value is the profile’s ProfileID.
- [kColorSyncDeviceProfileURL](kcolorsyncdeviceprofileurl.md): A key whose value is the `CFURLRef` of a device profile.
- [kColorSyncDeviceProfileIsCurrent](kcolorsyncdeviceprofileiscurrent.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the current profile.
- [kColorSyncDeviceProfileIsDefault](kcolorsyncdeviceprofileisdefault.md): A key in the device-profile-info dictionary whose value indicates whether the profile is the default profile.
- [kColorSyncDeviceProfileIsFactory](kcolorsyncdeviceprofileisfactory.md): A key in the device-profile-info dictionary whose value indicates whether the profile is a factory profile.
- [kColorSyncProfileHostScope](kcolorsyncprofilehostscope.md): A key specifying the host preference scope of a profile; currently only `kCFPreferencesCurrentHost` is supported.
- [kColorSyncProfileUserScope](kcolorsyncprofileuserscope.md): A key specifying the user preference scope of a profile; one of `kCFPreferencesCurrentUser` or `kCFPreferencesAnyUser`.

### Accessing custom and factory profiles

- [kColorSyncCustomProfiles](kcolorsynccustomprofiles.md): A key whose value is a `CFDictionary` describing the device’s custom profiles.
- [kColorSyncFactoryProfiles](kcolorsyncfactoryprofiles.md): A key whose value is a `CFDictionary` describing the device’s factory profiles.
- [kColorSyncDoNotSubstituteProfiles](kcolorsyncdonotsubstituteprofiles.md): An option that, when set to `kCFBooleanTrue`, skips substituting a matching system-provided profile.

### Observing device notifications

- [kColorSyncDeviceProfilesNotification](kcolorsyncdeviceprofilesnotification.md): A notification that ColorSync posts when a device’s profiles change.
- [kColorSyncDeviceRegisteredNotification](kcolorsyncdeviceregisterednotification.md): A notification that ColorSync posts when a device is registered.
- [kColorSyncDeviceUnregisteredNotification](kcolorsyncdeviceunregisterednotification.md): A notification that ColorSync posts when a device is unregistered.
- [kColorSyncDisplayDeviceProfilesNotification](kcolorsyncdisplaydeviceprofilesnotification.md): A notification that ColorSync posts when a display device’s profiles change.
- [kColorSyncRegistrationUpdateWindowServer](kcolorsyncregistrationupdatewindowserver.md): A notification concerning the window server’s device registration.

### Reading display gamma and profiles

- [ColorSyncProfileCreateWithDisplayID](colorsyncprofilecreatewithdisplayid%28__%29.md): Creates a profile for the specified display.
- [ColorSyncProfileEstimateGammaWithDisplayID](colorsyncprofileestimategammawithdisplayid%28____%29.md): Estimates the gamma of the profile for the specified display.
- [ColorSyncProfileGetDisplayTransferFormulaFromVCGT](colorsyncprofilegetdisplaytransferformulafromvcgt%28____________________%29.md): Converts the profile’s `vcgt` tag to formula components used by `CGSetDisplayTransferByFormula`.
- [ColorSyncProfileCreateDisplayTransferTablesFromVCGT](colorsyncprofilecreatedisplaytransfertablesfromvcgt%28____%29.md): Creates display transfer tables from the profile’s `vcgt` tag.

### Converting display identifiers

- [CGDisplayCreateUUIDFromDisplayID](cgdisplaycreateuuidfromdisplayid%28__%29.md)
- [CGDisplayGetDisplayIDFromUUID](cgdisplaygetdisplayidfromuuid%28__%29.md)

## See Also

### System color management

- [Color management modules](color-management-modules.md): Work with the Color Management Modules that perform color conversions.
