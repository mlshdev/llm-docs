> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unmanaged/encodeatomicrepresentation(_:)](https://developer.apple.com/documentation/swift/unmanaged/encodeatomicrepresentation(_:))

# encodeAtomicRepresentation(\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Destroys a value of `Self` and prepares an `AtomicRepresentation` storage type to be used for atomic operations.

## Declaration

```swift
static func encodeAtomicRepresentation(_ value: consuming Unmanaged<Instance>) -> Unmanaged<Instance>.AtomicRepresentation
```

## Parameters

- `value`: A valid instance of `Self` that’s about to be destroyed to encode an instance of its `AtomicRepresentation`.

<a id="return-value"></a>

## Return Value

The newly encoded `AtomicRepresentation` storage.

<a id="discussion"></a>

## Discussion

> **Note**

> This is not an atomic operation. This simply encodes the logical type `Self` into its storage representation suitable for atomic operations, `AtomicRepresentation`.
