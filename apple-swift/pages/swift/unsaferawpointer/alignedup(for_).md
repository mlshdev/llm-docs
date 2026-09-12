> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsaferawpointer/alignedup(for:)](https://developer.apple.com/documentation/swift/unsaferawpointer/alignedup(for:))

# alignedUp(for:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Obtain the next pointer properly aligned to store a value of type `T`.

## Declaration

```swift
func alignedUp<T>(for type: T.Type) -> UnsafeRawPointer where T : ~Copyable, T : ~Escapable
```

## Parameters

- `type`: The type to be stored at the returned address.

<a id="return-value"></a>

## Return Value

A pointer properly aligned to store a value of type `T`.

<a id="discussion"></a>

## Discussion

If `self` is properly aligned for accessing `T`, this function returns `self`.
