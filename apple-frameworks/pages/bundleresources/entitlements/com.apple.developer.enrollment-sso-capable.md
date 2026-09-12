> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.enrollment-sso-capable](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.enrollment-sso-capable)

# Enrollment Single Sign On

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · macOS 10.15+

An entitlement that indicates the app participates in single sign-on (SSO) during enrollment into device management.

## Details

`com.apple.developer.enrollment-sso-capable`

<a id="Discussion"></a>

## Discussion

Adopt this entitlement to inform the system that your app authenticates the person enrolling a device into device management, reducing the number of times the person needs to sign in to your service. For more information, see [Onboarding users with account-driven enrollment](../../devicemanagement/onboarding-users-with-account-driven-enrollment.md).

To request this entitlement for your app, [fill out the request form](https://developer.apple.com/contact/request/enrollment-sso/).

## See Also

### Device Management

- [com.apple.developer.automated-device-enrollment.add-devices](com.apple.developer.automated-device-enrollment.add-devices.md): A Boolean value that indicates whether an app may add a device to Automated Device Enrollment.
