> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymentrequestupdate/multitokencontexts

# multiTokenContexts (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An optional array of payment token contexts to request multiple payment tokens with one payment token per context.

## Declaration

```swift
var multiTokenContexts: [PKPaymentTokenContext]? { get set }
```

# multiTokenContexts (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An optional array of payment token contexts to request multiple payment tokens with one payment token per context.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<PKPaymentTokenContext *> * multiTokenContexts;
```
