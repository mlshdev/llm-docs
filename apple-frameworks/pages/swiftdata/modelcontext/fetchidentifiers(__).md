> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/fetchidentifiers(_:)](https://developer.apple.com/documentation/swiftdata/modelcontext/fetchidentifiers(_:))

# fetchIdentifiers(\_:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Returns an array of persistent identifiers, where each identifier represents a single model that satisfies the criteria of the specified fetch descriptor.

## Declaration

```swift
func fetchIdentifiers<T>(_ descriptor: FetchDescriptor<T>) throws -> [PersistentIdentifier] where T : PersistentModel
```

## Parameters

- `descriptor`: A fetch descriptor that provides the configuration for the fetch.

<a id="return-value"></a>

## Return Value

The array of persistent identifiers. If no models match the descriptor’s criteria, the array is empty.

## See Also

### Fetching only persistent identifiers

- [fetchIdentifiers(\_:batchSize:)](fetchidentifiers%28__batchsize_%29.md): Returns a collection of persistent identifiers, in batches, where each identifier represents a single model that satisfies the criteria of the specified fetch descriptor.
