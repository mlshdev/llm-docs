> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanstatus/gethintforphonenumber(_:completion:)](https://developer.apple.com/documentation/coretelephony/ctcellularplanstatus/gethintforphonenumber(_:completion:))

# getHintForPhoneNumber(\_:completion:) (Swift)

**Framework:** Core Telephony  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Provides an estimate of the system’s confidence of the existence of an active cellular plan for the device’s phone number.

## Declaration

```swift
class func getHintForPhoneNumber(_ phoneNumber: String, completion completionHandler: @escaping @Sendable (CTCellularPlanStatusAvailability, CTCellularPlanStatusAvailabilityConfidence, (any Error)?) -> Void)
```

```swift
class func hint(forPhoneNumber phoneNumber: String) async throws -> (CTCellularPlanStatusAvailability, CTCellularPlanStatusAvailabilityConfidence)
```

## Parameters

- `phoneNumber`: A phone number in [ITU-T E.164 international format](https://www.itu.int/rec/T-REC-E.164) (for example, `+15550001234`).
- `completionHandler`: A closure the framework calls with the cellular plan availability, confidence level, and any error that occurs.

<a id="discussion"></a>

## Discussion

Upon completion, the [CTCellularPlanStatusAvailability](../ctcellularplanstatusavailability.md) instance in the handler indicates whether the device has a cellular plan for the given phone number and the framework’s confidence ([CTCellularPlanStatusAvailabilityConfidence](../ctcellularplanstatusavailabilityconfidence.md)) that the determination is true.

Only call this method after you receive an [CTCellularPlanStatusAuthorization.authorized](../ctcellularplanstatusauthorization/authorized.md) status from [requestAuthorization(forPhoneNumber:completion:)](requestauthorization%28forphonenumber_completion_%29.md) or [getAuthorizationStatus(forPhoneNumber:completion:)](getauthorizationstatus%28forphonenumber_completion_%29.md).

## See Also

### Getting a cellular plan status hint

- [CTCellularPlanStatusAvailability](../ctcellularplanstatusavailability.md): Constants that indicate whether the device has a cellular plan for the given phone number.
- [CTCellularPlanStatusAvailabilityConfidence](../ctcellularplanstatusavailabilityconfidence.md): Constants that indicate the system’s confidence that the device has a cellular plan for a given phone number.

# getStatusHintForPhoneNumber:completion: (Objective-C)

**Framework:** Core Telephony  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Provides an estimate of the system’s confidence of the existence of an active cellular plan for the device’s phone number.

## Declaration

```objectivec
+ (void) getStatusHintForPhoneNumber:(NSString *) phoneNumber completion:(void (^)(CTCellularPlanStatusAvailability , CTCellularPlanStatusAvailabilityConfidence , NSError *error)) completionHandler;
```

## Parameters

- `phoneNumber`: A phone number in [ITU-T E.164 international format](https://www.itu.int/rec/T-REC-E.164) (for example, `+15550001234`).
- `completionHandler`: A closure the framework calls with the cellular plan availability, confidence level, and any error that occurs.

<a id="discussion"></a>

## Discussion

Upon completion, the [CTCellularPlanStatusAvailability](../ctcellularplanstatusavailability.md) instance in the handler indicates whether the device has a cellular plan for the given phone number and the framework’s confidence ([CTCellularPlanStatusAvailabilityConfidence](../ctcellularplanstatusavailabilityconfidence.md)) that the determination is true.

Only call this method after you receive an [CTCellularPlanStatusAuthorizationAuthorized](../ctcellularplanstatusauthorization/authorized.md) status from [requestAuthorizationForPhoneNumber:completion:](requestauthorization%28forphonenumber_completion_%29.md) or [getAuthorizationStatusForPhoneNumber:completion:](getauthorizationstatus%28forphonenumber_completion_%29.md).

## See Also

### Getting a cellular plan status hint

- [CTCellularPlanStatusAvailability](../ctcellularplanstatusavailability.md): Constants that indicate whether the device has a cellular plan for the given phone number.
- [CTCellularPlanStatusAvailabilityConfidence](../ctcellularplanstatusavailabilityconfidence.md): Constants that indicate the system’s confidence that the device has a cellular plan for a given phone number.
