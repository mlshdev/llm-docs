> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityelement/age](https://developer.apple.com/documentation/passkit/pkidentityelement/age)

# age (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An element that represents the user’s age, in years.

## Declaration

```swift
class var age: PKIdentityElement { get }
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

## See Also

### Getting an age identity element

- [age(atLeast:)](age%28atleast_%29.md): Returns an element that represents the user’s age is at least the age you specify.

# ageElement (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An element that represents the user’s age, in years.

## Declaration

```objectivec
@property (class, nonatomic, readonly) PKIdentityElement * ageElement;
```

## Mentioned In

- [Requesting identity data from a Wallet pass](../requesting-identity-data-from-a-wallet-pass.md)

## See Also

### Getting an age identity element

- [ageThresholdElementWithAge:](age%28atleast_%29.md): Returns an element that represents the user’s age is at least the age you specify.
