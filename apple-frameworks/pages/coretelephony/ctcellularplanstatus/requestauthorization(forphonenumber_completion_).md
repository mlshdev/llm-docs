> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanstatus/requestauthorization(forphonenumber:completion:)](https://developer.apple.com/documentation/coretelephony/ctcellularplanstatus/requestauthorization(forphonenumber:completion:))

# requestAuthorization(forPhoneNumber:completion:) (Swift)

**Framework:** Core Telephony  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Presents a prompt that asks the person to allow cellular plan checks for their phone number.

## Declaration

```swift
class func requestAuthorization(forPhoneNumber phoneNumber: String, completion completionHandler: @escaping @Sendable (CTCellularPlanStatusAuthorization, (any Error)?) -> Void)
```

```swift
class func requestAuthorization(forPhoneNumber phoneNumber: String) async throws -> CTCellularPlanStatusAuthorization
```

## Parameters

- `phoneNumber`: A phone number in [ITU-T E.164 international format](https://www.itu.int/rec/T-REC-E.164) (for example, `+15550001234`).
- `completionHandler`: A closure the framework calls with the authorization result and any error that occurs.

<a id="discussion"></a>

## Discussion

The completion handler receives a [CTCellularPlanStatusAuthorization](../ctcellularplanstatusauthorization.md) value in the following circumstances:

- **[CTCellularPlanStatusAuthorization.authorized](../ctcellularplanstatusauthorization/authorized.md)**: The person grants permission.
- **[CTCellularPlanStatusAuthorization.notAuthorized](../ctcellularplanstatusauthorization/notauthorized.md)**: The person denies permission.
- **[CTCellularPlanStatusAuthorization.restricted](../ctcellularplanstatusauthorization/restricted.md)**: Cellular plan checks aren’t available for the given number.

Only call [getHintForPhoneNumber(\_:completion:)](gethintforphonenumber%28__completion_%29.md) after receiving an [CTCellularPlanStatusAuthorization.authorized](../ctcellularplanstatusauthorization/authorized.md) result.

## See Also

### Requesting phone number authorization

- [CTCellularPlanStatusAuthorization](../ctcellularplanstatusauthorization.md): Constants that indicate the authorization status for accessing cellular plan information for a phone number.

# requestAuthorizationForPhoneNumber:completion: (Objective-C)

**Framework:** Core Telephony  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Presents a prompt that asks the person to allow cellular plan checks for their phone number.

## Declaration

```objectivec
+ (void) requestAuthorizationForPhoneNumber:(NSString *) phoneNumber completion:(void (^)(CTCellularPlanStatusAuthorization status, NSError *error)) completionHandler;
```

## Parameters

- `phoneNumber`: A phone number in [ITU-T E.164 international format](https://www.itu.int/rec/T-REC-E.164) (for example, `+15550001234`).
- `completionHandler`: A closure the framework calls with the authorization result and any error that occurs.

<a id="discussion"></a>

## Discussion

The completion handler receives a [CTCellularPlanStatusAuthorization](../ctcellularplanstatusauthorization.md) value in the following circumstances:

- **[CTCellularPlanStatusAuthorizationAuthorized](../ctcellularplanstatusauthorization/authorized.md)**: The person grants permission.
- **[CTCellularPlanStatusAuthorizationNotAuthorized](../ctcellularplanstatusauthorization/notauthorized.md)**: The person denies permission.
- **[CTCellularPlanStatusAuthorizationRestricted](../ctcellularplanstatusauthorization/restricted.md)**: Cellular plan checks aren’t available for the given number.

Only call [getStatusHintForPhoneNumber:completion:](gethintforphonenumber%28__completion_%29.md) after receiving an [CTCellularPlanStatusAuthorizationAuthorized](../ctcellularplanstatusauthorization/authorized.md) result.

## See Also

### Requesting phone number authorization

- [CTCellularPlanStatusAuthorization](../ctcellularplanstatusauthorization.md): Constants that indicate the authorization status for accessing cellular plan information for a phone number.
