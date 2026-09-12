> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set](https://developer.apple.com/documentation/swift/set)

# Set

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An unordered collection of unique elements.

## Declaration

```swift
@frozen struct Set<Element> where Element : Hashable
```

<a id="overview"></a>

## Overview

You use a set instead of an array when you need to test efficiently for membership and you aren’t concerned with the order of the elements in the collection, or when you need to ensure that each element appears only once in a collection.

You can create a set with any element type that conforms to the `Hashable` protocol. By default, most types in the standard library are hashable, including strings, numeric and Boolean types, enumeration cases without associated values, and even sets themselves.

Swift makes it as easy to create a new set as to create a new array. Simply assign an array literal to a variable or constant with the `Set` type specified.

```swift
let ingredients: Set = ["cocoa beans", "sugar", "cocoa butter", "salt"]
if ingredients.contains("sugar") {
    print("No thanks, too sweet.")
}
// Prints "No thanks, too sweet."
```

<a id="Set-Operations"></a>

## Set Operations

Sets provide a suite of mathematical set operations. For example, you can efficiently test a set for membership of an element or check its intersection with another set:

- Use the `contains(_:)` method to test whether a set contains a specific element.
- Use the “equal to” operator (`==`) to test whether two sets contain the same elements.
- Use the `isSubset(of:)` method to test whether a set contains all the elements of another set or sequence.
- Use the `isSuperset(of:)` method to test whether all elements of a set are contained in another set or sequence.
- Use the `isStrictSubset(of:)` and `isStrictSuperset(of:)` methods to test whether a set is a subset or superset of, but not equal to, another set.
- Use the `isDisjoint(with:)` method to test whether a set has any elements in common with another set.

You can also combine, exclude, or subtract the elements of two sets:

- Use the `union(_:)` method to create a new set with the elements of a set and another set or sequence.
- Use the `intersection(_:)` method to create a new set with only the elements common to a set and another set or sequence.
- Use the `symmetricDifference(_:)` method to create a new set with the elements that are in either a set or another set or sequence, but not in both.
- Use the `subtracting(_:)` method to create a new set with the elements of a set that are not also in another set or sequence.

You can modify a set in place by using these methods’ mutating counterparts: `formUnion(_:)`, `formIntersection(_:)`, `formSymmetricDifference(_:)`, and `subtract(_:)`.

Set operations are not limited to use with other sets. Instead, you can perform set operations with another set, an array, or any other sequence type.

```swift
var primes: Set = [2, 3, 5, 7]

// Tests whether primes is a subset of a Range<Int>
print(primes.isSubset(of: 0..<10))
// Prints "true"

// Performs an intersection with an Array<Int>
let favoriteNumbers = [5, 7, 15, 21]
print(primes.intersection(favoriteNumbers))
// Prints "[5, 7]"
```

<a id="Sequence-and-Collection-Operations"></a>

## Sequence and Collection Operations

In addition to the `Set` type’s set operations, you can use any nonmutating sequence or collection methods with a set.

```swift
if primes.isEmpty {
    print("No primes!")
} else {
    print("We have \(primes.count) primes.")
}
// Prints "We have 4 primes."

let primesSum = primes.reduce(0, +)
// 'primesSum' == 17

let primeStrings = primes.sorted().map(String.init)
// 'primeStrings' == ["2", "3", "5", "7"]
```

You can iterate through a set’s unordered elements with a `for`-`in` loop.

```swift
for number in primes {
    print(number)
}
// Prints "5"
// Prints "7"
// Prints "2"
// Prints "3"
```

Many sequence and collection operations return an array or a type-erasing collection wrapper instead of a set. To restore efficient set operations, create a new set from the result.

```swift
let primesStrings = primes.map(String.init)
// 'primesStrings' is of type Array<String>
let primesStringsSet = Set(primes.map(String.init))
// 'primesStringsSet' is of type Set<String>
```

<a id="Bridging-Between-Set-and-NSSet"></a>

## Bridging Between Set and NSSet

You can bridge between `Set` and `NSSet` using the `as` operator. For bridging to be possible, the `Element` type of a set must be a class, an `@objc` protocol (a protocol imported from Objective-C or marked with the `@objc` attribute), or a type that bridges to a Foundation type.

Bridging from `Set` to `NSSet` always takes O(1) time and space. When the set’s `Element` type is neither a class nor an `@objc` protocol, any required bridging of elements occurs at the first access of each element, so the first operation that uses the contents of the set (for example, a membership test) can take O(*n*).

Bridging from `NSSet` to `Set` first calls the `copy(with:)` method (`- copyWithZone:` in Objective-C) on the set to get an immutable copy and then performs additional Swift bookkeeping work that takes O(1) time. For instances of `NSSet` that are already immutable, `copy(with:)` returns the same set in constant time; otherwise, the copying performance is unspecified. The instances of `NSSet` and `Set` share buffer using the same copy-on-write optimization that is used when two instances of `Set` share buffer.

## Topics

### Creating a Set

In addition to using an array literal, you can also create a set using these initializers.

- [init()](set/init%28%29.md): Conforms when `Element` conforms to `Hashable`. Creates an empty set.
- [init(minimumCapacity:)](set/init%28minimumcapacity_%29.md): Creates an empty set with preallocated space for at least the specified number of elements.
- [init(\_:)](set/init%28__%29-9cgks.md): Creates a new set from a finite sequence of items.
- [init(\_:)](set/init%28__%29.md): Conforms when `Element` conforms to `Hashable`. Creates a new set from a finite sequence of items.

### Inspecting a Set

- [isEmpty](set/isempty.md): Conforms when `Element` conforms to `Hashable`. A Boolean value that indicates whether the set is empty.
- [count](set/count.md): Conforms when `Element` conforms to `Hashable`. The number of elements in the set.
- [capacity](set/capacity.md): Conforms when `Element` conforms to `Hashable`. The total number of elements that the set can contain without allocating new storage.

### Testing for Membership

- [contains(\_:)](set/contains%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the given element exists in the set.

### Adding Elements

- [insert(\_:)](set/insert%28__%29-nads.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element in the set if it is not already present.
- [insert(\_:)](set/insert%28__%29-yar4.md): Conforms when `Element` is `AnyHashable`.
- [update(with:)](set/update%28with_%29-2n6tk.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element into the set unconditionally.
- [update(with:)](set/update%28with_%29-7r2g.md): Conforms when `Element` is `AnyHashable`.
- [reserveCapacity(\_:)](set/reservecapacity%28__%29.md): Conforms when `Element` conforms to `Hashable`. Reserves enough space to store the specified number of elements.

### Removing Elements

- [filter(\_:)](set/filter%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of the set that satisfy the given predicate.
- [remove(\_:)](set/remove%28__%29-8p2tv.md): Conforms when `Element` conforms to `Hashable`. Removes the specified element from the set.
- [remove(\_:)](set/remove%28__%29-4d3i1.md): Conforms when `Element` is `AnyHashable`.
- [removeFirst()](set/removefirst%28%29.md): Conforms when `Element` conforms to `Hashable`. Removes the first element of the set.
- [remove(at:)](set/remove%28at_%29.md): Conforms when `Element` conforms to `Hashable`. Removes the element at the given index of the set.
- [removeAll(keepingCapacity:)](set/removeall%28keepingcapacity_%29.md): Conforms when `Element` conforms to `Hashable`. Removes all members from the set.

### Combining Sets

- [union(\_:)](set/union%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements of both this set and the given sequence.
- [formUnion(\_:)](set/formunion%28__%29.md): Conforms when `Element` conforms to `Hashable`. Inserts the elements of the given sequence into the set.
- [intersection(\_:)](set/intersection%28__%29-1zh8f.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements that are common to both this set and the given sequence.
- [intersection(\_:)](set/intersection%28__%29-6uts9.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements that are common to both this set and the given sequence.
- [formIntersection(\_:)](set/formintersection%28__%29.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the set that aren’t also in the given sequence.
- [symmetricDifference(\_:)](set/symmetricdifference%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set with the elements that are either in this set or in the given sequence, but not in both.
- [formSymmetricDifference(\_:)](set/formsymmetricdifference%28__%29-22p0m.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the set that are also in the given sequence and adds the members of the sequence that are not already in the set.
- [formSymmetricDifference(\_:)](set/formsymmetricdifference%28__%29-5u38b.md): Conforms when `Element` conforms to `Hashable`. Replace this set with the elements contained in this set or the given set, but not both.
- [subtract(\_:)](set/subtract%28__%29-8gc48.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the given set from this set.
- [subtract(\_:)](set/subtract%28__%29-7cd3y.md): Conforms when `Element` conforms to `Hashable`. Removes the elements of the given sequence from the set.
- [subtracting(\_:)](set/subtracting%28__%29-3n4lc.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of this set that do not occur in the given set.
- [subtracting(\_:)](set/subtracting%28__%29-2qge3.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of this set that do not occur in the given sequence.

### Comparing Sets

- [==(\_:\_:)](set/==%28____%29.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value indicating whether two sets have equal elements.
- [!=(\_:\_:)](set/!=%28____%29.md): Returns a Boolean value indicating whether two values are not equal.
- [isSubset(of:)](set/issubset%28of_%29-1d7pp.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether this set is a subset of the given set.
- [isSubset(of:)](set/issubset%28of_%29-6qyo5.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set is a subset of the given sequence.
- [isStrictSubset(of:)](set/isstrictsubset%28of_%29-96vc3.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set is a strict subset of the given sequence.
- [isStrictSubset(of:)](set/isstrictsubset%28of_%29-787sx.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set is a strict subset of the given sequence.
- [isSuperset(of:)](set/issuperset%28of_%29-9iz62.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether this set is a superset of the given set.
- [isSuperset(of:)](set/issuperset%28of_%29-90hri.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set is a superset of the given sequence.
- [isStrictSuperset(of:)](set/isstrictsuperset%28of_%29-4d27m.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set is a strict superset of the given sequence.
- [isStrictSuperset(of:)](set/isstrictsuperset%28of_%29-58ejg.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set is a strict superset of the given sequence.
- [isDisjoint(with:)](set/isdisjoint%28with_%29-8ngmk.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether this set has no members in common with the given set.
- [isDisjoint(with:)](set/isdisjoint%28with_%29-2onid.md): Conforms when `Element` conforms to `Hashable`. Returns a Boolean value that indicates whether the set has no members in common with the given sequence.

### Accessing Individual Elements

- [first](set/first.md): The first element of the collection.
- [randomElement()](set/randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](set/randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.

### Finding Elements

- [subscript(\_:)](set/subscript%28__%29.md): Conforms when `Element` conforms to `Hashable`. Accesses the member at the given position.
- [contains(where:)](set/contains%28where_%29.md): Returns a Boolean value indicating whether the sequence contains an element that satisfies the given predicate.
- [allSatisfy(\_:)](set/allsatisfy%28__%29.md): Returns a Boolean value indicating whether every element of a sequence satisfies a given predicate.
- [first(where:)](set/first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [firstIndex(of:)](set/firstindex%28of_%29.md): Conforms when `Element` conforms to `Hashable`. Returns the index of the given element in the set, or `nil` if the element is not a member of the set.
- [firstIndex(where:)](set/firstindex%28where_%29.md): Returns the first index in which an element of the collection satisfies the given predicate.
- [index(of:)](set/index%28of_%29.md): Deprecated. Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [min()](set/min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in the sequence.
- [min(by:)](set/min%28by_%29.md): Returns the minimum element in the sequence, using the given predicate as the comparison between elements.
- [max()](set/max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in the sequence.
- [max(by:)](set/max%28by_%29.md): Returns the maximum element in the sequence, using the given predicate as the comparison between elements.

### Transforming a Set

- [compactMap(\_:)](set/compactmap%28__%29.md): Returns an array containing the non-`nil` results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](set/flatmap%28__%29-i3my.md): Returns an array containing the concatenated results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](set/flatmap%28__%29-6chuh.md): Deprecated.
- [reduce(\_:\_:)](set/reduce%28____%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [reduce(into:\_:)](set/reduce%28into___%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [sorted()](set/sorted%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the elements of the sequence, sorted.
- [sorted(by:)](set/sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
- [shuffled()](set/shuffled%28%29.md): Returns the elements of the sequence, shuffled.
- [shuffled(using:)](set/shuffled%28using_%29.md): Returns the elements of the sequence, shuffled using the given generator as a source for randomness.
- [lazy](set/lazy.md): A sequence containing the same elements as this sequence, but on which some operations, such as `map` and `filter`, are implemented lazily.

### Iterating over a Set

- [enumerated()](set/enumerated%28%29.md): Returns a sequence of pairs (*n*, *x*), where *n* represents a consecutive integer starting at zero and *x* represents an element of the sequence.
- [forEach(\_:)](set/foreach%28__%29.md): Calls the given closure on each element in the sequence in the same order as a `for`-`in` loop.
- [makeIterator()](set/makeiterator%28%29.md): Conforms when `Element` conforms to `Hashable`. Returns an iterator over the members of the set.
- [underestimatedCount](set/underestimatedcount.md): A value less than or equal to the number of elements in the collection.

### Performing Collection Operations

- [Order Dependent Operations on Set](order-dependent-operations-on-set.md): Perform order-dependent operations common to all collections, as implemented for `Set`.

### Encoding and Decoding

- [encode(to:)](set/encode%28to_%29.md): Conforms when `Element` conforms to `Encodable` and `Hashable`. Encodes the elements of this set into the given encoder in an unkeyed container.
- [init(from:)](set/init%28from_%29.md): Conforms when `Element` conforms to `Decodable` and `Hashable`. Creates a new set by decoding from the given decoder.

### Describing a Set

- [hash(into:)](set/hash%28into_%29.md): Conforms when `Element` conforms to `Hashable`. Hashes the essential components of this value by feeding them into the given hasher.
- [description](set/description.md): Conforms when `Element` conforms to `Hashable`. A string that represents the contents of the set.
- [debugDescription](set/debugdescription.md): Conforms when `Element` conforms to `Hashable`. A string that represents the contents of the set, suitable for debugging.
- [customMirror](set/custommirror.md): Conforms when `Element` conforms to `Hashable`. A mirror that reflects the set.

### Reference Types

Use bridged reference types when you need reference semantics or Foundation-specific behavior.

- [NSSet](https://developer.apple.com/documentation/foundation/nsset): A static, unordered collection of unique objects.
- [NSMutableSet](https://developer.apple.com/documentation/foundation/nsmutableset): A dynamic unordered collection of unique objects.

### Supporting Types

- [Set.Index](set/index.md): Conforms when `Element` conforms to `Hashable`. The position of an element in a set.
- [Set.Iterator](set/iterator.md): Conforms when `Element` conforms to `Hashable`. An iterator over the members of a `Set<Element>`.

### Infrequently Used Functionality

- [init(arrayLiteral:)](set/init%28arrayliteral_%29.md): Conforms when `Element` conforms to `Hashable`. Creates a set containing the elements of the given array literal.
- [withContiguousStorageIfAvailable(\_:)](set/withcontiguousstorageifavailable%28__%29.md): Executes a closure on the sequence’s contiguous storage.

### Instance Methods

- [isTriviallyIdentical(to:)](set/istriviallyidentical%28to_%29.md): Conforms when `Element` conforms to `Hashable`. Returns a boolean value indicating whether this set is identical to `other`.

### Type Aliases

- [Set.Specification](set/specification.md): Conforms when `Element` conforms to `_IntentValue` and `Hashable`.
- [Set.UnderlyingSequence](set/underlyingsequence.md): Conforms when `Element` conforms to `_IntentValue` and `Hashable`.
- [Set.UnwrappedType](set/unwrappedtype.md): Conforms when `Element` conforms to `_IntentValue` and `Hashable`.
- [Set.ValueType](set/valuetype.md): Conforms when `Element` conforms to `_IntentValue` and `Hashable`.

### Type Properties

- [defaultResolverSpecification](set/defaultresolverspecification.md): Conforms when `Element` conforms to `_IntentValue` and `Hashable`.

### Default Implementations

- [Collection Implementations](set/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](set/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](set/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](set/customstringconvertible-implementations.md)
- [Decodable Implementations](set/decodable-implementations.md)
- [Encodable Implementations](set/encodable-implementations.md)
- [Equatable Implementations](set/equatable-implementations.md)
- [ExpressibleByArrayLiteral Implementations](set/expressiblebyarrayliteral-implementations.md)
- [Hashable Implementations](set/hashable-implementations.md)
- [IntentValueConvertible Implementations](set/intentvalueconvertible-implementations.md)
- [IntentValueExpressing Implementations](set/intentvalueexpressing-implementations.md)
- [Sequence Implementations](set/sequence-implementations.md)
- [SetAlgebra Implementations](set/setalgebra-implementations.md)

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](https://developer.apple.com/documentation/corevideo/cvattachmentvaluerepresentable)
- [CVarArg](cvararg.md)
- [Collection](collection.md)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomReflectable](customreflectable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByArrayLiteral](expressiblebyarrayliteral.md)
- [Hashable](hashable.md)
- [IntentValueConvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)
- [IntentValueExpressing](https://developer.apple.com/documentation/appintents/intentvalueexpressing)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)
- [SetAlgebra](setalgebra.md)

## See Also

### Sets

- [OptionSet](optionset.md): A type that presents a mathematical set interface to a bit set.
