> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/devices](https://developer.apple.com/documentation/enterpriseprogramapi/devices)

# Devices

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** API Collection

Register devices for development and testing.

<a id="overview"></a>

## Overview

A `devices` resource represents the Apple devices that you register to use for development and testing. You can register a limited number of new devices and get information about them.

> **Note**

>  You can only reset your device list through the Apple Developer website.

## Topics

### Registering a Device

- [Register a New Device](register-a-new-device.md): Register a new device for app development.

### Getting Device Information

- [List Devices](list-devices.md): Find and list devices registered to your team.
- [Read Device Information](read-device-information.md)

### Modifying Device Metadata

- [Modify a Registered Device](modify-a-registered-device.md): Update the name or status of a specific device.

### Objects

- [Device](device.md): The data structure that represents a Devices resource.
- [DevicesWithoutIncludesResponse](deviceswithoutincludesresponse.md)
- [DeviceCreateRequest](devicecreaterequest.md): The request body you use to create a Device.
- [DeviceUpdateRequest](deviceupdaterequest.md): The request body you use to update a Device.
- [DeviceResponse](deviceresponse.md): A response that contains a single Devices resource.
- [DevicesResponse](devicesresponse.md): A response that contains a list of Devices resources.

## See Also

### Provisioning

- [Bundle IDs](bundle-ids.md): Manage the bundle IDs that uniquely identify your apps.
- [Bundle ID Capabilities](bundle-id-capabilities.md): Manage the app capabilities for a bundle ID.
- [Certificates](certificates.md): Create, download, and revoke signing certificates for app development and distribution.
- [Pass Type Ids](passtypeids.md): Create, download, and revoke pass type ids for app development and distribution.
- [Profiles](profiles.md): Create, delete, and download provisioning profiles for development and distribution.
