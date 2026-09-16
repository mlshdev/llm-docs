> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/flattensequence/endindex

# endIndex

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The collection’s “past the end” position.

## Declaration

```swift
var endIndex: FlattenSequence<Base>.Index { get }
```

<a id="discussion"></a>

## Discussion

`endIndex` is not a valid argument to `subscript`, and is always reachable from `startIndex` by zero or more applications of `index(after:)`.
