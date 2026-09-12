> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanstatus](https://developer.apple.com/documentation/coretelephony/ctcellularplanstatus)

# CTCellularPlanStatus (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that validates tokens for UPI device verification or checks the availability of cellular plans for a phone number.

## Declaration

```swift
class CTCellularPlanStatus
```

<a id="overview"></a>

## Overview

This class provides UPI device validation or cellular plan availability checking.

<a id="Perform-UPI-device-validation"></a>

## Perform UPI device validation

To check if the Integrated Circuit Card Identifier (ICCID) on a device is associated with a given token, use the [setUPIVerificationCodeSendCompletion(\_:)](../messageui/mfmessagecomposeviewcontroller/setupiverificationcodesendcompletion%28__%29.md) method to configure an instance of a view for Unified Payments Interface (UPI) device validation. When the person sends an SMS, the framework creates a token and maps it to the  [MFMessageComposeViewController](../messageui/mfmessagecomposeviewcontroller.md) instance’s associated ICCID. Use this token to determine if changes exist to the underlying ICCID.

Call [getTokenWithCompletion(\_:)](ctcellularplanstatus/gettokenwithcompletion%28__%29.md) to retrieve the token. Your app has 30 seconds from sending the SMS before the framework drops the token. If the SMS fails, the framework revokes the token.

Use [checkValidity(ofToken:completionHandler:)](ctcellularplanstatus/checkvalidity%28oftoken_completionhandler_%29.md) to check the status of the token. The method returns `true` if the ICCID is present and turned on.

For more information on configuring an instance for UPI device validation, see [setUPIVerificationCodeSendCompletion(\_:)](../messageui/mfmessagecomposeviewcontroller/setupiverificationcodesendcompletion%28__%29.md).

> **Important**

>  To use UPI device validation, your app needs the [com.apple.developer.upi-device-validation](../bundleresources/entitlements/com.apple.developer.upi-device-validation.md) entitlement.

<a id="Check-cellular-plan-continuity"></a>

### Check cellular plan continuity

To check the status of a cellular plan, use [requestAuthorization(forPhoneNumber:completion:)](ctcellularplanstatus/requestauthorization%28forphonenumber_completion_%29.md) to ask the person for permission to access status information for a phone number. Provide phone numbers in [ITU-T E.164 international format](https://www.itu.int/rec/T-REC-E.164) (for example, `+15550001234`).

After the person grants authorization, the [getHintForPhoneNumber(\_:completion:)](ctcellularplanstatus/gethintforphonenumber%28__completion_%29.md) method suggests whether an active cellular plan exists for the phone number by providing:

- **[CTCellularPlanStatusAvailability](ctcellularplanstatusavailability.md)**: An indicator that a cellular plan for the phone number exists on the device
- **[CTCellularPlanStatusAvailabilityConfidence](ctcellularplanstatusavailabilityconfidence.md)**: A confidence level that the plan is active based on recent cellular activity

After the person answers the permission prompt once, your app can query [getAuthorizationStatus(forPhoneNumber:completion:)](ctcellularplanstatus/getauthorizationstatus%28forphonenumber_completion_%29.md) to check for existing authorization without presenting any UI.

## Topics

### Getting and storing a token

- [getTokenWithCompletion(\_:)](ctcellularplanstatus/gettokenwithcompletion%28__%29.md): Retrieves and stores the token associated with your app.

### Checking the validity of the ICCID

- [checkValidity(ofToken:completionHandler:)](ctcellularplanstatus/checkvalidity%28oftoken_completionhandler_%29.md): Checks the validity of the ICCID associated with the token.

### Requesting phone number authorization

- [requestAuthorization(forPhoneNumber:completion:)](ctcellularplanstatus/requestauthorization%28forphonenumber_completion_%29.md): Presents a prompt that asks the person to allow cellular plan checks for their phone number.
- [CTCellularPlanStatusAuthorization](ctcellularplanstatusauthorization.md): Constants that indicate the authorization status for accessing cellular plan information for a phone number.

### Checking authorization status

- [getAuthorizationStatus(forPhoneNumber:completion:)](ctcellularplanstatus/getauthorizationstatus%28forphonenumber_completion_%29.md): Returns the current authorization status for a phone number without presenting any UI.

### Getting a cellular plan status hint

- [getHintForPhoneNumber(\_:completion:)](ctcellularplanstatus/gethintforphonenumber%28__completion_%29.md): Provides an estimate of the system’s confidence of the existence of an active cellular plan for the device’s phone number.
- [CTCellularPlanStatusAvailability](ctcellularplanstatusavailability.md): Constants that indicate whether the device has a cellular plan for the given phone number.
- [CTCellularPlanStatusAvailabilityConfidence](ctcellularplanstatusavailabilityconfidence.md): Constants that indicate the system’s confidence that the device has a cellular plan for a given phone number.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# CTCellularPlanStatus (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that validates tokens for UPI device verification or checks the availability of cellular plans for a phone number.

## Declaration

```objectivec
@interface CTCellularPlanStatus : NSObject
```

<a id="overview"></a>

## Overview

This class provides UPI device validation or cellular plan availability checking.

<a id="Perform-UPI-device-validation"></a>

## Perform UPI device validation

To check if the Integrated Circuit Card Identifier (ICCID) on a device is associated with a given token, use the [setUPIVerificationCodeSendCompletion:](../messageui/mfmessagecomposeviewcontroller/setupiverificationcodesendcompletion%28__%29.md) method to configure an instance of a view for Unified Payments Interface (UPI) device validation. When the person sends an SMS, the framework creates a token and maps it to the  [MFMessageComposeViewController](../messageui/mfmessagecomposeviewcontroller.md) instance’s associated ICCID. Use this token to determine if changes exist to the underlying ICCID.

Call [getTokenWithCompletion:](ctcellularplanstatus/gettokenwithcompletion%28__%29.md) to retrieve the token. Your app has 30 seconds from sending the SMS before the framework drops the token. If the SMS fails, the framework revokes the token.

Use [checkValidityOfToken:completionHandler:](ctcellularplanstatus/checkvalidity%28oftoken_completionhandler_%29.md) to check the status of the token. The method returns `true` if the ICCID is present and turned on.

For more information on configuring an instance for UPI device validation, see [setUPIVerificationCodeSendCompletion:](../messageui/mfmessagecomposeviewcontroller/setupiverificationcodesendcompletion%28__%29.md).

> **Important**

>  To use UPI device validation, your app needs the [com.apple.developer.upi-device-validation](../bundleresources/entitlements/com.apple.developer.upi-device-validation.md) entitlement.

<a id="Check-cellular-plan-continuity"></a>

### Check cellular plan continuity

To check the status of a cellular plan, use [requestAuthorizationForPhoneNumber:completion:](ctcellularplanstatus/requestauthorization%28forphonenumber_completion_%29.md) to ask the person for permission to access status information for a phone number. Provide phone numbers in [ITU-T E.164 international format](https://www.itu.int/rec/T-REC-E.164) (for example, `+15550001234`).

After the person grants authorization, the [getStatusHintForPhoneNumber:completion:](ctcellularplanstatus/gethintforphonenumber%28__completion_%29.md) method suggests whether an active cellular plan exists for the phone number by providing:

- **[CTCellularPlanStatusAvailability](ctcellularplanstatusavailability.md)**: An indicator that a cellular plan for the phone number exists on the device
- **[CTCellularPlanStatusAvailabilityConfidence](ctcellularplanstatusavailabilityconfidence.md)**: A confidence level that the plan is active based on recent cellular activity

After the person answers the permission prompt once, your app can query [getAuthorizationStatusForPhoneNumber:completion:](ctcellularplanstatus/getauthorizationstatus%28forphonenumber_completion_%29.md) to check for existing authorization without presenting any UI.

## Topics

### Getting and storing a token

- [getTokenWithCompletion:](ctcellularplanstatus/gettokenwithcompletion%28__%29.md): Retrieves and stores the token associated with your app.

### Checking the validity of the ICCID

- [checkValidityOfToken:completionHandler:](ctcellularplanstatus/checkvalidity%28oftoken_completionhandler_%29.md): Checks the validity of the ICCID associated with the token.

### Requesting phone number authorization

- [requestAuthorizationForPhoneNumber:completion:](ctcellularplanstatus/requestauthorization%28forphonenumber_completion_%29.md): Presents a prompt that asks the person to allow cellular plan checks for their phone number.
- [CTCellularPlanStatusAuthorization](ctcellularplanstatusauthorization.md): Constants that indicate the authorization status for accessing cellular plan information for a phone number.

### Checking authorization status

- [getAuthorizationStatusForPhoneNumber:completion:](ctcellularplanstatus/getauthorizationstatus%28forphonenumber_completion_%29.md): Returns the current authorization status for a phone number without presenting any UI.

### Getting a cellular plan status hint

- [getStatusHintForPhoneNumber:completion:](ctcellularplanstatus/gethintforphonenumber%28__completion_%29.md): Provides an estimate of the system’s confidence of the existence of an active cellular plan for the device’s phone number.
- [CTCellularPlanStatusAvailability](ctcellularplanstatusavailability.md): Constants that indicate whether the device has a cellular plan for the given phone number.
- [CTCellularPlanStatusAvailabilityConfidence](ctcellularplanstatusavailabilityconfidence.md): Constants that indicate the system’s confidence that the device has a cellular plan for a given phone number.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
