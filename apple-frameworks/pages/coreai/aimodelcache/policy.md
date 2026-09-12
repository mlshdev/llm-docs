> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/policy](https://developer.apple.com/documentation/coreai/aimodelcache/policy)

# AIModelCache.Policy

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A policy that controls when the system purges specialized assets from a cache.

## Declaration

```swift
struct Policy
```

## Mentioned In

- [Managing model specialization and caching](../managing-model-specialization-and-caching.md)

<a id="overview"></a>

## Overview

Defines the conditions under which the system may purge specialized assets in an [AIModelCache](../aimodelcache.md).

> **Note**

> Regardless of policy, the system always purges assets when the OS updates, as specialized assets are OS-version specific.

## Topics

### Using preset policies

- [default](policy/default.md): A policy that marks specialized assets as purgeable.
- [persistent](policy/persistent.md): A policy that prevents automatic purging of specialized assets.

### Creating a custom policy

- [init(purgeConditions:)](policy/init%28purgeconditions_%29.md): Creates a policy with the specified purge conditions.

### Inspecting a policy

- [purgeConditions](policy/purgeconditions-swift.property.md): The conditions under which the system may purge specialized assets.

### Describing purge conditions

- [AIModelCache.Policy.PurgeConditions](policy/purgeconditions-swift.struct.md): A set of conditions that determine when the system purges specialized assets.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
