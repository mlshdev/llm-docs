> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablerawbufferpointer/init(rebasing:)](https://developer.apple.com/documentation/swift/unsafemutablerawbufferpointer/init(rebasing:))

# init(rebasing:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a raw buffer over the same memory as the given raw buffer slice, with the indices rebased to zero.

## Declaration

```swift
init(rebasing slice: Slice<UnsafeMutableRawBufferPointer>)
```

## Parameters

- `slice`: The raw buffer slice to rebase.

<a id="discussion"></a>

## Discussion

The new buffer represents the same region of memory as the slice, but its indices start at zero instead of at the beginning of the slice in the original buffer. The following code creates `slice`, a slice covering part of an existing buffer instance, then rebases it into a new `rebased` buffer.

```swift
let slice = buffer[n...]
let rebased = UnsafeRawBufferPointer(rebasing: slice)
```

After this code has executed, the following are true:

- `rebased.startIndex == 0`
- `rebased[0] == slice[n]`
- `rebased[0] == buffer[n]`
- `rebased.count == slice.count`
