> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksharesecureelementpassviewcontrollerdelegate](https://developer.apple.com/documentation/passkit/pksharesecureelementpassviewcontrollerdelegate)

# PKShareSecureElementPassViewControllerDelegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```swift
protocol PKShareSecureElementPassViewControllerDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [shareSecureElementPassViewController(\_:didCreateShare:activationCode:)](pksharesecureelementpassviewcontrollerdelegate/sharesecureelementpassviewcontroller%28__didcreateshare_activationcode_%29.md)
- [shareSecureElementPassViewController(\_:didFinishWith:)](pksharesecureelementpassviewcontrollerdelegate/sharesecureelementpassviewcontroller%28__didfinishwith_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### General purpose passes

- [PKSecureElementPass](pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [AsyncShareablePassConfiguration](asyncshareablepassconfiguration.md)
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareablePassMetadata.Preview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)

# PKShareSecureElementPassViewControllerDelegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```objectivec
@protocol PKShareSecureElementPassViewControllerDelegate <NSObject>
```

## Topics

### Instance Methods

- [shareSecureElementPassViewController:didCreateShareURL:activationCode:](pksharesecureelementpassviewcontrollerdelegate/sharesecureelementpassviewcontroller%28__didcreateshare_activationcode_%29.md)
- [shareSecureElementPassViewController:didFinishWithResult:](pksharesecureelementpassviewcontrollerdelegate/sharesecureelementpassviewcontroller%28__didfinishwith_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### General purpose passes

- [PKSecureElementPass](pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareablePassMetadataPreview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)
