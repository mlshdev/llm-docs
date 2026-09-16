> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unsafemutablepointer/initialize(from:)

# initialize(from:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes memory starting at this pointer’s address with the elements of the given collection.

## Declaration

```swift
func initialize<C>(from source: C) where Pointee == C.Element, C : Collection
```

## Parameters

- `source`: A collection of elements of the pointer’s `Pointee` type.

<a id="discussion"></a>

## Discussion

The region of memory starting at this pointer and covering `source.count` instances of the pointer’s `Pointee` type must be uninitialized or `Pointee` must be a trivial type. After calling `initialize(from:)`, the region is initialized.
