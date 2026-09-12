> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/characteristic-types](https://developer.apple.com/documentation/homekit/characteristic-types)

# Characteristic types (Swift)

**Framework:** HomeKit  
**Kind:** API Collection

The characteristic types supported by HomeKit-based accessories.

<a id="overview"></a>

## Overview

A characteristic’s [characteristicType](hmcharacteristic/characteristictype.md) is a string constant—typically containing one of the values listed below—that tells you what the characteristic’s [value](hmcharacteristic/value.md) represents and how to interpret it. Manufacturers can also create custom types, not listed here.

For some characteristic types, HomeKit defines an enumeration of possible values that the corresponding characteristic can take. For example, a characteristic with type [HMCharacteristicTypeTemperatureUnits](hmcharacteristictypetemperatureunits.md) can only have values—corresponding to degrees Fahrenheit or degrees Celsius—from the [HMCharacteristicValueTemperatureUnit](hmcharacteristicvaluetemperatureunit.md) enumeration.

For other characteristic types, the corresponding value might be a plain number, a string, or Boolean, or a blob of data with encoding specific to that type.

## Topics

### Light

- [HMCharacteristicTypeCurrentLightLevel](hmcharacteristictypecurrentlightlevel.md): The current light level.
- [HMCharacteristicTypeHue](hmcharacteristictypehue.md): The hue of the color used by a light.
- [HMCharacteristicTypeBrightness](hmcharacteristictypebrightness.md): The brightness of a light.
- [HMCharacteristicTypeSaturation](hmcharacteristictypesaturation.md): The saturation of the color used by a light.
- [HMCharacteristicTypeColorTemperature](hmcharacteristictypecolortemperature.md): The color temperature of a light.

### Power and switches

- [HMCharacteristicTypeBatteryLevel](hmcharacteristictypebatterylevel.md): The battery level of the accessory.
- [HMCharacteristicTypeChargingState](hmcharacteristictypechargingstate.md): The charging state of a battery.
- [HMCharacteristicTypeContactState](hmcharacteristictypecontactstate.md): The state of a contact sensor.
- [HMCharacteristicTypeOutletInUse](hmcharacteristictypeoutletinuse.md): The state of an outlet.
- [HMCharacteristicTypePowerState](hmcharacteristictypepowerstate.md): The power state of the accessory.
- [HMCharacteristicTypeStatusLowBattery](hmcharacteristictypestatuslowbattery.md): A low battery indicator.
- [HMCharacteristicTypeOutputState](hmcharacteristictypeoutputstate.md): The output state of a programmable switch.
- [HMCharacteristicTypeInputEvent](hmcharacteristictypeinputevent.md): The input event of a programmable switch.
- [HMCharacteristicTypePowerModeSelection](hmcharacteristictypepowermodeselection.md): The selected power mode.

### Temperature

- [HMCharacteristicTypeCurrentTemperature](hmcharacteristictypecurrenttemperature.md): The current temperature measured by the accessory.
- [HMCharacteristicTypeTargetTemperature](hmcharacteristictypetargettemperature.md): The target temperature for the accessory to achieve.
- [HMCharacteristicTypeTemperatureUnits](hmcharacteristictypetemperatureunits.md): The units of temperature currently active on the accessory.
- [HMCharacteristicTypeTargetHeatingCooling](hmcharacteristictypetargetheatingcooling.md): The target heating or cooling mode for a thermostat.
- [HMCharacteristicTypeCurrentHeatingCooling](hmcharacteristictypecurrentheatingcooling.md): The current heating or cooling mode for a thermostat.
- [HMCharacteristicTypeTargetHeaterCoolerState](hmcharacteristictypetargetheatercoolerstate.md): The target state for a device that heats or cools, like an oven or a refrigerator.
- [HMCharacteristicTypeCurrentHeaterCoolerState](hmcharacteristictypecurrentheatercoolerstate.md): The current state for a device that heats or cools, like an oven or a refrigerator.
- [HMCharacteristicTypeCoolingThreshold](hmcharacteristictypecoolingthreshold.md): The temperature above which cooling will be active.
- [HMCharacteristicTypeHeatingThreshold](hmcharacteristictypeheatingthreshold.md): The temperature below which heating will be active.

### Humidity

- [HMCharacteristicTypeCurrentRelativeHumidity](hmcharacteristictypecurrentrelativehumidity.md): The current relative humidity measured by the accessory.
- [HMCharacteristicTypeTargetRelativeHumidity](hmcharacteristictypetargetrelativehumidity.md): The target relative humidity for the accessory to achieve.
- [HMCharacteristicTypeCurrentHumidifierDehumidifierState](hmcharacteristictypecurrenthumidifierdehumidifierstate.md): The current state of a humidifier or dehumidifier accessory.
- [HMCharacteristicTypeTargetHumidifierDehumidifierState](hmcharacteristictypetargethumidifierdehumidifierstate.md): The state that a humidifier or dehumidifier accessory should try to achieve.
- [HMCharacteristicTypeHumidifierThreshold](hmcharacteristictypehumidifierthreshold.md): The humidity below which a humidifier should begin to work.
- [HMCharacteristicTypeDehumidifierThreshold](hmcharacteristictypedehumidifierthreshold.md): The humidity above which a dehumidifier should begin to work.

### Air quality and smoke detection

- [HMCharacteristicTypeAirQuality](hmcharacteristictypeairquality.md): The air quality.
- [HMCharacteristicTypeAirParticulateDensity](hmcharacteristictypeairparticulatedensity.md): The density of air-particulate matter.
- [HMCharacteristicTypeAirParticulateSize](hmcharacteristictypeairparticulatesize.md): The size of the air-particulate matter.
- [HMCharacteristicTypeSmokeDetected](hmcharacteristictypesmokedetected.md): A smoke detection indicator.
- [HMCharacteristicTypeCarbonDioxideDetected](hmcharacteristictypecarbondioxidedetected.md): An indicator of abnormally high levels of carbon dioxide.
- [HMCharacteristicTypeCarbonDioxideLevel](hmcharacteristictypecarbondioxidelevel.md): The measured carbon dioxide level.
- [HMCharacteristicTypeCarbonDioxidePeakLevel](hmcharacteristictypecarbondioxidepeaklevel.md): The highest recorded level of carbon dioxide.
- [HMCharacteristicTypeCarbonMonoxideDetected](hmcharacteristictypecarbonmonoxidedetected.md): An indicator of abnormally high levels of carbon monoxide.
- [HMCharacteristicTypeCarbonMonoxideLevel](hmcharacteristictypecarbonmonoxidelevel.md): The measured carbon monoxide level.
- [HMCharacteristicTypeCarbonMonoxidePeakLevel](hmcharacteristictypecarbonmonoxidepeaklevel.md): The highest recorded level of carbon monoxide.
- [HMCharacteristicTypeNitrogenDioxideDensity](hmcharacteristictypenitrogendioxidedensity.md): The measured density of nitrogen dioxide.
- [HMCharacteristicTypeOzoneDensity](hmcharacteristictypeozonedensity.md): The measured density of ozone.
- [HMCharacteristicTypePM10Density](hmcharacteristictypepm10density.md): The measured density of air-particulate matter of size 10 micrograms.
- [HMCharacteristicTypePM2_5Density](hmcharacteristictypepm2_5density.md): The measured density of air-particulate matter of size 2.5 micrograms.
- [HMCharacteristicTypeSulphurDioxideDensity](hmcharacteristictypesulphurdioxidedensity.md): The measured density of sulphur dioxide.
- [HMCharacteristicTypeVolatileOrganicCompoundDensity](hmcharacteristictypevolatileorganiccompounddensity.md): The measured density of volatile organic compounds.

### Fans

- [HMCharacteristicTypeCurrentFanState](hmcharacteristictypecurrentfanstate.md): The current state of a fan.
- [HMCharacteristicTypeTargetFanState](hmcharacteristictypetargetfanstate.md): The target state of a fan.
- [HMCharacteristicTypeRotationDirection](hmcharacteristictyperotationdirection.md): The rotation direction of an accessory like a fan.
- [HMCharacteristicTypeRotationSpeed](hmcharacteristictyperotationspeed.md): The rotation speed of an accessory like a fan.
- [HMCharacteristicTypeSwingMode](hmcharacteristictypeswingmode.md): An indicator of whether a fan swings back and forth during operation.

### Purifiers and filters

- [HMCharacteristicTypeCurrentAirPurifierState](hmcharacteristictypecurrentairpurifierstate.md): The current air purifier state.
- [HMCharacteristicTypeTargetAirPurifierState](hmcharacteristictypetargetairpurifierstate.md): The target air purifier state.
- [HMCharacteristicTypeFilterLifeLevel](hmcharacteristictypefilterlifelevel.md): The amount of useful life remaining in a filter.
- [HMCharacteristicTypeFilterChangeIndication](hmcharacteristictypefilterchangeindication.md): A filter’s change indicator.
- [HMCharacteristicTypeFilterResetChangeIndication](hmcharacteristictypefilterresetchangeindication.md): A reset control for a filter change notification.

### Water

- [HMCharacteristicTypeWaterLevel](hmcharacteristictypewaterlevel.md): The water level measured by an accessory.
- [HMCharacteristicTypeValveType](hmcharacteristictypevalvetype.md): The type of automated valve that controls fluid flow.
- [HMCharacteristicTypeLeakDetected](hmcharacteristictypeleakdetected.md): A leak detection indicator.

### Doors and windows

- [HMCharacteristicTypeCurrentDoorState](hmcharacteristictypecurrentdoorstate.md): The current door state.
- [HMCharacteristicTypeTargetDoorState](hmcharacteristictypetargetdoorstate.md): The target door state.
- [HMCharacteristicTypeCurrentPosition](hmcharacteristictypecurrentposition.md): The current position of a door, window, awning, or window covering.
- [HMCharacteristicTypeTargetPosition](hmcharacteristictypetargetposition.md): The target position of a door, window, awning, or window covering.
- [HMCharacteristicTypePositionState](hmcharacteristictypepositionstate.md): The position of an accessory like a door, window, awning, or window covering.
- [HMCharacteristicTypeStatusJammed](hmcharacteristictypestatusjammed.md): An indicator of whether an accessory is jammed.
- [HMCharacteristicTypeHoldPosition](hmcharacteristictypeholdposition.md): A control for holding the position of an accessory like a door or window.
- [HMCharacteristicTypeSlatType](hmcharacteristictypeslattype.md): The type of slat on an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentSlatState](hmcharacteristictypecurrentslatstate.md): The current state of slats on an accessory like a window or a fan.

