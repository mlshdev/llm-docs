> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdictionary/isequal(to:)](https://developer.apple.com/documentation/foundation/nsdictionary/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the contents of the receiving dictionary are equal to the contents of another given dictionary.

## Declaration

```swift
func isEqual(to otherDictionary: [AnyHashable : Any]) -> Bool
```

## Parameters

- `otherDictionary`: The dictionary with which to compare the receiving dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `otherDictionary` are equal to the contents of the receiving dictionary, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two dictionaries have equal contents if they each hold the same number of entries and, for a given key, the corresponding value objects in each dictionary satisfy the [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md) test.

## See Also

### Related Documentation

- [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.

# isEqualToDictionary: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the contents of the receiving dictionary are equal to the contents of another given dictionary.

## Declaration

```objectivec
- (BOOL) isEqualToDictionary:(NSDictionary<id,id> *) otherDictionary;
```

## Parameters

- `otherDictionary`: The dictionary with which to compare the receiving dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `otherDictionary` are equal to the contents of the receiving dictionary, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two dictionaries have equal contents if they each hold the same number of entries and, for a given key, the corresponding value objects in each dictionary satisfy the [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md) test.

## See Also

### Related Documentation

- [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md): Returns a Boolean value that indicates whether the receiver and a given object are equal.
