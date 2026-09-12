> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collections](https://developer.apple.com/documentation/swift/collections)

# Collections

**Framework:** Swift  
**Kind:** API Collection

Store and organize data using arrays, dictionaries, sets, and other data structures.

## Topics

### Arrays and Dictionaries

- [Array](array.md): An ordered, random-access collection.
- [Dictionary](dictionary.md): A collection whose elements are key-value pairs.
- [InlineArray](inlinearray.md): A fixed-size array.

### Sets

- [Set](set.md): An unordered collection of unique elements.
- [OptionSet](optionset.md): A type that presents a mathematical set interface to a bit set.

### Ranges

Create a collection of all the values in a range by using the half-open (`..<`) and closed (`...`) range operators.

- [..\<(\_:\_:)](comparable/'.._%28____%29.md): Returns a half-open range that contains its lower bound but not its upper bound.
- [Range](range.md): A half-open interval from a lower bound up to, but not including, an upper bound.
- [RangeSet](rangeset.md): A set of values of any comparable type, represented by ranges.
- [...(\_:\_:)](comparable/'...%28____%29.md): Returns a closed range that contains both of its bounds.
- [ClosedRange](closedrange.md): An interval from a lower bound up to, and including, an upper bound.

### Strides

Create a stride that steps over values between two boundaries using the `stride(from:to:by:)` and `stride(from:through:by:)` functions.

- [stride(from:to:by:)](stride%28from_to_by_%29.md): Returns a sequence from a starting value to, but not including, an end value, stepping by the specified amount.
- [stride(from:through:by:)](stride%28from_through_by_%29.md): Returns a sequence from a starting value toward, and possibly including, an end value, stepping by the specified amount.

### Special-Use Collections

These collections can store zero, one, or many of the same element.

- [repeatElement(\_:count:)](repeatelement%28__count_%29.md): Creates a collection containing the specified number of the given element.
- [CollectionOfOne](collectionofone.md): A collection containing a single element.
- [EmptyCollection](emptycollection.md): A collection whose element type is `Element` but that is always empty.
- [KeyValuePairs](keyvaluepairs.md): A lightweight collection of key-value pairs.
- [DictionaryLiteral](dictionaryliteral.md): Deprecated.

### Dynamic Sequences

- [sequence(first:next:)](sequence%28first_next_%29.md): Returns a sequence formed from `first` and repeated lazy applications of `next`.
- [sequence(state:next:)](sequence%28state_next_%29.md): Returns a sequence formed from repeated lazy applications of `next` to a mutable `state`.

### Joint Iteration

- [zip(\_:\_:)](zip%28____%29.md): Creates a sequence of pairs built out of two underlying sequences.

### Advanced Collection Topics

- [Sequence and Collection Protocols](sequence-and-collection-protocols.md): Write generic code that works with any collection, or build your own collection types.
- [Supporting Types](supporting-types.md): Use wrappers, indices, and iterators in operations like slicing, flattening, and reversing a collection.
- [Managed Buffers](managed-buffers.md): Build your own buffer-backed collection types.

## See Also

### Values and Collections

- [Numbers and Basic Values](numbers-and-basic-values.md): Model data with numbers, Boolean values, and other fundamental types.
- [Strings and Text](strings-and-text.md): Work with text using Unicode-safe strings.
- [Time](time-and-duration.md): Measure how long an operation takes and determine schedules in the future.
