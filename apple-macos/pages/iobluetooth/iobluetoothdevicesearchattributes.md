> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevicesearchattributes](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicesearchattributes)

# IOBluetoothDeviceSearchAttributes (Swift)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Structure used to search for particular devices.

## Declaration

```swift
struct IOBluetoothDeviceSearchAttributes
```

<a id="Overview"></a>

## Overview

You can search for general device classes and service classes, or you can search for a specific device address or name. If you pass NULL as the attribute structure, you will get ALL devices in the vicinity found during a search. Note that passing a zeroed out block of attributes is NOT equivalent to passing in NULL!

## Topics

### Initializers

- [init()](iobluetoothdevicesearchattributes/init%28%29.md)
- [init(options:maxResults:deviceAttributeCount:attributeList:)](iobluetoothdevicesearchattributes/init%28options_maxresults_deviceattributecount_attributelist_%29.md)

### Instance Properties

- [attributeList](iobluetoothdevicesearchattributes/attributelist.md)
- [deviceAttributeCount](iobluetoothdevicesearchattributes/deviceattributecount.md)
- [maxResults](iobluetoothdevicesearchattributes/maxresults.md)
- [options](iobluetoothdevicesearchattributes/options.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Structures

- [BluetoothAFHHostChannelClassification](bluetoothafhhostchannelclassification.md)
- [BluetoothAFHResults](bluetoothafhresults.md)
- [BluetoothAMPCommandRejectReason](bluetoothampcommandrejectreason.md)
- [BluetoothAMPCreatePhysicalLinkResponseStatus](bluetoothampcreatephysicallinkresponsestatus.md)
- [BluetoothAMPDisconnectPhysicalLinkResponseStatus](bluetoothampdisconnectphysicallinkresponsestatus.md)
- [BluetoothAMPDiscoverResponseControllerStatus](bluetoothampdiscoverresponsecontrollerstatus.md)
- [BluetoothAMPGetAssocResponseStatus](bluetoothampgetassocresponsestatus.md)
- [BluetoothAMPGetInfoResponseStatus](bluetoothampgetinforesponsestatus.md)
- [BluetoothAMPManagerCode](bluetoothampmanagercode.md)
- [BluetoothAuthenticationRequirementsValues](bluetoothauthenticationrequirementsvalues.md)
- [BluetoothCompanyIdentifers](bluetoothcompanyidentifers.md)
- [BluetoothDeviceAddress](bluetoothdeviceaddress.md)
- [BluetoothEnhancedSynchronousConnectionInfo](bluetoothenhancedsynchronousconnectioninfo.md)
- [BluetoothEventFilterCondition](bluetootheventfiltercondition.md)
- [BluetoothFeatureBits](bluetoothfeaturebits.md)

# IOBluetoothDeviceSearchAttributes (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Structure used to search for particular devices.

## Declaration

```objectivec
struct IOBluetoothDeviceSearchAttributes;
```

<a id="Overview"></a>

## Overview

You can search for general device classes and service classes, or you can search for a specific device address or name. If you pass NULL as the attribute structure, you will get ALL devices in the vicinity found during a search. Note that passing a zeroed out block of attributes is NOT equivalent to passing in NULL!

## Topics

### Instance Properties

- [attributeList](iobluetoothdevicesearchattributes/attributelist.md)
- [deviceAttributeCount](iobluetoothdevicesearchattributes/deviceattributecount.md)
- [maxResults](iobluetoothdevicesearchattributes/maxresults.md)
- [options](iobluetoothdevicesearchattributes/options.md)

## See Also

### Structures

- [BluetoothAFHHostChannelClassification](bluetoothafhhostchannelclassification.md)
- [BluetoothAFHResults](bluetoothafhresults.md)
- [BluetoothAMPCommandRejectReason](bluetoothampcommandrejectreason.md)
- [BluetoothAMPCreatePhysicalLinkResponseStatus](bluetoothampcreatephysicallinkresponsestatus.md)
- [BluetoothAMPDisconnectPhysicalLinkResponseStatus](bluetoothampdisconnectphysicallinkresponsestatus.md)
- [BluetoothAMPDiscoverResponseControllerStatus](bluetoothampdiscoverresponsecontrollerstatus.md)
- [BluetoothAMPGetAssocResponseStatus](bluetoothampgetassocresponsestatus.md)
- [BluetoothAMPGetInfoResponseStatus](bluetoothampgetinforesponsestatus.md)
- [BluetoothAMPManagerCode](bluetoothampmanagercode.md)
- [BluetoothAuthenticationRequirementsValues](bluetoothauthenticationrequirementsvalues.md)
- [BluetoothCompanyIdentifers](bluetoothcompanyidentifers.md)
- [BluetoothDeviceAddress](bluetoothdeviceaddress.md)
- [BluetoothEnhancedSynchronousConnectionInfo](bluetoothenhancedsynchronousconnectioninfo.md)
- [BluetoothEventFilterCondition](bluetootheventfiltercondition.md)
- [BluetoothFeatureBits](bluetoothfeaturebits.md)
