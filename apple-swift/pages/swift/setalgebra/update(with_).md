> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/update(with:)](https://developer.apple.com/documentation/swift/setalgebra/update(with:))

# update(with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts the given element into the set unconditionally.

## Declaration

```swift
@discardableResult mutating func update(with newMember: Self.Element) -> Self.Element?
```

## Parameters

- `newMember`: An element to insert into the set.

<a id="return-value"></a>

## Return Value

For ordinary sets, an element equal to `newMember` if the set already contained such a member; otherwise, `nil`. In some cases, the returned element may be distinguishable from `newMember` by identity comparison or some other means.

For sets where the set type and element type are the same, like `OptionSet` types, this method returns any intersection between the set and `[newMember]`, or `nil` if the intersection is empty.

<a id="discussion"></a>

## Discussion

If an element equal to `newMember` is already contained in the set, `newMember` replaces the existing element. In this example, an existing element is inserted into `classDays`, a set of days of the week.

```swift
enum DayOfTheWeek: Int {
    case sunday, monday, tuesday, wednesday, thursday,
        friday, saturday
}

var classDays: Set<DayOfTheWeek> = [.monday, .wednesday, .friday]
print(classDays.update(with: .monday))
// Prints "Optional(.monday)"
```

## Default Implementations

### SetAlgebra Implementations

- [update(with:)](update%28with_%29-2oa9l.md): Conforms when `Self` is `Self.Element`. Inserts the given element into the set.

## See Also

### Adding and Removing Elements

- [insert(\_:)](insert%28__%29.md): Inserts the given element in the set if it is not already present.
- [remove(\_:)](remove%28__%29.md): Removes the given element and any elements subsumed by the given element.
