> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/mutablerawspan/init(unsafeelements:)

# init(unsafeElements:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Unsafely convert a typed span to a raw span.

## Declaration

```swift
init<Element>(unsafeElements elements: consuming MutableSpan<Element>)
```

## Parameters

- `elements`: An existing `MutableSpan<Element>`, from which this `MutableRawSpan` will inherit its lifetime.

<a id="discussion"></a>

## Discussion

Creates a `MutableRawSpan` over the memory represented by a `MutableSpan<Element>`.
