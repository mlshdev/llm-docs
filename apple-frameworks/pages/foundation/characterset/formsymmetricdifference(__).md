> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/characterset/formsymmetricdifference(_:)](https://developer.apple.com/documentation/foundation/characterset/formsymmetricdifference(_:))

# formSymmetricDifference(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the value to an exclusive or of the `CharacterSet` with another `CharacterSet`.

## Declaration

```swift
mutating func formSymmetricDifference(_ other: CharacterSet)
```

## See Also

### Combining Character Sets

- [formIntersection(\_:)](formintersection%28__%29.md): Sets the value to an intersection of the `CharacterSet` with another `CharacterSet`.
- [formUnion(\_:)](formunion%28__%29.md): Sets the value to a union of the `CharacterSet` with another `CharacterSet`.
- [hasMember(inPlane:)](hasmember%28inplane_%29.md): Returns true if the `CharacterSet` has a member in the specified plane.
- [insert(charactersIn:)](insert%28charactersin_%29-2syuj.md): Insert the values from the specified string into the `CharacterSet`.
- [intersection(\_:)](intersection%28__%29.md): Returns an intersection of the `CharacterSet` with another `CharacterSet`.
- [invert()](invert%28%29.md): Invert the contents of the `CharacterSet`.
- [isSuperset(of:)](issuperset%28of_%29.md): Returns true if `self` is a superset of `other`.
- [remove(charactersIn:)](remove%28charactersin_%29-3sayw.md): Remove the values from the specified string from the `CharacterSet`.
- [subtracting(\_:)](subtracting%28__%29.md): Returns a `CharacterSet` created by removing elements in `other` from `self`.
- [symmetricDifference(\_:)](symmetricdifference%28__%29.md): Returns an exclusive or of the `CharacterSet` with another `CharacterSet`.
- [union(\_:)](union%28__%29.md): Returns a union of the `CharacterSet` with another `CharacterSet`.
