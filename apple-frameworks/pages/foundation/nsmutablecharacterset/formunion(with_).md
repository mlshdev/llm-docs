> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmutablecharacterset/formunion(with:)

# formUnion(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Modifies the receiver so it contains all characters that exist in either the receiver or another set.

## Declaration

```swift
func formUnion(with otherSet: CharacterSet)
```

## See Also

### Combining Character Sets

- [formIntersection(with:)](formintersection%28with_%29.md): Modifies the receiver so it contains only characters that exist in both the receiver and another set.

# formUnionWithCharacterSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Modifies the receiver so it contains all characters that exist in either the receiver or another set.

## Declaration

```objectivec
- (void) formUnionWithCharacterSet:(NSCharacterSet *) otherSet;
```

## See Also

### Combining Character Sets

- [formIntersectionWithCharacterSet:](formintersection%28with_%29.md): Modifies the receiver so it contains only characters that exist in both the receiver and another set.
