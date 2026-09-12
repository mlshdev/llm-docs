> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array](https://developer.apple.com/documentation/swift/array)

# Array

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An ordered, random-access collection.

## Declaration

```swift
@frozen struct Array<Element>
```

<a id="overview"></a>

## Overview

Arrays are one of the most commonly used data types in an app. You use arrays to organize your app’s data. Specifically, you use the `Array` type to hold elements of a single type, the array’s `Element` type. An array can store any kind of elements—from integers to strings to classes.

Swift makes it easy to create arrays in your code using an array literal: simply surround a comma-separated list of values with square brackets. Without any other information, Swift creates an array that includes the specified values, automatically inferring the array’s `Element` type. For example:

```swift
// An array of 'Int' elements
let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15]

// An array of 'String' elements
let streets = ["Albemarle", "Brandywine", "Chesapeake"]
```

You can create an empty array by specifying the `Element` type of your array in the declaration. For example:

```swift
// Shortened forms are preferred
var emptyDoubles: [Double] = []

// The full type name is also allowed
var emptyFloats: Array<Float> = Array()
```

If you need an array that is preinitialized with a fixed number of default values, use the `Array(repeating:count:)` initializer.

```swift
var digitCounts = Array(repeating: 0, count: 10)
print(digitCounts)
// Prints "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]"
```

<a id="Accessing-Array-Values"></a>

## Accessing Array Values

When you need to perform an operation on all of an array’s elements, use a `for`-`in` loop to iterate through the array’s contents.

```swift
for street in streets {
    print("I don't live on \(street).")
}
// Prints "I don't live on Albemarle."
// Prints "I don't live on Brandywine."
// Prints "I don't live on Chesapeake."
```

Use the `isEmpty` property to check quickly whether an array has any elements, or use the `count` property to find the number of elements in the array.

```swift
if oddNumbers.isEmpty {
    print("I don't know any odd numbers.")
} else {
    print("I know \(oddNumbers.count) odd numbers.")
}
// Prints "I know 8 odd numbers."
```

Use the `first` and `last` properties for safe access to the value of the array’s first and last elements. If the array is empty, these properties are `nil`.

```swift
if let firstElement = oddNumbers.first, let lastElement = oddNumbers.last {
    print(firstElement, lastElement, separator: ", ")
}
// Prints "1, 15"

print(emptyDoubles.first, emptyDoubles.last, separator: ", ")
// Prints "nil, nil"
```

You can access individual array elements through a subscript. The first element of a nonempty array is always at index zero. You can subscript an array with any integer from zero up to, but not including, the count of the array. Using a negative number or an index equal to or greater than `count` triggers a runtime error. For example:

```swift
print(oddNumbers[0], oddNumbers[3], separator: ", ")
// Prints "1, 7"

print(emptyDoubles[0])
// Triggers runtime error: Index out of range
```

<a id="Adding-and-Removing-Elements"></a>

## Adding and Removing Elements

Suppose you need to store a list of the names of students that are signed up for a class you’re teaching. During the registration period, you need to add and remove names as students add and drop the class.

```swift
var students = ["Ben", "Ivy", "Jordell"]
```

To add single elements to the end of an array, use the `append(_:)` method. Add multiple elements at the same time by passing another array or a sequence of any kind to the `append(contentsOf:)` method.

```swift
students.append("Maxime")
students.append(contentsOf: ["Shakia", "William"])
// ["Ben", "Ivy", "Jordell", "Maxime", "Shakia", "William"]
```

You can add new elements in the middle of an array by using the `insert(_:at:)` method for single elements and by using `insert(contentsOf:at:)` to insert multiple elements from another collection or array literal. The elements at that index and later indices are shifted back to make room.

```swift
students.insert("Liam", at: 3)
// ["Ben", "Ivy", "Jordell", "Liam", "Maxime", "Shakia", "William"]
```

To remove elements from an array, use the `remove(at:)`, `removeSubrange(_:)`, and `removeLast()` methods.

```swift
// Ben's family is moving to another state
students.remove(at: 0)
// ["Ivy", "Jordell", "Liam", "Maxime", "Shakia", "William"]

// William is signing up for a different class
students.removeLast()
// ["Ivy", "Jordell", "Liam", "Maxime", "Shakia"]
```

You can replace an existing element with a new value by assigning the new value to the subscript.

```swift
if let i = students.firstIndex(of: "Maxime") {
    students[i] = "Max"
}
// ["Ivy", "Jordell", "Liam", "Max", "Shakia"]
```

<a id="Growing-the-Size-of-an-Array"></a>

## Growing the Size of an Array

Every array reserves a specific amount of memory to hold its contents. When you add elements to an array and that array begins to exceed its reserved capacity, the array allocates a larger region of memory and copies its elements into the new storage. The new storage is a multiple of the old storage’s size. This exponential growth strategy means that appending an element happens in constant time, averaging the performance of many append operations. Append operations that trigger reallocation have a performance cost, but they occur less and less often as the array grows larger.

If you know approximately how many elements you will need to store, use the `reserveCapacity(_:)` method before appending to the array to avoid intermediate reallocations. Use the `capacity` and `count` properties to determine how many more elements the array can store without allocating larger storage.

For arrays of most `Element` types, this storage is a contiguous block of memory. For arrays with an `Element` type that is a class or `@objc` protocol type, this storage can be a contiguous block of memory or an instance of `NSArray`. Because any arbitrary subclass of `NSArray` can become an `Array`, there are no guarantees about representation or efficiency in this case.

<a id="Modifying-Copies-of-Arrays"></a>

## Modifying Copies of Arrays

Each array has an independent value that includes the values of all of its elements. For simple types such as integers and other structures, this means that when you change a value in one array, the value of that element does not change in any copies of the array. For example:

```swift
var numbers = [1, 2, 3, 4, 5]
var numbersCopy = numbers
numbers[0] = 100
print(numbers)
// Prints "[100, 2, 3, 4, 5]"
print(numbersCopy)
// Prints "[1, 2, 3, 4, 5]"
```

If the elements in an array are instances of a class, the semantics are the same, though they might appear different at first. In this case, the values stored in the array are references to objects that live outside the array. If you change a reference to an object in one array, only that array has a reference to the new object. However, if two arrays contain references to the same object, you can observe changes to that object’s properties from both arrays. For example:

```swift
// An integer type with reference semantics
class IntegerReference {
    var value = 10
}
var firstIntegers = [IntegerReference(), IntegerReference()]
var secondIntegers = firstIntegers

// Modifications to an instance are visible from either array
firstIntegers[0].value = 100
print(secondIntegers[0].value)
// Prints "100"

// Replacements, additions, and removals are still visible
// only in the modified array
firstIntegers[0] = IntegerReference()
print(firstIntegers[0].value)
// Prints "10"
print(secondIntegers[0].value)
// Prints "100"
```

Arrays, like all variable-size collections in the standard library, use copy-on-write optimization. Multiple copies of an array share the same storage until you modify one of the copies. When that happens, the array being modified replaces its storage with a uniquely owned copy of itself, which is then modified in place. Optimizations are sometimes applied that can reduce the amount of copying.

This means that if an array is sharing storage with other copies, the first mutating operation on that array incurs the cost of copying the array. An array that is the sole owner of its storage can perform mutating operations in place.

In the example below, a `numbers` array is created along with two copies that share the same storage. When the original `numbers` array is modified, it makes a unique copy of its storage before making the modification. Further modifications to `numbers` are made in place, while the two copies continue to share the original storage.

```swift
var numbers = [1, 2, 3, 4, 5]
var firstCopy = numbers
var secondCopy = numbers

// The storage for 'numbers' is copied here
numbers[0] = 100
numbers[1] = 200
numbers[2] = 300
// 'numbers' is [100, 200, 300, 4, 5]
// 'firstCopy' and 'secondCopy' are [1, 2, 3, 4, 5]
```

<a id="Bridging-Between-Array-and-NSArray"></a>

## Bridging Between Array and NSArray

When you need to access APIs that require data in an `NSArray` instance instead of `Array`, use the type-cast operator (`as`) to bridge your instance. For bridging to be possible, the `Element` type of your array must be a class, an `@objc` protocol (a protocol imported from Objective-C or marked with the `@objc` attribute), or a type that bridges to a Foundation type.

The following example shows how you can bridge an `Array` instance to `NSArray` to use the `write(to:atomically:)` method. In this example, the `colors` array can be bridged to `NSArray` because the `colors` array’s `String` elements bridge to `NSString`. The compiler prevents bridging the `moreColors` array, on the other hand, because its `Element` type is `Optional<String>`, which does *not* bridge to a Foundation type.

```swift
let colors = ["periwinkle", "rose", "moss"]
let moreColors: [String?] = ["ochre", "pine"]

let url = URL(fileURLWithPath: "names.plist")
(colors as NSArray).write(to: url, atomically: true)
// true

(moreColors as NSArray).write(to: url, atomically: true)
// error: cannot convert value of type '[String?]' to type 'NSArray'
```

Bridging from `Array` to `NSArray` takes O(1) time and O(1) space if the array’s elements are already instances of a class or an `@objc` protocol; otherwise, it takes O(*n*) time and space.

When the destination array’s element type is a class or an `@objc` protocol, bridging from `NSArray` to `Array` first calls the `copy(with:)` (`- copyWithZone:` in Objective-C) method on the array to get an immutable copy and then performs additional Swift bookkeeping work that takes O(1) time. For instances of `NSArray` that are already immutable, `copy(with:)` usually returns the same array in O(1) time; otherwise, the copying performance is unspecified. If `copy(with:)` returns the same array, the instances of `NSArray` and `Array` share storage using the same copy-on-write optimization that is used when two instances of `Array` share storage.

When the destination array’s element type is a nonclass type that bridges to a Foundation type, bridging from `NSArray` to `Array` performs a bridging copy of the elements to contiguous storage in O(*n*) time. For example, bridging from `NSArray` to `Array<Int>` performs such a copy. No further bridging is required when accessing elements of the `Array` instance.

> **Note**

> The `ContiguousArray` and `ArraySlice` types are not bridged; instances of those types always have a contiguous block of memory as their storage.

## Topics

### Creating an Array

In addition to using an array literal, you can also create an array using these initializers.

- [init()](array/init%28%29.md): Creates a new, empty array.
- [init(\_:)](array/init%28__%29-1ip9h.md): Creates a new instance of a collection containing the elements of a sequence.
- [init(\_:)](array/init%28__%29-236cl.md): Creates an array containing the elements of a sequence.
- [init(repeating:count:)](array/init%28repeating_count_%29.md): Creates a new array containing the specified number of a single, repeated value.
- [init(unsafeUninitializedCapacity:initializingWith:)](array/init%28unsafeuninitializedcapacity_initializingwith_%29.md): Creates an array with the specified capacity, and then calls the given closure with a buffer covering the array’s uninitialized memory.

### Inspecting an Array

- [isEmpty](array/isempty.md): A Boolean value indicating whether the collection is empty.
- [count](array/count.md): The number of elements in the array.
- [capacity](array/capacity.md): The total number of elements that the array can contain without allocating new storage.

### Accessing Elements

- [subscript(\_:)](array/subscript%28__%29-25iat.md): Accesses the element at the specified position.
- [first](array/first.md): The first element of the collection.
- [last](array/last.md): The last element of the collection.
- [subscript(\_:)](array/subscript%28__%29-53fvb.md): Accesses a contiguous subrange of the array’s elements.
- [subscript(\_:)](array/subscript%28__%29-3kwny.md)
- [subscript(\_:)](array/subscript%28__%29-4h7rl.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](array/subscript%28__%29-3pmfg.md)
- [randomElement()](array/randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](array/randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.

### Adding Elements

- [append(\_:)](array/append%28__%29.md): Adds a new element at the end of the array.
- [insert(\_:at:)](array/insert%28__at_%29.md): Inserts a new element at the specified position.
- [insert(contentsOf:at:)](array/insert%28contentsof_at_%29.md): Inserts the elements of a sequence into the collection at the specified position.
- [replaceSubrange(\_:with:)](array/replacesubrange%28__with_%29.md): Replaces a range of elements with the elements in the specified collection.
- [replaceSubrange(\_:with:)](array/replacesubrange%28__with_%29-7293p.md): Replaces the specified subrange of elements with the given collection.
- [reserveCapacity(\_:)](array/reservecapacity%28__%29.md): Reserves enough space to store the specified number of elements.

### Combining Arrays

- [append(contentsOf:)](array/append%28contentsof_%29.md): Adds the elements of a sequence to the end of the array.
- [append(contentsOf:)](array/append%28contentsof_%29-9foli.md): Adds the elements of a sequence or collection to the end of this collection.
- [+(\_:\_:)](array/+%28____%29-6h58k.md): Creates a new collection by concatenating the elements of a sequence and a collection.
- [+(\_:\_:)](array/+%28____%29-n33n.md): Creates a new collection by concatenating the elements of a collection and a sequence.
- [+(\_:\_:)](array/+%28____%29.md)
- [+(\_:\_:)](array/+%28____%29-9fm5l.md): Creates a new collection by concatenating the elements of two collections.
- [+=(\_:\_:)](array/+=%28____%29-676ib.md): Appends the elements of a sequence to a range-replaceable collection.
- [+=(\_:\_:)](array/+=%28____%29.md)

### Removing Elements

- [remove(at:)](array/remove%28at_%29.md): Removes and returns the element at the specified position.
- [removeFirst()](array/removefirst%28%29.md): Removes and returns the first element of the collection.
- [removeFirst(\_:)](array/removefirst%28__%29.md): Removes the specified number of elements from the beginning of the collection.
- [removeLast()](array/removelast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
- [removeLast(\_:)](array/removelast%28__%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes the specified number of elements from the end of the collection.
- [removeSubrange(\_:)](array/removesubrange%28__%29-8may1.md): Removes the elements in the specified subrange from the collection.
- [removeSubrange(\_:)](array/removesubrange%28__%29-9twou.md): Removes the elements in the specified subrange from the collection.
- [removeAll(where:)](array/removeall%28where_%29-5k61r.md): Removes all the elements that satisfy the given predicate.
- [removeAll(keepingCapacity:)](array/removeall%28keepingcapacity_%29.md): Removes all elements from the array.
- [popLast()](array/poplast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.

### Finding Elements

- [contains(\_:)](array/contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the sequence contains the given element.
- [contains(where:)](array/contains%28where_%29.md): Returns a Boolean value indicating whether the sequence contains an element that satisfies the given predicate.
- [allSatisfy(\_:)](array/allsatisfy%28__%29.md): Returns a Boolean value indicating whether every element of a sequence satisfies a given predicate.
- [first(where:)](array/first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [firstIndex(of:)](array/firstindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [index(of:)](array/index%28of_%29.md): Deprecated. Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [firstIndex(where:)](array/firstindex%28where_%29.md): Returns the first index in which an element of the collection satisfies the given predicate.
- [last(where:)](array/last%28where_%29.md): Returns the last element of the sequence that satisfies the given predicate.
- [lastIndex(of:)](array/lastindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the last index where the specified value appears in the collection.
- [lastIndex(where:)](array/lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
- [min()](array/min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in the sequence.
- [min(by:)](array/min%28by_%29.md): Returns the minimum element in the sequence, using the given predicate as the comparison between elements.
- [max()](array/max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in the sequence.
- [max(by:)](array/max%28by_%29.md): Returns the maximum element in the sequence, using the given predicate as the comparison between elements.

### Selecting Elements

- [prefix(\_:)](array/prefix%28__%29.md): Returns a subsequence, up to the specified maximum length, containing the initial elements of the collection.
- [prefix(through:)](array/prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](array/prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [prefix(while:)](array/prefix%28while_%29.md): Returns a subsequence containing the initial elements until `predicate` returns `false` and skipping the remaining elements.
- [suffix(\_:)](array/suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
- [suffix(from:)](array/suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.

### Excluding Elements

- [dropFirst(\_:)](array/dropfirst%28__%29.md): Returns a subsequence containing all but the given number of initial elements.
- [dropLast(\_:)](array/droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
- [drop(while:)](array/drop%28while_%29.md): Returns a subsequence by skipping elements while `predicate` returns `true` and returning the remaining elements.

### Transforming an Array

- [flatMap(\_:)](array/flatmap%28__%29-i3mr.md): Returns an array containing the concatenated results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](array/flatmap%28__%29-6chu8.md): Deprecated.
- [compactMap(\_:)](array/compactmap%28__%29.md): Returns an array containing the non-`nil` results of calling the given transformation with each element of this sequence.
- [reduce(\_:\_:)](array/reduce%28____%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [reduce(into:\_:)](array/reduce%28into___%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [lazy](array/lazy.md): A sequence containing the same elements as this sequence, but on which some operations, such as `map` and `filter`, are implemented lazily.

### Iterating Over an Array’s Elements

- [forEach(\_:)](array/foreach%28__%29.md): Calls the given closure on each element in the sequence in the same order as a `for`-`in` loop.
- [enumerated()](array/enumerated%28%29.md): Returns a sequence of pairs (*n*, *x*), where *n* represents a consecutive integer starting at zero and *x* represents an element of the sequence.
- [makeIterator()](array/makeiterator%28%29.md): Conforms when `Iterator` is `IndexingIterator<Self>`. Returns an iterator over the elements of the collection.
- [underestimatedCount](array/underestimatedcount.md): A value less than or equal to the number of elements in the collection.

### Reordering an Array’s Elements

- [sort()](array/sort%28%29.md): Conforms when `Self` conforms to `RandomAccessCollection` and `Element` conforms to `Comparable`. Sorts the collection in place.
- [sort(by:)](array/sort%28by_%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Sorts the collection in place, using the given predicate as the comparison between elements.
- [sorted()](array/sorted%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the elements of the sequence, sorted.
- [sorted(by:)](array/sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
- [reverse()](array/reverse%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Reverses the elements of the collection in place.
- [reversed()](array/reversed%28%29.md): Returns a view presenting the elements of the collection in reverse order.
- [shuffle()](array/shuffle%28%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Shuffles the collection in place.
- [shuffle(using:)](array/shuffle%28using_%29.md): Conforms when `Self` conforms to `RandomAccessCollection`. Shuffles the collection in place, using the given generator as a source for randomness.
- [shuffled()](array/shuffled%28%29.md): Returns the elements of the sequence, shuffled.
- [shuffled(using:)](array/shuffled%28using_%29.md): Returns the elements of the sequence, shuffled using the given generator as a source for randomness.
- [partition(by:)](array/partition%28by_%29-90po8.md): Reorders the elements of the collection such that all the elements that match the given predicate are after all the elements that don’t match.
- [swapAt(\_:\_:)](array/swapat%28____%29.md): Exchanges the values at the specified indices of the collection.

### Splitting and Joining Elements

- [split(separator:maxSplits:omittingEmptySubsequences:)](array/split%28separator_maxsplits_omittingemptysubsequences_%29-3dgmv.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given element.
- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](array/split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the collection, in order, that don’t contain elements satisfying the given predicate.
- [joined()](array/joined%28%29.md): Conforms when `Element` conforms to `Sequence`. Returns the elements of this sequence of sequences, concatenated.
- [joined(separator:)](array/joined%28separator_%29-7uber.md): Conforms when `Element` conforms to `Sequence`. Returns the concatenated elements of this sequence of sequences, inserting the given separator between each element.
- [joined(separator:)](array/joined%28separator_%29-5do1g.md): Conforms when `Element` is `String`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
- [joined(separator:)](array/joined%28separator_%29-1ckod.md): Conforms when `Element` conforms to `StringProtocol`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.

### Creating and Applying Differences

- [applying(\_:)](array/applying%28__%29.md): Applies the given difference to this collection.
- [difference(from:)](array/difference%28from_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the difference needed to produce this collection’s ordered elements from the given collection.
- [difference(from:by:)](array/difference%28from_by_%29.md): Returns the difference needed to produce this collection’s ordered elements from the given collection, using the given predicate as an equivalence test.

### Comparing Arrays

- [==(\_:\_:)](array/==%28____%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether two arrays contain the same elements in the same order.
- [!=(\_:\_:)](array/!=%28____%29.md): Returns a Boolean value indicating whether two values are not equal.
- [elementsEqual(\_:)](array/elementsequal%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether this sequence and another sequence contain the same elements in the same order.
- [elementsEqual(\_:by:)](array/elementsequal%28__by_%29.md): Returns a Boolean value indicating whether this sequence and another sequence contain equivalent elements in the same order, using the given predicate as the equivalence test.
- [starts(with:)](array/starts%28with_%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the initial elements of the sequence are the same as the elements in another sequence.
- [starts(with:by:)](array/starts%28with_by_%29.md): Returns a Boolean value indicating whether the initial elements of the sequence are equivalent to the elements in another sequence, using the given predicate as the equivalence test.
- [lexicographicallyPrecedes(\_:)](array/lexicographicallyprecedes%28__%29.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the less-than operator (`<`) to compare elements.
- [lexicographicallyPrecedes(\_:by:)](array/lexicographicallyprecedes%28__by_%29.md): Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the given predicate to compare elements.

### Manipulating Indices

- [startIndex](array/startindex.md): The position of the first element in a nonempty array.
- [endIndex](array/endindex.md): The array’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [index(after:)](array/index%28after_%29.md): Returns the position immediately after the given index.
- [formIndex(after:)](array/formindex%28after_%29.md): Replaces the given index with its successor.
- [index(before:)](array/index%28before_%29.md): Returns the position immediately before the given index.
- [formIndex(before:)](array/formindex%28before_%29.md): Replaces the given index with its predecessor.
- [index(\_:offsetBy:)](array/index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [formIndex(\_:offsetBy:)](array/formindex%28__offsetby_%29.md): Offsets the given index by the specified distance.
- [index(\_:offsetBy:limitedBy:)](array/index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [formIndex(\_:offsetBy:limitedBy:)](array/formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
- [distance(from:to:)](array/distance%28from_to_%29.md): Returns the distance between two indices.

### Accessing Underlying Storage

- [withUnsafeBufferPointer(\_:)](array/withunsafebufferpointer%28__%29.md): Calls a closure with a pointer to the array’s contiguous storage.
- [withUnsafeMutableBufferPointer(\_:)](array/withunsafemutablebufferpointer%28__%29.md): Calls the given closure with a pointer to the array’s mutable contiguous storage.
- [withUnsafeBytes(\_:)](array/withunsafebytes%28__%29.md): Calls the given closure with a pointer to the underlying bytes of the array’s contiguous storage.
- [withUnsafeMutableBytes(\_:)](array/withunsafemutablebytes%28__%29.md): Calls the given closure with a pointer to the underlying bytes of the array’s mutable contiguous storage.
- [withContiguousStorageIfAvailable(\_:)](array/withcontiguousstorageifavailable%28__%29.md): Executes a closure on the sequence’s contiguous storage.
- [withContiguousMutableStorageIfAvailable(\_:)](array/withcontiguousmutablestorageifavailable%28__%29.md): Executes a closure on the collection’s contiguous storage.

### Encoding and Decoding

- [encode(to:)](array/encode%28to_%29.md): Conforms when `Element` conforms to `Encodable`. Encodes the elements of this array into the given encoder in an unkeyed container.
- [init(from:)](array/init%28from_%29.md): Conforms when `Element` conforms to `Decodable`. Creates a new array by decoding from the given decoder.

### Describing an Array

- [description](array/description.md): A textual representation of the array and its elements.
- [debugDescription](array/debugdescription.md): A textual representation of the array and its elements, suitable for debugging.
- [customMirror](array/custommirror.md): A mirror that reflects the array.
- [hash(into:)](array/hash%28into_%29.md): Conforms when `Element` conforms to `Hashable`. Hashes the essential components of this value by feeding them into the given hasher.

### Converting Between Arrays and Create ML Types

- [init(\_:)](array/init%28__%29-2ln1a.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Constructs an Array with the elements of a DataColumn.
- [init(\_:)](array/init%28__%29-86ka8.md): Conforms when `Element` is `MLDataValue`. Constructs an Array with the elements of an MLUntypedColumn.

### Related Array Types

- [ContiguousArray](contiguousarray.md): A contiguously stored array.
- [ArraySlice](arrayslice.md): A slice of an `Array`, `ContiguousArray`, or `ArraySlice` instance.

### Reference Types

Use bridged reference types when you need reference semantics or Foundation-specific behavior.

- [NSArray](https://developer.apple.com/documentation/foundation/nsarray): A static ordered collection of objects.
- [NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray): A dynamic ordered collection of objects.

### Supporting Types

- [Array.Index](array/index.md): The index type for arrays, `Int`.
- [Array.Indices](array/indices.md): The type that represents the indices that are valid for subscripting an array, in ascending order.
- [Array.Iterator](array/iterator.md): The type that allows iteration over an array’s elements.
- [Array.ArrayLiteralElement](array/arrayliteralelement.md): The type of the elements of an array literal.
- [Array.SubSequence](array/subsequence.md): A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

### Infrequently Used Functionality

- [init(arrayLiteral:)](array/init%28arrayliteral_%29.md): Creates an array from the given array literal.
- [hashValue](array/hashvalue.md): Conforms when `Element` conforms to `Hashable`. The hash value.

### Initializers

- [init(capacity:initializingWith:)](array/init%28capacity_initializingwith_%29.md): Creates an array with the specified capacity, and then calls the given closure with an output span covering the array’s uninitialized memory.
- [init(fromSplitComplex:scale:count:)](array/init%28fromsplitcomplex_scale_count_%29-5eirc.md): Conforms when `Element` is `Float`. Creates a new array of single-precision values from a `DSPSplitComplex` structure.
- [init(fromSplitComplex:scale:count:)](array/init%28fromsplitcomplex_scale_count_%29-5kgr3.md): Conforms when `Element` is `Double`. Creates a new array of single-precision values from a `DSPDoubleSplitComplex` structure.

### Instance Properties

- [byStateReportingDomain](array/bystatereportingdomain-7plu4.md): Conforms when `Element` is `MetricReport.IntervalEntry`. All states from all interval entries grouped by their StateReporting domain.
- [byStateReportingDomain](array/bystatereportingdomain-8k1ux.md): Conforms when `Element` is `MetricReport.StateEntry`. State entries grouped by their StateReporting domain.
- [fullDayEntry](array/fulldayentry.md): Conforms when `Element` is `MetricReport.IntervalEntry`. The full day interval entry spanning the entire report collection period.
- [mutableSpan](array/mutablespan.md): A mutable span over the elements of this array.
- [span](array/span.md): A span over the elements of this array.

### Instance Methods

- [append(addingCapacity:initializingWith:)](array/append%28addingcapacity_initializingwith_%29.md): Grows the array to have enough capacity for the specified number of elements, then calls the closure with an output span covering the array’s uninitialized memory.
- [isTriviallyIdentical(to:)](array/istriviallyidentical%28to_%29.md): Returns a boolean value indicating whether this array is identical to `other`.
- [makeSamples(\_:targetCount:sessionProvider:validator:)](array/makesamples%28__targetcount_sessionprovider_validator_%29-5j7t0.md): Generates synthetic data based on this dataset and returns a stream of new samples.
- [makeSamples(\_:targetCount:sessionProvider:validator:)](array/makesamples%28__targetcount_sessionprovider_validator_%29-5s9y1.md): Conforms when `Element` conforms to `ModelSampleProtocol` and `Generable`. Generates synthetic data based on this dataset and returns a stream of new samples.
- [toDictionary(with:)](array/todictionary%28with_%29.md)
- [withUnsafeTaggedBuffers(\_:)](array/withunsafetaggedbuffers%28__%29.md): Conforms when `Element` is `CMTaggedDynamicBuffer`. Access the underlying CMTaggedBuffers.

### Subscripts

- [subscript(\_:)](array/subscript%28__%29-dplx.md): Conforms when `Element` is `Metric`. Returns the first metric with a metric name that equals the given metric’s name.

### Type Aliases

- [Array.Specification](array/specification.md): Conforms when `Element` conforms to `_IntentValue`.
- [Array.UnderlyingSequence](array/underlyingsequence.md): Conforms when `Element` conforms to `_IntentValue`.
- [Array.UnwrappedType](array/unwrappedtype.md): Conforms when `Element` conforms to `_IntentValue`.
- [Array.ValueType](array/valuetype.md): Conforms when `Element` conforms to `_IntentValue`.

### Type Properties

- [defaultResolverSpecification](array/defaultresolverspecification.md): Conforms when `Element` conforms to `_IntentValue`.

### Type Methods

- [monoscopicForVideoOutput()](array/monoscopicforvideooutput%28%29.md): Conforms when `Element` is `CMTag`. Creates a collection of CMTags with the required tags to describe monoscopic video, where there is no stereo view, e.g. kCMTagStereoNone.
- [stereoscopicForVideoOutput()](array/stereoscopicforvideooutput%28%29.md): Conforms when `Element` is `CMTag`. Creates a collection of CMTags with the required tags to describe basic stereoscopic video, where both left and right stereo eyes are present, e.g. kCMTagStereoLeftAndRight.

### Default Implementations

- [Attachable Implementations](array/attachable-implementations.md)
- [BidirectionalCollection Implementations](array/bidirectionalcollection-implementations.md)
- [Collection Implementations](array/collection-implementations.md)
- [CustomDebugStringConvertible Implementations](array/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](array/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](array/customstringconvertible-implementations.md)
- [Decodable Implementations](array/decodable-implementations.md)
- [Encodable Implementations](array/encodable-implementations.md)
- [Equatable Implementations](array/equatable-implementations.md)
- [ExpressibleByArrayLiteral Implementations](array/expressiblebyarrayliteral-implementations.md)
- [Hashable Implementations](array/hashable-implementations.md)
- [IntentValueConvertible Implementations](array/intentvalueconvertible-implementations.md)
- [IntentValueExpressing Implementations](array/intentvalueexpressing-implementations.md)
- [MutableCollection Implementations](array/mutablecollection-implementations.md)
- [OperationParameter Implementations](array/operationparameter-implementations.md)
- [RandomAccessCollection Implementations](array/randomaccesscollection-implementations.md)
- [RangeReplaceableCollection Implementations](array/rangereplaceablecollection-implementations.md)
- [Sequence Implementations](array/sequence-implementations.md)

## Relationships

### Conforms To

- [AccelerateBuffer](https://developer.apple.com/documentation/accelerate/acceleratebuffer)
- [AccelerateMutableBuffer](https://developer.apple.com/documentation/accelerate/acceleratemutablebuffer)
- [AppExtensionScene](https://developer.apple.com/documentation/extensionkit/appextensionscene)
- [Attachable](https://developer.apple.com/documentation/testing/attachable)
- [BNNSGraph.Builder.OperationParameter](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/operationparameter)
- [BidirectionalCollection](bidirectionalcollection.md)
- [CKRecordValueProtocol](https://developer.apple.com/documentation/cloudkit/ckrecordvalueprotocol)
- [CMSampleBuffer.Content](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/content)
- [CMSampleBuffer.ContentWithFormatDescription](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/contentwithformatdescription)
- [CVAttachmentValueRepresentable](https://developer.apple.com/documentation/corevideo/cvattachmentvaluerepresentable)
- [CVarArg](cvararg.md)
- [Collection](collection.md)
- [ContiguousBytes](https://developer.apple.com/documentation/foundation/contiguousbytes)
- [ConvertibleFromGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertiblefromgeneratedcontent)
- [ConvertibleToGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertibletogeneratedcontent)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomReflectable](customreflectable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [DataProtocol](https://developer.apple.com/documentation/foundation/dataprotocol)
- [Decodable](decodable.md)
- [DecodableWithConfiguration](https://developer.apple.com/documentation/foundation/decodablewithconfiguration)
- [Encodable](encodable.md)
- [EncodableWithConfiguration](https://developer.apple.com/documentation/foundation/encodablewithconfiguration)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByArrayLiteral](expressiblebyarrayliteral.md)
- [Generable](https://developer.apple.com/documentation/foundationmodels/generable)
- [Hashable](hashable.md)
- [InstructionsRepresentable](https://developer.apple.com/documentation/foundationmodels/instructionsrepresentable)
- [IntentValueConvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)
- [IntentValueExpressing](https://developer.apple.com/documentation/appintents/intentvalueexpressing)
- [MLDataValueConvertible](https://developer.apple.com/documentation/createml/mldatavalueconvertible)
- [MutableCollection](mutablecollection.md)
- [MutableDataProtocol](https://developer.apple.com/documentation/foundation/mutabledataprotocol)
- [PositionScaleRange](https://developer.apple.com/documentation/charts/positionscalerange)
- [PromptRepresentable](https://developer.apple.com/documentation/foundationmodels/promptrepresentable)
- [RandomAccessCollection](randomaccesscollection.md)
- [RangeReplaceableCollection](rangereplaceablecollection.md)
- [RelationshipCollection](https://developer.apple.com/documentation/swiftdata/relationshipcollection)
- [ResultsCollection](https://developer.apple.com/documentation/appintents/resultscollection)
- [ScaleDomain](https://developer.apple.com/documentation/charts/scaledomain)
- [ScaleRange](https://developer.apple.com/documentation/charts/scalerange)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)

## See Also

### Standard Library

- [Int](int.md): A signed integer value type.
- [Double](double.md): A double-precision (64-bit), floating-point value type.
- [String](string.md): A Unicode string value that is a collection of characters.
- [Dictionary](dictionary.md): A collection whose elements are key-value pairs.
- [Swift Standard Library](swift-standard-library.md): Solve complex problems and write high-performance, readable code.
