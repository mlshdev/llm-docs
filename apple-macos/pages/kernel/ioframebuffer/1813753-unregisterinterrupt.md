> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioframebuffer/1813753-unregisterinterrupt](https://developer.apple.com/documentation/kernel/ioframebuffer/1813753-unregisterinterrupt)

# unregisterInterrupt(void \*)

**Interface language:** Objective-C

**Framework:** Kernel

Remove a callback previously installed by registerForInterruptType().

## Declaration

```objectivec
virtual IOReturn unregisterInterrupt(
 void *interruptRef ); 
```

## Parameters

- `interruptRef`: The interruptRef returned from the registerForInterruptType call that installed the interrupt.

<a id="return_value"></a>

## Return Value

An IOReturn code.

<a id="overview"></a>

## Overview

Remove a callback previously installed by registerForInterruptType().

## See Also

### Miscellaneous

- [connectFlags](1812972-connectflags.md): Return display sense information for legacy Apple sensing.
- [convertCursorImage](1812983-convertcursorimage.md): Utility method of IOFramebuffer to convert cursor image to a hardware cursor format.
- [doI2CRequest](1812996-doi2crequest.md): Carry out an I2C request.
- [enableController](1813011-enablecontroller.md): Perform first time setup of the framebuffer.
- [flushCursor](1813022-flushcursor.md): Perform any needed cache flushing after software cursor rendering.
- [getApertureRange](1813036-getaperturerange.md): Return reference to IODeviceMemory object representing memory range of framebuffer.
- [getAppleSense](1813053-getapplesense.md): Return display sense information for legacy Apple sensing.
- [getAttribute](1813070-getattribute.md): Generic method to retrieve some attribute of the framebuffer device.
- [getAttributeForConnection](1813093-getattributeforconnection.md): Generic method to retrieve some attribute of the framebuffer device, specific to one display connection.
- [getConnectionCount](1813110-getconnectioncount.md): Reports the number of display connections the device supports, driven from one framebuffer.
- [getCurrentDisplayMode(IODisplayModeID \*, IOIndex \*)](1813145-getcurrentdisplaymode.md): Return the framebuffers display mode and depth to be used during boot and at startup.
- [getDDCBlock](1813183-getddcblock.md): Return display EDID data.
- [getDisplayModeCount](1813210-getdisplaymodecount.md): Return the number of display modes the framebuffer supports.
- [getDisplayModes](1813237-getdisplaymodes.md): Return the number of display modes the framebuffer supports.
- [getInformationForDisplayMode](1813269-getinformationfordisplaymode.md): Return information about a given display mode.
- [getPixelFormats](1813303-getpixelformats.md): List the pixel formats the framebuffer supports.
- [getPixelFormatsForDisplayMode](1813329-getpixelformatsfordisplaymode.md): Obsolete.
- [getPixelInformation](1813353-getpixelinformation.md): Return information about the framebuffer format for a given display mode and depth.
- [getStartupDisplayMode](1813382-getstartupdisplaymode.md): Return the framebuffers display mode and depth to be used during boot and at startup.
- [getTimingInfoForDisplayMode](1813413-gettiminginfofordisplaymode.md): Returns a timing description for a display mode.
- [getVRAMRange](1813443-getvramrange.md): Return reference to IODeviceMemory object representing memory range of all the cards vram.
- [handleEvent](1813481-handleevent.md): Notify IOFramebuffer superclass code of events.
- [hasDDCConnect](1813510-hasddcconnect.md): Return display DDC connect state.
- [readDDCClock](1813550-readddcclock.md): Reads the input state of the I2C clock line on a bus.
- [readDDCData](1813593-readddcdata.md): Reads the input state of the I2C data line on a bus.
- [registerForInterruptType](1813622-registerforinterrupttype.md): Set callbacks for driver to call on interrupt events.
- [setApertureEnable](1813646-setapertureenable.md): Enable an aperture on the framebuffer (usually unimplemented, no OS usage).
- [setAttribute](1813661-setattribute.md): Generic method to set some attribute of the framebuffer device.
- [setAttributeForConnection](1813672-setattributeforconnection.md): Generic method to set some attribute of the framebuffer device, specific to one display connection.
- [setCLUTWithEntries](1813680-setclutwithentries.md): Set the color lookup table to be used by the framebuffer in indexed modes.
- [setCurrentDisplayMode](1813685-setcurrentdisplaymode.md): Set the framebuffers current display mode and depth.
- [setCursorImage](1813692-setcursorimage.md): Set a new image for the hardware cursor.
- [setCursorState](1813699-setcursorstate.md): Set a new position and visibility for the hardware cursor.
- [setDDCClock](1813707-setddcclock.md): Sets the state of the I2C clock line on a bus.
- [setDDCData](1813718-setddcdata.md): Sets the state of the I2C data line on a bus.
- [setDetailedTimings](1813724-setdetailedtimings.md): Installs an array of OS programmed detailed timings to be made available by the driver.
- [setDisplayMode](1813732-setdisplaymode.md): Set the framebuffers current display mode and depth.
- [setGammaTable](1813739-setgammatable.md): Set the gamma table to be used by the framebuffer.
- [setInterruptState](1813744-setinterruptstate.md): Enable or disable a callback previously installed by registerForInterruptType().
- [setStartupDisplayMode](1813749-setstartupdisplaymode.md): Set the framebuffers display mode and depth to be used during boot and at startup.
- [unregisterInterrupt(void \*, UInt32)](1813757-unregisterinterrupt.md): Enable or disable a callback previously installed by registerForInterruptType().
- [validateDetailedTiming](1813761-validatedetailedtiming.md): Reports whether a detailed timing is able to be programmed with the device.
