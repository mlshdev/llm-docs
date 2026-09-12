> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsaferawpointer/decodeatomicoptionalrepresentation(_:)](https://developer.apple.com/documentation/swift/unsaferawpointer/decodeatomicoptionalrepresentation(_:))

# decodeAtomicOptionalRepresentation(\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Recovers the logical atomic type `Self?` by destroying some `AtomicOptionalRepresentation` storage instance returned from an atomic operation on `Optional`.

## Declaration

```swift
static func decodeAtomicOptionalRepresentation(_ representation: consuming UnsafeRawPointer.AtomicOptionalRepresentation) -> UnsafeRawPointer?
```

## Parameters

- `representation`: The optional storage representation for `Self?` that’s used within atomic operations on `Optional`.

<a id="return-value"></a>

## Return Value

The newly decoded logical type `Self?`.

<a id="discussion"></a>

## Discussion

> **Note**

> This is not an atomic operation. This simply decodes the storage representation used in atomic operations on `Optional` back into the logical type for normal use, `Self?`.
