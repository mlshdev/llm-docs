> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/remotesecureelementpasses](https://developer.apple.com/documentation/passkit/pkpasslibrary/remotesecureelementpasses)

# remoteSecureElementPasses (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+ · watchOS 6.2+

The Secure Element passes that PassKit stores on paired devices.

## Declaration

```swift
var remoteSecureElementPasses: [PKSecureElementPass] { get }
```

<a id="Discussion"></a>

## Discussion

This is an array that contains the Secure Element passes from all of the device’s remote paired devices, such as an Apple Watch.

## See Also

### Accessing passes

- [isPassLibraryAvailable()](ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes()](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passes(of:)](passes%28of_%29.md): Returns the passes of the specified pass type.
- [pass(withPassTypeIdentifier:serialNumber:)](pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [containsPass(\_:)](containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [serviceProviderData(for:completion:)](serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.

# remoteSecureElementPasses (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+ · watchOS 6.2+

The Secure Element passes that PassKit stores on paired devices.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<PKSecureElementPass *> * remoteSecureElementPasses;
```

<a id="Discussion"></a>

## Discussion

This is an array that contains the Secure Element passes from all of the device’s remote paired devices, such as an Apple Watch.

## See Also

### Accessing passes

- [isPassLibraryAvailable](ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passesOfType:](passes%28of_%29.md): Returns the passes of the specified pass type.
- [passWithPassTypeIdentifier:serialNumber:](pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [containsPass:](containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [serviceProviderDataForSecureElementPass:completion:](serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.
