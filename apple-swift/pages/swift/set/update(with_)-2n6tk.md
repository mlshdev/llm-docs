> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/update(with:)-2n6tk](https://developer.apple.com/documentation/swift/set/update(with:)-2n6tk)

# update(with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts the given element into the set unconditionally.

## Declaration

```swift
@discardableResult mutating func update(with newMember: Element) -> Element?
```

## Parameters

- `newMember`: An element to insert into the set.

<a id="return-value"></a>

## Return Value

An element equal to `newMember` if the set already contained such a member; otherwise, `nil`. In some cases, the returned element may be distinguishable from `newMember` by identity comparison or some other means.

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
// Prints "Optional(DayOfTheWeek.monday)"
```

## See Also

### Adding Elements

- [insert(\_:)](insert%28__%29-nads.md): Conforms when `Element` conforms to `Hashable`. Inserts the given element in the set if it is not already present.
- [insert(\_:)](insert%28__%29-yar4.md): Conforms when `Element` is `AnyHashable`.
- [update(with:)](update%28with_%29-7r2g.md): Conforms when `Element` is `AnyHashable`.
- [reserveCapacity(\_:)](reservecapacity%28__%29.md): Conforms when `Element` conforms to `Hashable`. Reserves enough space to store the specified number of elements.
