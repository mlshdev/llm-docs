> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/hasmemberinplane(_:)](https://developer.apple.com/documentation/foundation/nscharacterset/hasmemberinplane(_:))

# hasMemberInPlane(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiver has at least one member in a given character plane.

## Declaration

```swift
func hasMemberInPlane(_ thePlane: UInt8) -> Bool
```

## Parameters

- `thePlane`: A character plane.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver has at least one member in `thePlane`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method makes it easier to find the plane containing the members of the current character set. The Basic Multilingual Plane (BMP) is plane `0`.

## See Also

### Testing Set Membership

- [characterIsMember(\_:)](characterismember%28__%29.md): Returns a Boolean value that indicates whether a given character is in the receiver.
- [isSuperset(of:)](issuperset%28of_%29.md): Returns a Boolean value that indicates whether the receiver is a superset of another given character set.
- [longCharacterIsMember(\_:)](longcharacterismember%28__%29.md): Returns a Boolean value that indicates whether a given long character is a member of the receiver.

# hasMemberInPlane: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the receiver has at least one member in a given character plane.

## Declaration

```objectivec
- (BOOL) hasMemberInPlane:(uint8_t) thePlane;
```

## Parameters

- `thePlane`: A character plane.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver has at least one member in `thePlane`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method makes it easier to find the plane containing the members of the current character set. The Basic Multilingual Plane (BMP) is plane `0`.

## See Also

### Testing Set Membership

- [characterIsMember:](characterismember%28__%29.md): Returns a Boolean value that indicates whether a given character is in the receiver.
- [isSupersetOfSet:](issuperset%28of_%29.md): Returns a Boolean value that indicates whether the receiver is a superset of another given character set.
- [longCharacterIsMember:](longcharacterismember%28__%29.md): Returns a Boolean value that indicates whether a given long character is a member of the receiver.
