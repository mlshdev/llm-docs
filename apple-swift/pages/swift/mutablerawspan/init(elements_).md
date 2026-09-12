> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablerawspan/init(elements:)](https://developer.apple.com/documentation/swift/mutablerawspan/init(elements:))

# init(elements:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Convert a typed span to a raw span.

## Declaration

```swift
init<Element>(elements: consuming MutableSpan<Element>) where Element : ConvertibleFromBytes, Element : ConvertibleToBytes
```

## Parameters

- `elements`: An existing `MutableSpan<Element>`, from which this `MutableRawSpan` will inherit its lifetime.

<a id="discussion"></a>

## Discussion

Creates a `MutableRawSpan` over the memory represented by a `MutableSpan<Element>`.
