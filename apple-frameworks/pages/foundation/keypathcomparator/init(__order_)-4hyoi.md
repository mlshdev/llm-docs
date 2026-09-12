> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/keypathcomparator/init(_:order:)-4hyoi](https://developer.apple.com/documentation/foundation/keypathcomparator/init(_:order:)-4hyoi)

# init(\_:order:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
init<Value>(_ keyPath: any KeyPath<Compared, Value?> & Sendable, order: SortOrder = .forward) where Value : Comparable
```

## See Also

### Initializers

- [init(\_:comparator:)](init%28__comparator_%29-8b13q.md)
- [init(\_:comparator:)](init%28__comparator_%29-284rt.md)
- [init(\_:comparator:order:)](init%28__comparator_order_%29-749jk.md)
- [init(\_:comparator:order:)](init%28__comparator_order_%29-3gjxd.md)
- [init(\_:order:)](init%28__order_%29-6r8gw.md)
