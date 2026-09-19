> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymentrequestcouponcodeupdate/errors

# errors (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An array of errors for the coupon code that the user must resolve.

## Declaration

```swift
var errors: [any Error]! { get set }
```

# errors (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An array of errors for the coupon code that the user must resolve.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSArray<NSError *> * errors;
```
