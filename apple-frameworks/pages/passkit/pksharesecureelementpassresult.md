> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksharesecureelementpassresult](https://developer.apple.com/documentation/passkit/pksharesecureelementpassresult)

# PKShareSecureElementPassResult (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```swift
enum PKShareSecureElementPassResult
```

## Topics

### Enumeration Cases

- [PKShareSecureElementPassResult.canceled](pksharesecureelementpassresult/canceled.md)
- [PKShareSecureElementPassResult.failed](pksharesecureelementpassresult/failed.md)
- [PKShareSecureElementPassResult.shared](pksharesecureelementpassresult/shared.md)

### Initializers

- [init(rawValue:)](pksharesecureelementpassresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### General purpose passes

- [PKSecureElementPass](pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [AsyncShareablePassConfiguration](asyncshareablepassconfiguration.md)
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadata.Preview](pkshareablepassmetadata/preview-swift.class.md)

# PKShareSecureElementPassResult (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```objectivec
enum PKShareSecureElementPassResult : NSInteger;
```

## Topics

### Enumeration Cases

- [PKShareSecureElementPassResultCanceled](pksharesecureelementpassresult/canceled.md)
- [PKShareSecureElementPassResultFailed](pksharesecureelementpassresult/failed.md)
- [PKShareSecureElementPassResultShared](pksharesecureelementpassresult/shared.md)

## See Also

### General purpose passes

- [PKSecureElementPass](pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadataPreview](pkshareablepassmetadata/preview-swift.class.md)
