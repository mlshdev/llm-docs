> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/devices](https://developer.apple.com/documentation/appstoreconnectapi/devices)

# Devices

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Register devices for development and testing.

<a id="overview"></a>

## Overview

A `devices` resource represents the iOS, Apple TV, Apple Watch, and Mac devices that you register to use for development and testing. You can register a limited number of new devices and get information about them.

> **Note**

>  You can only remove registered devices through the Apple Developer website.

## Topics

### Registering a Device

- [Register a new device](post-v1-devices.md): Register a new device for app development.

### Getting Device Information

- [List devices](get-v1-devices.md): Find and list devices registered to your team.
- [Read device information](get-v1-devices-_id_.md): Get information for a specific device registered to your team.

### Modifying Device Metadata

- [Modify a registered device](patch-v1-devices-_id_.md): Update the name or status of a specific device.

### Objects

- [Device](device.md): A physical Apple device registered in your developer account for testing, identified by its UDID and device type.
- [DevicesWithoutIncludesResponse](deviceswithoutincludesresponse.md): A response containing a list of registered devices, without related resources.
- [DeviceCreateRequest](devicecreaterequest.md): The request body you use to create a Device.
- [DeviceUpdateRequest](deviceupdaterequest.md): The request body you use to update a Device.
- [DeviceResponse](deviceresponse.md): The response body for endpoints that create, read, or modify a single registered device.
- [DevicesResponse](devicesresponse.md): The response body for endpoints that list registered devices.

## See Also

### Provisioning

- [Bundle IDs](bundle-ids.md): Manage the bundle IDs that uniquely identify your apps.
- [Bundle ID Capabilities](bundle-id-capabilities.md): Manage the app capabilities for a bundle ID.
- [Certificates](certificates.md): Create, download, and revoke signing certificates for app development and distribution.
- [Profiles](profiles.md): Create, delete, and download provisioning profiles that enable app installations for development and distribution.
- [Merchant ID](merchantids.md): Manage your merchant ID for Apple Pay.
- [Pass type Ids](pass-type-id.md): Create, download, and revoke pass type ids for app development and distribution.
