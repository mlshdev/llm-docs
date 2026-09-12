> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waerror](https://developer.apple.com/documentation/wifiaware/waerror)

# WAError

**Framework:** Wi-Fi Aware  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An error in Wi-Fi Aware.

## Declaration

```swift
enum WAError
```

<a id="overview"></a>

## Overview

Wi-Fi Aware may throw a [WAError](waerror.md) to indicate when an underlying issue occurs, with the [Network](https://developer.apple.com/documentation/Network) framework throwing an `NWError`. If the `NWError` occurs due to Wi-Fi Aware, then the `Network/NWError/wifiAware` property on `Network/NWError` can provide access to additional information about the underlying Wi-Fi Aware error.

## Topics

### Checking for general errors

- [WAError.error(\_:)](waerror/error%28__%29.md): A general error.
- [WAError.ErrorDetails](waerror/errordetails.md): The optional details describing the error.

### Checking for missing entitlement

- [WAError.EntitlementMissingDetails](waerror/entitlementmissingdetails.md): The optional details describing the missing entitlement.
- [WAError.entitlementMissing(\_:)](waerror/entitlementmissing%28__%29.md): An error that occurs if your app is missing the entitlement needed for the requested operation.

### Checking for unsupported host hardware

- [WAError.wifiAwareUnsupported(\_:)](waerror/wifiawareunsupported%28__%29.md): An error that occurs if Wi-Fi Aware isn’t supported on the device.
- [WAError.WiFiAwareUnsupportedDetails](waerror/wifiawareunsupporteddetails.md): The optional details describing the unavailability of Wi-Fi Aware on the device.

### Checking for insufficient radio resources

- [WAError.noRadioResources(\_:)](waerror/noradioresources%28__%29.md): An error that occurs if the radio lacks resources.
- [WAError.NoRadioResourcesDetails](waerror/noradioresourcesdetails.md): The optional details describing what resources are lacking.

### Checking for undeclared services

- [WAError.serviceNotDeclared(\_:)](waerror/servicenotdeclared%28__%29.md): An error that occurs if your app didn’t declare the necessary services.
- [WAError.ServiceNotDeclaredDetails](waerror/servicenotdeclareddetails.md): The optional details that describe the app service wasn’t declared.

### Checking for service already in use

- [WAError.serviceAlreadySubscribing(\_:)](waerror/servicealreadysubscribing%28__%29.md): An error that occurs if a new subscriber or `Network/NetworkBrowser` can’t be created.
- [WAError.ServiceAlreadySubscribingDetails](waerror/servicealreadysubscribingdetails.md): The optional details describing the service that’s subscribing.
- [WAError.serviceAlreadyPublishing(\_:)](waerror/servicealreadypublishing%28__%29.md): An error that occurs if a new publisher or `Network/NetworkListener` can’t be created.
- [WAError.ServiceAlreadyPublishingDetails](waerror/servicealreadypublishingdetails.md): The optional details describing the service that’s publishing.

### Checking if paired devices are present or specified

- [WAError.noPairedDevices(\_:)](waerror/nopaireddevices%28__%29.md): An error that occurs if your app doesn’t have access to any paired devices.
- [WAError.NoPairedDevicesDetails](waerror/nopaireddevicesdetails.md): The optional details describing the lack of paired devices.

### Checking for invalid device

- [WAError.deviceInvalid(\_:)](waerror/deviceinvalid%28__%29.md): An error that occurs if your app specifies a paired device it doesn’t have access to.
- [WAError.DeviceInvalidDetails](waerror/deviceinvaliddetails.md): The optional details describing the device that’s invalid.

### Checking for unavailable device

- [WAError.deviceNoLongerAvailable(\_:)](waerror/devicenolongeravailable%28__%29.md): An error that occurs if a device is no longer available.
- [WAError.DeviceNoLongerAvailableDetails](waerror/devicenolongeravailabledetails.md): The optional details describing the unavailable device.

### Checking for connection

- [WAError.connectionFailed(\_:)](waerror/connectionfailed%28__%29.md): An error that occurs if the service is unable to connect.
- [WAError.ConnectionFailedDetails](waerror/connectionfaileddetails.md): The optional details describing the failed connection.

### Checking for timeouts

- [WAError.connectionIdleTimeout(\_:)](waerror/connectionidletimeout%28__%29.md): An error that occurs due to an idle or unused connection.
- [WAError.publisherTimeout(\_:)](waerror/publishertimeout%28__%29.md): An error that occurs due to publisher timeout.
- [WAError.subscriberTimeout(\_:)](waerror/subscribertimeout%28__%29.md): An error that occurs due to subscriber timeout.
- [WAError.ConnectionIdleTimeoutDetails](waerror/connectionidletimeoutdetails.md): The optional details describing the missing resources.
- [WAError.PublisherTimeoutDetails](waerror/publishertimeoutdetails.md): The optional details describing the timed out publisher.
- [WAError.SubscriberTimeoutDetails](waerror/subscribertimeoutdetails.md): The optional details describing the timed out subscriber.

### Checking for terminated connection

- [WAError.connectionTerminated(\_:)](waerror/connectionterminated%28__%29.md): An error that occurs if the connection was terminated.
- [WAError.ConnectionTerminatedDetails](waerror/connectionterminateddetails.md): The optional details describing the terminated connection.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [NWError](https://developer.apple.com/documentation/network/nwerror): The errors returned by objects in the Network framework.
