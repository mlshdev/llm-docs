> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpassviewcontroller](https://developer.apple.com/documentation/passkit/pkaddsecureelementpassviewcontroller)

# PKAddSecureElementPassViewController (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A view controller that manages the addition of secure element payment passes.

## Declaration

```swift
class PKAddSecureElementPassViewController
```

## Topics

### Creating a view controller

- [init(configuration:delegate:)](pkaddsecureelementpassviewcontroller/init%28configuration_delegate_%29.md): Creates a view controller using the specified pass configuration.

### Responding to the life cycle of a pass

- [delegate](pkaddsecureelementpassviewcontroller/delegate.md): An object that acts as the view controller’s delegate.
- [PKAddSecureElementPassViewControllerDelegate](pkaddsecureelementpassviewcontrollerdelegate.md): The methods for responding to the life cycle events of a Secure Element pass.

### Validating pass configuration

- [canAddSecureElementPass(configuration:)](pkaddsecureelementpassviewcontroller/canaddsecureelementpass%28configuration_%29.md): Returns a Boolean value that indicates whether PassKit can create a Secure Element pass using the specified configuration.

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
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [AsyncShareablePassConfiguration](asyncshareablepassconfiguration.md)
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadata.Preview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)

# PKAddSecureElementPassViewController (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

A view controller that manages the addition of secure element payment passes.

## Declaration

```objectivec
@interface PKAddSecureElementPassViewController : UIViewController
```

## Topics

### Creating a view controller

- [initWithConfiguration:delegate:](pkaddsecureelementpassviewcontroller/init%28configuration_delegate_%29.md): Creates a view controller using the specified pass configuration.

### Responding to the life cycle of a pass

- [delegate](pkaddsecureelementpassviewcontroller/delegate.md): An object that acts as the view controller’s delegate.
- [PKAddSecureElementPassViewControllerDelegate](pkaddsecureelementpassviewcontrollerdelegate.md): The methods for responding to the life cycle events of a Secure Element pass.

### Validating pass configuration

- [canAddSecureElementPassWithConfiguration:](pkaddsecureelementpassviewcontroller/canaddsecureelementpass%28configuration_%29.md): Returns a Boolean value that indicates whether PassKit can create a Secure Element pass using the specified configuration.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### General purpose passes

- [PKSecureElementPass](pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadataPreview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)
