> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/wheelchairuse()](https://developer.apple.com/documentation/healthkit/hkhealthstore/wheelchairuse())

# wheelchairUse() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

Reads the user’s wheelchair use from the HealthKit store.

## Declaration

```swift
func wheelchairUse() throws -> HKWheelchairUseObject
```

<a id="return-value"></a>

## Return Value

An object indicating whether the user uses a wheelchair.

<a id="Discussion"></a>

## Discussion

If the user has not yet specified their wheelchair use, or if the user has denied your app permission to read the wheelchair use, this method returns [HKWheelchairUse.notSet](../hkwheelchairuse/notset.md).

## Topics

### Possible Values

- [HKWheelchairUseObject](../hkwheelchairuseobject.md): This class acts as a wrapper for the wheelchair use enumeration.
- [HKWheelchairUse](../hkwheelchairuse.md): Constants indicating the user’s wheelchair use.

## See Also

### Reading characteristic data

- [biologicalSex()](biologicalsex%28%29.md): Reads someone’s biological sex from the HealthKit store.
- [bloodType()](bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirth()](dateofbirth%28%29.md): Deprecated. Reads the user’s date of birth from the HealthKit store as a date value.
- [dateOfBirthComponents()](dateofbirthcomponents%28%29.md): Reads the user’s date of birth from the HealthKit store as date components.
- [fitzpatrickSkinType()](fitzpatrickskintype%28%29.md): Reads the user’s Fitzpatrick Skin Type from the HealthKit store.

# wheelchairUseWithError: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

Reads the user’s wheelchair use from the HealthKit store.

## Declaration

```objectivec
- (HKWheelchairUseObject *) wheelchairUseWithError:(NSError **) error;
```

## Parameters

- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing information about the error. Specify `nil` for this parameter if you do not want to receive error information.

<a id="return-value"></a>

## Return Value

An object indicating whether the user uses a wheelchair. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

If the user has not yet specified their wheelchair use, or if the user has denied your app permission to read the wheelchair use, this method returns [HKWheelchairUseNotSet](../hkwheelchairuse/notset.md).

## Topics

### Possible Values

- [HKWheelchairUseObject](../hkwheelchairuseobject.md): This class acts as a wrapper for the wheelchair use enumeration.
- [HKWheelchairUse](../hkwheelchairuse.md): Constants indicating the user’s wheelchair use.

## See Also

### Reading characteristic data

- [biologicalSexWithError:](biologicalsex%28%29.md): Reads someone’s biological sex from the HealthKit store.
- [bloodTypeWithError:](bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirthWithError:](dateofbirth%28%29.md): Deprecated. Reads the user’s date of birth from the HealthKit store as a date value.
- [dateOfBirthComponentsWithError:](dateofbirthcomponents%28%29.md): Reads the user’s date of birth from the HealthKit store as date components.
- [fitzpatrickSkinTypeWithError:](fitzpatrickskintype%28%29.md): Reads the user’s Fitzpatrick Skin Type from the HealthKit store.
