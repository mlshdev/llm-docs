> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangereplaceablecollection/init(_:)](https://developer.apple.com/documentation/swift/rangereplaceablecollection/init(_:))

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance of a collection containing the elements of a sequence.

## Declaration

```swift
init<S>(_ elements: S) where S : Sequence, Self.Element == S.Element
```

## Parameters

- `elements`: The sequence of elements for the new collection. `elements` must be finite.

## Default Implementations

### RangeReplaceableCollection Implementations

- [init(\_:)](init%28__%29-2c3y1.md): Creates a new instance of a collection containing the elements of a sequence.
