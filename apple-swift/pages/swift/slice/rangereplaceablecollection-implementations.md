> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/rangereplaceablecollection-implementations](https://developer.apple.com/documentation/swift/slice/rangereplaceablecollection-implementations)

# RangeReplaceableCollection Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Operators

- [+(\_:\_:)](+%28____%29-298al.md): Creates a new collection by concatenating the elements of a collection and a sequence.
- [+(\_:\_:)](+%28____%29-4resp.md): Creates a new collection by concatenating the elements of a sequence and a collection.
- [+(\_:\_:)](+%28____%29-99wuu.md): Creates a new collection by concatenating the elements of two collections.
- [+=(\_:\_:)](+=%28____%29.md): Appends the elements of a sequence to a range-replaceable collection.

### Initializers

- [init()](init%28%29.md): Conforms when `Base` conforms to `RangeReplaceableCollection`. Creates a new, empty collection.
- [init(\_:)](init%28__%29.md): Conforms when `Base` conforms to `RangeReplaceableCollection`. Creates a new instance of a collection containing the elements of a sequence.
- [init(\_:)](init%28__%29-81eoy.md): Creates a new instance of a collection containing the elements of a sequence.
- [init(repeating:count:)](init%28repeating_count_%29.md): Conforms when `Base` conforms to `RangeReplaceableCollection`. Creates a new collection containing the specified number of a single, repeated value.
- [init(repeating:count:)](init%28repeating_count_%29-6ps2q.md): Creates a new collection containing the specified number of a single, repeated value.

### Instance Methods

- [append(\_:)](append%28__%29.md): Adds an element to the end of the collection.
- [append(contentsOf:)](append%28contentsof_%29.md): Adds the elements of a sequence or collection to the end of this collection.
- [applying(\_:)](applying%28__%29.md): Applies the given difference to this collection.
- [filter(\_:)](filter%28__%29-9rk6d.md): Returns a new collection of the same type containing, in order, the elements of the original collection that satisfy the given predicate.
- [insert(\_:at:)](insert%28__at_%29-6sg0.md): Conforms when `Base` conforms to `RangeReplaceableCollection`. Inserts a new element into the collection at the specified position.
- [insert(\_:at:)](insert%28__at_%29-8i1dc.md): Inserts a new element into the collection at the specified position.
- [insert(contentsOf:at:)](insert%28contentsof_at_%29-25pep.md): Conforms when `Base` conforms to `RangeReplaceableCollection`. Inserts the elements of a sequence into the collection at the specified position.
- [insert(contentsOf:at:)](insert%28contentsof_at_%29-2xj4m.md): Inserts the elements of a sequence into the collection at the specified position.
- [popLast()](poplast%28%29-30m9y.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
- [popLast()](poplast%28%29-4rely.md): Conforms when `Self` conforms to `BidirectionalCollection` and `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [remove(at:)](remove%28at_%29-7ep9e.md): Conforms when `Base` conforms to `RangeReplaceableCollection`. Removes and returns the element at the specified position.
- [remove(at:)](remove%28at_%29-7xja6.md): Removes and returns the element at the specified position.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Removes all elements from the collection.
- [removeAll(where:)](removeall%28where_%29-26lr3.md): Removes all the elements that satisfy the given predicate.
- [removeAll(where:)](removeall%28where_%29-9u7g.md): Conforms when `Self` conforms to `MutableCollection`. Removes all the elements that satisfy the given predicate.
- [removeFirst()](removefirst%28%29-1iayr.md): Removes and returns the first element of the collection.
- [removeFirst()](removefirst%28%29-3eija.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the first element of the collection.
- [removeFirst(\_:)](removefirst%28__%29-1pxgx.md): Conforms when `Self` is `Self.SubSequence`. Removes the specified number of elements from the beginning of the collection.
- [removeFirst(\_:)](removefirst%28__%29-7hjja.md): Removes the specified number of elements from the beginning of the collection.
- [removeLast()](removelast%28%29-5mmgh.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
- [removeLast()](removelast%28%29-wsbc.md): Conforms when `Self` conforms to `BidirectionalCollection` and `Self` is `Self.SubSequence`. Removes and returns the last element of the collection.
- [removeLast(\_:)](removelast%28__%29-75mgx.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes the specified number of elements from the end of the collection.
- [removeLast(\_:)](removelast%28__%29-fxm2.md): Conforms when `Self` conforms to `BidirectionalCollection` and `Self` is `Self.SubSequence`. Removes the specified number of elements from the end of the collection.
- [removeSubrange(\_:)](removesubrange%28__%29-1y2qo.md): Removes the elements in the specified subrange from the collection.
- [removeSubrange(\_:)](removesubrange%28__%29-7s7x9.md): Conforms when `Base` conforms to `RangeReplaceableCollection`. Removes the specified subrange of elements from the collection.
- [removeSubrange(\_:)](removesubrange%28__%29-8m66i.md): Removes the elements in the specified subrange from the collection.
- [removeSubranges(\_:)](removesubranges%28__%29-2ncra.md): Removes the elements at the given indices.
- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29-8l6gb.md): Deprecated. Replaces the specified subrange of elements with the given collection.
- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29-9le44.md): Replaces the specified subrange of elements with the given collection.
- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29-zwfk.md): Conforms when `Base` conforms to `RangeReplaceableCollection`. Replaces the specified subrange of elements with the given collection.
- [reserveCapacity(\_:)](reservecapacity%28__%29.md): Prepares the collection to store the specified number of elements, when doing so is appropriate for the underlying type.
