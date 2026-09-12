> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/openpaymentsetup()](https://developer.apple.com/documentation/passkit/pkpasslibrary/openpaymentsetup())

# openPaymentSetup() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

Opens the user interface to set up credit cards for Apple Pay.

## Declaration

```swift
func openPaymentSetup()
```

<a id="Discussion"></a>

## Discussion

Use this method to move users to the interface for adding credit cards. This method transfers control to the Wallet app on iPhone or to the Settings app on iPad. For devices that don’t support Apple Pay, this method does nothing.

# openPaymentSetup (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

Opens the user interface to set up credit cards for Apple Pay.

## Declaration

```objectivec
- (void) openPaymentSetup;
```

<a id="Discussion"></a>

## Discussion

Use this method to move users to the interface for adding credit cards. This method transfers control to the Wallet app on iPhone or to the Settings app on iPad. For devices that don’t support Apple Pay, this method does nothing.