### Tilting mechanisms

- [HMCharacteristicTypeCurrentHorizontalTilt](hmcharacteristictypecurrenthorizontaltilt.md): The current tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetHorizontalTilt](hmcharacteristictypetargethorizontaltilt.md): The target tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentVerticalTilt](hmcharacteristictypecurrentverticaltilt.md): The current tilt angle of a vertical slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetVerticalTilt](hmcharacteristictypetargetverticaltilt.md): The target tilt angle of a vertical slat for an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentTilt](hmcharacteristictypecurrenttilt.md): The current tilt angle of a slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetTilt](hmcharacteristictypetargettilt.md): The target tilt angle of a slat for an accessory like a window or a fan.

### Locks and openers

- [HMCharacteristicTypeLockManagementAutoSecureTimeout](hmcharacteristictypelockmanagementautosecuretimeout.md): The automatic timeout for a lockable accessory that supports automatic lockout.
- [HMCharacteristicTypeLockManagementControlPoint](hmcharacteristictypelockmanagementcontrolpoint.md): A control that accepts vendor-specific actions for lock management.
- [HMCharacteristicTypeLockMechanismLastKnownAction](hmcharacteristictypelockmechanismlastknownaction.md): The last known action of the locking mechanism.
- [HMCharacteristicTypeLockPhysicalControls](hmcharacteristictypelockphysicalcontrols.md): The lock’s physical control state.
- [HMCharacteristicTypeMotionDetected](hmcharacteristictypemotiondetected.md): An indicator of whether the accessory has detected motion.
- [HMCharacteristicTypeCurrentLockMechanismState](hmcharacteristictypecurrentlockmechanismstate.md): The current state of the locking mechanism.
- [HMCharacteristicTypeTargetLockMechanismState](hmcharacteristictypetargetlockmechanismstate.md): The target state for the locking mechanism.
- [HMCharacteristicTypeRemoteKey](hmcharacteristictyperemotekey.md): The accessory remote control key.

