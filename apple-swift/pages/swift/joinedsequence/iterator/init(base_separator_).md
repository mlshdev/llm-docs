> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/joinedsequence/iterator/init(base:separator:)](https://developer.apple.com/documentation/swift/joinedsequence/iterator/init(base:separator:))

# init(base:separator:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an iterator that presents the elements of `base` sequences concatenated using `separator`.

## Declaration

```swift
init<Separator>(base: Base.Iterator, separator: Separator) where Separator : Sequence, Separator.Element == Base.Element.Element
```

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(`separator.count`).
