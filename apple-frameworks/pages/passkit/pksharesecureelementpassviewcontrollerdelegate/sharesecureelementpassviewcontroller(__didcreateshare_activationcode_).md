> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pksharesecureelementpassviewcontrollerdelegate/sharesecureelementpassviewcontroller(_:didcreateshare:activationcode:)

# shareSecureElementPassViewController(\_:didCreateShare:activationCode:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```swift
optional func shareSecureElementPassViewController(_ controller: PKShareSecureElementPassViewController, didCreateShare universalShareURL: URL?, activationCode: String?)
```

# shareSecureElementPassViewController:didCreateShareURL:activationCode: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) shareSecureElementPassViewController:(PKShareSecureElementPassViewController *) controller didCreateShareURL:(NSURL *) universalShareURL activationCode:(NSString *) activationCode;
```