### Safety and security

- [HMCharacteristicTypeCurrentSecuritySystemState](hmcharacteristictypecurrentsecuritysystemstate.md): The current security system state.
- [HMCharacteristicTypeTargetSecuritySystemState](hmcharacteristictypetargetsecuritysystemstate.md): The target security system state.
- [HMCharacteristicTypeObstructionDetected](hmcharacteristictypeobstructiondetected.md): An indicator of whether an obstruction is detected, as when something prevents a garage door from closing.
- [HMCharacteristicTypeOccupancyDetected](hmcharacteristictypeoccupancydetected.md): An indicator of whether the home is occupied.
- [HMCharacteristicTypeSecuritySystemAlarmType](hmcharacteristictypesecuritysystemalarmtype.md): The alarm trigger state.
- [HMCharacteristicPropertyRequiresAuthorizationData](hmcharacteristicpropertyrequiresauthorizationdata.md): A variable that specifies that the characteristic requires authorization data to write.

### Audio and video

- [HMCharacteristicTypeSupportedRTPConfiguration](hmcharacteristictypesupportedrtpconfiguration.md): The supported Real-time Transport Protocol (RTP) configuration.
- [HMCharacteristicTypeDigitalZoom](hmcharacteristictypedigitalzoom.md): The digital zoom of a video Real-time Transport Protocol (RTP) service.
- [HMCharacteristicTypeOpticalZoom](hmcharacteristictypeopticalzoom.md): The optical zoom setting of the camera sourcing a video Real-time Transport Protocol (RTP) service.
- [HMCharacteristicTypeImageMirroring](hmcharacteristictypeimagemirroring.md): An indicator of whether the image should be flipped about the vertical axis.
- [HMCharacteristicTypeImageRotation](hmcharacteristictypeimagerotation.md): The angle of rotation for an image.
- [HMCharacteristicTypeNightVision](hmcharacteristictypenightvision.md): An indicator of whether night vision is enabled on a video Real-time Transport Protocol (RTP) service.
- [HMCharacteristicTypeStreamingStatus](hmcharacteristictypestreamingstatus.md): A description of the status of the Real-time Transport Protocol (RTP) stream management service.
- [HMCharacteristicTypeSupportedVideoStreamConfiguration](hmcharacteristictypesupportedvideostreamconfiguration.md): The video stream’s configuration.
- [HMCharacteristicTypeSupportedAudioStreamConfiguration](hmcharacteristictypesupportedaudiostreamconfiguration.md): The audio stream’s configuration.
- [HMCharacteristicTypeSelectedStreamConfiguration](hmcharacteristictypeselectedstreamconfiguration.md): The selected stream’s configuration.
- [HMCharacteristicTypeSetupStreamEndpoint](hmcharacteristictypesetupstreamendpoint.md): The stream’s endpoint configuration.
- [HMCharacteristicTypeAudioFeedback](hmcharacteristictypeaudiofeedback.md): An indicator of whether audio feedback, like a beep or other external sound mechanism, is enabled.
- [HMCharacteristicTypeVolume](hmcharacteristictypevolume.md): The input or output volume of an audio device.
- [HMCharacteristicTypeMute](hmcharacteristictypemute.md): A control for muting audio.
- [HMCharacteristicTypeVolumeSelector](hmcharacteristictypevolumeselector.md): The mechanism to increment or decrement the volume by the default step value.
- [HMCharacteristicTypeVolumeControlType](hmcharacteristictypevolumecontroltype.md): The volume control capabilities of an accessory.
- [HMCharacteristicTypeClosedCaptions](hmcharacteristictypeclosedcaptions.md): An indictator of whether closed captions are enabled or disabled.
- [HMCharacteristicTypePictureMode](hmcharacteristictypepicturemode.md): The selected picture mode.

