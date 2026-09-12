> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/isequal(to:)](https://developer.apple.com/documentation/foundation/nsdata/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether this data object is the same as another.

## Declaration

```swift
func isEqual(to other: Data) -> Bool
```

## Parameters

- `other`: The data object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `otherData` are equal to the contents of the receiver, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two data objects are equal if they hold the same number of bytes, and if the bytes at the same position in the objects are the same.

## See Also

### Testing Data

- [length](length.md): The number of bytes contained by the data object.

# isEqualToData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether this data object is the same as another.

## Declaration

```objectivec
- (BOOL) isEqualToData:(NSData *) other;
```

## Parameters

- `other`: The data object with which to compare the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the contents of `otherData` are equal to the contents of the receiver, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Two data objects are equal if they hold the same number of bytes, and if the bytes at the same position in the objects are the same.

## See Also

### Testing Data

- [length](length.md): The number of bytes contained by the data object.
