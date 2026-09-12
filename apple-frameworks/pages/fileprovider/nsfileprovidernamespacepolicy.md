> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidernamespacepolicy](https://developer.apple.com/documentation/fileprovider/nsfileprovidernamespacepolicy)

# NSFileProviderNamespacePolicy (Swift)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
enum NSFileProviderNamespacePolicy
```

## Topics

### Enumeration Cases

- [NSFileProviderNamespacePolicy.inherited](nsfileprovidernamespacepolicy/inherited.md): Inherit the namespace policy of the parent folder.
- [NSFileProviderNamespacePolicy.materializeEagerly](nsfileprovidernamespacepolicy/materializeeagerly.md): Download this folder eagerly, make sure it’s always fully enumerated Keep downloading remote updates eagerly. Prevent eviction on low disk pressure and other triggers.
- [NSFileProviderNamespacePolicy.materializeLazily](nsfileprovidernamespacepolicy/materializelazily.md): Enumerate this folder lazily (i.e upon access) if it is dataless. Keep populate new items below this folder eagerly if it’s already on disk.

### Initializers

- [init(rawValue:)](nsfileprovidernamespacepolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSFileProviderNamespacePolicy (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

## Declaration

```objectivec
enum NSFileProviderNamespacePolicy : NSInteger;
```

## Topics

### Enumeration Cases

- [NSFileProviderNamespacePolicyInherited](nsfileprovidernamespacepolicy/inherited.md): Inherit the namespace policy of the parent folder.
- [NSFileProviderNamespacePolicyMaterializeEagerly](nsfileprovidernamespacepolicy/materializeeagerly.md): Download this folder eagerly, make sure it’s always fully enumerated Keep downloading remote updates eagerly. Prevent eviction on low disk pressure and other triggers.
- [NSFileProviderNamespacePolicyMaterializeLazily](nsfileprovidernamespacepolicy/materializelazily.md): Enumerate this folder lazily (i.e upon access) if it is dataless. Keep populate new items below this folder eagerly if it’s already on disk.
