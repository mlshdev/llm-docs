> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/activate(_:activationdata:completion:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/activate(_:activationdata:completion:))

# activate(\_:activationData:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

Activates a Secure Element pass using the specified data.

## Declaration

```swift
func activate(_ secureElementPass: PKSecureElementPass, activationData: Data, completion: (@Sendable (Bool, (any Error)?) -> Void)? = nil)
```

```swift
func activate(_ secureElementPass: PKSecureElementPass, activationData: Data) async throws -> Bool
```

## Parameters

- `secureElementPass`: The Secure Element pass to activate.
- `activationData`: A cryptographic value that the activation process requires.
- `completion`: A closure that PassKit executes after it attempts activation.

  - **`success`**: A value that indicates whether activation is successful..
  - **`error`**: If activation fails, an error that describes the failure; otherwise, otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

You must provision the Secure Element pass and make sure it’s in the [PKSecureElementPass.PassActivationState.requiresActivation](../pksecureelementpass/passactivationstate-swift.enum/requiresactivation.md) state before you call this method.

## See Also

### Managing passes

- [isSecureElementPassActivationAvailable](issecureelementpassactivationavailable.md): A Boolean value that indicates whether the device supports creating Secure Element passes.
- [replacePass(with:)](replacepass%28with_%29.md): Replaces a pass in the user’s pass library with the specified pass.
- [removePass(\_:)](removepass%28__%29.md): Removes the pass from the user’s pass library.

# activateSecureElementPass:withActivationData:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

Activates a Secure Element pass using the specified data.

## Declaration

```objectivec
- (void) activateSecureElementPass:(PKSecureElementPass *) secureElementPass withActivationData:(NSData *) activationData completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `secureElementPass`: The Secure Element pass to activate.
- `activationData`: A cryptographic value that the activation process requires.
- `completion`: A closure that PassKit executes after it attempts activation.

  - **`success`**: A value that indicates whether activation is successful..
  - **`error`**: If activation fails, an error that describes the failure; otherwise, otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

You must provision the Secure Element pass and make sure it’s in the [PKSecureElementPassActivationStateRequiresActivation](../pksecureelementpass/passactivationstate-swift.enum/requiresactivation.md) state before you call this method.

## See Also

### Managing passes

- [secureElementPassActivationAvailable](issecureelementpassactivationavailable.md): A Boolean value that indicates whether the device supports creating Secure Element passes.
- [replacePassWithPass:](replacepass%28with_%29.md): Replaces a pass in the user’s pass library with the specified pass.
- [removePass:](removepass%28__%29.md): Removes the pass from the user’s pass library.
