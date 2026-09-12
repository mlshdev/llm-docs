> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/outputrawspan/append(_:as:)-63w17](https://developer.apple.com/documentation/swift/outputrawspan/append(_:as:)-63w17)

# append(\_:as:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Appends the given value’s bytes to this span’s bytes.

## Declaration

```swift
mutating func append<T>(_ value: T, as type: T.Type) where T : BitwiseCopyable
```

## Parameters

- `value`: The value to store as raw bytes.
- `type`: The type of the value.
