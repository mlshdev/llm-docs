> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/dateofbirthcomponents()](https://developer.apple.com/documentation/healthkit/hkhealthstore/dateofbirthcomponents())

# dateOfBirthComponents() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

Reads the user’s date of birth from the HealthKit store as date components.

## Declaration

```swift
func dateOfBirthComponents() throws -> DateComponents
```

<a id="return-value"></a>

## Return Value

An [NSDateComponents](../../foundation/nsdatecomponents.md) object representing the user’s birthdate in the Gregorian calendar, or `nil`.

<a id="Discussion"></a>

## Discussion

If the user has not yet specified a birth date, or if the user has denied your app permission to read the birth date, this method returns `nil`.

## See Also

### Reading characteristic data

- [biologicalSex()](biologicalsex%28%29.md): Reads someone’s biological sex from the HealthKit store.
- [bloodType()](bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirth()](dateofbirth%28%29.md): Deprecated. Reads the user’s date of birth from the HealthKit store as a date value.
- [fitzpatrickSkinType()](fitzpatrickskintype%28%29.md): Reads the user’s Fitzpatrick Skin Type from the HealthKit store.
- [wheelchairUse()](wheelchairuse%28%29.md): Reads the user’s wheelchair use from the HealthKit store.

# dateOfBirthComponentsWithError: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

Reads the user’s date of birth from the HealthKit store as date components.

## Declaration

```objectivec
- (NSDateComponents *) dateOfBirthComponentsWithError:(NSError **) error;
```

## Parameters

- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing information about the error. Specify `nil` for this parameter if you do not want to receive error information.

<a id="return-value"></a>

## Return Value

An [NSDateComponents](../../foundation/nsdatecomponents.md) object representing the user’s birthdate in the Gregorian calendar, or `nil`.

<a id="Discussion"></a>

## Discussion

If the user has not yet specified a birth date, or if the user has denied your app permission to read the birth date, this method returns `nil`.

## See Also

### Reading characteristic data

- [biologicalSexWithError:](biologicalsex%28%29.md): Reads someone’s biological sex from the HealthKit store.
- [bloodTypeWithError:](bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirthWithError:](dateofbirth%28%29.md): Deprecated. Reads the user’s date of birth from the HealthKit store as a date value.
- [fitzpatrickSkinTypeWithError:](fitzpatrickskintype%28%29.md): Reads the user’s Fitzpatrick Skin Type from the HealthKit store.
- [wheelchairUseWithError:](wheelchairuse%28%29.md): Reads the user’s wheelchair use from the HealthKit store.
