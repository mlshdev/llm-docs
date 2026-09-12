> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/issuperset(of:)](https://developer.apple.com/documentation/foundation/nscharacterset/issuperset(of:))

# isSuperset(of:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiver is a superset of another given character set.

## Declaration

```swift
func isSuperset(of theOtherSet: CharacterSet) -> Bool
```

## Parameters

- `theOtherSet`: A character set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is a superset of `theOtherSet`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Testing Set Membership

- [characterIsMember(\_:)](characterismember%28__%29.md): Returns a Boolean value that indicates whether a given character is in the receiver.
- [hasMemberInPlane(\_:)](hasmemberinplane%28__%29.md): Returns a Boolean value that indicates whether the receiver has at least one member in a given character plane.
- [longCharacterIsMember(\_:)](longcharacterismember%28__%29.md): Returns a Boolean value that indicates whether a given long character is a member of the receiver.

# isSupersetOfSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiver is a superset of another given character set.

## Declaration

```objectivec
- (BOOL) isSupersetOfSet:(NSCharacterSet *) theOtherSet;
```

## Parameters

- `theOtherSet`: A character set.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver is a superset of `theOtherSet`, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Testing Set Membership

- [characterIsMember:](characterismember%28__%29.md): Returns a Boolean value that indicates whether a given character is in the receiver.
- [hasMemberInPlane:](hasmemberinplane%28__%29.md): Returns a Boolean value that indicates whether the receiver has at least one member in a given character plane.
- [longCharacterIsMember:](longcharacterismember%28__%29.md): Returns a Boolean value that indicates whether a given long character is a member of the receiver.
