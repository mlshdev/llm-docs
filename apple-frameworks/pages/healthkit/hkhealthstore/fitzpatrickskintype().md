> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/fitzpatrickskintype()](https://developer.apple.com/documentation/healthkit/hkhealthstore/fitzpatrickskintype())

# fitzpatrickSkinType() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Reads the user’s Fitzpatrick Skin Type from the HealthKit store.

## Declaration

```swift
func fitzpatrickSkinType() throws -> HKFitzpatrickSkinTypeObject
```

<a id="return-value"></a>

## Return Value

A skin type object representing the skin type selected by the user.

## Mentioned In

- [About the HealthKit framework](../about-the-healthkit-framework.md)

<a id="Discussion"></a>

## Discussion

If the user has not yet specified a skin type, or if the user has denied your app permission to read the skin type, this method returns [HKFitzpatrickSkinType.notSet](../hkfitzpatrickskintype/notset.md).

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## Topics

### Possible Values

- [HKFitzpatrickSkinTypeObject](../hkfitzpatrickskintypeobject.md): This class acts as a wrapper for the [HKFitzpatrickSkinType](../hkfitzpatrickskintype.md) enumeration.
- [HKFitzpatrickSkinType](../hkfitzpatrickskintype.md): Categories representing the user’s skin type based on the Fitzpatrick scale.

## See Also

### Reading characteristic data

- [biologicalSex()](biologicalsex%28%29.md): Reads someone’s biological sex from the HealthKit store.
- [bloodType()](bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirth()](dateofbirth%28%29.md): Deprecated. Reads the user’s date of birth from the HealthKit store as a date value.
- [dateOfBirthComponents()](dateofbirthcomponents%28%29.md): Reads the user’s date of birth from the HealthKit store as date components.
- [wheelchairUse()](wheelchairuse%28%29.md): Reads the user’s wheelchair use from the HealthKit store.

# fitzpatrickSkinTypeWithError: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Reads the user’s Fitzpatrick Skin Type from the HealthKit store.

## Declaration

```objectivec
- (HKFitzpatrickSkinTypeObject *) fitzpatrickSkinTypeWithError:(NSError **) error;
```

## Parameters

- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing information about the error. Specify `nil` for this parameter if you do not want to receive error information.

<a id="return-value"></a>

## Return Value

A skin type object representing the skin type selected by the user. On failure, this method returns `nil`.

## Mentioned In

- [About the HealthKit framework](../about-the-healthkit-framework.md)

<a id="Discussion"></a>

## Discussion

If the user has not yet specified a skin type, or if the user has denied your app permission to read the skin type, this method returns [HKFitzpatrickSkinTypeNotSet](../hkfitzpatrickskintype/notset.md).

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## Topics

### Possible Values

- [HKFitzpatrickSkinTypeObject](../hkfitzpatrickskintypeobject.md): This class acts as a wrapper for the [HKFitzpatrickSkinType](../hkfitzpatrickskintype.md) enumeration.
- [HKFitzpatrickSkinType](../hkfitzpatrickskintype.md): Categories representing the user’s skin type based on the Fitzpatrick scale.

## See Also

### Reading characteristic data

- [biologicalSexWithError:](biologicalsex%28%29.md): Reads someone’s biological sex from the HealthKit store.
- [bloodTypeWithError:](bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirthWithError:](dateofbirth%28%29.md): Deprecated. Reads the user’s date of birth from the HealthKit store as a date value.
- [dateOfBirthComponentsWithError:](dateofbirthcomponents%28%29.md): Reads the user’s date of birth from the HealthKit store as date components.
- [wheelchairUseWithError:](wheelchairuse%28%29.md): Reads the user’s wheelchair use from the HealthKit store.
