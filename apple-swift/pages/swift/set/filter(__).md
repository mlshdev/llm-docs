> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/filter(_:)](https://developer.apple.com/documentation/swift/set/filter(_:))

# filter(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift 4.0+

Returns a new set containing the elements of the set that satisfy the given predicate.

## Declaration

```swift
consuming func filter<E>(_ isIncluded: (Element) throws(E) -> Bool) throws(E) -> Set<Element> where E : Error
```

## Parameters

- `isIncluded`: A closure that takes an element as its argument and returns a Boolean value indicating whether the element should be included in the returned set.

<a id="return-value"></a>

## Return Value

A set of the elements that `isIncluded` allows.

<a id="discussion"></a>

## Discussion

In this example, `filter(_:)` is used to include only names shorter than five characters.

```swift
let cast: Set = ["Vivien", "Marlon", "Kim", "Karl"]
let shortNames = cast.filter { $0.count < 5 }

shortNames.isSubset(of: cast)
// true
shortNames.contains("Vivien")
// false
```

## See Also

### Removing Elements

- [remove(\_:)](remove%28__%29-8p2tv.md): Conforms when `Element` conforms to `Hashable`. Removes the specified element from the set.
- [remove(\_:)](remove%28__%29-4d3i1.md): Conforms when `Element` is `AnyHashable`.
- [removeFirst()](removefirst%28%29.md): Conforms when `Element` conforms to `Hashable`. Removes the first element of the set.
- [remove(at:)](remove%28at_%29.md): Conforms when `Element` conforms to `Hashable`. Removes the element at the given index of the set.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Conforms when `Element` conforms to `Hashable`. Removes all members from the set.
