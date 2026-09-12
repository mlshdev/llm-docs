> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int128/words-swift.typealias](https://developer.apple.com/documentation/swift/int128/words-swift.typealias)

# Int128.Words

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A type that represents the words of a binary integer.

## Declaration

```swift
typealias Words = UInt128.Words
```

<a id="discussion"></a>

## Discussion

The `Words` type must conform to the `RandomAccessCollection` protocol with an `Element` type of `UInt` and `Index` type of `Int`.
