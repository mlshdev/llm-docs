> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/replacepass(with:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/replacepass(with:))

# replacePass(with:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Replaces a pass in the user’s pass library with the specified pass.

## Declaration

```swift
func replacePass(with pass: PKPass) -> Bool
```

## Parameters

- `pass`: The new pass.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if PassKit replaces the pass successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The new pass replaces the existing pass with the same pass type identifier and serial number. If there isn’t such a pass in the user’s pass library, the replacement fails.

## See Also

### Managing passes

- [isSecureElementPassActivationAvailable](issecureelementpassactivationavailable.md): A Boolean value that indicates whether the device supports creating Secure Element passes.
- [activate(\_:activationData:completion:)](activate%28__activationdata_completion_%29.md): Activates a Secure Element pass using the specified data.
- [removePass(\_:)](removepass%28__%29.md): Removes the pass from the user’s pass library.

# replacePassWithPass: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Replaces a pass in the user’s pass library with the specified pass.

## Declaration

```objectivec
- (BOOL) replacePassWithPass:(PKPass *) pass;
```

## Parameters

- `pass`: The new pass.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if PassKit replaces the pass successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The new pass replaces the existing pass with the same pass type identifier and serial number. If there isn’t such a pass in the user’s pass library, the replacement fails.

## See Also

### Managing passes

- [secureElementPassActivationAvailable](issecureelementpassactivationavailable.md): A Boolean value that indicates whether the device supports creating Secure Element passes.
- [activateSecureElementPass:withActivationData:completion:](activate%28__activationdata_completion_%29.md): Activates a Secure Element pass using the specified data.
- [removePass:](removepass%28__%29.md): Removes the pass from the user’s pass library.
