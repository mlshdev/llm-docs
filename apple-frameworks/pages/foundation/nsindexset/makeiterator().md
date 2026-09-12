> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexset/makeiterator()](https://developer.apple.com/documentation/foundation/nsindexset/makeiterator())

# makeIterator()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an *iterator* over the elements of this *sequence*.

## Declaration

```swift
func makeIterator() -> NSIndexSetIterator
```

<a id="Discussion"></a>

## Discussion

Complexity: O(1).

## See Also

### Enumerating Indexes

- [enumerate(\_:)](enumerate%28__%29.md): Executes a given Block using each object in the index set.
- [enumerate(options:using:)](enumerate%28options_using_%29.md): Executes a given Block over the index set’s indexes, using the specified enumeration options.
- [enumerate(in:options:using:)](enumerate%28in_options_using_%29.md): Executes a given Block using the indexes in the specified range, using the specified enumeration options.
- [NSIndexSetIterator](../nsindexsetiterator.md): An iterator suitable for enumerating the elements of an index set.
