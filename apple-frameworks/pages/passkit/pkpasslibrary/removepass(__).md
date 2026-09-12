> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/removepass(_:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/removepass(_:))

# removePass(\_:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Removes the pass from the user’s pass library.

## Declaration

```swift
func removePass(_ pass: PKPass)
```

## Parameters

- `pass`: The pass to remove.

<a id="Discussion"></a>

## Discussion

This method does nothing if your app doesn’t have the appropriate entitlement.

A user must confirm adding a pass to Wallet so only remove the pass in response to a user action, such as responding to a prompt to remove the pass or an app setting.

## See Also

### Managing passes

- [isSecureElementPassActivationAvailable](issecureelementpassactivationavailable.md): A Boolean value that indicates whether the device supports creating Secure Element passes.
- [activate(\_:activationData:completion:)](activate%28__activationdata_completion_%29.md): Activates a Secure Element pass using the specified data.
- [replacePass(with:)](replacepass%28with_%29.md): Replaces a pass in the user’s pass library with the specified pass.

# removePass: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Removes the pass from the user’s pass library.

## Declaration

```objectivec
- (void) removePass:(PKPass *) pass;
```

## Parameters

- `pass`: The pass to remove.

<a id="Discussion"></a>

## Discussion

This method does nothing if your app doesn’t have the appropriate entitlement.

A user must confirm adding a pass to Wallet so only remove the pass in response to a user action, such as responding to a prompt to remove the pass or an app setting.

## See Also

### Managing passes

- [secureElementPassActivationAvailable](issecureelementpassactivationavailable.md): A Boolean value that indicates whether the device supports creating Secure Element passes.
- [activateSecureElementPass:withActivationData:completion:](activate%28__activationdata_completion_%29.md): Activates a Secure Element pass using the specified data.
- [replacePassWithPass:](replacepass%28with_%29.md): Replaces a pass in the user’s pass library with the specified pass.
