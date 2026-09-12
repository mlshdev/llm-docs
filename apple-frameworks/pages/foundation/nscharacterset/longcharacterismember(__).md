> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/longcharacterismember(_:)](https://developer.apple.com/documentation/foundation/nscharacterset/longcharacterismember(_:))

# longCharacterIsMember(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given long character is a member of the receiver.

## Declaration

```swift
func longCharacterIsMember(_ theLongChar: UTF32Char) -> Bool
```

## Parameters

- `theLongChar`: A UTF32 character.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `theLongChar` is in the receiver, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method supports the specification of 32-bit characters.

## See Also

### Testing Set Membership

- [characterIsMember(\_:)](characterismember%28__%29.md): Returns a Boolean value that indicates whether a given character is in the receiver.
- [hasMemberInPlane(\_:)](hasmemberinplane%28__%29.md): Returns a Boolean value that indicates whether the receiver has at least one member in a given character plane.
- [isSuperset(of:)](issuperset%28of_%29.md): Returns a Boolean value that indicates whether the receiver is a superset of another given character set.

# longCharacterIsMember: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given long character is a member of the receiver.

## Declaration

```objectivec
- (BOOL) longCharacterIsMember:(UTF32Char) theLongChar;
```

## Parameters

- `theLongChar`: A UTF32 character.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `theLongChar` is in the receiver, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method supports the specification of 32-bit characters.

## See Also

### Testing Set Membership

- [characterIsMember:](characterismember%28__%29.md): Returns a Boolean value that indicates whether a given character is in the receiver.
- [hasMemberInPlane:](hasmemberinplane%28__%29.md): Returns a Boolean value that indicates whether the receiver has at least one member in a given character plane.
- [isSupersetOfSet:](issuperset%28of_%29.md): Returns a Boolean value that indicates whether the receiver is a superset of another given character set.
