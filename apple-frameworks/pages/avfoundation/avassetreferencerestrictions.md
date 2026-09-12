> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreferencerestrictions](https://developer.apple.com/documentation/avfoundation/avassetreferencerestrictions)

# AVAssetReferenceRestrictions (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Restrictions to use when resolving references to external media data.

## Declaration

```swift
struct AVAssetReferenceRestrictions
```

## Topics

### Reference restrictions

- [forbidAll](avassetreferencerestrictions/forbidall.md): The asset can only reference media stored within its container file.
- [forbidRemoteReferenceToLocal](avassetreferencerestrictions/forbidremotereferencetolocal.md): A remote asset shouldn’t follow references to local media.
- [forbidLocalReferenceToRemote](avassetreferencerestrictions/forbidlocalreferencetoremote.md): A local asset shouldn’t follow references to remote media.
- [forbidCrossSiteReference](avassetreferencerestrictions/forbidcrosssitereference.md): A remote asset shouldn’t follow references to remote media data stored at a different host.
- [forbidLocalReferenceToLocal](avassetreferencerestrictions/forbidlocalreferencetolocal.md): A local asset shouldn’t follow references to local media data stored outside its container file.
- [defaultPolicy](avassetreferencerestrictions/defaultpolicy.md): The asset should use the default reference restrictions policy.

### Initializers

- [init(rawValue:)](avassetreferencerestrictions/init%28rawvalue_%29.md): Creates reference restrictions with an integer value.

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

### Retrieving reference restrictions

- [referenceRestrictions](avasset/referencerestrictions.md): The restrictions that an asset places on how it resolves references to external media.

# AVAssetReferenceRestrictions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Restrictions to use when resolving references to external media data.

## Declaration

```objectivec
enum AVAssetReferenceRestrictions : NSUInteger;
```

## Topics

### Reference restrictions

- [AVAssetReferenceRestrictionForbidNone](avassetreferencerestrictions/avassetreferencerestrictionforbidnone.md): The asset should follow all media references.
- [AVAssetReferenceRestrictionForbidAll](avassetreferencerestrictions/forbidall.md): The asset can only reference media stored within its container file.
- [AVAssetReferenceRestrictionForbidRemoteReferenceToLocal](avassetreferencerestrictions/forbidremotereferencetolocal.md): A remote asset shouldn’t follow references to local media.
- [AVAssetReferenceRestrictionForbidLocalReferenceToRemote](avassetreferencerestrictions/forbidlocalreferencetoremote.md): A local asset shouldn’t follow references to remote media.
- [AVAssetReferenceRestrictionForbidCrossSiteReference](avassetreferencerestrictions/forbidcrosssitereference.md): A remote asset shouldn’t follow references to remote media data stored at a different host.
- [AVAssetReferenceRestrictionForbidLocalReferenceToLocal](avassetreferencerestrictions/forbidlocalreferencetolocal.md): A local asset shouldn’t follow references to local media data stored outside its container file.
- [AVAssetReferenceRestrictionDefaultPolicy](avassetreferencerestrictions/defaultpolicy.md): The asset should use the default reference restrictions policy.

## See Also

### Retrieving reference restrictions

- [referenceRestrictions](avasset/referencerestrictions.md): The restrictions that an asset places on how it resolves references to external media.