### General state

- [HMCharacteristicTypeActive](hmcharacteristictypeactive.md): The current status of an accessory.
- [HMCharacteristicTypeStatusTampered](hmcharacteristictypestatustampered.md): An indicator of whether an accessory has been tampered with.
- [HMCharacteristicTypeStatusFault](hmcharacteristictypestatusfault.md): An indicator of whether the accessory has experienced a fault.
- [HMCharacteristicTypeStatusActive](hmcharacteristictypestatusactive.md): An indicator of whether the service is working.
- [HMCharacteristicTypeInUse](hmcharacteristictypeinuse.md): The current usage state of an accessory.
- [HMCharacteristicTypeIsConfigured](hmcharacteristictypeisconfigured.md): The configuration state of an accessory.
- [HMCharacteristicTypeRemainingDuration](hmcharacteristictyperemainingduration.md): The number of seconds remaining for the activity being carried out by the accessory.
- [HMCharacteristicTypeSetDuration](hmcharacteristictypesetduration.md): The duration of the activity being carried out by the accessory.
- [HMCharacteristicTypeProgramMode](hmcharacteristictypeprogrammode.md): The current mode of the accessory’s scheduled programs.
- [HMCharacteristicTypeWiFiSatelliteStatus](hmcharacteristictypewifisatellitestatus.md): The network status of the WiFi satellite accessory.
- [HMCharacteristicTypeWANStatusList](hmcharacteristictypewanstatuslist.md): The WAN status list of an accessory.
- [HMCharacteristicTypeTargetMediaState](hmcharacteristictypetargetmediastate.md): The target media state.
- [HMCharacteristicTypeRouterStatus](hmcharacteristictyperouterstatus.md): The current status of the router.
- [HMCharacteristicTypeCurrentMediaState](hmcharacteristictypecurrentmediastate.md): The current state of the media.
- [HMCharacteristicTypeCurrentVisibilityState](hmcharacteristictypecurrentvisibilitystate.md): The current visibility state for a service.
- [HMCharacteristicTypeTargetVisibilityState](hmcharacteristictypetargetvisibilitystate.md): The target visibility state for a service.
- [HMCharacteristicPropertySupportsEventNotification](hmcharacteristicpropertysupportseventnotification-2f0ml.md): The characteristic supports event notifications.

### Accessory identification

- [HMCharacteristicTypeName](hmcharacteristictypename.md): The name of the accessory.
- [HMCharacteristicTypeIdentify](hmcharacteristictypeidentify.md): A control you can use to ask the accessory to identify itself.
- [HMCharacteristicTypeVersion](hmcharacteristictypeversion.md): The version of the accessory.
- [HMCharacteristicTypeLogs](hmcharacteristictypelogs.md): Log data for the accessory.
- [HMCharacteristicTypeAdminOnlyAccess](hmcharacteristictypeadminonlyaccess.md): An indicator of whether the accessory accepts only administrator access.
- [HMCharacteristicTypeHardwareVersion](hmcharacteristictypehardwareversion.md): The hardware version of the accessory.
- [HMCharacteristicTypeSoftwareVersion](hmcharacteristictypesoftwareversion.md): The software version of the accessory.
- [HMCharacteristicTypeLabelIndex](hmcharacteristictypelabelindex.md): The index of the label for the service on an accessory with multiple instances of the same service.
- [HMCharacteristicTypeLabelNamespace](hmcharacteristictypelabelnamespace.md): The naming schema used to label the services on an accessory with multiple services of the same type.
- [HMCharacteristicTypeActiveIdentifier](hmcharacteristictypeactiveidentifier.md): An index that maps to the current active Input Source service.
- [HMCharacteristicTypeIdentifier](hmcharacteristictypeidentifier.md): The identifier for an accessory.
- [HMCharacteristicTypeInputDeviceType](hmcharacteristictypeinputdevicetype.md): The accessory input device type.
- [HMCharacteristicTypeInputSourceType](hmcharacteristictypeinputsourcetype.md): The accessory input source type.
- [HMCharacteristicTypeConfiguredName](hmcharacteristictypeconfiguredname.md): A `UTF‑8` encoded user visible name on an accessory.

### Deprecated characteristic types

- [HMCharacteristicTypeManufacturer](hmcharacteristictypemanufacturer.md): Deprecated. The manufacturer of the accessory.
- [HMCharacteristicTypeModel](hmcharacteristictypemodel.md): Deprecated. The model of the accessory.
- [HMCharacteristicTypeFirmwareVersion](hmcharacteristictypefirmwareversion.md): Deprecated. The firmware version of the accessory.
- [HMCharacteristicTypeSerialNumber](hmcharacteristictypeserialnumber.md): Deprecated. The serial number of the accessory.

## See Also

### Determining what a characteristic controls

