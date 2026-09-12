> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(range:)](https://developer.apple.com/documentation/foundation/nsvalue/init(range:))

# init(range:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified Foundation range structure.

## Declaration

```swift
init(range: NSRange)
```

## Parameters

- `range`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the range information.

## See Also

### Working with Range Values

- [rangeValue](rangevalue.md): The Foundation range structure representation of the value.

# valueWithRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value object containing the specified Foundation range structure.

## Declaration

```objectivec
+ (NSValue *) valueWithRange:(NSRange) range;
```

## Parameters

- `range`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the range information.

## See Also

### Related Documentation

- [NSRange](../nsrange-c.struct.md): A structure used to describe a portion of a series, such as characters in a string or objects in an array.

### Working with Range Values

- [rangeValue](rangevalue.md): The Foundation range structure representation of the value.
