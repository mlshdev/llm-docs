> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/standardcomparator/init(_:order:)](https://developer.apple.com/documentation/swift/string/standardcomparator/init(_:order:))

# init(\_:order:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Create a `StandardComparator` from the given `StandardComparator` with the given new `order`.

## Declaration

```swift
init(_ base: String.StandardComparator, order: SortOrder = .forward)
```

## Parameters

- `base`: The standard comparator to modify the order of.
- `order`: The initial order of the new `StandardComparator`.