- [characteristicType](hmcharacteristic/characteristictype.md): The type of the characteristic.

# Characteristic types (Objective-C)

**Framework:** HomeKit  
**Kind:** API Collection

The characteristic types supported by HomeKit-based accessories.

<a id="overview"></a>

## Overview

A characteristic’s [characteristicType](hmcharacteristic/characteristictype.md) is a string constant—typically containing one of the values listed below—that tells you what the characteristic’s [value](hmcharacteristic/value.md) represents and how to interpret it. Manufacturers can also create custom types, not listed here.

For some characteristic types, HomeKit defines an enumeration of possible values that the corresponding characteristic can take. For example, a characteristic with type [HMCharacteristicTypeTemperatureUnits](hmcharacteristictypetemperatureunits.md) can only have values—corresponding to degrees Fahrenheit or degrees Celsius—from the [HMCharacteristicValueTemperatureUnit](hmcharacteristicvaluetemperatureunit.md) enumeration.

For other characteristic types, the corresponding value might be a plain number, a string, or Boolean, or a blob of data with encoding specific to that type.

## Topics

### Light

- [HMCharacteristicTypeCurrentLightLevel](hmcharacteristictypecurrentlightlevel.md): The current light level.
- [HMCharacteristicTypeHue](hmcharacteristictypehue.md): The hue of the color used by a light.
- [HMCharacteristicTypeBrightness](hmcharacteristictypebrightness.md): The brightness of a light.
- [HMCharacteristicTypeSaturation](hmcharacteristictypesaturation.md): The saturation of the color used by a light.
- [HMCharacteristicTypeColorTemperature](hmcharacteristictypecolortemperature.md): The color temperature of a light.

### Power and switches

- [HMCharacteristicTypeBatteryLevel](hmcharacteristictypebatterylevel.md): The battery level of the accessory.
- [HMCharacteristicTypeChargingState](hmcharacteristictypechargingstate.md): The charging state of a battery.
- [HMCharacteristicTypeContactState](hmcharacteristictypecontactstate.md): The state of a contact sensor.
- [HMCharacteristicTypeOutletInUse](hmcharacteristictypeoutletinuse.md): The state of an outlet.
- [HMCharacteristicTypePowerState](hmcharacteristictypepowerstate.md): The power state of the accessory.
- [HMCharacteristicTypeStatusLowBattery](hmcharacteristictypestatuslowbattery.md): A low battery indicator.
- [HMCharacteristicTypeOutputState](hmcharacteristictypeoutputstate.md): The output state of a programmable switch.
- [HMCharacteristicTypeInputEvent](hmcharacteristictypeinputevent.md): The input event of a programmable switch.
- [HMCharacteristicTypePowerModeSelection](hmcharacteristictypepowermodeselection.md): The selected power mode.

### Temperature

- [HMCharacteristicTypeCurrentTemperature](hmcharacteristictypecurrenttemperature.md): The current temperature measured by the accessory.
- [HMCharacteristicTypeTargetTemperature](hmcharacteristictypetargettemperature.md): The target temperature for the accessory to achieve.
- [HMCharacteristicTypeTemperatureUnits](hmcharacteristictypetemperatureunits.md): The units of temperature currently active on the accessory.
- [HMCharacteristicTypeTargetHeatingCooling](hmcharacteristictypetargetheatingcooling.md): The target heating or cooling mode for a thermostat.
- [HMCharacteristicTypeCurrentHeatingCooling](hmcharacteristictypecurrentheatingcooling.md): The current heating or cooling mode for a thermostat.
- [HMCharacteristicTypeTargetHeaterCoolerState](hmcharacteristictypetargetheatercoolerstate.md): The target state for a device that heats or cools, like an oven or a refrigerator.
- [HMCharacteristicTypeCurrentHeaterCoolerState](hmcharacteristictypecurrentheatercoolerstate.md): The current state for a device that heats or cools, like an oven or a refrigerator.
- [HMCharacteristicTypeCoolingThreshold](hmcharacteristictypecoolingthreshold.md): The temperature above which cooling will be active.
- [HMCharacteristicTypeHeatingThreshold](hmcharacteristictypeheatingthreshold.md): The temperature below which heating will be active.

### Humidity

- [HMCharacteristicTypeCurrentRelativeHumidity](hmcharacteristictypecurrentrelativehumidity.md): The current relative humidity measured by the accessory.
- [HMCharacteristicTypeTargetRelativeHumidity](hmcharacteristictypetargetrelativehumidity.md): The target relative humidity for the accessory to achieve.
- [HMCharacteristicTypeCurrentHumidifierDehumidifierState](hmcharacteristictypecurrenthumidifierdehumidifierstate.md): The current state of a humidifier or dehumidifier accessory.
- [HMCharacteristicTypeTargetHumidifierDehumidifierState](hmcharacteristictypetargethumidifierdehumidifierstate.md): The state that a humidifier or dehumidifier accessory should try to achieve.
- [HMCharacteristicTypeHumidifierThreshold](hmcharacteristictypehumidifierthreshold.md): The humidity below which a humidifier should begin to work.
- [HMCharacteristicTypeDehumidifierThreshold](hmcharacteristictypedehumidifierthreshold.md): The humidity above which a dehumidifier should begin to work.

### Air quality and smoke detection

