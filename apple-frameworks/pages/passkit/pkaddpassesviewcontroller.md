> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassesviewcontroller](https://developer.apple.com/documentation/passkit/pkaddpassesviewcontroller)

# PKAddPassesViewController (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Lets your app show a pass and prompt the user to add that pass to the pass library.

## Declaration

```swift
class PKAddPassesViewController
```

<a id="overview"></a>

## Overview

To add multiple passes without presenting this view controller multiple times, use the [addPasses(\_:withCompletionHandler:)](pkpasslibrary/addpasses%28__withcompletionhandler_%29.md) method of [PKPassLibrary](pkpasslibrary.md).

## Topics

### Determining if the device supports adding passes

- [canAddPasses()](pkaddpassesviewcontroller/canaddpasses%28%29.md): Returns a Boolean value that indicates whether the device supports adding passes.

### Creating an add-passes view controller

- [init(pass:)](pkaddpassesviewcontroller/init%28pass_%29.md): Initializes and returns a newly created add-passes view controller with a single pass.
- [init(passes:)](pkaddpassesviewcontroller/init%28passes_%29.md): Initializes and returns a newly created add-passes view controller with an array of passes.
- [init(issuerData:signature:)](pkaddpassesviewcontroller/init%28issuerdata_signature_%29.md): Initializes and returns a new add-passes view controller with the issuer data, and signature you provide.

### Adding passes

- [delegate](pkaddpassesviewcontroller/delegate.md): The view controller’s delegate.
- [PKAddPassesViewControllerDelegate](pkaddpassesviewcontrollerdelegate.md): Methods that an add-passes view controller’s delegate implements.

### Initializers

- [init(passesArchiveAt:)](pkaddpassesviewcontroller/init%28passesarchiveat_%29.md)
- [init(passesArchiveAtFileURL:)](pkaddpassesviewcontroller/init%28passesarchiveatfileurl_%29.md)
- [init(passesArchiveData:)](pkaddpassesviewcontroller/init%28passesarchivedata_%29.md)
- [init(passesData:)](pkaddpassesviewcontroller/init%28passesdata_%29.md)

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### General purpose passes

- [PKSecureElementPass](pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](pkpass.md): An object that represents a single pass.
- [AsyncShareablePassConfiguration](asyncshareablepassconfiguration.md)
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadata.Preview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)

# PKAddPassesViewController (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Lets your app show a pass and prompt the user to add that pass to the pass library.

## Declaration

```objectivec
@interface PKAddPassesViewController : UIViewController
```

<a id="overview"></a>

## Overview

To add multiple passes without presenting this view controller multiple times, use the [addPasses:withCompletionHandler:](pkpasslibrary/addpasses%28__withcompletionhandler_%29.md) method of [PKPassLibrary](pkpasslibrary.md).

## Topics

### Determining if the device supports adding passes

- [canAddPasses](pkaddpassesviewcontroller/canaddpasses%28%29.md): Returns a Boolean value that indicates whether the device supports adding passes.

### Creating an add-passes view controller

- [initWithPass:](pkaddpassesviewcontroller/init%28pass_%29.md): Initializes and returns a newly created add-passes view controller with a single pass.
- [initWithPasses:](pkaddpassesviewcontroller/init%28passes_%29.md): Initializes and returns a newly created add-passes view controller with an array of passes.
- [initWithIssuerData:signature:error:](pkaddpassesviewcontroller/init%28issuerdata_signature_%29.md): Initializes and returns a new add-passes view controller with the issuer data, and signature you provide.

### Adding passes

- [delegate](pkaddpassesviewcontroller/delegate.md): The view controller’s delegate.
- [PKAddPassesViewControllerDelegate](pkaddpassesviewcontrollerdelegate.md): Methods that an add-passes view controller’s delegate implements.

### Instance Methods

- [initWithPassesArchiveAtFileURL:](pkaddpassesviewcontroller/init%28passesarchiveat_%29.md)
- [initWithPassesArchiveData:](pkaddpassesviewcontroller/init%28passesarchivedata_%29.md)
- [initWithPassesData:](pkaddpassesviewcontroller/init%28passesdata_%29.md)

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### General purpose passes

- [PKSecureElementPass](pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadataPreview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)
