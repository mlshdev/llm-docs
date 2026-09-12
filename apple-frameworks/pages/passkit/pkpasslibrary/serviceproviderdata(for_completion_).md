> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/serviceproviderdata(for:completion:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/serviceproviderdata(for:completion:))

# serviceProviderData(for:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.12+ · visionOS 1.0+ · watchOS 8.0+

Calls a completion handler that returns the custom data for a Secure Element pass.

## Declaration

```swift
func serviceProviderData(for secureElementPass: PKSecureElementPass, completion: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func serviceProviderData(for secureElementPass: PKSecureElementPass) async throws -> Data
```

## Parameters

- `secureElementPass`: The Secure Element pass to check for secure data.
- `completion`: The completion block called by the system that returns the data or an error.

  This block takes the following parameters:

  - **`serviceProviderData`**: The custom data for the Secure Element pass; otherwise, `nil`.
  - **`error`**: If the process fails, an [NSError](../../foundation/nserror.md) that describes the failure; otherwise, `nil`.

## See Also

### Accessing passes

- [isPassLibraryAvailable()](ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes()](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passes(of:)](passes%28of_%29.md): Returns the passes of the specified pass type.
- [pass(withPassTypeIdentifier:serialNumber:)](pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [containsPass(\_:)](containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [remoteSecureElementPasses](remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.

# serviceProviderDataForSecureElementPass:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.12+ · visionOS 1.0+ · watchOS 8.0+

Calls a completion handler that returns the custom data for a Secure Element pass.

## Declaration

```objectivec
- (void) serviceProviderDataForSecureElementPass:(PKSecureElementPass *) secureElementPass completion:(void (^)(NSData *serviceProviderData, NSError *error)) completion;
```

## Parameters

- `secureElementPass`: The Secure Element pass to check for secure data.
- `completion`: The completion block called by the system that returns the data or an error.

  This block takes the following parameters:

  - **`serviceProviderData`**: The custom data for the Secure Element pass; otherwise, `nil`.
  - **`error`**: If the process fails, an [NSError](../../foundation/nserror.md) that describes the failure; otherwise, `nil`.

## See Also

### Accessing passes

- [isPassLibraryAvailable](ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passesOfType:](passes%28of_%29.md): Returns the passes of the specified pass type.
- [passWithPassTypeIdentifier:serialNumber:](pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [containsPass:](containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [remoteSecureElementPasses](remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.
