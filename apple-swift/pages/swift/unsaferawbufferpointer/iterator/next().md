> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsaferawbufferpointer/iterator/next()](https://developer.apple.com/documentation/swift/unsaferawbufferpointer/iterator/next())

# next()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Advances to the next byte and returns it, or `nil` if no next byte exists.

## Declaration

```swift
mutating func next() -> UInt8?
```

<a id="return-value"></a>

## Return Value

The next sequential byte in the raw buffer if another byte exists; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

Once `nil` has been returned, all subsequent calls return `nil`.
