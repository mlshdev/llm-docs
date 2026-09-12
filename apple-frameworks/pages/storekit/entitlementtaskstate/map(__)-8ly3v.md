> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/entitlementtaskstate/map(_:)-8ly3v](https://developer.apple.com/documentation/storekit/entitlementtaskstate/map(_:)-8ly3v)

# map(\_:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a new state, mapping the entitlement value if successful.

## Declaration

```swift
func map<NewValue>(_ transform: (Value) throws -> NewValue) rethrows -> EntitlementTaskState<NewValue>
```

## See Also

### Helper methods

- [flatMap(\_:)](flatmap%28__%29-7gsnv.md): Returns a new state, mapping the entitlement value if successful.
- [flatMap(\_:)](flatmap%28__%29-66eb8.md): Returns a new state, mapping the entitlement value if successful.
- [map(\_:)](map%28__%29-250dk.md): Returns a new state, mapping the entitlement value if successful.
