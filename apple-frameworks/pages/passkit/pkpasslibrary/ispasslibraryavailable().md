> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/ispasslibraryavailable()](https://developer.apple.com/documentation/passkit/pkpasslibrary/ispasslibraryavailable())

# isPassLibraryAvailable() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean value that indicates whether the pass library is available.

## Declaration

```swift
class func isPassLibraryAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the pass library is available; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method exists because the pass library may be unavailable even if the [PKPassLibrary](../pkpasslibrary.md) class exists.

> **Note**

>  Don’t use this method to determine whether the user can add passes on the device. A device may have a pass library, but still not be able to add passes. Use the [PKAddPassesViewController](../pkaddpassesviewcontroller.md) class’s [canAddPasses()](../pkaddpassesviewcontroller/canaddpasses%28%29.md) method instead.

## See Also

### Accessing passes

- [passes()](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passes(of:)](passes%28of_%29.md): Returns the passes of the specified pass type.
- [pass(withPassTypeIdentifier:serialNumber:)](pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [containsPass(\_:)](containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [serviceProviderData(for:completion:)](serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.
- [remoteSecureElementPasses](remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.

# isPassLibraryAvailable (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Returns a Boolean value that indicates whether the pass library is available.

## Declaration

```objectivec
+ (BOOL) isPassLibraryAvailable;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the pass library is available; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method exists because the pass library may be unavailable even if the [PKPassLibrary](../pkpasslibrary.md) class exists.

> **Note**

>  Don’t use this method to determine whether the user can add passes on the device. A device may have a pass library, but still not be able to add passes. Use the [PKAddPassesViewController](../pkaddpassesviewcontroller.md) class’s [canAddPasses](../pkaddpassesviewcontroller/canaddpasses%28%29.md) method instead.

## See Also

### Accessing passes

- [passes](passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passesOfType:](passes%28of_%29.md): Returns the passes of the specified pass type.
- [passWithPassTypeIdentifier:serialNumber:](pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [containsPass:](containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [serviceProviderDataForSecureElementPass:completion:](serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.
- [remoteSecureElementPasses](remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.