- [HMCharacteristicTypeAirQuality](hmcharacteristictypeairquality.md): The air quality.
- [HMCharacteristicTypeAirParticulateDensity](hmcharacteristictypeairparticulatedensity.md): The density of air-particulate matter.
- [HMCharacteristicTypeAirParticulateSize](hmcharacteristictypeairparticulatesize.md): The size of the air-particulate matter.
- [HMCharacteristicTypeSmokeDetected](hmcharacteristictypesmokedetected.md): A smoke detection indicator.
- [HMCharacteristicTypeCarbonDioxideDetected](hmcharacteristictypecarbondioxidedetected.md): An indicator of abnormally high levels of carbon dioxide.
- [HMCharacteristicTypeCarbonDioxideLevel](hmcharacteristictypecarbondioxidelevel.md): The measured carbon dioxide level.
- [HMCharacteristicTypeCarbonDioxidePeakLevel](hmcharacteristictypecarbondioxidepeaklevel.md): The highest recorded level of carbon dioxide.
- [HMCharacteristicTypeCarbonMonoxideDetected](hmcharacteristictypecarbonmonoxidedetected.md): An indicator of abnormally high levels of carbon monoxide.
- [HMCharacteristicTypeCarbonMonoxideLevel](hmcharacteristictypecarbonmonoxidelevel.md): The measured carbon monoxide level.
- [HMCharacteristicTypeCarbonMonoxidePeakLevel](hmcharacteristictypecarbonmonoxidepeaklevel.md): The highest recorded level of carbon monoxide.
- [HMCharacteristicTypeNitrogenDioxideDensity](hmcharacteristictypenitrogendioxidedensity.md): The measured density of nitrogen dioxide.
- [HMCharacteristicTypeOzoneDensity](hmcharacteristictypeozonedensity.md): The measured density of ozone.
- [HMCharacteristicTypePM10Density](hmcharacteristictypepm10density.md): The measured density of air-particulate matter of size 10 micrograms.
- [HMCharacteristicTypePM2_5Density](hmcharacteristictypepm2_5density.md): The measured density of air-particulate matter of size 2.5 micrograms.
- [HMCharacteristicTypeSulphurDioxideDensity](hmcharacteristictypesulphurdioxidedensity.md): The measured density of sulphur dioxide.
- [HMCharacteristicTypeVolatileOrganicCompoundDensity](hmcharacteristictypevolatileorganiccompounddensity.md): The measured density of volatile organic compounds.

### Fans

- [HMCharacteristicTypeCurrentFanState](hmcharacteristictypecurrentfanstate.md): The current state of a fan.
- [HMCharacteristicTypeTargetFanState](hmcharacteristictypetargetfanstate.md): The target state of a fan.
- [HMCharacteristicTypeRotationDirection](hmcharacteristictyperotationdirection.md): The rotation direction of an accessory like a fan.
- [HMCharacteristicTypeRotationSpeed](hmcharacteristictyperotationspeed.md): The rotation speed of an accessory like a fan.
- [HMCharacteristicTypeSwingMode](hmcharacteristictypeswingmode.md): An indicator of whether a fan swings back and forth during operation.

### Purifiers and filters

- [HMCharacteristicTypeCurrentAirPurifierState](hmcharacteristictypecurrentairpurifierstate.md): The current air purifier state.
- [HMCharacteristicTypeTargetAirPurifierState](hmcharacteristictypetargetairpurifierstate.md): The target air purifier state.
- [HMCharacteristicTypeFilterLifeLevel](hmcharacteristictypefilterlifelevel.md): The amount of useful life remaining in a filter.
- [HMCharacteristicTypeFilterChangeIndication](hmcharacteristictypefilterchangeindication.md): A filter’s change indicator.
- [HMCharacteristicTypeFilterResetChangeIndication](hmcharacteristictypefilterresetchangeindication.md): A reset control for a filter change notification.

### Water

- [HMCharacteristicTypeWaterLevel](hmcharacteristictypewaterlevel.md): The water level measured by an accessory.
- [HMCharacteristicTypeValveType](hmcharacteristictypevalvetype.md): The type of automated valve that controls fluid flow.
- [HMCharacteristicTypeLeakDetected](hmcharacteristictypeleakdetected.md): A leak detection indicator.

### Doors and windows

- [HMCharacteristicTypeCurrentDoorState](hmcharacteristictypecurrentdoorstate.md): The current door state.
- [HMCharacteristicTypeTargetDoorState](hmcharacteristictypetargetdoorstate.md): The target door state.
- [HMCharacteristicTypeCurrentPosition](hmcharacteristictypecurrentposition.md): The current position of a door, window, awning, or window covering.
- [HMCharacteristicTypeTargetPosition](hmcharacteristictypetargetposition.md): The target position of a door, window, awning, or window covering.
- [HMCharacteristicTypePositionState](hmcharacteristictypepositionstate.md): The position of an accessory like a door, window, awning, or window covering.
- [HMCharacteristicTypeStatusJammed](hmcharacteristictypestatusjammed.md): An indicator of whether an accessory is jammed.
- [HMCharacteristicTypeHoldPosition](hmcharacteristictypeholdposition.md): A control for holding the position of an accessory like a door or window.
- [HMCharacteristicTypeSlatType](hmcharacteristictypeslattype.md): The type of slat on an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentSlatState](hmcharacteristictypecurrentslatstate.md): The current state of slats on an accessory like a window or a fan.

