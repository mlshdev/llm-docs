> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontainer/configurationname(forstoreidentifier:)](https://developer.apple.com/documentation/swiftdata/modelcontainer/configurationname(forstoreidentifier:))

# configurationName(forStoreIdentifier:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Swift 5.9+

Returns the configuration name associated with the given on-disk store identifier.

## Declaration

```swift
func configurationName(forStoreIdentifier identifier: String) -> String?
```

## Parameters

- `identifier`: A store identifier string, for example from `PersistentIdentifier.storeIdentifier` or a history transaction’s store identifier.

<a id="return-value"></a>

## Return Value

The `name` of the `ModelConfiguration` that backs the given store, or `nil` if no store with that identifier exists in this container or if `invalidate()` has been called.

<a id="discussion"></a>

## Discussion

Use this when you already have a store identifier — such as `PersistentIdentifier.storeIdentifier` from a fetched object or a store identifier from a history transaction — and need to map it back to the human-readable configuration name that produced that store.
