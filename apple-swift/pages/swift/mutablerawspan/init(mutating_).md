> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablerawspan/init(mutating:)](https://developer.apple.com/documentation/swift/mutablerawspan/init(mutating:))

# init(mutating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Mutate the elements of a typed span as bytes.

## Declaration

```swift
init<Element>(mutating elements: inout MutableSpan<Element>) where Element : ConvertibleFromBytes, Element : ConvertibleToBytes
```

## Parameters

- `elements`: A typed span to reinterpret as raw bytes.

<a id="discussion"></a>

## Discussion

The stride of `Element` must equal its size, and the starting address of `elements` must be well-aligned for `Element`.
