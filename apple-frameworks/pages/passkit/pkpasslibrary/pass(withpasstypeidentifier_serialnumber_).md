> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/pass(withpasstypeidentifier:serialnumber:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/pass(withpasstypeidentifier:serialnumber:))

# pass(withPassTypeIdentifier:serialNumber:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Returns the pass with the specified pass type identifier and serial number.

## Declaration

```swift
func pass(withPassTypeIdentifier identifier: String, serialNumber: String) -> PKPass?
```

## Parameters

- `identifier`: The pass’s pass type identifier.
- `serialNumber`: The pass’s serial number.

<a id="return-value"></a>

## Return Value

The pass with the specified pass type identifier and serial number, or `nil` if there isn’t such a pass or if the app doesn’t have the appropriate entitlement.

## See Also

### Accessing passes

- [isPassLibraryAvailable()](ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes()](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passes(of:)](passes%28of_%29.md): Returns the passes of the specified pass type.
- [containsPass(\_:)](containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [serviceProviderData(for:completion:)](serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.
- [remoteSecureElementPasses](remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.

# passWithPassTypeIdentifier:serialNumber: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Returns the pass with the specified pass type identifier and serial number.

## Declaration

```objectivec
- (PKPass *) passWithPassTypeIdentifier:(NSString *) identifier serialNumber:(NSString *) serialNumber;
```

## Parameters

- `identifier`: The pass’s pass type identifier.
- `serialNumber`: The pass’s serial number.

<a id="return-value"></a>

## Return Value

The pass with the specified pass type identifier and serial number, or `nil` if there isn’t such a pass or if the app doesn’t have the appropriate entitlement.

## See Also

### Accessing passes

- [isPassLibraryAvailable](ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passesOfType:](passes%28of_%29.md): Returns the passes of the specified pass type.
- [containsPass:](containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [serviceProviderDataForSecureElementPass:completion:](serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.
- [remoteSecureElementPasses](remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.
