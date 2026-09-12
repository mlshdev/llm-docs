> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit/kiopcislotcapabilitiesbitelectromechanicalinterlockpresent](https://developer.apple.com/documentation/pcidriverkit/kiopcislotcapabilitiesbitelectromechanicalinterlockpresent)

# kIOPCISlotCapabilitiesBitElectromechanicalInterlockPresent

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · macOS

The bit that indicates whether the chassis implements an electromechanical interlock for this slot.

## Declaration

```objectivec
kIOPCISlotCapabilitiesBitElectromechanicalInterlockPresent
```

## See Also

### Capabilities

- [kIOPCISlotCapabilitiesBitAttentionButtonPresent](kiopcislotcapabilitiesbitattentionbuttonpresent.md): The bit that indicates whether an attention button for this slot is electrically controlled by the chassis.
- [kIOPCISlotCapabilitiesBitPowerControllerPresent](kiopcislotcapabilitiesbitpowercontrollerpresent.md): The bit that indicates whether the slot implements a software programmable power controller.
- [kIOPCISlotCapabilitiesBitMRLSensorPresent](kiopcislotcapabilitiesbitmrlsensorpresent.md): The bit that indicates whether the chassis for this slot implements an MRL sensor.
- [kIOPCISlotCapabilitiesBitAttentionIndicatorPresent](kiopcislotcapabilitiesbitattentionindicatorpresent.md): The bit that indicates whether the chassis electrically controls the attention indicator.
- [kIOPCISlotCapabilitiesBitPowerIndicatorPresent](kiopcislotcapabilitiesbitpowerindicatorpresent.md): The bit that indicates whether chassis electrically controls the power indicator.
- [kIOPCISlotCapabilitiesBitHotPlugSurprise](kiopcislotcapabilitiesbithotplugsurprise.md): The bit that indicates whether the adaptor might be removed without prior notification.
- [kIOPCISlotCapabilitiesBitHotPlugCapable](kiopcislotcapabilitiesbithotplugcapable.md): The bit that indicates whether the slot supports hot-plug operations.
- [kIOPCISlotCapabilitiesBitNoCommandCompletedSupport](kiopcislotcapabilitiesbitnocommandcompletedsupport.md): The bit that indicates whether the slot generates a software notification when the Hot-Plug controller finishes a command.
