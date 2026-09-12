> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablerawpointer/alignedup(tomultipleof:)](https://developer.apple.com/documentation/swift/unsafemutablerawpointer/alignedup(tomultipleof:))

# alignedUp(toMultipleOf:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Obtain the next pointer whose bit pattern is a multiple of `alignment`.

## Declaration

```swift
func alignedUp(toMultipleOf alignment: Int) -> UnsafeMutableRawPointer
```

## Parameters

- `alignment`: The alignment of the returned pointer, in bytes. `alignment` must be a whole power of 2.

<a id="return-value"></a>

## Return Value

A pointer aligned to `alignment`.

<a id="discussion"></a>

## Discussion

If the bit pattern of `self` is a multiple of `alignment`, this function returns `self`.
