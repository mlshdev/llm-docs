> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/datawithlength:](https://developer.apple.com/documentation/foundation/nsmutabledata/datawithlength:)

# dataWithLength:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an mutable data object containing a given number of zeroed bytes.

## Declaration

```objectivec
+ (instancetype) dataWithLength:(NSUInteger) length;
```

## Parameters

- `length`: The number of bytes the new data object initially contains.

<a id="return-value"></a>

## Return Value

A new `NSMutableData` object of `length` bytes, filled with zeros. The returned object has the same memory alignment guarantees as `malloc(_:)`.

## See Also

### Creating Mutable Data

- [dataWithCapacity:](datawithcapacity_.md): Creates and returns a mutable data object capable of holding the specified number of bytes.
- [initWithCapacity:](init%28capacity_%29.md): Returns an initialized mutable data object capable of holding the specified number of bytes.
- [initWithLength:](init%28length_%29.md): Initializes and returns a mutable data object containing a given number of zeroed bytes.
