> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype/requiresperobjectauthorization()](https://developer.apple.com/documentation/healthkit/hkobjecttype/requiresperobjectauthorization())

# requiresPerObjectAuthorization() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean that indicates whether the data type requires per-object authorization.

## Declaration

```swift
func requiresPerObjectAuthorization() -> Bool
```

<a id="Discussion"></a>

## Discussion

If this method returns [true](https://developer.apple.com/documentation/swift/true), you must call [requestPerObjectReadAuthorization(for:predicate:completion:)](../hkhealthstore/requestperobjectreadauthorization%28for_predicate_completion_%29.md) each time you want to query for the data type. The user can then select the individual samples that the app has permission to read. The system always prompts the user for permission, regardless of whether they’ve previously granted permission.

> **Important**

>  Using the [requestAuthorization(toShare:read:)](../hkhealthstore/requestauthorization%28toshare_read_%29.md) method to request read access to any data types that require per-object authorization fails with an [HKError.Code.errorInvalidArgument](../hkerror/code/errorinvalidargument.md) error.

## See Also

### Related Documentation

- [HKPrescriptionType](../hkprescriptiontype.md): A type that identifies samples that store a prescription.
- [HKVisionPrescriptionTypeIdentifier](../hkvisionprescriptiontypeidentifier.md): A type identifier for vision prescription samples.

### Getting property data

- [identifier](identifier.md): A unique string identifying the HealthKit object type.

# requiresPerObjectAuthorization (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean that indicates whether the data type requires per-object authorization.

## Declaration

```objectivec
- (BOOL) requiresPerObjectAuthorization;
```

<a id="Discussion"></a>

## Discussion

If this method returns [true](https://developer.apple.com/documentation/swift/true), you must call [requestPerObjectReadAuthorizationForType:predicate:completion:](../hkhealthstore/requestperobjectreadauthorization%28for_predicate_completion_%29.md) each time you want to query for the data type. The user can then select the individual samples that the app has permission to read. The system always prompts the user for permission, regardless of whether they’ve previously granted permission.

> **Important**

>  Using the [requestAuthorization(toShare:read:)](../hkhealthstore/requestauthorization%28toshare_read_%29.md) method to request read access to any data types that require per-object authorization fails with an [HKErrorInvalidArgument](../hkerror/code/errorinvalidargument.md) error.

## See Also

### Related Documentation

- [HKPrescriptionType](../hkprescriptiontype.md): A type that identifies samples that store a prescription.
- [HKVisionPrescriptionTypeIdentifier](../hkvisionprescriptiontypeidentifier.md): A type identifier for vision prescription samples.

### Getting property data

- [identifier](identifier.md): A unique string identifying the HealthKit object type.
