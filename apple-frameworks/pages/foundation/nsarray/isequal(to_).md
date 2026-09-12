> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/isequal(to:)](https://developer.apple.com/documentation/foundation/nsarray/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares the receiving array to another array.

## Declaration

```swift
func isEqual(to otherArray: [Any]) -> Bool
```

## Parameters

- `otherArray`: An array.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `otherArray` are equal to the contents of the receiving array, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two arrays have equal contents if they each hold the same number of objects and objects at a given index in each array satisfy the [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md) test.

## See Also

### Comparing Arrays

- [firstObjectCommon(with:)](firstobjectcommon%28with_%29.md): Returns the first object contained in the receiving array that’s equal to an object in another given array.

# isEqualToArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Compares the receiving array to another array.

## Declaration

```objectivec
- (BOOL) isEqualToArray:(NSArray<id> *) otherArray;
```

## Parameters

- `otherArray`: An array.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `otherArray` are equal to the contents of the receiving array, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two arrays have equal contents if they each hold the same number of objects and objects at a given index in each array satisfy the [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md) test.

## See Also

### Comparing Arrays

- [firstObjectCommonWithArray:](firstobjectcommon%28with_%29.md): Returns the first object contained in the receiving array that’s equal to an object in another given array.
