> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncdevicecopydeviceinfo(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncdevicecopydeviceinfo(_:_:))

# ColorSyncDeviceCopyDeviceInfo(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Copies information about a device, resolved for the current host and current user.

## Declaration

```swift
func ColorSyncDeviceCopyDeviceInfo(_ deviceClass: CFString!, _ devID: CFUUID!) -> Unmanaged<CFDictionary>?
```

## Parameters

- `deviceClass`: The class of the device.
- `devID`: The identifier of the device.

<a id="return-value"></a>

## Return Value

A dictionary describing the device, or `NULL` if no matching device is registered.

<a id="discussion"></a>

## Discussion

Returns a dictionary with the following keys and values resolved for the current host and current user:

```
<<
    kColorSyncDeviceClass                   {camera, display, printer, scanner}
    kColorSyncDeviceID                      {CFUUIDRef registered with ColorSync}
    kColorSyncDeviceDescription             {localized device description}
    kColorSyncFactoryProfiles  (dictionary) <<
                                                {ProfileID}    (dictionary) <<
                                                                                kColorSyncDeviceProfileURL      {CFURLRef or kCFNull}
                                                                                kColorSyncDeviceModeDescription {localized mode description}
                                                                            >>
                                                 ...
                                                kColorSyncDeviceDefaultProfileID {ProfileID}
                                            >>
    kColorSyncCustomProfiles  (dictionary) <<
                                                {ProfileID}    {CFURLRef or kCFNull}
                                                ...
                                           <<
    kColorSyncDeviceUserScope              {kCFPreferencesAnyUser or kCFPreferencesCurrentUser}
    kColorSyncDeviceHostScope              {kCFPreferencesAnyHost or kCFPreferencesCurrentHost}
>>
```

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncDeviceSetCustomProfiles(\_:\_:\_:)](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncIterateDeviceProfiles(\_:\_:)](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncProfileCreateDeviceProfile(\_:\_:\_:)](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice(\_:\_:\_:)](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice(\_:\_:)](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.

# ColorSyncDeviceCopyDeviceInfo (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Copies information about a device, resolved for the current host and current user.

## Declaration

```objectivec
extern CFDictionaryRefColorSyncDeviceCopyDeviceInfo(CFStringRef deviceClass, CFUUIDRef devID);
```

## Parameters

- `deviceClass`: The class of the device.
- `devID`: The identifier of the device.

<a id="return-value"></a>

## Return Value

A dictionary describing the device, or `NULL` if no matching device is registered.

<a id="discussion"></a>

## Discussion

Returns a dictionary with the following keys and values resolved for the current host and current user:

```
<<
    kColorSyncDeviceClass                   {camera, display, printer, scanner}
    kColorSyncDeviceID                      {CFUUIDRef registered with ColorSync}
    kColorSyncDeviceDescription             {localized device description}
    kColorSyncFactoryProfiles  (dictionary) <<
                                                {ProfileID}    (dictionary) <<
                                                                                kColorSyncDeviceProfileURL      {CFURLRef or kCFNull}
                                                                                kColorSyncDeviceModeDescription {localized mode description}
                                                                            >>
                                                 ...
                                                kColorSyncDeviceDefaultProfileID {ProfileID}
                                            >>
    kColorSyncCustomProfiles  (dictionary) <<
                                                {ProfileID}    {CFURLRef or kCFNull}
                                                ...
                                           <<
    kColorSyncDeviceUserScope              {kCFPreferencesAnyUser or kCFPreferencesCurrentUser}
    kColorSyncDeviceHostScope              {kCFPreferencesAnyHost or kCFPreferencesCurrentHost}
>>
```

## See Also

### Registering and enumerating devices

- [ColorSyncDeviceProfileIterateCallback](colorsyncdeviceprofileiteratecallback.md): A callback that ColorSync invokes for each device profile during iteration.
- [ColorSyncDeviceSetCustomProfiles](colorsyncdevicesetcustomprofiles%28______%29.md): Sets custom profiles for a device in lieu of its factory profiles.
- [ColorSyncIterateDeviceProfiles](colorsynciteratedeviceprofiles%28____%29.md): Iterates over the profiles registered for all devices, invoking a callback for each.
- [ColorSyncProfileCreateDeviceProfile](colorsyncprofilecreatedeviceprofile%28______%29.md): Creates a profile for a device registered with ColorSync.
- [ColorSyncRegisterDevice](colorsyncregisterdevice%28______%29.md): Registers a device of the given class with ColorSync.
- [ColorSyncUnregisterDevice](colorsyncunregisterdevice%28____%29.md): Unregisters a device of the given class and identifier.
