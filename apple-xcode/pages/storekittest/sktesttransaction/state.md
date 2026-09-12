> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction/state](https://developer.apple.com/documentation/storekittest/sktesttransaction/state)

# state (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The state of the transaction in the test environment.

## Declaration

```swift
var state: SKPaymentTransactionState { get }
```

<a id="discussion"></a>

## Discussion

The transaction states in the test environment are the same states that StoreKit uses in production.

# state (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The state of the transaction in the test environment.

## Declaration

```objectivec
@property (nonatomic, readonly) SKPaymentTransactionState state;
```

<a id="discussion"></a>

## Discussion

The transaction states in the test environment are the same states that StoreKit uses in production.
