> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistserialization/mutabilityoptions/mutablecontainers](https://developer.apple.com/documentation/foundation/propertylistserialization/mutabilityoptions/mutablecontainers)

# mutableContainers (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes the returned property list to have mutable containers but immutable leaves.

## Declaration

```swift
static var mutableContainers: PropertyListSerialization.MutabilityOptions { get }
```

## See Also

### Constants

- [mutableContainersAndLeaves](mutablecontainersandleaves.md): Causes the returned property list to have mutable containers and leaves.

# NSPropertyListMutableContainers (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes the returned property list to have mutable containers but immutable leaves.

## Declaration

```objectivec
NSPropertyListMutableContainers
```

## See Also

### Constants

- [NSPropertyListMutableContainersAndLeaves](mutablecontainersandleaves.md): Causes the returned property list to have mutable containers and leaves.
- [NSPropertyListImmutable](../../nspropertylistmutabilityoptions/nspropertylistimmutable.md): Causes the returned property list to contain immutable objects.