### Tilting mechanisms

- [HMCharacteristicTypeCurrentHorizontalTilt](hmcharacteristictypecurrenthorizontaltilt.md): The current tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetHorizontalTilt](hmcharacteristictypetargethorizontaltilt.md): The target tilt angle of a horizontal slat for an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentVerticalTilt](hmcharacteristictypecurrentverticaltilt.md): The current tilt angle of a vertical slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetVerticalTilt](hmcharacteristictypetargetverticaltilt.md): The target tilt angle of a vertical slat for an accessory like a window or a fan.
- [HMCharacteristicTypeCurrentTilt](hmcharacteristictypecurrenttilt.md): The current tilt angle of a slat for an accessory like a window or a fan.
- [HMCharacteristicTypeTargetTilt](hmcharacteristictypetargettilt.md): The target tilt angle of a slat for an accessory like a window or a fan.

### Locks and openers

- [HMCharacteristicTypeLockManagementAutoSecureTimeout](hmcharacteristictypelockmanagementautosecuretimeout.md): The automatic timeout for a lockable accessory that supports automatic lockout.
- [HMCharacteristicTypeLockManagementControlPoint](hmcharacteristictypelockmanagementcontrolpoint.md): A control that accepts vendor-specific actions for lock management.
- [HMCharacteristicTypeLockMechanismLastKnownAction](hmcharacteristictypelockmechanismlastknownaction.md): The last known action of the locking mechanism.
- [HMCharacteristicTypeLockPhysicalControls](hmcharacteristictypelockphysicalcontrols.md): The lock’s physical control state.
- [HMCharacteristicTypeMotionDetected](hmcharacteristictypemotiondetected.md): An indicator of whether the accessory has detected motion.
- [HMCharacteristicTypeCurrentLockMechanismState](hmcharacteristictypecurrentlockmechanismstate.md): The current state of the locking mechanism.
- [HMCharacteristicTypeTargetLockMechanismState](hmcharacteristictypetargetlockmechanismstate.md): The target state for the locking mechanism.
- [HMCharacteristicTypeRemoteKey](hmcharacteristictyperemotekey.md): The accessory remote control key.

### Safety and security

- [HMCharacteristicTypeCurrentSecuritySystemState](hmcharacteristictypecurrentsecuritysystemstate.md): The current security system state.
- [HMCharacteristicTypeTargetSecuritySystemState](hmcharacteristictypetargetsecuritysystemstate.md): The target security system state.
- [HMCharacteristicTypeObstructionDetected](hmcharacteristictypeobstructiondetected.md): An indicator of whether an obstruction is detected, as when something prevents a garage door from closing.
- [HMCharacteristicTypeOccupancyDetected](hmcharacteristictypeoccupancydetected.md): An indicator of whether the home is occupied.
- [HMCharacteristicTypeSecuritySystemAlarmType](hmcharacteristictypesecuritysystemalarmtype.md): The alarm trigger state.
- [HMCharacteristicPropertyRequiresAuthorizationData](hmcharacteristicpropertyrequiresauthorizationdata.md): A variable that specifies that the characteristic requires authorization data to write.

### Audio and video

- [HMCharacteristicTypeSupportedRTPConfiguration](hmcharacteristictypesupportedrtpconfiguration.md): The supported Real-time Transport Protocol (RTP) configuration.
- [HMCharacteristicTypeDigitalZoom](hmcharacteristictypedigitalzoom.md): The digital zoom of a video Real-time Transport Protocol (RTP) service.
- [HMCharacteristicTypeOpticalZoom](hmcharacteristictypeopticalzoom.md): The optical zoom setting of the camera sourcing a video Real-time Transport Protocol (RTP) service.
- [HMCharacteristicTypeImageMirroring](hmcharacteristictypeimagemirroring.md): An indicator of whether the image should be flipped about the vertical axis.
- [HMCharacteristicTypeImageRotation](hmcharacteristictypeimagerotation.md): The angle of rotation for an image.
- [HMCharacteristicTypeNightVision](hmcharacteristictypenightvision.md): An indicator of whether night vision is enabled on a video Real-time Transport Protocol (RTP) service.
- [HMCharacteristicTypeStreamingStatus](hmcharacteristictypestreamingstatus.md): A description of the status of the Real-time Transport Protocol (RTP) stream management service.
- [HMCharacteristicTypeSupportedVideoStreamConfiguration](hmcharacteristictypesupportedvideostreamconfiguration.md): The video stream’s configuration.
- [HMCharacteristicTypeSupportedAudioStreamConfiguration](hmcharacteristictypesupportedaudiostreamconfiguration.md): The audio stream’s configuration.
- [HMCharacteristicTypeSelectedStreamConfiguration](hmcharacteristictypeselectedstreamconfiguration.md): The selected stream’s configuration.
- [HMCharacteristicTypeSetupStreamEndpoint](hmcharacteristictypesetupstreamendpoint.md): The stream’s endpoint configuration.
- [HMCharacteristicTypeAudioFeedback](hmcharacteristictypeaudiofeedback.md): An indicator of whether audio feedback, like a beep or other external sound mechanism, is enabled.
- [HMCharacteristicTypeVolume](hmcharacteristictypevolume.md): The input or output volume of an audio device.
- [HMCharacteristicTypeMute](hmcharacteristictypemute.md): A control for muting audio.
- [HMCharacteristicTypeVolumeSelector](hmcharacteristictypevolumeselector.md): The mechanism to increment or decrement the volume by the default step value.
- [HMCharacteristicTypeVolumeControlType](hmcharacteristictypevolumecontroltype.md): The volume control capabilities of an accessory.
- [HMCharacteristicTypeClosedCaptions](hmcharacteristictypeclosedcaptions.md): An indictator of whether closed captions are enabled or disabled.
- [HMCharacteristicTypePictureMode](hmcharacteristictypepicturemode.md): The selected picture mode.

