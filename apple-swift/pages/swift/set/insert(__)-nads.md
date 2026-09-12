> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/insert(_:)-nads](https://developer.apple.com/documentation/swift/set/insert(_:)-nads)

# insert(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts the given element in the set if it is not already present.

## Declaration

```swift
@discardableResult mutating func insert(_ newMember: Element) -> (inserted: Bool, memberAfterInsert: Element)
```

## Parameters

- `newMember`: An element to insert into the set.

<a id="return-value"></a>

## Return Value

`(true, newMember)` if `newMember` was not contained in the set. If an element equal to `newMember` was already contained in the set, the method returns `(false, oldMember)`, where `oldMember` is the element that was equal to `newMember`. In some cases, `oldMember` may be distinguishable from `newMember` by identity comparison or some other means.

<a id="discussion"></a>

## Discussion

If an element equal to `newMember` is already contained in the set, this method has no effect. In the following example, a new element is inserted into `classDays`, a set of days of the week. When an existing element is inserted, the `classDays` set does not change.

```swift
enum DayOfTheWeek: Int {
    case sunday, monday, tuesday, wednesday, thursday,
        friday, saturday
}

var classDays: Set<DayOfTheWeek> = [.wednesday, .friday]
print(classDays.insert(.monday))
// Prints "(inserted: true, memberAfterInsert: DayOfTheWeek.monday)"
print(classDays)
// Prints "[DayOfTheWeek.friday, DayOfTheWeek.wednesday, DayOfTheWeek.monday]"

print(classDays.insert(.friday))
// Prints "(inserted: false, memberAfterInsert: DayOfTheWeek.friday)"
print(classDays)
// Prints "[DayOfTheWeek.friday, DayOfTheWeek.wednesday, DayOfTheWeek.monday]"
```

## See Also

### Adding Elements

- [insert(\_:)](insert%28__%29-yar4.md): Conforms when `Element` is `AnyHashable`.
- [update(with:)](update%28with_%29-2n6tk.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element into the set unconditionally.
- [update(with:)](update%28with_%29-7r2g.md): Conforms when `Element` is `AnyHashable`.
- [reserveCapacity(\_:)](reservecapacity%28__%29.md): Conforms when `Element` conforms to `Hashable`. Reserves enough space to store the specified number of elements.
