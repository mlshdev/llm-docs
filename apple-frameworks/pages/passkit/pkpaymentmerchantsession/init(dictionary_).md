> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentmerchantsession/init(dictionary:)](https://developer.apple.com/documentation/passkit/pkpaymentmerchantsession/init(dictionary:))

# init(dictionary:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an object that validates the identity of a merchant for a payment request.

## Declaration

```swift
init(dictionary: [AnyHashable : Any])
```

## Parameters

- `dictionary`: An opaque object returned by the Apple Payment server.

# initWithDictionary: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an object that validates the identity of a merchant for a payment request.

## Declaration

```objectivec
- (instancetype) initWithDictionary:(NSDictionary *) dictionary;
```

## Parameters

- `dictionary`: An opaque object returned by the Apple Payment server.
