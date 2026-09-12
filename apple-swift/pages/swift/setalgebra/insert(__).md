> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/insert(_:)](https://developer.apple.com/documentation/swift/setalgebra/insert(_:))

# insert(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts the given element in the set if it is not already present.

## Declaration

```swift
@discardableResult mutating func insert(_ newMember: Self.Element) -> (inserted: Bool, memberAfterInsert: Self.Element)
```

## Parameters

- `newMember`: An element to insert into the set.

<a id="return-value"></a>

## Return Value

`(true, newMember)` if `newMember` was not contained in the set. If an element equal to `newMember` was already contained in the set, the method returns `(false, oldMember)`, where `oldMember` is the element that was equal to `newMember`. In some cases, `oldMember` may be distinguishable from `newMember` by identity comparison or some other means.

<a id="discussion"></a>

## Discussion

If an element equal to `newMember` is already contained in the set, this method has no effect. In this example, a new element is inserted into `classDays`, a set of days of the week. When an existing element is inserted, the `classDays` set does not change.

```swift
enum DayOfTheWeek: Int {
    case sunday, monday, tuesday, wednesday, thursday,
        friday, saturday
}

var classDays: Set<DayOfTheWeek> = [.wednesday, .friday]
print(classDays.insert(.monday))
// Prints "(true, .monday)"
print(classDays)
// Prints "[.friday, .wednesday, .monday]"

print(classDays.insert(.friday))
// Prints "(false, .friday)"
print(classDays)
// Prints "[.friday, .wednesday, .monday]"
```

## Default Implementations

### SetAlgebra Implementations

- [insert(\_:)](insert%28__%29-1uo97.md): Conforms when `Self` is `Self.Element` and `RawValue` conforms to `FixedWidthInteger`.
- [insert(\_:)](insert%28__%29-9wohp.md): Conforms when `Self` is `Self.Element`. Adds the given element to the option set if it is not already a member.

## See Also

### Adding and Removing Elements

- [update(with:)](update%28with_%29.md): Inserts the given element into the set unconditionally.
- [remove(\_:)](remove%28__%29.md): Removes the given element and any elements subsumed by the given element.
