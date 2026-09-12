> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/init(capacity:)](https://developer.apple.com/documentation/foundation/nsmutabledata/init(capacity:))

# init(capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized mutable data object capable of holding the specified number of bytes.

## Declaration

```swift
init?(capacity: Int)
```

## Parameters

- `capacity`: The number of bytes the data object can initially contain.

<a id="return-value"></a>

## Return Value

An initialized `NSMutableData` object capable of holding `capacity` bytes. The returned object has the same memory alignment guarantees as `malloc(_:)`.

<a id="discussion"></a>

## Discussion

This method doesn’t necessarily allocate the requested memory right away. Mutable data objects allocate additional memory as needed, so `capacity` simply establishes the object’s initial capacity. When it does allocate the initial memory, though, it allocates the specified amount. This method sets the length of the data object to `0`.

If the capacity specified in `capacity` is greater than four memory pages in size, this method may round the amount of requested memory up to the nearest full page.

## See Also

### Creating Mutable Data

- [init(length:)](init%28length_%29.md): Initializes and returns a mutable data object containing a given number of zeroed bytes.

# initWithCapacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an initialized mutable data object capable of holding the specified number of bytes.

## Declaration

```objectivec
- (instancetype) initWithCapacity:(NSUInteger) capacity;
```

## Parameters

- `capacity`: The number of bytes the data object can initially contain.

<a id="return-value"></a>

## Return Value

An initialized `NSMutableData` object capable of holding `capacity` bytes. The returned object has the same memory alignment guarantees as `malloc(_:)`.

<a id="discussion"></a>

## Discussion

This method doesn’t necessarily allocate the requested memory right away. Mutable data objects allocate additional memory as needed, so `capacity` simply establishes the object’s initial capacity. When it does allocate the initial memory, though, it allocates the specified amount. This method sets the length of the data object to `0`.

If the capacity specified in `capacity` is greater than four memory pages in size, this method may round the amount of requested memory up to the nearest full page.

## See Also

### Related Documentation

- [dataWithCapacity:](datawithcapacity_.md): Creates and returns a mutable data object capable of holding the specified number of bytes.

### Creating Mutable Data

- [dataWithCapacity:](datawithcapacity_.md): Creates and returns a mutable data object capable of holding the specified number of bytes.
- [dataWithLength:](datawithlength_.md): Creates and returns an mutable data object containing a given number of zeroed bytes.
- [initWithLength:](init%28length_%29.md): Initializes and returns a mutable data object containing a given number of zeroed bytes.
