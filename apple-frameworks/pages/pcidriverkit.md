> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit](https://developer.apple.com/documentation/pcidriverkit)

# PCIDriverKit

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Framework  
**Availability:** DriverKit 19.0+ · macOS 11.1+

Develop device drivers for Peripheral Component Interconnect (PCI) accessories.

## Mentioned In

- [Creating Custom PCIe Drivers for Thunderbolt Devices](pcidriverkit/creating-custom-pcie-drivers-for-thunderbolt-devices.md)

<a id="overview"></a>

## Overview

Use the PCIDriverKit framework to develop drivers that manage custom features on your Peripheral Component Interconnect (PCI) and PCI-Express hardware. When the system loads your custom PCI driver, it passes an [IOPCIDevice](pcidriverkit/iopcidevice.md) object as the provider to your driver. Use that object to read and write the configuration and memory of your PCI hardware.

On macOS, use the [System Extensions](https://developer.apple.com/documentation/systemextensions) framework to install and upgrade your driver. On iPadOS, the system automatically discovers and upgrades drivers along with their host apps.

> **Note**

>  PCIDriverKit is available on macOS for Intel and Apple Silicon devices, and on iPadOS for devices with an M-series chip.

## Topics

### Entitlements

- [com.apple.developer.driverkit.transport.pci](bundleresources/entitlements/com.apple.developer.driverkit.transport.pci.md): An array of PCI device descriptors that your custom driver supports.

### Samples

- [DriverKit sample code](driverkit/driverkit-sample-code.md): Explore projects that demonstrate how to write macOS device drivers with the DriverKit family of frameworks.
- [Connecting a network driver](pcidriverkit/connecting-a-network-driver.md): Create an Ethernet driver that interfaces with the system’s network protocol stack.

### Device Interface

- [Creating Custom PCIe Drivers for Thunderbolt Devices](pcidriverkit/creating-custom-pcie-drivers-for-thunderbolt-devices.md): Create a DriverKit extension to support your Thunderbolt device’s custom features.
- [IOPCIDevice](pcidriverkit/iopcidevice.md): A DriverKit provider object that manages access to your custom PCI hardware.

### Reference

- [PCIDriverKit Enumerations](pcidriverkit/pcidriverkit-enumerations.md)
- [PCIDriverKit Data Types](pcidriverkit/pcidriverkit-data-types.md)
- [PCIDriverKit Macros](pcidriverkit/pcidriverkit-macros.md)

### Macros

- [kIOPCIACSCapabilitiesKey](pcidriverkit/kiopciacscapabilitieskey.md)
- [kIOPCIAERCapabilitiesKey](pcidriverkit/kiopciaercapabilitieskey.md)
- [kIOPCIExpressDeviceCapabilities2Key](pcidriverkit/kiopciexpressdevicecapabilities2key.md)
- [kIOPCIExpressDeviceCapabilitiesKey](pcidriverkit/kiopciexpressdevicecapabilitieskey.md)
- [kIOPCIExpressLinkCapabilities2Key](pcidriverkit/kiopciexpresslinkcapabilities2key.md)
- [kIOPCIExpressRootCapabilitiesKey](pcidriverkit/kiopciexpressrootcapabilitieskey.md)
- [kIOPCIExpressSlotCapabilities2Key](pcidriverkit/kiopciexpressslotcapabilities2key.md)
- [kIOPCIFPBCapabilitiesKey](pcidriverkit/kiopcifpbcapabilitieskey.md)
- [kIOPCIL1PMCapabilitiesKey](pcidriverkit/kiopcil1pmcapabilitieskey.md)
- [kIOPCIMSIMessageControlKey](pcidriverkit/kiopcimsimessagecontrolkey.md)
- [kIOPCIMSIXMessageControlKey](pcidriverkit/kiopcimsixmessagecontrolkey.md)
- [kIOPCIPTMCapabilitiesKey](pcidriverkit/kiopciptmcapabilitieskey.md)
- [kIOPCIPowerManagementCapabilitiesKey](pcidriverkit/kiopcipowermanagementcapabilitieskey.md)

### Enumeration Cases

- [kIOPCICapabilityIDAF](pcidriverkit/kiopcicapabilityidaf.md)
- [kIOPCICapabilityIDEnhancedAllocation](pcidriverkit/kiopcicapabilityidenhancedallocation.md)
- [kIOPCICapabilityIDSATAConfiguration](pcidriverkit/kiopcicapabilityidsataconfiguration.md)
- [kIOPCIExpressCapabilityIDAMD](pcidriverkit/kiopciexpresscapabilityidamd.md)
- [kIOPCIExpressCapabilityIDATS](pcidriverkit/kiopciexpresscapabilityidats.md)
- [kIOPCIExpressCapabilityIDAlternateProtocol](pcidriverkit/kiopciexpresscapabilityidalternateprotocol.md)
- [kIOPCIExpressCapabilityIDCAC](pcidriverkit/kiopciexpresscapabilityidcac.md)
- [kIOPCIExpressCapabilityIDDPA](pcidriverkit/kiopciexpresscapabilityiddpa.md)
- [kIOPCIExpressCapabilityIDDPC](pcidriverkit/kiopciexpresscapabilityiddpc.md)
- [kIOPCIExpressCapabilityIDDVSEC](pcidriverkit/kiopciexpresscapabilityiddvsec.md)
- [kIOPCIExpressCapabilityIDDataLinkFeature](pcidriverkit/kiopciexpresscapabilityiddatalinkfeature.md)
- [kIOPCIExpressCapabilityIDFRSQueueing](pcidriverkit/kiopciexpresscapabilityidfrsqueueing.md)
- [kIOPCIExpressCapabilityIDHierarchyID](pcidriverkit/kiopciexpresscapabilityidhierarchyid.md)
- [kIOPCIExpressCapabilityIDLNR](pcidriverkit/kiopciexpresscapabilityidlnr.md)
- [kIOPCIExpressCapabilityIDLaneMarginingRx](pcidriverkit/kiopciexpresscapabilityidlanemarginingrx.md)
- [kIOPCIExpressCapabilityIDMFVC](pcidriverkit/kiopciexpresscapabilityidmfvc.md)
- [kIOPCIExpressCapabilityIDMPCIe](pcidriverkit/kiopciexpresscapabilityidmpcie.md)
- [kIOPCIExpressCapabilityIDMRIOV](pcidriverkit/kiopciexpresscapabilityidmriov.md)
- [kIOPCIExpressCapabilityIDMulticast](pcidriverkit/kiopciexpresscapabilityidmulticast.md)
- [kIOPCIExpressCapabilityIDNPEM](pcidriverkit/kiopciexpresscapabilityidnpem.md)
- [kIOPCIExpressCapabilityIDPASID](pcidriverkit/kiopciexpresscapabilityidpasid.md)
- [kIOPCIExpressCapabilityIDPL16GTs](pcidriverkit/kiopciexpresscapabilityidpl16gts.md)
- [kIOPCIExpressCapabilityIDPL32GTs](pcidriverkit/kiopciexpresscapabilityidpl32gts.md)
- [kIOPCIExpressCapabilityIDPMUX](pcidriverkit/kiopciexpresscapabilityidpmux.md)
- [kIOPCIExpressCapabilityIDPRI](pcidriverkit/kiopciexpresscapabilityidpri.md)
- [kIOPCIExpressCapabilityIDRCECEndpointAssociation](pcidriverkit/kiopciexpresscapabilityidrcecendpointassociation.md)
- [kIOPCIExpressCapabilityIDRCInternalLinkCtrl](pcidriverkit/kiopciexpresscapabilityidrcinternallinkctrl.md)
- [kIOPCIExpressCapabilityIDRCLinkDeclaration](pcidriverkit/kiopciexpresscapabilityidrclinkdeclaration.md)
- [kIOPCIExpressCapabilityIDReadinessTimeReporting](pcidriverkit/kiopciexpresscapabilityidreadinesstimereporting.md)
- [kIOPCIExpressCapabilityIDResizableBAR](pcidriverkit/kiopciexpresscapabilityidresizablebar.md)
- [kIOPCIExpressCapabilityIDRootComplexRegBlock](pcidriverkit/kiopciexpresscapabilityidrootcomplexregblock.md)
- [kIOPCIExpressCapabilityIDSFI](pcidriverkit/kiopciexpresscapabilityidsfi.md)
- [kIOPCIExpressCapabilityIDSPCIe](pcidriverkit/kiopciexpresscapabilityidspcie.md)
- [kIOPCIExpressCapabilityIDSRIOV](pcidriverkit/kiopciexpresscapabilityidsriov.md)
- [kIOPCIExpressCapabilityIDTPHRequester](pcidriverkit/kiopciexpresscapabilityidtphrequester.md)
- [kIOPCIExpressCapabilityIDVC_MFVCPresent](pcidriverkit/kiopciexpresscapabilityidvc_mfvcpresent.md)
- [kIOPCIExpressCapabilityIDVFResizableBAR](pcidriverkit/kiopciexpresscapabilityidvfresizablebar.md)
- [kIOPCIExpressCapabilityIDVSEC](pcidriverkit/kiopciexpresscapabilityidvsec.md)
- [kIOPCISlotStatusAttentionButtonPressed](pcidriverkit/kiopcislotstatusattentionbuttonpressed.md)
- [kIOPCISlotStatusCommandCompleted](pcidriverkit/kiopcislotstatuscommandcompleted.md)
- [kIOPCISlotStatusDataLinkLayerStateChanged](pcidriverkit/kiopcislotstatusdatalinklayerstatechanged.md)
- [kIOPCISlotStatusElectromechanicalInterlockState](pcidriverkit/kiopcislotstatuselectromechanicalinterlockstate.md)
- [kIOPCISlotStatusMRLSensorChanged](pcidriverkit/kiopcislotstatusmrlsensorchanged.md)
- [kIOPCISlotStatusMRLSensorState](pcidriverkit/kiopcislotstatusmrlsensorstate.md)
- [kIOPCISlotStatusPowerFaultDetected](pcidriverkit/kiopcislotstatuspowerfaultdetected.md)
- [kIOPCISlotStatusPresenceDetectChanged](pcidriverkit/kiopcislotstatuspresencedetectchanged.md)
- [kIOPCISlotStatusPresenceDetectState](pcidriverkit/kiopcislotstatuspresencedetectstate.md)
