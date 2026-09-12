> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/hasher/combine(_:)](https://developer.apple.com/documentation/swift/hasher/combine(_:))

# combine(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the given value to this hasher, mixing its essential parts into the hasher state.

## Declaration

```swift
mutating func combine<H>(_ value: borrowing H) where H : Hashable, H : ~Copyable, H : ~Escapable
```

## Parameters

- `value`: A value to add to the hasher.

## See Also

### Adding Values

- [combine(bytes:)](combine%28bytes_%29.md): Adds the contents of the given buffer to this hasher, mixing it into the hasher state.
