> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/anyrandomaccesscollection/startindex

# startIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The position of the first element in a non-empty collection.

## Declaration

```swift
var startIndex: AnyRandomAccessCollection<Element>.Index { get }
```

<a id="discussion"></a>

## Discussion

In an empty collection, `startIndex == endIndex`.
