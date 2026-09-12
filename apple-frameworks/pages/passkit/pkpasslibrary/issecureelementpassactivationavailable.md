> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/issecureelementpassactivationavailable](https://developer.apple.com/documentation/passkit/pkpasslibrary/issecureelementpassactivationavailable)

# isSecureElementPassActivationAvailable (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+ · watchOS 6.2+

A Boolean value that indicates whether the device supports creating Secure Element passes.

## Declaration

```swift
var isSecureElementPassActivationAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Secure Element pass activation requires a special entitlement that Apple provides. If the entitlement isn’t present, this property’s value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing passes

- [activate(\_:activationData:completion:)](activate%28__activationdata_completion_%29.md): Activates a Secure Element pass using the specified data.
- [replacePass(with:)](replacepass%28with_%29.md): Replaces a pass in the user’s pass library with the specified pass.
- [removePass(\_:)](removepass%28__%29.md): Removes the pass from the user’s pass library.

# secureElementPassActivationAvailable (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+ · watchOS 6.2+

A Boolean value that indicates whether the device supports creating Secure Element passes.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isSecureElementPassActivationAvailable) BOOL secureElementPassActivationAvailable;
```

<a id="Discussion"></a>

## Discussion

Secure Element pass activation requires a special entitlement that Apple provides. If the entitlement isn’t present, this property’s value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing passes

- [activateSecureElementPass:withActivationData:completion:](activate%28__activationdata_completion_%29.md): Activates a Secure Element pass using the specified data.
- [replacePassWithPass:](replacepass%28with_%29.md): Replaces a pass in the user’s pass library with the specified pass.
- [removePass:](removepass%28__%29.md): Removes the pass from the user’s pass library.
