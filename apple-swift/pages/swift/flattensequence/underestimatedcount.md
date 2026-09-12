> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/flattensequence/underestimatedcount](https://developer.apple.com/documentation/swift/flattensequence/underestimatedcount)

# underestimatedCount

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value less than or equal to the number of elements in the sequence, calculated nondestructively.

## Declaration

```swift
var underestimatedCount: Int { get }
```

<a id="discussion"></a>

## Discussion

The default implementation returns 0. If you provide your own implementation, make sure to compute the value nondestructively.

> **Complexity**

> O(1), except if the sequence also conforms to `Collection`. In this case, see the documentation of `Collection.underestimatedCount`.
