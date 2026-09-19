> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymentrequestshippingcontactupdate/shippingmethods

# shippingMethods (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of shipping methods.

## Declaration

```swift
var shippingMethods: [PKShippingMethod] { get set }
```

## See Also

### Updating user errors and shipping methods

- [errors](errors.md): An array of shipping contact information errors that the user must resolve.

# shippingMethods (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of shipping methods.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<PKShippingMethod *> * shippingMethods;
```

## See Also

### Updating user errors and shipping methods

- [errors](errors.md): An array of shipping contact information errors that the user must resolve.
