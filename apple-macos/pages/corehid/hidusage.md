> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidusage](https://developer.apple.com/documentation/corehid/hidusage)

# HIDUsage

**Framework:** Core HID  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

A type to represent HID usage pages.

## Declaration

```swift
enum HIDUsage
```

<a id="overview"></a>

## Overview

A HID usage page combines with a HID usage to specify the intended functionality for the associated item. Associated items can be descriptors, devices, reports, report data, elements, etc..

Currently unsupported cases can be used as [HIDUsage.generic(\_:\_:)](hidusage/generic%28____%29.md), but may be added as supported cases later.

For more details, see [Human Interface Devices (HID) Specifications and Tools](https://www.usb.org/hid).

## Topics

### Enumeration Cases

- [HIDUsage.arcade(\_:)](hidusage/arcade%28__%29.md)
- [HIDUsage.auxiliaryDisplay(\_:)](hidusage/auxiliarydisplay%28__%29.md)
- [HIDUsage.barcodeScanner(\_:)](hidusage/barcodescanner%28__%29.md)
- [HIDUsage.batterySystem(\_:)](hidusage/batterysystem%28__%29.md)
- [HIDUsage.brailleDisplay(\_:)](hidusage/brailledisplay%28__%29.md)
- [HIDUsage.button(\_:)](hidusage/button%28__%29.md)
- [HIDUsage.cameraControl(\_:)](hidusage/cameracontrol%28__%29.md)
- [HIDUsage.consumer(\_:)](hidusage/consumer%28__%29.md)
- [HIDUsage.digitizers(\_:)](hidusage/digitizers%28__%29.md)
- [HIDUsage.eyeAndHeadTrackers(\_:)](hidusage/eyeandheadtrackers%28__%29.md)
- [HIDUsage.fidoAlliance(\_:)](hidusage/fidoalliance%28__%29.md)
- [HIDUsage.gameControls(\_:)](hidusage/gamecontrols%28__%29.md)
- [HIDUsage.generic(\_:\_:)](hidusage/generic%28____%29.md)
- [HIDUsage.genericDesktop(\_:)](hidusage/genericdesktop%28__%29.md)
- [HIDUsage.genericDeviceControls(\_:)](hidusage/genericdevicecontrols%28__%29.md)
- [HIDUsage.haptics(\_:)](hidusage/haptics%28__%29.md)
- [HIDUsage.keyboardOrKeypad(\_:)](hidusage/keyboardorkeypad%28__%29.md)
- [HIDUsage.led(\_:)](hidusage/led%28__%29.md)
- [HIDUsage.lightingAndIllumination(\_:)](hidusage/lightingandillumination%28__%29.md)
- [HIDUsage.magneticStripeReader(\_:)](hidusage/magneticstripereader%28__%29.md)
- [HIDUsage.medicalInstrument(\_:)](hidusage/medicalinstrument%28__%29.md)
- [HIDUsage.monitor(\_:)](hidusage/monitor%28__%29.md)
- [HIDUsage.monitorEnumerated(\_:)](hidusage/monitorenumerated%28__%29.md)
- [HIDUsage.ordinal(\_:)](hidusage/ordinal%28__%29.md)
- [HIDUsage.physicalInputDevice(\_:)](hidusage/physicalinputdevice%28__%29.md)
- [HIDUsage.power(\_:)](hidusage/power%28__%29.md)
- [HIDUsage.scales(\_:)](hidusage/scales%28__%29.md)
- [HIDUsage.sensors(\_:)](hidusage/sensors%28__%29.md)
- [HIDUsage.simulationControls(\_:)](hidusage/simulationcontrols%28__%29.md)
- [HIDUsage.soc(\_:)](hidusage/soc%28__%29.md)
- [HIDUsage.sportControls(\_:)](hidusage/sportcontrols%28__%29.md)
- [HIDUsage.telephonyDevice(\_:)](hidusage/telephonydevice%28__%29.md)
- [HIDUsage.vesaVirtualControls(\_:)](hidusage/vesavirtualcontrols%28__%29.md)
- [HIDUsage.vrControls(\_:)](hidusage/vrcontrols%28__%29.md)

### Initializers

- [init(page:usage:)](hidusage/init%28page_usage_%29.md): Creates a HID usage page from raw page and usage values.

### Instance Properties

- [page](hidusage/page.md): The usage page value.
- [usage](hidusage/usage.md): The usage value.

### Enumerations

- [HIDUsage.ArcadeUsage](hidusage/arcadeusage.md)
- [HIDUsage.AuxiliaryDisplayUsage](hidusage/auxiliarydisplayusage.md)
- [HIDUsage.BarcodeScannerUsage](hidusage/barcodescannerusage.md)
- [HIDUsage.BatterySystemUsage](hidusage/batterysystemusage.md)
- [HIDUsage.BrailleDisplayUsage](hidusage/brailledisplayusage.md)
- [HIDUsage.ButtonUsage](hidusage/buttonusage.md)
- [HIDUsage.CameraControlUsage](hidusage/cameracontrolusage.md)
- [HIDUsage.ConsumerUsage](hidusage/consumerusage.md)
- [HIDUsage.DigitizersUsage](hidusage/digitizersusage.md)
- [HIDUsage.EyeAndHeadTrackersUsage](hidusage/eyeandheadtrackersusage.md)
- [HIDUsage.FIDOAllianceUsage](hidusage/fidoallianceusage.md)
- [HIDUsage.GameControlsUsage](hidusage/gamecontrolsusage.md)
- [HIDUsage.GenericDesktopUsage](hidusage/genericdesktopusage.md)
- [HIDUsage.GenericDeviceControlsUsage](hidusage/genericdevicecontrolsusage.md)
- [HIDUsage.HapticsUsage](hidusage/hapticsusage.md)
- [HIDUsage.KeyboardOrKeypadUsage](hidusage/keyboardorkeypadusage.md)
- [HIDUsage.LEDUsage](hidusage/ledusage.md)
- [HIDUsage.LightingAndIlluminationUsage](hidusage/lightingandilluminationusage.md)
- [HIDUsage.MagneticStripeReaderUsage](hidusage/magneticstripereaderusage.md)
- [HIDUsage.MedicalInstrumentUsage](hidusage/medicalinstrumentusage.md)
- [HIDUsage.MonitorEnumeratedUsage](hidusage/monitorenumeratedusage.md)
- [HIDUsage.MonitorUsage](hidusage/monitorusage.md)
- [HIDUsage.OrdinalUsage](hidusage/ordinalusage.md)
- [HIDUsage.PhysicalInputDeviceUsage](hidusage/physicalinputdeviceusage.md)
- [HIDUsage.PowerUsage](hidusage/powerusage.md)
- [HIDUsage.SOCUsage](hidusage/socusage.md)
- [HIDUsage.ScalesUsage](hidusage/scalesusage.md)
- [HIDUsage.SensorsUsage](hidusage/sensorsusage.md)
- [HIDUsage.SimulationControlsUsage](hidusage/simulationcontrolsusage.md)
- [HIDUsage.SportControlsUsage](hidusage/sportcontrolsusage.md)
- [HIDUsage.TelephonyDeviceUsage](hidusage/telephonydeviceusage.md)
- [HIDUsage.VESAVirtualControlsUsage](hidusage/vesavirtualcontrolsusage.md)
- [HIDUsage.VRControlsUsage](hidusage/vrcontrolsusage.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interaction

- [Communicating with human interface devices](communicatingwithhiddevices.md): Interact with and obtain data from devices such as keyboards and mice.
- [HIDDeviceClient](hiddeviceclient.md): A client of a physical or virtual HID compatible peripheral.
- [HIDElement](hidelement.md): A representation of an item from a report descriptor for a HID device.
- [HIDElementCollection](hidelementcollection.md): A collection of items from a report descriptor for a HID device.
- [HIDElement.Value](hidelement/value.md): Data associated with a HID element.
- [HIDElementUpdate](hidelementupdate.md): A base protocol for element update types.
- [HIDReportType](hidreporttype.md): Types for HID reports.
- [HIDReportID](hidreportid.md): A type to represent the report IDs of HID reports.
- [HIDDeviceError](hiddeviceerror.md): Errors that the framework can throw.
- [HIDDeviceTransport](hiddevicetransport.md): Common transport types that transmit data to or from a HID device.
- [HIDDeviceLocalizationCode](hiddevicelocalizationcode.md): The localization codes that some HID devices declare to specify conformance to a certain format or language.
