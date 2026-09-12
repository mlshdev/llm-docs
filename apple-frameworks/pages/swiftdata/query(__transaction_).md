> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/query(_:transaction:)](https://developer.apple.com/documentation/swiftdata/query(_:transaction:))

# Query(\_:transaction:)

**Framework:** SwiftData  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Fetches only the subset of the attached model type that satisfy the provided fetch descriptor’s criteria.

## Declaration

```swift
@attached(accessor) @attached(peer, names: prefixed(`_`)) macro Query<Element>(_ descriptor: FetchDescriptor<Element>, transaction: Transaction? = nil) where Element : PersistentModel
```

## Parameters

- `descriptor`: The criteria, sort order, and any additional configuration to use when performing the fetch.
- `transaction`: The animation to use when updates to the fetched models trigger user interface changes.

## See Also

### Descriptor-based queries

- [Query(\_:animation:)](query%28__animation_%29.md): Fetches only the subset of the attached model type that satisfy the provided fetch descriptor’s criteria.
