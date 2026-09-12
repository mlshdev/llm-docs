> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityelement/age(atleast:)](https://developer.apple.com/documentation/passkit/pkidentityelement/age(atleast:))

# age(atLeast:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns an element that represents the user’s age is at least the age you specify.

## Declaration

```swift
class func age(atLeast age: Int) -> Self
```

## Parameters

- `age`: The age a user must at least be, in years from `1` to `125`.

<a id="return-value"></a>

## Return Value

An instance with the age you specify if the user’s age is at least the age you specify. If the element is unavailable, this method falls back to a request for [age](age.md).

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

## See Also

### Getting an age identity element

- [age](age.md): An element that represents the user’s age, in years.

# ageThresholdElementWithAge: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns an element that represents the user’s age is at least the age you specify.

## Declaration

```objectivec
+ (instancetype) ageThresholdElementWithAge:(NSInteger) age;
```

## Parameters

- `age`: The age a user must at least be, in years from `1` to `125`.

<a id="return-value"></a>

## Return Value

An instance with the age you specify if the user’s age is at least the age you specify. If the element is unavailable, this method falls back to a request for [ageElement](age.md).

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

## See Also

### Getting an age identity element

- [ageElement](age.md): An element that represents the user’s age, in years.
