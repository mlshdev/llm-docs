> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/characterismember(_:)](https://developer.apple.com/documentation/foundation/nscharacterset/characterismember(_:))

# characterIsMember(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given character is in the receiver.

## Declaration

```swift
func characterIsMember(_ aCharacter: unichar) -> Bool
```

## Parameters

- `aCharacter`: The character to test for membership of the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aCharacter` is in the receiving character set, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Testing Set Membership

- [hasMemberInPlane(\_:)](hasmemberinplane%28__%29.md): Returns a Boolean value that indicates whether the receiver has at least one member in a given character plane.
- [isSuperset(of:)](issuperset%28of_%29.md): Returns a Boolean value that indicates whether the receiver is a superset of another given character set.
- [longCharacterIsMember(\_:)](longcharacterismember%28__%29.md): Returns a Boolean value that indicates whether a given long character is a member of the receiver.

# characterIsMember: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given character is in the receiver.

## Declaration

```objectivec
- (BOOL) characterIsMember:(unichar) aCharacter;
```

## Parameters

- `aCharacter`: The character to test for membership of the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aCharacter` is in the receiving character set, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Testing Set Membership

- [hasMemberInPlane:](hasmemberinplane%28__%29.md): Returns a Boolean value that indicates whether the receiver has at least one member in a given character plane.
- [isSupersetOfSet:](issuperset%28of_%29.md): Returns a Boolean value that indicates whether the receiver is a superset of another given character set.
- [longCharacterIsMember:](longcharacterismember%28__%29.md): Returns a Boolean value that indicates whether a given long character is a member of the receiver.
