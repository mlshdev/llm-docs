> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/refreshsourcesifnecessary()](https://developer.apple.com/documentation/eventkit/ekeventstore/refreshsourcesifnecessary())

# refreshSourcesIfNecessary() (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+

Pulls new data from remote sources, if necessary.

## Declaration

```swift
func refreshSourcesIfNecessary()
```

<a id="Discussion"></a>

## Discussion

Use this method to pull new data from remote sources if the local data is out of date.

## See Also

### Saving and restoring state

- [commit()](commit%28%29.md): Commits all unsaved changes to the event store.
- [reset()](reset%28%29.md): Reverts the event store to its saved state.

# refreshSourcesIfNecessary (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+

Pulls new data from remote sources, if necessary.

## Declaration

```objectivec
- (void) refreshSourcesIfNecessary;
```

<a id="Discussion"></a>

## Discussion

Use this method to pull new data from remote sources if the local data is out of date.

## See Also

### Saving and restoring state

- [commit:](commit%28%29.md): Commits all unsaved changes to the event store.
- [reset](reset%28%29.md): Reverts the event store to its saved state.
