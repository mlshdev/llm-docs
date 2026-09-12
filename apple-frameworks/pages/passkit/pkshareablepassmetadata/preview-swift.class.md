> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkshareablepassmetadata/preview-swift.class](https://developer.apple.com/documentation/passkit/pkshareablepassmetadata/preview-swift.class)

# PKShareablePassMetadata.Preview (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

## Declaration

```swift
class Preview
```

## Topics

### Initializers

- [init(templateIdentifier:)](preview-swift.class/init%28templateidentifier_%29.md)

### Instance Properties

- [ownerDisplayName](preview-swift.class/ownerdisplayname.md)
- [provisioningTemplateIdentifier](preview-swift.class/provisioningtemplateidentifier.md)

## Relationships

### Inherits From

- [PKAddPassMetadataPreview](../pkaddpassmetadatapreview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### General purpose passes

- [PKSecureElementPass](../pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassConfiguration](../pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](../pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](../pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](../pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [AsyncShareablePassConfiguration](../asyncshareablepassconfiguration.md)
- [PKShareSecureElementPassViewController](../pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](../pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareSecureElementPassResult](../pksharesecureelementpassresult.md)

# PKShareablePassMetadataPreview (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

## Declaration

```objectivec
@interface PKShareablePassMetadataPreview : PKAddPassMetadataPreview
```

## Topics

### Instance Properties

- [ownerDisplayName](preview-swift.class/ownerdisplayname.md)
- [provisioningTemplateIdentifier](preview-swift.class/provisioningtemplateidentifier.md)

### Instance Methods

- [initWithTemplateIdentifier:](preview-swift.class/init%28templateidentifier_%29.md)

### Type Methods

- [previewWithTemplateIdentifier:](../pkshareablepassmetadatapreview/previewwithtemplateidentifier_.md)

## Relationships

### Inherits From

- [PKAddPassMetadataPreview](../pkaddpassmetadatapreview.md)

## See Also

### General purpose passes

- [PKSecureElementPass](../pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassConfiguration](../pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](../pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](../pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](../pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [PKShareSecureElementPassViewController](../pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](../pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareSecureElementPassResult](../pksharesecureelementpassresult.md)
