> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/setalgebra-implementations](https://developer.apple.com/documentation/swift/set/setalgebra-implementations)

# SetAlgebra Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Initializers

- [init()](init%28%29.md): Conforms when `Element` conforms to `Hashable`. Creates an empty set.
- [init(\_:)](init%28__%29.md): Conforms when `Element` conforms to `Hashable`. Creates a new set from a finite sequence of items.
- [init(\_:)](init%28__%29-9cgks.md): Creates a new set from a finite sequence of items.
- [init(arrayLiteral:)](init%28arrayliteral_%29-85a3x.md): Conforms when `ArrayLiteralElement` is `Self.Element`. Creates a set containing the elements of the given array literal.

### Instance Methods

- [contains(\_:)](contains%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the given element exists in the set.
- [formIntersection(\_:)](formintersection%28__%29.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the set that aren’t also in the given sequence.
- [formSymmetricDifference(\_:)](formsymmetricdifference%28__%29-22p0m.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the set that are also in the given sequence and adds the members of the sequence that are not already in the set.
- [formUnion(\_:)](formunion%28__%29.md): Conforms when `Element` conforms to `Hashable`. Inserts the elements of the given sequence into the set.
- [insert(\_:)](insert%28__%29-nads.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element in the set if it is not already present.
- [intersection(\_:)](intersection%28__%29-1zh8f.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements that are common to both this set and the given sequence.
- [isDisjoint(with:)](isdisjoint%28with_%29-8ngmk.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether this set has no members in common with the given set.
- [isSubset(of:)](issubset%28of_%29-1d7pp.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether this set is a subset of the given set.
- [isSuperset(of:)](issuperset%28of_%29-9iz62.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether this set is a superset of the given set.
- [remove(\_:)](remove%28__%29-8p2tv.md): Conforms when `Element` conforms to `Hashable`. Removes the specified element from the set.
- [subtract(\_:)](subtract%28__%29-7uaak.md): Removes the elements of the given set from this set.
- [subtract(\_:)](subtract%28__%29-8gc48.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the given set from this set.
- [subtracting(\_:)](subtracting%28__%29-3n4lc.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of this set that do not occur in the given set.
- [symmetricDifference(\_:)](symmetricdifference%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements that are either in this set or in the given sequence, but not in both.
- [union(\_:)](union%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements of both this set and the given sequence.
- [update(with:)](update%28with_%29-2n6tk.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element into the set unconditionally.
