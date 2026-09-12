> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/policy/purgeconditions-swift.struct](https://developer.apple.com/documentation/coreai/aimodelcache/policy/purgeconditions-swift.struct)

# AIModelCache.Policy.PurgeConditions

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A set of conditions that determine when the system purges specialized assets.

## Declaration

```swift
struct PurgeConditions
```

<a id="overview"></a>

## Overview

> **Note**

> The system always purges assets on OS update regardless of these conditions.

## Topics

### Identifying purge conditions

- [sourceAssetChangedOrDeleted](purgeconditions-swift.struct/sourceassetchangedordeleted.md): A condition that allows purging when the source model changes or no longer exists.
- [storagePressure](purgeconditions-swift.struct/storagepressure.md): A condition that allows purging under device storage pressure.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)
