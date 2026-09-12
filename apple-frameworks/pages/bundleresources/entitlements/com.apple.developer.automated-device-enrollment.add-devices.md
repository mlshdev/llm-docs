> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.automated-device-enrollment.add-devices](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.automated-device-enrollment.add-devices)

# com.apple.developer.automated-device-enrollment.add-devices

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 16.0+ · iPadOS 16.0+

A Boolean value that indicates whether an app may add a device to Automated Device Enrollment.

## Details

`com.apple.developer.automated-device-enrollment.add-devices`

<a id="Discussion"></a>

## Discussion

Use [automatedDeviceEnrollmentAddition(isPresented:)](https://developer.apple.com/documentation/swiftui/view/automateddeviceenrollmentaddition%28ispresented:%29) to present a UI that allows users to add devices to their organization. To obtain permission for this entitlement, see [Automated Device Enrollment Entitlement Request](https://developer.apple.com/contact/request/automated-device-enrollment/).

## See Also

### Device Management

- [Enrollment Single Sign On](com.apple.developer.enrollment-sso-capable.md): An entitlement that indicates the app participates in single sign-on (SSO) during enrollment into device management.
