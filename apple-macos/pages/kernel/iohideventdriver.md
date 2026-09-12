> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventdriver](https://developer.apple.com/documentation/kernel/iohideventdriver)

# IOHIDEventDriver

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
class IOHIDEventDriver : IOHIDEventService
```

## Topics

### Instance Methods

- [checkGameControllerElement](iohideventdriver/1528396-checkgamecontrollerelement.md): Deprecated.
- [checkMultiAxisElement](iohideventdriver/1528393-checkmultiaxiselement.md): Deprecated.
- [conformTo](iohideventdriver/2765566-conformto.md): Deprecated.
- [copyEvent](iohideventdriver/2967287-copyevent.md): Deprecated.
- [copyMatchingEvent](iohideventdriver/3081665-copymatchingevent.md): Deprecated.
- [createDigitizerTransducerEventForReport](iohideventdriver/2765564-createdigitizertransducereventfo.md): Deprecated.
- [didTerminate](iohideventdriver/1528375-didterminate.md): Deprecated.
- [dispatchEvent](iohideventdriver/2765568-dispatchevent.md): Deprecated.
- [free](iohideventdriver/1528363-free.md): Deprecated.
- [getBlessedUsagePairs](iohideventdriver/3042840-getblessedusagepairs.md): Deprecated.
- [getButtonStateFromElements](iohideventdriver/3753515-getbuttonstatefromelements.md): Deprecated.
- [getCountryCode](iohideventdriver/1528357-getcountrycode.md): Deprecated.
- [getElementValue](iohideventdriver/1528377-getelementvalue.md): Deprecated.
- [getLocationID](iohideventdriver/1528339-getlocationid.md): Deprecated.
- [getManufacturer](iohideventdriver/1528395-getmanufacturer.md): Deprecated.
- [getMetaClass](iohideventdriver/1528381-getmetaclass.md): Deprecated.
- [getProduct](iohideventdriver/1528374-getproduct.md): Deprecated.
- [getProductID](iohideventdriver/1528319-getproductid.md): Deprecated.
- [getReportElements](iohideventdriver/1528369-getreportelements.md): Deprecated.
- [getSerialNumber](iohideventdriver/1528329-getserialnumber.md): Deprecated.
- [getTransport](iohideventdriver/1528347-gettransport.md): Deprecated.
- [getVendorID](iohideventdriver/1528335-getvendorid.md): Deprecated.
- [getVendorIDSource](iohideventdriver/1528328-getvendoridsource.md): Deprecated.
- [getVersion](iohideventdriver/1528380-getversion.md): Deprecated.
- [handleAccelReport](iohideventdriver/2967288-handleaccelreport.md): Deprecated.
- [handleBiometricReport](iohideventdriver/2824266-handlebiometricreport.md): Deprecated.
- [handleBootPointingReport](iohideventdriver/1528386-handlebootpointingreport.md): Deprecated.
- [handleCompassReport](iohideventdriver/2967289-handlecompassreport.md): Deprecated.
- [handleDeviceOrientationReport](iohideventdriver/2967290-handledeviceorientationreport.md): Deprecated.
- [handleDigitizerCollectionReport](iohideventdriver/2765567-handledigitizercollectionreport.md): Deprecated.
- [handleDigitizerReport](iohideventdriver/1528385-handledigitizerreport.md): Deprecated.
- [handleDigitizerTransducerReport](iohideventdriver/1528321-handledigitizertransducerreport.md): Deprecated.
- [handleGameControllerReport](iohideventdriver/1528404-handlegamecontrollerreport.md): Deprecated.
- [handleGyroReport](iohideventdriver/2967291-handlegyroreport.md): Deprecated.
- [handleInterruptReport](iohideventdriver/1528364-handleinterruptreport.md): Deprecated.
- [handleKeboardReport](iohideventdriver/1528336-handlekeboardreport.md): Deprecated.
- [handleMultiAxisPointerReport](iohideventdriver/1528370-handlemultiaxispointerreport.md): Deprecated.
- [handlePhaseReport](iohideventdriver/3603593-handlephasereport.md): Deprecated.
- [handleProximityReport](iohideventdriver/3698195-handleproximityreport.md): Deprecated.
- [handleRelativeReport](iohideventdriver/1528361-handlerelativereport.md): Deprecated.
- [handleScrollReport](iohideventdriver/1528390-handlescrollreport.md): Deprecated.
- [handleStart](iohideventdriver/1528338-handlestart.md): Deprecated.
- [handleStop](iohideventdriver/1528345-handlestop.md): Deprecated.
- [handleTemperatureReport](iohideventdriver/2967292-handletemperaturereport.md): Deprecated.
- [handleUnicodeGestureCandidateReport](iohideventdriver/1528350-handleunicodegesturecandidaterep.md): Deprecated.
- [handleUnicodeGestureReport](iohideventdriver/1528340-handleunicodegesturereport.md): Deprecated.
- [handleUnicodeLegacyReport](iohideventdriver/1528379-handleunicodelegacyreport.md): Deprecated.
- [handleUnicodeReport](iohideventdriver/1528351-handleunicodereport.md): Deprecated.
- [handleVendorMessageReport](iohideventdriver/2765563-handlevendormessagereport.md): Deprecated.
- [init](iohideventdriver/1528326-init.md): Deprecated.
- [parseAccelElement](iohideventdriver/2967293-parseaccelelement.md): Deprecated.
- [parseBiometricElement](iohideventdriver/2824267-parsebiometricelement.md): Deprecated.
- [parseCompassElement](iohideventdriver/2967294-parsecompasselement.md): Deprecated.
- [parseDeviceOrientationElement](iohideventdriver/2967295-parsedeviceorientationelement.md): Deprecated.
- [parseDigitizerElement](iohideventdriver/1528330-parsedigitizerelement.md): Deprecated.
- [parseDigitizerTransducerElement](iohideventdriver/1528355-parsedigitizertransducerelement.md): Deprecated.
- [parseElements](iohideventdriver/1528391-parseelements.md): Deprecated.
- [parseGameControllerElement](iohideventdriver/1528399-parsegamecontrollerelement.md): Deprecated.
- [parseGestureUnicodeElement](iohideventdriver/1528372-parsegestureunicodeelement.md): Deprecated.
- [parseGyroElement](iohideventdriver/2967296-parsegyroelement.md): Deprecated.
- [parseKeyboardElement](iohideventdriver/1528398-parsekeyboardelement.md): Deprecated.
- [parseLEDElement](iohideventdriver/1528312-parseledelement.md): Deprecated.
- [parseLegacyUnicodeElement](iohideventdriver/1528313-parselegacyunicodeelement.md): Deprecated.
- [parseMultiAxisElement](iohideventdriver/1528401-parsemultiaxiselement.md): Deprecated.
- [parsePhaseElement](iohideventdriver/3603594-parsephaseelement.md): Deprecated.
- [parseProximityElement](iohideventdriver/3698196-parseproximityelement.md): Deprecated.
- [parseRelativeElement](iohideventdriver/1528354-parserelativeelement.md): Deprecated.
- [parseScrollElement](iohideventdriver/1528353-parsescrollelement.md): Deprecated.
- [parseSensorPropertyElement](iohideventdriver/2967297-parsesensorpropertyelement.md): Deprecated.
- [parseTemperatureElement](iohideventdriver/2967298-parsetemperatureelement.md): Deprecated.
- [parseUnicodeElement](iohideventdriver/1528323-parseunicodeelement.md): Deprecated.
- [parseVendorMessageElement](iohideventdriver/2765561-parsevendormessageelement.md): Deprecated.
- [processDigitizerElements](iohideventdriver/1528383-processdigitizerelements.md): Deprecated.
- [processGameControllerElements](iohideventdriver/1528346-processgamecontrollerelements.md): Deprecated.
- [processLEDElements](iohideventdriver/3589475-processledelements.md): Deprecated.
- [processMultiAxisElements](iohideventdriver/1528387-processmultiaxiselements.md): Deprecated.
- [processUnicodeElements](iohideventdriver/1528358-processunicodeelements.md): Deprecated.
- [serializeCharacterGestureState](iohideventdriver/1528337-serializecharactergesturestate.md): Deprecated.
- [serializeDebugState](iohideventdriver/2765565-serializedebugstate.md): Deprecated.
- [setAccelProperties](iohideventdriver/2967299-setaccelproperties.md): Deprecated.
- [setAccelerationProperties](iohideventdriver/2765560-setaccelerationproperties.md): Deprecated.
- [setBiometricProperties](iohideventdriver/2824268-setbiometricproperties.md): Deprecated.
- [setCompassProperties](iohideventdriver/2967300-setcompassproperties.md): Deprecated.
- [setDeviceOrientationProperties](iohideventdriver/2967301-setdeviceorientationproperties.md): Deprecated.
- [setDigitizerProperties](iohideventdriver/1528341-setdigitizerproperties.md): Deprecated.
- [setElementValue](iohideventdriver/1528325-setelementvalue.md): Deprecated.
- [setGameControllerProperties](iohideventdriver/1528402-setgamecontrollerproperties.md): Deprecated.
- [setGyroProperties](iohideventdriver/2967302-setgyroproperties.md): Deprecated.
- [setKeyboardProperties](iohideventdriver/1528388-setkeyboardproperties.md): Deprecated.
- [setLEDProperties](iohideventdriver/1528317-setledproperties.md): Deprecated.
- [setMultiAxisProperties](iohideventdriver/1528333-setmultiaxisproperties.md): Deprecated.
- [setProperties](iohideventdriver/1528368-setproperties.md): Deprecated.
- [setRelativeProperties](iohideventdriver/1528332-setrelativeproperties.md): Deprecated.
- [setScrollProperties](iohideventdriver/1528316-setscrollproperties.md): Deprecated.
- [setSensorProperties](iohideventdriver/2967303-setsensorproperties.md): Deprecated.
- [setSurfaceDimensions](iohideventdriver/3516596-setsurfacedimensions.md): Deprecated.
- [setTemperatureProperties](iohideventdriver/2967304-settemperatureproperties.md): Deprecated.
- [setUnicodeProperties](iohideventdriver/1528314-setunicodeproperties.md): Deprecated.
- [setVendorMessageProperties](iohideventdriver/2765562-setvendormessageproperties.md): Deprecated.

### Type Methods

- [calibrateCenteredPreferredStateElement](iohideventdriver/1528359-calibratecenteredpreferredstatee.md): Deprecated.
- [calibrateJustifiedPreferredStateElement](iohideventdriver/1528342-calibratejustifiedpreferredstate.md): Deprecated.

## Relationships

### Inherits From

- [IOHIDEventService](iohideventservice.md)

## See Also

### IOKit

- [IOUSBDevice](iousbdevice.md): Deprecated. An input/output service object that represents a device on the USB bus.
- [IOUSBInterface](iousbinterface.md): Deprecated. An object that represents an interface of a device on the USB bus.
- [IOOFPathMatching](1575304-ioofpathmatching.md): Deprecated.
- [IOUSBHostInterface](iousbhostinterface.md): Deprecated.
- [IOUSBHostDevice](iousbhostdevice.md): Deprecated.
- [IOUSBHostPipe](iousbhostpipe.md): Deprecated.
- [IOUSBHostIOSource](iousbhostiosource.md): Deprecated.
- [IOUSBHostStream](iousbhoststream.md): Deprecated.
- [IOHIDEventService](iohideventservice.md): Deprecated. IOService represents an device or OS service in IOKit and DriverKit.
- [IOHIDInterface](iohidinterface.md): Deprecated. IOService represents an device or OS service in IOKit and DriverKit.
- [IOHIDSystem](iohidsystem.md): Deprecated.
- [IOHIKeyboardMapper](iohikeyboardmapper.md): Deprecated.
- [IOHIKeyboard](iohikeyboard.md): Deprecated.
- [IOHIPointing](iohipointing.md): Deprecated.
- [IOHIDevice](iohidevice.md): Deprecated.
- [IOHIDElement](iohidelement.md): Deprecated.
- [IOHIDWorkLoop](iohidworkloop.md): Deprecated.
- [IOEthernetInterface](ioethernetinterface.md): Deprecated. The Ethernet interface object.
- [IOEthernetController](ioethernetcontroller.md): Deprecated. Abstract superclass for Ethernet controllers.
