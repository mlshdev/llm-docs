> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontainer/storeidentifier(forconfigurationnamed:)](https://developer.apple.com/documentation/swiftdata/modelcontainer/storeidentifier(forconfigurationnamed:))

# storeIdentifier(forConfigurationNamed:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Swift 5.9+

Returns the on-disk store identifier for the given configuration name.

## Declaration

```swift
func storeIdentifier(forConfigurationNamed name: String) -> String?
```

## Parameters

- `name`: The `name` value from the `ModelConfiguration` used to create the store.

<a id="return-value"></a>

## Return Value

The store identifier string, or `nil` if no store is associated with `name` or if `invalidate()` has been called on this container.

<a id="discussion"></a>

## Discussion

Store identifiers are stable strings derived from the backing file path or the store’s own initialization — they are *not* the configuration name. Use this function when you have the name you passed to `ModelConfiguration` and need the corresponding identifier to filter a `HistoryDescriptor`, interpret `PersistentIdentifier.storeIdentifier`, or route to a specific store.

If no `ModelConfiguration` was given an explicit name at initialization time, the default name is `"default"`.
