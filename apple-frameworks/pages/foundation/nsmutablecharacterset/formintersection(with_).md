> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablecharacterset/formintersection(with:)](https://developer.apple.com/documentation/foundation/nsmutablecharacterset/formintersection(with:))

# formIntersection(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Modifies the receiver so it contains only characters that exist in both the receiver and another set.

## Declaration

```swift
func formIntersection(with otherSet: CharacterSet)
```

## Parameters

- `otherSet`: The character set with which to perform the intersection.

## See Also

### Combining Character Sets

- [formUnion(with:)](formunion%28with_%29.md): Modifies the receiver so it contains all characters that exist in either the receiver or another set.

# formIntersectionWithCharacterSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Modifies the receiver so it contains only characters that exist in both the receiver and another set.

## Declaration

```objectivec
- (void) formIntersectionWithCharacterSet:(NSCharacterSet *) otherSet;
```

## Parameters

- `otherSet`: The character set with which to perform the intersection.

## See Also

### Combining Character Sets

- [formUnionWithCharacterSet:](formunion%28with_%29.md): Modifies the receiver so it contains all characters that exist in either the receiver or another set.
