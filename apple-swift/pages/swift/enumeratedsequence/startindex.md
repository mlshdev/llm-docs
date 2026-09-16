> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/enumeratedsequence/startindex

# startIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The position of the first element in a nonempty collection.

## Declaration

```swift
var startIndex: EnumeratedSequence<Base>.Index { get }
```

<a id="discussion"></a>

## Discussion

If the collection is empty, `startIndex` is equal to `endIndex`.
