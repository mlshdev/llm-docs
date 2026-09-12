> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentpass](https://developer.apple.com/documentation/passkit/pkpaymentpass)

# PKPaymentPass (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that represents a provisioned payment card for in-app payments.

## Declaration

```swift
class PKPaymentPass
```

<a id="overview"></a>

## Overview

Use [PKSecureElementPass](pksecureelementpass.md) in apps instead of this class to implement a payment pass in apps with these these system versions:

- iOS 13.4 or later
- macOS 11.0 or later
- watchOS 6.2 or later
- Mac Catalyst 13.4 or later

## Topics

### Determining activation state

- [activationState](pkpaymentpass/activationstate.md): Deprecated. The current activation state of the pass.
- [PKPaymentPassActivationState](pkpaymentpassactivationstate.md): Deprecated. Cases that indicate payment pass activation states.

## Relationships

### Inherits From

- [PKSecureElementPass](pksecureelementpass.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Payment passes

- [PKAddPaymentPassViewController](pkaddpaymentpassviewcontroller.md): Displays an interface that lets users add cards to Apple Pay from within your app.

# PKPaymentPass (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that represents a provisioned payment card for in-app payments.

## Declaration

```objectivec
@interface PKPaymentPass : PKSecureElementPass
```

<a id="overview"></a>

## Overview

Use [PKSecureElementPass](pksecureelementpass.md) in apps instead of this class to implement a payment pass in apps with these these system versions:

- iOS 13.4 or later
- macOS 11.0 or later
- watchOS 6.2 or later
- Mac Catalyst 13.4 or later

## Topics

### Determining activation state

- [activationState](pkpaymentpass/activationstate.md): Deprecated. The current activation state of the pass.
- [PKPaymentPassActivationState](pkpaymentpassactivationstate.md): Deprecated. Cases that indicate payment pass activation states.

## Relationships

### Inherits From

- [PKSecureElementPass](pksecureelementpass.md)

## See Also

### Payment passes

- [PKAddPaymentPassViewController](pkaddpaymentpassviewcontroller.md): Displays an interface that lets users add cards to Apple Pay from within your app.
