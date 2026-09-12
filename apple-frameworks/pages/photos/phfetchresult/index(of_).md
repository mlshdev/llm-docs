> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchresult/index(of:)](https://developer.apple.com/documentation/photos/phfetchresult/index(of:))

# index(of:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the lowest index whose corresponding object in the fetch result is equal to the specified object.

## Declaration

```swift
func index(of anObject: ObjectType) -> Int
```

## Parameters

- `anObject`: An object.

<a id="return-value"></a>

## Return Value

The lowest index whose corresponding object in the fetch result is equal to `anObject`, or `NSNotFound` if no such object is in the fetch result.

<a id="Discussion"></a>

## Discussion

Starting at index `0`, this method sends an `==` message to each object in the fetch result until it finds a match or reaches the end of the fetch result. This method passes the `anObject` parameter to each `==` message.

## See Also

### Finding Objects in a Fetch Result

- [index(of:in:)](index%28of_in_%29.md): Returns the lowest index within the specified range whose corresponding object in the fetch result is equal to the specified object.

# indexOfObject: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Returns the lowest index whose corresponding object in the fetch result is equal to the specified object.

## Declaration

```objectivec
- (NSUInteger) indexOfObject:(ObjectType) anObject;
```

## Parameters

- `anObject`: An object.

<a id="return-value"></a>

## Return Value

The lowest index whose corresponding object in the fetch result is equal to `anObject`, or `NSNotFound` if no such object is in the fetch result.

<a id="Discussion"></a>

## Discussion

Starting at index `0`, this method sends an `==` message to each object in the fetch result until it finds a match or reaches the end of the fetch result. This method passes the `anObject` parameter to each `==` message.

## See Also

### Finding Objects in a Fetch Result

- [indexOfObject:inRange:](index%28of_in_%29.md): Returns the lowest index within the specified range whose corresponding object in the fetch result is equal to the specified object.
