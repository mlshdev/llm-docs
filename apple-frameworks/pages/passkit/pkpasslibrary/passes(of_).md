> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/passes(of:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/passes(of:))

# passes(of:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Returns the passes of the specified pass type.

## Declaration

```swift
func passes(of passType: PKPassType) -> [PKPass]
```

## Parameters

- `passType`: One of the pass types in [PKPassType](../pkpasstype.md).

<a id="return-value"></a>

## Return Value

An array of passes of the specified type.

## See Also

### Accessing passes

- [isPassLibraryAvailable()](ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes()](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [pass(withPassTypeIdentifier:serialNumber:)](pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [containsPass(\_:)](containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [serviceProviderData(for:completion:)](serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.
- [remoteSecureElementPasses](remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.

# passesOfType: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Returns the passes of the specified pass type.

## Declaration

```objectivec
- (NSArray<PKPass *> *) passesOfType:(PKPassType) passType;
```

## Parameters

- `passType`: One of the pass types in [PKPassType](../pkpasstype.md).

<a id="return-value"></a>

## Return Value

An array of passes of the specified type.

## See Also

### Accessing passes

- [isPassLibraryAvailable](ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passWithPassTypeIdentifier:serialNumber:](pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [containsPass:](containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [serviceProviderDataForSecureElementPass:completion:](serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.
- [remoteSecureElementPasses](remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.
