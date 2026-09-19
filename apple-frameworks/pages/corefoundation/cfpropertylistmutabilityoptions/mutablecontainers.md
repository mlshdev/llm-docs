> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfpropertylistmutabilityoptions/mutablecontainers

# mutableContainers (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that the property list should have mutable containers but immutable leaves.

## Declaration

```swift
static var mutableContainers: CFPropertyListMutabilityOptions { get }
```

## See Also

### Constants

- [mutableContainersAndLeaves](mutablecontainersandleaves.md): Specifies that the property list should have mutable containers and mutable leaves.

# kCFPropertyListMutableContainers (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies that the property list should have mutable containers but immutable leaves.

## Declaration

```objectivec
kCFPropertyListMutableContainers
```

## See Also

### Constants

- [kCFPropertyListImmutable](kcfpropertylistimmutable.md): Specifies that the property list should be immutable.
- [kCFPropertyListMutableContainersAndLeaves](mutablecontainersandleaves.md): Specifies that the property list should have mutable containers and mutable leaves.
