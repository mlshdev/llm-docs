> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddshareablepassconfigurationprimaryaction](https://developer.apple.com/documentation/passkit/pkaddshareablepassconfigurationprimaryaction)

# PKAddShareablePassConfigurationPrimaryAction (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

The kind of add action that the system performs with a pass.

## Declaration

```swift
enum PKAddShareablePassConfigurationPrimaryAction
```

## Topics

### Shareable pass configuration actions

- [PKAddShareablePassConfigurationPrimaryAction.add](pkaddshareablepassconfigurationprimaryaction/add.md): A constant that indicates the system adds a pass to a device.
- [PKAddShareablePassConfigurationPrimaryAction.share](pkaddshareablepassconfigurationprimaryaction/share.md): A constant that indicates the system shares the pass with another user.

### Initializers

- [init(rawValue:)](pkaddshareablepassconfigurationprimaryaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shareable passes

- [PKAddShareablePassConfiguration](pkaddshareablepassconfiguration.md): An object that represents the data and action for a shared copy of pass.
- [PKShareablePassMetadata](pkshareablepassmetadata.md): Information that you use to configure the sharing sheet for a pass.

# PKAddShareablePassConfigurationPrimaryAction (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

The kind of add action that the system performs with a pass.

## Declaration

```objectivec
enum PKAddShareablePassConfigurationPrimaryAction : NSUInteger;
```

## Topics

### Shareable pass configuration actions

- [PKAddShareablePassConfigurationPrimaryActionAdd](pkaddshareablepassconfigurationprimaryaction/add.md): A constant that indicates the system adds a pass to a device.
- [PKAddShareablePassConfigurationPrimaryActionShare](pkaddshareablepassconfigurationprimaryaction/share.md): A constant that indicates the system shares the pass with another user.

## See Also

### Shareable passes

- [PKAddShareablePassConfiguration](pkaddshareablepassconfiguration.md): An object that represents the data and action for a shared copy of pass.
- [PKShareablePassMetadata](pkshareablepassmetadata.md): Information that you use to configure the sharing sheet for a pass.
