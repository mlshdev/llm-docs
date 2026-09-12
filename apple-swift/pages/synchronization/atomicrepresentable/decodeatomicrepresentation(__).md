> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/atomicrepresentable/decodeatomicrepresentation(_:)](https://developer.apple.com/documentation/synchronization/atomicrepresentable/decodeatomicrepresentation(_:))

# decodeAtomicRepresentation(\_:)

**Framework:** Synchronization  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Recovers the logical atomic type `Self` by destroying some `AtomicRepresentation` storage instance returned from an atomic operation.

## Declaration

```swift
static func decodeAtomicRepresentation(_ storage: consuming Self.AtomicRepresentation) -> Self
```

## Parameters

- `storage`: The storage representation for `Self` that’s used within atomic operations.

<a id="return-value"></a>

## Return Value

The newly decoded logical type `Self`.

<a id="discussion"></a>

## Discussion

> **Note**

> This is not an atomic operation. This simply decodes the storage representation used in atomic operations back into the logical type for normal use, `Self`.
