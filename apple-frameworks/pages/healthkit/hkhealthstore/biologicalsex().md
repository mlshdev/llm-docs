> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/biologicalsex()](https://developer.apple.com/documentation/healthkit/hkhealthstore/biologicalsex())

# biologicalSex() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Reads someone’s biological sex from the HealthKit store.

## Declaration

```swift
func biologicalSex() throws -> HKBiologicalSexObject
```

<a id="return-value"></a>

## Return Value

An object containing information about someone’s biological sex.

## Mentioned In

- [About the HealthKit framework](../about-the-healthkit-framework.md)

<a id="Discussion"></a>

## Discussion

For a list of possible values, see [HKBiologicalSex](../hkbiologicalsex.md).

If a person hasn’t set their biological sex or if they’ve denied permission to read the biological sex, this method returns an [HKBiologicalSex.notSet](../hkbiologicalsex/notset.md) value.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## Topics

### Possible Values

- [HKBiologicalSexObject](../hkbiologicalsexobject.md): This class acts as a wrapper for the [HKBiologicalSex](../hkbiologicalsex.md) enumeration.
- [HKBiologicalSex](../hkbiologicalsex.md): Constants indicating the user’s sex.

## See Also

### Reading characteristic data

- [bloodType()](bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirth()](dateofbirth%28%29.md): Deprecated. Reads the user’s date of birth from the HealthKit store as a date value.
- [dateOfBirthComponents()](dateofbirthcomponents%28%29.md): Reads the user’s date of birth from the HealthKit store as date components.
- [fitzpatrickSkinType()](fitzpatrickskintype%28%29.md): Reads the user’s Fitzpatrick Skin Type from the HealthKit store.
- [wheelchairUse()](wheelchairuse%28%29.md): Reads the user’s wheelchair use from the HealthKit store.

# biologicalSexWithError: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Reads someone’s biological sex from the HealthKit store.

## Declaration

```objectivec
- (HKBiologicalSexObject *) biologicalSexWithError:(NSError **) error;
```

## Parameters

- `error`: To receive error information, pass in a pointer to an error object. If an error occurs, the system sets this pointer to an error object that contains information about the problem. Specify `nil` for this parameter if you don’t want to receive error information.

<a id="return-value"></a>

## Return Value

An object containing information about someone’s biological sex. On failure, this method returns `nil`.

## Mentioned In

- [About the HealthKit framework](../about-the-healthkit-framework.md)

<a id="Discussion"></a>

## Discussion

For a list of possible values, see [HKBiologicalSex](../hkbiologicalsex.md).

If a person hasn’t set their biological sex or if they’ve denied permission to read the biological sex, this method returns an [HKBiologicalSexNotSet](../hkbiologicalsex/notset.md) value.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and [About Imported Cocoa Error Parameters](https://developer.apple.com/documentation/swift/about-imported-cocoa-error-parameters).

## Topics

### Possible Values

- [HKBiologicalSexObject](../hkbiologicalsexobject.md): This class acts as a wrapper for the [HKBiologicalSex](../hkbiologicalsex.md) enumeration.
- [HKBiologicalSex](../hkbiologicalsex.md): Constants indicating the user’s sex.

## See Also

### Reading characteristic data

- [bloodTypeWithError:](bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirthWithError:](dateofbirth%28%29.md): Deprecated. Reads the user’s date of birth from the HealthKit store as a date value.
- [dateOfBirthComponentsWithError:](dateofbirthcomponents%28%29.md): Reads the user’s date of birth from the HealthKit store as date components.
- [fitzpatrickSkinTypeWithError:](fitzpatrickskintype%28%29.md): Reads the user’s Fitzpatrick Skin Type from the HealthKit store.
- [wheelchairUseWithError:](wheelchairuse%28%29.md): Reads the user’s wheelchair use from the HealthKit store.
