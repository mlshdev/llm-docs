> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.upi-device-validation](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.upi-device-validation)

# com.apple.developer.upi-device-validation (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.0+ · iPadOS 17.0+

A Boolean value that indicates whether your app can use UPI device enrollment for NPCI financial transactions.

## Details

`com.apple.developer.upi-device-validation`

<a id="Discussion"></a>

## Discussion

The Unified Payments Interface (UPI) system, developed by the National Payments Corporation of India (NPCI), supports mobile-app financial transactions. This entitlement allows your app to display a non-editable Messages share sheet with a predefined recipient and token, and includes methods to verify the token was successfully transmitted to the carrier network.

With this entitlement, you can use [setUPIVerificationCodeSendCompletion(\_:)](../../messageui/mfmessagecomposeviewcontroller/setupiverificationcodesendcompletion%28__%29.md), which configures the instance of [MFMessageComposeViewController](../../messageui/mfmessagecomposeviewcontroller.md) with non-editable recipients and body fields. You also need this entitlement to use [CTCellularPlanStatus](../../coretelephony/ctcellularplanstatus.md).

You must be an account holder of a development team to get permission to use this entitlement. To request access, see [UPI device validation Entitlement Request](https://developer.apple.com/contact/request/upi-device-validation). Once you’re approved, add the entitlement to your app in the Xcode property list editor. Set the entitlement’s type to Boolean, and the corresponding value to YES.

# com.apple.developer.upi-device-validation (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.0+ · iPadOS 17.0+

A Boolean value that indicates whether your app can use UPI device enrollment for NPCI financial transactions.

## Details

`com.apple.developer.upi-device-validation`

<a id="Discussion"></a>

## Discussion

The Unified Payments Interface (UPI) system, developed by the National Payments Corporation of India (NPCI), supports mobile-app financial transactions. This entitlement allows your app to display a non-editable Messages share sheet with a predefined recipient and token, and includes methods to verify the token was successfully transmitted to the carrier network.

With this entitlement, you can use [setUPIVerificationCodeSendCompletion:](../../messageui/mfmessagecomposeviewcontroller/setupiverificationcodesendcompletion%28__%29.md), which configures the instance of [MFMessageComposeViewController](../../messageui/mfmessagecomposeviewcontroller.md) with non-editable recipients and body fields. You also need this entitlement to use [CTCellularPlanStatus](../../coretelephony/ctcellularplanstatus.md).

You must be an account holder of a development team to get permission to use this entitlement. To request access, see [UPI device validation Entitlement Request](https://developer.apple.com/contact/request/upi-device-validation). Once you’re approved, add the entitlement to your app in the Xcode property list editor. Set the entitlement’s type to Boolean, and the corresponding value to YES.
