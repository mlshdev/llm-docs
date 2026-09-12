> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawspan/init(elements:)](https://developer.apple.com/documentation/swift/rawspan/init(elements:))

# init(elements:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

View a typed span as a raw span.

## Declaration

```swift
init<Element>(elements span: Span<Element>) where Element : ConvertibleToBytes
```

## Parameters

- `span`: An existing `Span<Element>`, from which this `RawSpan` will inherit its lifetime.

<a id="discussion"></a>

## Discussion

Creates a `RawSpan` over the memory represented by a `Span<Element>`.
