> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/rangeset/insert(contentsof:)

# insert(contentsOf:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Inserts the given range into the range set.

## Declaration

```swift
mutating func insert(contentsOf range: Range<Bound>)
```

## Parameters

- `range`: The range to insert into the set.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(*n*), where *n* is the number of ranges in the range set.
