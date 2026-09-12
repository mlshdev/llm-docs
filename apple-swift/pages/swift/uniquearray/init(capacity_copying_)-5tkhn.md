> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/init(capacity:copying:)-5tkhn](https://developer.apple.com/documentation/swift/uniquearray/init(capacity:copying:)-5tkhn)

# init(capacity:copying:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a new array with the specified initial capacity, holding a copy of the contents of a given sequence.

## Declaration

```swift
init(capacity: Int? = nil, copying contents: some Sequence<Element>)
```

## Parameters

- `capacity`: The storage capacity of the new array, or nil to allocate just enough capacity to store the contents.
- `contents`: The sequence whose contents to copy into the new array.
