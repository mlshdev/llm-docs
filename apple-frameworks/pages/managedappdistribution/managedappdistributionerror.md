> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedappdistributionerror](https://developer.apple.com/documentation/managedappdistribution/managedappdistributionerror)

# ManagedAppDistributionError

**Framework:** ManagedAppDistribution  
**Kind:** Enumeration  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 2.4+

Codes that identify errors in Managed App Distribution.

## Declaration

```swift
enum ManagedAppDistributionError
```

## Topics

### Inspecting errors

- [ManagedAppDistributionError.deviceNotManaged](managedappdistributionerror/devicenotmanaged.md): An error that indicates this device isn’t managed.
- [ManagedAppDistributionError.networkError](managedappdistributionerror/networkerror.md): An error that indicates a network issue.
- [ManagedAppDistributionError.unrecoverableError](managedappdistributionerror/unrecoverableerror.md): An error that is unspecified and unrecoverable.
- [ManagedAppDistributionError.unsupportedPlatform](managedappdistributionerror/unsupportedplatform.md): An error that indicates the platform is unsupported.

### Providing error information

- [description](managedappdistributionerror/description.md): A localized description of the error.
- [errorDescription](managedappdistributionerror/errordescription.md): A brief description of the error.
- [failureReason](managedappdistributionerror/failurereason.md): A detailed description of the error.
- [recoveryOptions](managedappdistributionerror/recoveryoptions.md): A set of possible recovery options to present.
- [recoverySuggestion](managedappdistributionerror/recoverysuggestion.md): A suggestion for recovering from the error.
- [localizedStringResource](managedappdistributionerror/localizedstringresource.md): A set of localized error strings.

### Providing help information

- [helpAnchor](managedappdistributionerror/helpanchor.md): A link to help documentation.

### Recovering from errors

- [attemptRecovery(optionIndex:)](managedappdistributionerror/attemptrecovery%28optionindex_%29.md): Attempt to recover from this error when someone selects the option at the given index.
- [attemptRecovery(optionIndex:resultHandler:)](managedappdistributionerror/attemptrecovery%28optionindex_resulthandler_%29.md): Attempt to recover from this error when someone selects the option at the given index.

### Enumeration Cases

- [ManagedAppDistributionError.appNotManaged](managedappdistributionerror/appnotmanaged.md): An error that indicates that the calling app is not managed
- [ManagedAppDistributionError.licenseNotFound](managedappdistributionerror/licensenotfound.md): An error that indicates that a license wasn’t found for requested app.

## Relationships

### Conforms To

- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../foundation/localizederror.md)
- [RecoverableError](../foundation/recoverableerror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
