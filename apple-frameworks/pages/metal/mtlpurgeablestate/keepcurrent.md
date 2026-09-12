> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpurgeablestate/keepcurrent](https://developer.apple.com/documentation/metal/mtlpurgeablestate/keepcurrent)

# MTLPurgeableState.keepCurrent (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The current state is queried but doesn’t change.

## Declaration

```swift
case keepCurrent
```

<a id="discussion"></a>

## Discussion

The [setPurgeableState(\_:)](../mtlresource/setpurgeablestate%28__%29.md) method never returns this value. When this value is passed to that function, it returns the current purgability state without changing it.

## See Also

### Specifying purgeable states

- [MTLPurgeableState.nonVolatile](nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MTLPurgeableState.volatile](volatile.md): The system is allowed to discard the resource to free up memory.
- [MTLPurgeableState.empty](empty.md): A state that indicates to the system that it needs to consider the contents of a resource as invalid, typically because you’re discarding it.

# MTLPurgeableStateKeepCurrent (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The current state is queried but doesn’t change.

## Declaration

```objectivec
MTLPurgeableStateKeepCurrent
```

<a id="discussion"></a>

## Discussion

The [setPurgeableState:](../mtlresource/setpurgeablestate%28__%29.md) method never returns this value. When this value is passed to that function, it returns the current purgability state without changing it.

## See Also

### Specifying purgeable states

- [MTLPurgeableStateNonVolatile](nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MTLPurgeableStateVolatile](volatile.md): The system is allowed to discard the resource to free up memory.
- [MTLPurgeableStateEmpty](empty.md): A state that indicates to the system that it needs to consider the contents of a resource as invalid, typically because you’re discarding it.
