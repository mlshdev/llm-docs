> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutabledata/datawithcapacity:](https://developer.apple.com/documentation/foundation/nsmutabledata/datawithcapacity:)

# dataWithCapacity:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a mutable data object capable of holding the specified number of bytes.

## Declaration

```objectivec
+ (instancetype) dataWithCapacity:(NSUInteger) aNumItems;
```

## Parameters

- `aNumItems`: The number of bytes the new data object can initially contain.

<a id="return-value"></a>

## Return Value

A new `NSMutableData` object capable of holding `aNumItems` bytes.

The returned object has the same memory alignment guarantees as `malloc(_:)`.

<a id="discussion"></a>

## Discussion

This method doesn’t necessarily allocate the requested memory right away. Mutable data objects allocate additional memory as needed, so `aNumItems` simply establishes the object’s initial capacity. When it does allocate the initial memory, though, it allocates the specified amount. This method sets the length of the data object to `0`.

If the capacity specified in `aNumItems` is greater than four memory pages in size, this method may round the amount of requested memory up to the nearest full page.

## See Also

### Related Documentation

- [Binary Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/BinaryData/BinaryData.html#//apple_ref/doc/uid/10000037i)

### Creating Mutable Data

- [dataWithLength:](datawithlength_.md): Creates and returns an mutable data object containing a given number of zeroed bytes.
- [initWithCapacity:](init%28capacity_%29.md): Returns an initialized mutable data object capable of holding the specified number of bytes.
- [initWithLength:](init%28length_%29.md): Initializes and returns a mutable data object containing a given number of zeroed bytes.
