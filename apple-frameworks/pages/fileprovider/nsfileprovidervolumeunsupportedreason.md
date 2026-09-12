> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidervolumeunsupportedreason](https://developer.apple.com/documentation/fileprovider/nsfileprovidervolumeunsupportedreason)

# NSFileProviderVolumeUnsupportedReason (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** macOS 15.0+

Constants that describe why an external volume might not be eligible for storing a domain.

## Declaration

```swift
struct NSFileProviderVolumeUnsupportedReason
```

## Topics

### Reasons

- [unknown](nsfileprovidervolumeunsupportedreason/unknown.md)
- [nonEncrypted](nsfileprovidervolumeunsupportedreason/nonencrypted.md)
- [readOnly](nsfileprovidervolumeunsupportedreason/readonly.md)
- [network](nsfileprovidervolumeunsupportedreason/network.md)
- [quarantined](nsfileprovidervolumeunsupportedreason/quarantined.md)

### Initializers

- [init(rawValue:)](nsfileprovidervolumeunsupportedreason/init%28rawvalue_%29.md)

### Type Properties

- [nonAPFS](nsfileprovidervolumeunsupportedreason/nonapfs.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Determining eligibility

- [NSFileProviderManager.EligibilityResult.eligible](nsfileprovidermanager/eligibilityresult/eligible.md)
- [NSFileProviderManager.EligibilityResult.ineligible(\_:)](nsfileprovidermanager/eligibilityresult/ineligible%28__%29.md)

# NSFileProviderVolumeUnsupportedReason (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Constants that describe why an external volume might not be eligible for storing a domain.

## Declaration

```objectivec
enum NSFileProviderVolumeUnsupportedReason : NSUInteger;
```

## Topics

### Reasons

- [NSFileProviderVolumeUnsupportedReasonUnknown](nsfileprovidervolumeunsupportedreason/unknown.md)
- [NSFileProviderVolumeUnsupportedReasonNonEncrypted](nsfileprovidervolumeunsupportedreason/nonencrypted.md)
- [NSFileProviderVolumeUnsupportedReasonReadOnly](nsfileprovidervolumeunsupportedreason/readonly.md)
- [NSFileProviderVolumeUnsupportedReasonNetwork](nsfileprovidervolumeunsupportedreason/network.md)
- [NSFileProviderVolumeUnsupportedReasonQuarantined](nsfileprovidervolumeunsupportedreason/quarantined.md)

### Enumeration Cases

- [NSFileProviderVolumeUnsupportedReasonNone](nsfileprovidervolumeunsupportedreason/nsfileprovidervolumeunsupportedreasonnone.md)
- [NSFileProviderVolumeUnsupportedReasonNonAPFS](nsfileprovidervolumeunsupportedreason/nonapfs.md)
