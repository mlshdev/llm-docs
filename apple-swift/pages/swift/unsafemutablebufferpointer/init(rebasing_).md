> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/init(rebasing:)](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/init(rebasing:))

# init(rebasing:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a buffer over the same memory as the given buffer slice.

## Declaration

```swift
init(rebasing slice: Slice<UnsafeMutableBufferPointer<Element>>)
```

## Parameters

- `slice`: The buffer slice to rebase.

<a id="discussion"></a>

## Discussion

The new buffer represents the same region of memory as `slice`, but is indexed starting at zero instead of sharing indices with the original buffer. For example:

```swift
let buffer = returnsABuffer()
let n = 5
let slice = buffer[n...]
let rebased = UnsafeMutableBufferPointer(rebasing: slice)
```

After rebasing `slice` as the `rebased` buffer, the following are true:

- `rebased.startIndex == 0`
- `rebased[0] == slice[n]`
- `rebased[0] == buffer[n]`
- `rebased.count == slice.count`
