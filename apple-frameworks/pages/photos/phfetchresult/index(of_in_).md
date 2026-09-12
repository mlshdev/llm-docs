> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresult/index(of:in:)](https://developer.apple.com/documentation/photos/phfetchresult/index(of:in:))

# index(of:in:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the lowest index within the specified range whose corresponding object in the fetch result is equal to the specified object.

## Declaration

```swift
func index(of anObject: ObjectType, in range: NSRange) -> Int
```

## Parameters

- `anObject`: An object.
- `range`: The range of indexes in the fetch result within which to search for `anObject`.

<a id="return-value"></a>

## Return Value

The lowest index within `range` whose corresponding object in the fetch result is equal to `anObject`, or `NSNotFound` if no such object is in the fetch result.

<a id="Discussion"></a>

## Discussion

Starting at `range.location`, this method sends an `==` message to each object in the fetch result until it finds a match or reaches the end of the fetch result. This method passes the `anObject` parameter to each `==` message.

Raises a range exception if the `range` parameter represents a range that doesn’t exist in the fetch result.

## See Also

### Finding Objects in a Fetch Result

- [index(of:)](index%28of_%29.md): Returns the lowest index whose corresponding object in the fetch result is equal to the specified object.

# indexOfObject:inRange: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the lowest index within the specified range whose corresponding object in the fetch result is equal to the specified object.

## Declaration

```objectivec
- (NSUInteger) indexOfObject:(ObjectType) anObject inRange:(NSRange) range;
```

## Parameters

- `anObject`: An object.
- `range`: The range of indexes in the fetch result within which to search for `anObject`.

<a id="return-value"></a>

## Return Value

The lowest index within `range` whose corresponding object in the fetch result is equal to `anObject`, or `NSNotFound` if no such object is in the fetch result.

<a id="Discussion"></a>

## Discussion

Starting at `range.location`, this method sends an `==` message to each object in the fetch result until it finds a match or reaches the end of the fetch result. This method passes the `anObject` parameter to each `==` message.

Raises a range exception if the `range` parameter represents a range that doesn’t exist in the fetch result.

## See Also

### Finding Objects in a Fetch Result

- [indexOfObject:](index%28of_%29.md): Returns the lowest index whose corresponding object in the fetch result is equal to the specified object.
