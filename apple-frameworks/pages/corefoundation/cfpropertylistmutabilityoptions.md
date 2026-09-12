> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpropertylistmutabilityoptions](https://developer.apple.com/documentation/corefoundation/cfpropertylistmutabilityoptions)

# CFPropertyListMutabilityOptions (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Type for flags that determine the degree of mutability of newly created property lists.

## Declaration

```swift
struct CFPropertyListMutabilityOptions
```

<a id="overview"></a>

## Overview

See [Property List Mutability Options](property_list_mutability_options.md) for possible values.

## Topics

### Initializers

- [init(rawValue:)](cfpropertylistmutabilityoptions/init%28rawvalue_%29.md)

### Type Properties

- [mutableContainers](cfpropertylistmutabilityoptions/mutablecontainers.md): Specifies that the property list should have mutable containers but immutable leaves.
- [mutableContainersAndLeaves](cfpropertylistmutabilityoptions/mutablecontainersandleaves.md): Specifies that the property list should have mutable containers and mutable leaves.

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

# CFPropertyListMutabilityOptions (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Type for flags that determine the degree of mutability of newly created property lists.

## Declaration

```objectivec
enum CFPropertyListMutabilityOptions : CFOptionFlags;
```

<a id="overview"></a>

## Overview

See [Property List Mutability Options](property_list_mutability_options.md) for possible values.

## Topics

### Enumeration Cases

- [kCFPropertyListImmutable](cfpropertylistmutabilityoptions/kcfpropertylistimmutable.md): Specifies that the property list should be immutable.
- [kCFPropertyListMutableContainers](cfpropertylistmutabilityoptions/mutablecontainers.md): Specifies that the property list should have mutable containers but immutable leaves.
- [kCFPropertyListMutableContainersAndLeaves](cfpropertylistmutabilityoptions/mutablecontainersandleaves.md): Specifies that the property list should have mutable containers and mutable leaves.
