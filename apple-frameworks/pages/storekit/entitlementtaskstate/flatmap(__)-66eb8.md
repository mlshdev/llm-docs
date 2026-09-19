> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/entitlementtaskstate/flatmap(_:)-66eb8

# flatMap(\_:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a new state, mapping the entitlement value if successful.

## Declaration

```swift
func flatMap<NewValue>(_ transform: (Value) async throws -> EntitlementTaskState<NewValue>) async rethrows -> EntitlementTaskState<NewValue>
```

## See Also

### Helper methods

- [flatMap(\_:)](flatmap%28__%29-7gsnv.md): Returns a new state, mapping the entitlement value if successful.
- [map(\_:)](map%28__%29-8ly3v.md): Returns a new state, mapping the entitlement value if successful.
- [map(\_:)](map%28__%29-250dk.md): Returns a new state, mapping the entitlement value if successful.
