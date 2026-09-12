> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1503997-iovideofeaturecontrol_subclass_i](https://developer.apple.com/documentation/iokit/1503997-iovideofeaturecontrol_subclass_i)

# IOVideoFeatureControl Subclass IDs

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

The four char codes that identify the various standard subclasses of IOVideoFeatureControl.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kIOVideoFeatureControlClassIDBlackLevel](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidblacklevel)
- [kIOVideoFeatureControlClassIDWhiteLevel](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidwhitelevel)
- [kIOVideoFeatureControlClassIDHue](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidhue)
- [kIOVideoFeatureControlClassIDSaturation](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidsaturation)
- [kIOVideoFeatureControlClassIDContrast](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidcontrast)
- [kIOVideoFeatureControlClassIDSharpness](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidsharpness)
- [kIOVideoFeatureControlClassIDBrightness](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidbrightness)
- [kIOVideoFeatureControlClassIDGain](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidgain)
- [kIOVideoFeatureControlClassIDIris](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidiris)
- [kIOVideoFeatureControlClassIDShutter](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidshutter)
- [kIOVideoFeatureControlClassIDExposure](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidexposure)
- [kIOVideoFeatureControlClassIDWhiteBalanceU](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidwhitebalanceu)
- [kIOVideoFeatureControlClassIDWhiteBalanceV](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidwhitebalancev)
- [kIOVideoFeatureControlClassIDGamma](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidgamma)
- [kIOVideoFeatureControlClassIDTemperature](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidtemperature)
- [kIOVideoFeatureControlClassIDZoom](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidzoom)
- [kIOVideoFeatureControlClassIDFocus](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidfocus)
- [kIOVideoFeatureControlClassIDPan](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidpan)
- [kIOVideoFeatureControlClassIDTilt](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidtilt)
- [kIOVideoFeatureControlClassIDOpticalFilter](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidopticalfilter)
- [kIOVideoFeatureControlClassIDBacklightCompensation](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidbacklightcompensation)
- [kIOVideoFeatureControlClassIDPowerLineFrequency](https://developer.apple.com/documentation/kernel/1646200-anonymous/kiovideofeaturecontrolclassidpowerlinefrequency)
- [kIOVideoFeatureControlClassIDBacklightCompensation](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidbacklightcompensation.md)
- [kIOVideoFeatureControlClassIDBlackLevel](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidblacklevel.md)
- [kIOVideoFeatureControlClassIDBrightness](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidbrightness.md)
- [kIOVideoFeatureControlClassIDContrast](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidcontrast.md)
- [kIOVideoFeatureControlClassIDExposure](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidexposure.md)
- [kIOVideoFeatureControlClassIDFocus](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidfocus.md)
- [kIOVideoFeatureControlClassIDGain](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidgain.md)
- [kIOVideoFeatureControlClassIDGamma](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidgamma.md)
- [kIOVideoFeatureControlClassIDHue](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidhue.md)
- [kIOVideoFeatureControlClassIDIris](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidiris.md)
- [kIOVideoFeatureControlClassIDOpticalFilter](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidopticalfilter.md)
- [kIOVideoFeatureControlClassIDPan](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidpan.md)
- [kIOVideoFeatureControlClassIDPowerLineFrequency](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidpowerlinefrequency.md)
- [kIOVideoFeatureControlClassIDSaturation](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidsaturation.md)
- [kIOVideoFeatureControlClassIDSharpness](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidsharpness.md)
- [kIOVideoFeatureControlClassIDShutter](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidshutter.md)
- [kIOVideoFeatureControlClassIDTemperature](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidtemperature.md)
- [kIOVideoFeatureControlClassIDTilt](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidtilt.md)
- [kIOVideoFeatureControlClassIDWhiteBalanceU](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidwhitebalanceu.md)
- [kIOVideoFeatureControlClassIDWhiteBalanceV](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidwhitebalancev.md)
- [kIOVideoFeatureControlClassIDWhiteLevel](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidwhitelevel.md)
- [kIOVideoFeatureControlClassIDZoom](1503997-iovideofeaturecontrol_subclass_i/kiovideofeaturecontrolclassidzoom.md)
