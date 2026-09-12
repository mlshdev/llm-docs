> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/dateofbirth()](https://developer.apple.com/documentation/healthkit/hkhealthstore/dateofbirth())

# dateOfBirth() (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Reads the user’s date of birth from the HealthKit store as a date value.

> Use [dateOfBirthComponents()](dateofbirthcomponents%28%29.md) instead.

## Declaration

```swift
func dateOfBirth() throws -> Date
```

<a id="return-value"></a>

## Return Value

An [NSDate](../../foundation/nsdate.md) object representing the user’s birthdate, or `nil`.

## Mentioned In

- [About the HealthKit framework](../about-the-healthkit-framework.md)

<a id="Discussion"></a>

## Discussion

If the user has not yet specified a birth date, or if the user has denied your app permission to read the birth date, this method returns `nil`.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Reading characteristic data

- [biologicalSex()](biologicalsex%28%29.md): Reads someone’s biological sex from the HealthKit store.
- [bloodType()](bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirthComponents()](dateofbirthcomponents%28%29.md): Reads the user’s date of birth from the HealthKit store as date components.
- [fitzpatrickSkinType()](fitzpatrickskintype%28%29.md): Reads the user’s Fitzpatrick Skin Type from the HealthKit store.
- [wheelchairUse()](wheelchairuse%28%29.md): Reads the user’s wheelchair use from the HealthKit store.

# dateOfBirthWithError: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 3.0)

Reads the user’s date of birth from the HealthKit store as a date value.

> Use [dateOfBirthComponentsWithError:](dateofbirthcomponents%28%29.md) instead.

## Declaration

```objectivec
- (NSDate *) dateOfBirthWithError:(NSError **) error;
```

## Parameters

- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing information about the error. Specify `nil` for this parameter if you do not want to receive error information.

<a id="return-value"></a>

## Return Value

An [NSDate](../../foundation/nsdate.md) object representing the user’s birthdate, or `nil`.

## Mentioned In

- [About the HealthKit framework](../about-the-healthkit-framework.md)

<a id="Discussion"></a>

## Discussion

If the user has not yet specified a birth date, or if the user has denied your app permission to read the birth date, this method returns `nil`.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Reading characteristic data

- [biologicalSexWithError:](biologicalsex%28%29.md): Reads someone’s biological sex from the HealthKit store.
- [bloodTypeWithError:](bloodtype%28%29.md): Reads the user’s blood type from the HealthKit store.
- [dateOfBirthComponentsWithError:](dateofbirthcomponents%28%29.md): Reads the user’s date of birth from the HealthKit store as date components.
- [fitzpatrickSkinTypeWithError:](fitzpatrickskintype%28%29.md): Reads the user’s Fitzpatrick Skin Type from the HealthKit store.
- [wheelchairUseWithError:](wheelchairuse%28%29.md): Reads the user’s wheelchair use from the HealthKit store.
