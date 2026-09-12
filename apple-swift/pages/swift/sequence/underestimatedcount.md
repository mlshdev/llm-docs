> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/underestimatedcount](https://developer.apple.com/documentation/swift/sequence/underestimatedcount)

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

## Default Implementations

### Sequence Implementations

- [underestimatedCount](underestimatedcount-3n9ne.md): A value less than or equal to the number of elements in the collection.
- [underestimatedCount](underestimatedcount-7sn1i.md): Conforms when `Self` conforms to `Iterable`.
- [underestimatedCount](underestimatedcount-7vi5w.md): Conforms when `Self` conforms to `Iterable`.
- [underestimatedCount](underestimatedcount-9oyup.md): A value less than or equal to the number of elements in the sequence, calculated nondestructively.

## See Also

### Iterating Over a Sequence’s Elements

- [forEach(\_:)](foreach%28__%29.md): Calls the given closure on each element in the sequence in the same order as a `for`-`in` loop.
- [enumerated()](enumerated%28%29.md): Returns a sequence of pairs (*n*, *x*), where *n* represents a consecutive integer starting at zero and *x* represents an element of the sequence.
