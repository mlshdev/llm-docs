> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/asyncshareablepassconfiguration](https://developer.apple.com/documentation/passkit/asyncshareablepassconfiguration)

# AsyncShareablePassConfiguration

**Framework:** PassKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

## Declaration

```swift
@MainActor @preconcurrency struct AsyncShareablePassConfiguration<Content> where Content : View
```

## Topics

### Creating the configuration

- [init(metadata:action:content:)](asyncshareablepassconfiguration/init%28metadata_action_content_%29.md)
- [AsyncShareablePassConfiguration.Result](asyncshareablepassconfiguration/result.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### General purpose passes

- [PKSecureElementPass](pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadata.Preview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)
