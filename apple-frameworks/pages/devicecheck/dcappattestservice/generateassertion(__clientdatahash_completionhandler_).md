> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcappattestservice/generateassertion(_:clientdatahash:completionhandler:)](https://developer.apple.com/documentation/devicecheck/dcappattestservice/generateassertion(_:clientdatahash:completionhandler:))

# generateAssertion(\_:clientDataHash:completionHandler:) (Swift)

**Framework:** DeviceCheck  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a block of data that demonstrates the legitimacy of an instance of your app running on a device.

## Declaration

```swift
func generateAssertion(_ keyId: String, clientDataHash: Data, completionHandler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func generateAssertion(_ keyId: String, clientDataHash: Data) async throws -> Data
```

## Parameters

- `keyId`: The identifier you received when generating a cryptographic key by calling the [generateKey(completionHandler:)](generatekey%28completionhandler_%29.md) method.
- `clientDataHash`: A SHA256 hash of a unique, single-use data block that represents the client data to be signed with the attested private key. Should be at least 16 bytes in length.
- `completionHandler`: A closure that the method calls upon completion with the following parameters:

  - `assertionObject`: A data structure that you send to your server for processing.
  - `error` : A [DCError](../dcerror-swift.struct.md) instance that indicates the reason for failure, or `nil` on success.

## Mentioned In

- [Attestation Object Validation Guide](../attestation-object-validation-guide.md)
- [Establishing your app’s integrity](../establishing-your-app-s-integrity.md)

<a id="discussion"></a>

## Discussion

> **Concurrency Note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func generateAssertion(_ keyId: String, clientDataHash: Data) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

After generating a key with the [generateKey(completionHandler:)](generatekey%28completionhandler_%29.md) method and validating it with the [attestKey(\_:clientDataHash:completionHandler:)](attestkey%28__clientdatahash_completionhandler_%29.md) method, you can use the key at critical moments in your app’s life cycle — like when a user tries to access premium content — to reaffirm the legitimacy of a given instance of your app. Do this by using the [generateAssertion(\_:clientDataHash:completionHandler:)](generateassertion%28__clientdatahash_completionhandler_%29.md) method to sign server requests with your attested key.

You provide the key identifier and a hash of the request that includes a challenge from your server to prevent replay attacks, where an attacker reuses captured network traffic to pose as someone else. The method returns an assertion object in its completion handler that you send to your server for verification, as described in [Establishing your app’s integrity](../establishing-your-app-s-integrity.md).

# generateAssertion:clientDataHash:completionHandler: (Objective-C)

**Framework:** DeviceCheck  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a block of data that demonstrates the legitimacy of an instance of your app running on a device.

## Declaration

```objectivec
- (void) generateAssertion:(NSString *) keyId clientDataHash:(NSData *) clientDataHash completionHandler:(void (^)(NSData *assertionObject, NSError *error)) completionHandler;
```

## Parameters

- `keyId`: The identifier you received when generating a cryptographic key by calling the [generateKeyWithCompletionHandler:](generatekey%28completionhandler_%29.md) method.
- `clientDataHash`: A SHA256 hash of a unique, single-use data block that represents the client data to be signed with the attested private key. Should be at least 16 bytes in length.
- `completionHandler`: A closure that the method calls upon completion with the following parameters:

  - `assertionObject`: A data structure that you send to your server for processing.
  - `error` : A [DCError](../dcerror-swift.struct.md) instance that indicates the reason for failure, or `nil` on success.

## Mentioned In

- [Attestation Object Validation Guide](../attestation-object-validation-guide.md)
- [Establishing your app’s integrity](../establishing-your-app-s-integrity.md)

<a id="discussion"></a>

## Discussion

> **Concurrency Note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func generateAssertion(_ keyId: String, clientDataHash: Data) async throws -> Data
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

After generating a key with the [generateKeyWithCompletionHandler:](generatekey%28completionhandler_%29.md) method and validating it with the [attestKey:clientDataHash:completionHandler:](attestkey%28__clientdatahash_completionhandler_%29.md) method, you can use the key at critical moments in your app’s life cycle — like when a user tries to access premium content — to reaffirm the legitimacy of a given instance of your app. Do this by using the [generateAssertion:clientDataHash:completionHandler:](generateassertion%28__clientdatahash_completionhandler_%29.md) method to sign server requests with your attested key.

You provide the key identifier and a hash of the request that includes a challenge from your server to prevent replay attacks, where an attacker reuses captured network traffic to pose as someone else. The method returns an assertion object in its completion handler that you send to your server for verification, as described in [Establishing your app’s integrity](../establishing-your-app-s-integrity.md).
