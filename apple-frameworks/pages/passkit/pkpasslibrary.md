> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary](https://developer.apple.com/documentation/passkit/pkpasslibrary)

# PKPassLibrary (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Provides an interface to the user’s library of passes.

## Declaration

```swift
class PKPassLibrary
```

<a id="overview"></a>

## Overview

The `PKPassLibrary` isn’t thread-safe. Use instances of this class only on a single thread.

## Topics

### Accessing passes

- [isPassLibraryAvailable()](pkpasslibrary/ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes()](pkpasslibrary/passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passes(of:)](pkpasslibrary/passes%28of_%29.md): Returns the passes of the specified pass type.
- [pass(withPassTypeIdentifier:serialNumber:)](pkpasslibrary/pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [containsPass(\_:)](pkpasslibrary/containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [serviceProviderData(for:completion:)](pkpasslibrary/serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.
- [remoteSecureElementPasses](pkpasslibrary/remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.

### Adding passes

- [canAddSecureElementPass(primaryAccountIdentifier:)](pkpasslibrary/canaddsecureelementpass%28primaryaccountidentifier_%29.md): Returns a Boolean value that indicates whether PassKit can add a Secure Element pass for the specified account.
- [canAddFelicaPass()](pkpasslibrary/canaddfelicapass%28%29.md): Returns a Boolean value that indicates whether the library can add FeliCa™ passes.
- [addPasses(\_:withCompletionHandler:)](pkpasslibrary/addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.
- [PKPassLibraryAddPassesStatus](pkpasslibraryaddpassesstatus.md): Statuses that PassKit uses when it adds passes to the pass library.

### Managing passes

- [isSecureElementPassActivationAvailable](pkpasslibrary/issecureelementpassactivationavailable.md): A Boolean value that indicates whether the device supports creating Secure Element passes.
- [activate(\_:activationData:completion:)](pkpasslibrary/activate%28__activationdata_completion_%29.md): Activates a Secure Element pass using the specified data.
- [replacePass(with:)](pkpasslibrary/replacepass%28with_%29.md): Replaces a pass in the user’s pass library with the specified pass.
- [removePass(\_:)](pkpasslibrary/removepass%28__%29.md): Removes the pass from the user’s pass library.

### Presenting and suppressing passes

- [present(\_:)](pkpasslibrary/present%28__%29-9467u.md): Presents a Secure Element pass.
- [isSuppressingAutomaticPassPresentation()](pkpasslibrary/issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [requestAutomaticPassPresentationSuppression(responseHandler:)](pkpasslibrary/requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [PKAutomaticPassPresentationSuppressionResult](pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [endAutomaticPassPresentationSuppression(withRequestToken:)](pkpasslibrary/endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.
- [PKSuppressionRequestToken](pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.

### Setting up payments

- [openPaymentSetup()](pkpasslibrary/openpaymentsetup%28%29.md): Opens the user interface to set up credit cards for Apple Pay.

### Signing data

- [sign(\_:using:completion:)](pkpasslibrary/sign%28__using_completion_%29.md): Deprecated. Signs an opaque value using a cryptographic signature.

### Receiving notifications

- [PKPassLibraryNotificationKey](pkpasslibrarynotificationkey.md): The user info keys that a pass library notification uses.
- [PKPassLibraryNotificationName](pkpasslibrarynotificationname.md): The types of notifications that the pass library posts.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Methods

- [addPasses(data:completion:)](pkpasslibrary/addpasses%28data_completion_%29.md)
- [addPasses(fromArchiveAt:completion:)](pkpasslibrary/addpasses%28fromarchiveat_completion_%29.md)
- [addPasses(fromArchiveData:completion:)](pkpasslibrary/addpasses%28fromarchivedata_completion_%29.md)
- [authorizationStatus(for:)](pkpasslibrary/authorizationstatus%28for_%29.md)
- [encryptedServiceProviderData(for:completion:)](pkpasslibrary/encryptedserviceproviderdata%28for_completion_%29.md)
- [openPaymentSetup(merchantIdentifier:)](pkpasslibrary/openpaymentsetup%28merchantidentifier_%29.md)
- [passes(withReaderIdentifier:)](pkpasslibrary/passes%28withreaderidentifier_%29.md)
- [requestAuthorization(for:completion:)](pkpasslibrary/requestauthorization%28for_completion_%29.md)

### Enumerations

- [PKPassLibrary.AuthorizationStatus](pkpasslibrary/authorizationstatus.md)
- [PKPassLibrary.Capability](pkpasslibrary/capability.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# PKPassLibrary (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Provides an interface to the user’s library of passes.

## Declaration

```objectivec
@interface PKPassLibrary : NSObject
```

<a id="overview"></a>

## Overview

The `PKPassLibrary` isn’t thread-safe. Use instances of this class only on a single thread.

## Topics

### Accessing passes

- [isPassLibraryAvailable](pkpasslibrary/ispasslibraryavailable%28%29.md): Returns a Boolean value that indicates whether the pass library is available.
- [passes](pkpasslibrary/passes%28%29.md): Returns the passes in the user’s pass library that the app can access.
- [passesOfType:](pkpasslibrary/passes%28of_%29.md): Returns the passes of the specified pass type.
- [passWithPassTypeIdentifier:serialNumber:](pkpasslibrary/pass%28withpasstypeidentifier_serialnumber_%29.md): Returns the pass with the specified pass type identifier and serial number.
- [containsPass:](pkpasslibrary/containspass%28__%29.md): Returns a Boolean value that indicates whether the user’s pass library contains the specified pass.
- [serviceProviderDataForSecureElementPass:completion:](pkpasslibrary/serviceproviderdata%28for_completion_%29.md): Calls a completion handler that returns the custom data for a Secure Element pass.
- [remoteSecureElementPasses](pkpasslibrary/remotesecureelementpasses.md): The Secure Element passes that PassKit stores on paired devices.

### Adding passes

- [canAddSecureElementPassWithPrimaryAccountIdentifier:](pkpasslibrary/canaddsecureelementpass%28primaryaccountidentifier_%29.md): Returns a Boolean value that indicates whether PassKit can add a Secure Element pass for the specified account.
- [canAddFelicaPass](pkpasslibrary/canaddfelicapass%28%29.md): Returns a Boolean value that indicates whether the library can add FeliCa™ passes.
- [addPasses:withCompletionHandler:](pkpasslibrary/addpasses%28__withcompletionhandler_%29.md): Presents a user interface for adding multiple passes at once.
- [PKPassLibraryAddPassesStatus](pkpasslibraryaddpassesstatus.md): Statuses that PassKit uses when it adds passes to the pass library.

### Managing passes

- [secureElementPassActivationAvailable](pkpasslibrary/issecureelementpassactivationavailable.md): A Boolean value that indicates whether the device supports creating Secure Element passes.
- [activateSecureElementPass:withActivationData:completion:](pkpasslibrary/activate%28__activationdata_completion_%29.md): Activates a Secure Element pass using the specified data.
- [replacePassWithPass:](pkpasslibrary/replacepass%28with_%29.md): Replaces a pass in the user’s pass library with the specified pass.
- [removePass:](pkpasslibrary/removepass%28__%29.md): Removes the pass from the user’s pass library.

### Presenting and suppressing passes

- [presentSecureElementPass:](pkpasslibrary/present%28__%29-9467u.md): Presents a Secure Element pass.
- [isSuppressingAutomaticPassPresentation](pkpasslibrary/issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [requestAutomaticPassPresentationSuppressionWithResponseHandler:](pkpasslibrary/requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [PKAutomaticPassPresentationSuppressionResult](pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [endAutomaticPassPresentationSuppressionWithRequestToken:](pkpasslibrary/endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.
- [PKSuppressionRequestToken](pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.

### Setting up payments

- [openPaymentSetup](pkpasslibrary/openpaymentsetup%28%29.md): Opens the user interface to set up credit cards for Apple Pay.

### Signing data

- [signData:withSecureElementPass:completion:](pkpasslibrary/sign%28__using_completion_%29.md): Deprecated. Signs an opaque value using a cryptographic signature.

### Receiving notifications

- [PKPassLibraryNotificationKey](pkpasslibrarynotificationkey.md): The user info keys that a pass library notification uses.
- [PKPassLibraryNotificationName](pkpasslibrarynotificationname.md): The types of notifications that the pass library posts.

### Deprecated

- [Deprecated Symbols](deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Methods

- [addPassesWithData:completionHandler:](pkpasslibrary/addpasses%28data_completion_%29.md)
- [addPassesFromArchiveAtFileURL:completionHandler:](pkpasslibrary/addpasses%28fromarchiveat_completion_%29.md)
- [addPassesFromArchiveWithData:completionHandler:](pkpasslibrary/addpasses%28fromarchivedata_completion_%29.md)
- [authorizationStatusForCapability:](pkpasslibrary/authorizationstatus%28for_%29.md)
- [encryptedServiceProviderDataForSecureElementPass:completion:](pkpasslibrary/encryptedserviceproviderdata%28for_completion_%29.md)
- [openPaymentSetupWithMerchantIdentifier:](pkpasslibrary/openpaymentsetup%28merchantidentifier_%29.md)
- [passesWithReaderIdentifier:](pkpasslibrary/passes%28withreaderidentifier_%29.md)
- [requestAuthorizationForCapability:completion:](pkpasslibrary/requestauthorization%28for_completion_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
