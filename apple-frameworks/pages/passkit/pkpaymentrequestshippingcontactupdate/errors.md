> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymentrequestshippingcontactupdate/errors

# errors (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of shipping contact information errors that the user must resolve.

## Declaration

```swift
var errors: [any Error]! { get set }
```

## See Also

### Updating user errors and shipping methods

- [shippingMethods](shippingmethods.md): An array of shipping methods.

# errors (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of shipping contact information errors that the user must resolve.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSArray<NSError *> * errors;
```

## See Also

### Updating user errors and shipping methods

- [shippingMethods](shippingmethods.md): An array of shipping methods.
