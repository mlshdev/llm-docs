> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablestring/stringwithcapacity:](https://developer.apple.com/documentation/foundation/nsmutablestring/stringwithcapacity:)

# stringWithCapacity:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an empty `NSMutableString` object with initial storage for a given number of characters.

## Declaration

```objectivec
+ (NSMutableString *) stringWithCapacity:(NSUInteger) capacity;
```

## Parameters

- `capacity`: The number of characters the string is expected to initially contain.

<a id="return-value"></a>

## Return Value

An empty `NSMutableString` object with initial storage for `capacity` characters.

<a id="Discussion"></a>

## Discussion

The number of characters indicated by `capacity` is simply a hint to increase the efficiency of data storage. The value does *not* limit the length of the string.

## See Also

### Related Documentation

- [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i)

### Creating and Initializing a Mutable String

- [initWithCapacity:](init%28capacity_%29.md): Returns an `NSMutableString` object initialized with initial storage for a given number of characters,
