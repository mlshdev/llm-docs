> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/containspass(_:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/containspass(_:))

# containsPass(\_:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.

## Declaration

```swift
func containsPass(_ pass: PKPass) -> Bool
```

## Parameters

- `pass`: The pass to query.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user’s pass library contains the pass; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method lets you determine that the pass library contains a pass even though your app can’t read or modify the pass. For example, an email client doesn’t have entitlements to read or write any passes from the library.

Your app can use this method to provide a UI that indicates whether a pass is already in the library.

## See Also

### Accessing passes

- [isPassLibraryAvailable()](ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes()](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passes(of:)](passes%28of_%29.md): Returns the passes of the specified pass type.
- [pass(withPassTypeIdentifier:serialNumber:)](pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [serviceProviderData(for:completion:)](serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.
- [remoteSecureElementPasses](remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.

# containsPass: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.

## Declaration

```objectivec
- (BOOL) containsPass:(PKPass *) pass;
```

## Parameters

- `pass`: The pass to query.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user’s pass library contains the pass; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method lets you determine that the pass library contains a pass even though your app can’t read or modify the pass. For example, an email client doesn’t have entitlements to read or write any passes from the library.

Your app can use this method to provide a UI that indicates whether a pass is already in the library.

## See Also

### Accessing passes

- [isPassLibraryAvailable](ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passesOfType:](passes%28of_%29.md): Returns the passes of the specified pass type.
- [passWithPassTypeIdentifier:serialNumber:](pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [serviceProviderDataForSecureElementPass:completion:](serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.
- [remoteSecureElementPasses](remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.
