> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/sign(_:using:completion:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/sign(_:using:completion:))

# sign(\_:using:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ (deprecated in 26.0) · iPadOS 13.4+ (deprecated in 26.0) · Mac Catalyst 13.4+ (deprecated in 26.0) · macOS 10.12+ · visionOS 1.0+ (deprecated in 26.0) · watchOS 6.2+ (deprecated in 26.0)

Signs an opaque value using a cryptographic signature.

> No longer supported

## Declaration

```swift
func sign(_ signData: Data, using secureElementPass: PKSecureElementPass, completion: @escaping @Sendable (Data?, Data?, (any Error)?) -> Void)
```

```swift
func sign(_ signData: Data, using secureElementPass: PKSecureElementPass) async throws -> (Data, Data)
```

## Parameters

- `signData`: The opaque value to sign.
- `secureElementPass`: The Secure Element pass that PassKit uses to generate the signature.
- `completion`: A Swift closure or an Objective-C block that PassKit runs when the process finishes.

  - **`signedData`**: The signed value.
  - **`signature`**: The cryptographic signature that PassKit uses to sign the value.
  - **`error`**: If the process fails, an error that describes the failure; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The method is available only to developers who work with Apple to enable this functionality.

PassKit may execute the completion Swift closure or an Objective-C block on an arbitrary queue.

# signData:withSecureElementPass:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ (deprecated in 26.0) · iPadOS 13.4+ (deprecated in 26.0) · Mac Catalyst 13.4+ (deprecated in 26.0) · macOS 10.12+ · visionOS 1.0+ (deprecated in 26.0) · watchOS 6.2+ (deprecated in 26.0)

Signs an opaque value using a cryptographic signature.

> No longer supported

## Declaration

```objectivec
- (void) signData:(NSData *) signData withSecureElementPass:(PKSecureElementPass *) secureElementPass completion:(void (^)(NSData *signedData, NSData *signature, NSError *error)) completion;
```

## Parameters

- `signData`: The opaque value to sign.
- `secureElementPass`: The Secure Element pass that PassKit uses to generate the signature.
- `completion`: A Swift closure or an Objective-C block that PassKit runs when the process finishes.

  - **`signedData`**: The signed value.
  - **`signature`**: The cryptographic signature that PassKit uses to sign the value.
  - **`error`**: If the process fails, an error that describes the failure; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The method is available only to developers who work with Apple to enable this functionality.

PassKit may execute the completion Swift closure or an Objective-C block on an arbitrary queue.
