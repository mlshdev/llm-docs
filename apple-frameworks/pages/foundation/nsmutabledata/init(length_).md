> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/init(length:)](https://developer.apple.com/documentation/foundation/nsmutabledata/init(length:))

# init(length:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a mutable data object containing a given number of zeroed bytes.

## Declaration

```swift
init?(length: Int)
```

## Parameters

- `length`: The number of bytes the object initially contains.

<a id="return-value"></a>

## Return Value

An initialized `NSMutableData` object containing `length` zeroed bytes. The returned object has the same memory alignment guarantees as `malloc(_:)`.

## See Also

### Creating Mutable Data

- [init(capacity:)](init%28capacity_%29.md): Returns an initialized mutable data object capable of holding the specified number of bytes.

# initWithLength: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a mutable data object containing a given number of zeroed bytes.

## Declaration

```objectivec
- (instancetype) initWithLength:(NSUInteger) length;
```

## Parameters

- `length`: The number of bytes the object initially contains.

<a id="return-value"></a>

## Return Value

An initialized `NSMutableData` object containing `length` zeroed bytes. The returned object has the same memory alignment guarantees as `malloc(_:)`.

## See Also

### Related Documentation

- [dataWithCapacity:](datawithcapacity_.md): Creates and returns a mutable data object capable of holding the specified number of bytes.
- [dataWithLength:](datawithlength_.md): Creates and returns an mutable data object containing a given number of zeroed bytes.

### Creating Mutable Data

- [dataWithCapacity:](datawithcapacity_.md): Creates and returns a mutable data object capable of holding the specified number of bytes.
- [dataWithLength:](datawithlength_.md): Creates and returns an mutable data object containing a given number of zeroed bytes.
- [initWithCapacity:](init%28capacity_%29.md): Returns an initialized mutable data object capable of holding the specified number of bytes.
