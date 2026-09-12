> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/automateddeviceenrollment](https://developer.apple.com/documentation/automateddeviceenrollment)

# Automated Device Enrollment

**Framework:** Automated Device Enrollment  
**Kind:** Framework  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+

Allow users of third-party MDM apps to add macOS and iOS devices to their organization.

<a id="overview"></a>

## Overview

This framework provides a user interface for device administrators to add macOS, iOS, and iPadOS devices to their Apple School Manager, Apple Business Manager, and Apple Business Essentials organizations. The provided SwiftUI view allows a user with device enrollment privileges to sign in with their Managed Apple ID and add devices to their organization.

This feature requires Bluetooth access to discover and pair with nearby devices, and camera access to scan visual pairing PIN codes. To use this feature, you must have the Automated Device Enrollment entitlement. To obtain permission for this entitlement, see [Automated Device Enrollment Entitlement Request](https://developer.apple.com/contact/request/automated-device-enrollment/).

## Topics

### Essentials

- [automatedDeviceEnrollmentAddition(isPresented:)](https://developer.apple.com/documentation/swiftui/view/automateddeviceenrollmentaddition%28ispresented:%29): Presents a modal view that enables users to add devices to their organization.
- [com.apple.developer.automated-device-enrollment.add-devices](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.automated-device-enrollment.add-devices): A Boolean value that indicates whether an app may add a device to Automated Device Enrollment.
