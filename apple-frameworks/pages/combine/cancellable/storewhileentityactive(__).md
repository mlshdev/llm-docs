> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/cancellable/storewhileentityactive(_:)

# storeWhileEntityActive(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS 1.0+

Retains the `Cancellable` as long as the entity is active (see `Entity.isActive`). If the entity is deactivated, the `Cancellable` is released.

## Declaration

```swift
@MainActor @preconcurrency func storeWhileEntityActive(_ entity: Entity)
```

<a id="discussion"></a>

## Discussion

This method does nothing if the entity is already inactive.

Internally, this method stores an `AnyCancellable` in a transient component of the entity. The component is removed when the *deactivate* event for this entity is received.
