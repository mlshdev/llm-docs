> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/firstobjectcommon(with:)](https://developer.apple.com/documentation/foundation/nsarray/firstobjectcommon(with:))

# firstObjectCommon(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the first object contained in the receiving array that’s equal to an object in another given array.

## Declaration

```swift
func firstObjectCommon(with otherArray: [Any]) -> Any?
```

## Parameters

- `otherArray`: An array.

<a id="return-value"></a>

## Return Value

Returns the first object contained in the receiving array that’s equal to an object in `otherArray`. If no such object is found, returns `nil`.

<a id="Discussion"></a>

## Discussion

This method uses [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md) to check for object equality.

## See Also

### Related Documentation

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.

### Comparing Arrays

- [isEqual(to:)](isequal%28to_%29.md): Compares the receiving array to another array.

# firstObjectCommonWithArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the first object contained in the receiving array that’s equal to an object in another given array.

## Declaration

```objectivec
- (ObjectType) firstObjectCommonWithArray:(NSArray<id> *) otherArray;
```

## Parameters

- `otherArray`: An array.

<a id="return-value"></a>

## Return Value

Returns the first object contained in the receiving array that’s equal to an object in `otherArray`. If no such object is found, returns `nil`.

<a id="Discussion"></a>

## Discussion

This method uses [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md) to check for object equality.

## See Also

### Related Documentation

- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.

### Comparing Arrays

- [isEqualToArray:](isequal%28to_%29.md): Compares the receiving array to another array.