### General state

- [HMCharacteristicTypeActive](hmcharacteristictypeactive.md): The current status of an accessory.
- [HMCharacteristicTypeStatusTampered](hmcharacteristictypestatustampered.md): An indicator of whether an accessory has been tampered with.
- [HMCharacteristicTypeStatusFault](hmcharacteristictypestatusfault.md): An indicator of whether the accessory has experienced a fault.
- [HMCharacteristicTypeStatusActive](hmcharacteristictypestatusactive.md): An indicator of whether the service is working.
- [HMCharacteristicTypeInUse](hmcharacteristictypeinuse.md): The current usage state of an accessory.
- [HMCharacteristicTypeIsConfigured](hmcharacteristictypeisconfigured.md): The configuration state of an accessory.
- [HMCharacteristicTypeRemainingDuration](hmcharacteristictyperemainingduration.md): The number of seconds remaining for the activity being carried out by the accessory.
- [HMCharacteristicTypeSetDuration](hmcharacteristictypesetduration.md): The duration of the activity being carried out by the accessory.
- [HMCharacteristicTypeProgramMode](hmcharacteristictypeprogrammode.md): The current mode of the accessory’s scheduled programs.
- [HMCharacteristicTypeWiFiSatelliteStatus](hmcharacteristictypewifisatellitestatus.md): The network status of the WiFi satellite accessory.
- [HMCharacteristicTypeWANStatusList](hmcharacteristictypewanstatuslist.md): The WAN status list of an accessory.
- [HMCharacteristicTypeTargetMediaState](hmcharacteristictypetargetmediastate.md): The target media state.
- [HMCharacteristicTypeRouterStatus](hmcharacteristictyperouterstatus.md): The current status of the router.
- [HMCharacteristicTypeCurrentMediaState](hmcharacteristictypecurrentmediastate.md): The current state of the media.
- [HMCharacteristicTypeCurrentVisibilityState](hmcharacteristictypecurrentvisibilitystate.md): The current visibility state for a service.
- [HMCharacteristicTypeTargetVisibilityState](hmcharacteristictypetargetvisibilitystate.md): The target visibility state for a service.

### Accessory identification

- [HMCharacteristicTypeName](hmcharacteristictypename.md): The name of the accessory.
- [HMCharacteristicTypeIdentify](hmcharacteristictypeidentify.md): A control you can use to ask the accessory to identify itself.
- [HMCharacteristicTypeVersion](hmcharacteristictypeversion.md): The version of the accessory.
- [HMCharacteristicTypeLogs](hmcharacteristictypelogs.md): Log data for the accessory.
- [HMCharacteristicTypeAdminOnlyAccess](hmcharacteristictypeadminonlyaccess.md): An indicator of whether the accessory accepts only administrator access.
- [HMCharacteristicTypeHardwareVersion](hmcharacteristictypehardwareversion.md): The hardware version of the accessory.
- [HMCharacteristicTypeSoftwareVersion](hmcharacteristictypesoftwareversion.md): The software version of the accessory.
- [HMCharacteristicTypeLabelIndex](hmcharacteristictypelabelindex.md): The index of the label for the service on an accessory with multiple instances of the same service.
- [HMCharacteristicTypeLabelNamespace](hmcharacteristictypelabelnamespace.md): The naming schema used to label the services on an accessory with multiple services of the same type.
- [HMCharacteristicTypeActiveIdentifier](hmcharacteristictypeactiveidentifier.md): An index that maps to the current active Input Source service.
- [HMCharacteristicTypeIdentifier](hmcharacteristictypeidentifier.md): The identifier for an accessory.
- [HMCharacteristicTypeInputDeviceType](hmcharacteristictypeinputdevicetype.md): The accessory input device type.
- [HMCharacteristicTypeInputSourceType](hmcharacteristictypeinputsourcetype.md): The accessory input source type.
- [HMCharacteristicTypeConfiguredName](hmcharacteristictypeconfiguredname.md): A `UTF‑8` encoded user visible name on an accessory.

### Deprecated characteristic types

- [HMCharacteristicTypeManufacturer](hmcharacteristictypemanufacturer.md): Deprecated. The manufacturer of the accessory.
- [HMCharacteristicTypeModel](hmcharacteristictypemodel.md): Deprecated. The model of the accessory.
- [HMCharacteristicTypeFirmwareVersion](hmcharacteristictypefirmwareversion.md): Deprecated. The firmware version of the accessory.
- [HMCharacteristicTypeSerialNumber](hmcharacteristictypeserialnumber.md): Deprecated. The serial number of the accessory.

## See Also

### Determining what a characteristic controls

- [characteristicType](hmcharacteristic/characteristictype.md): The type of the characteristic.
