> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/init(capacity:)](https://developer.apple.com/documentation/foundation/nsmutablearray/init(capacity:))

# init(capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array, initialized with enough memory to initially hold a given number of objects.

## Declaration

```swift
init(capacity numItems: Int)
```

## Parameters

- `numItems`: The initial capacity of the new array.

<a id="return-value"></a>

## Return Value

An array initialized with enough memory to hold `numItems` objects. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

Mutable arrays expand as needed; `numItems` simply establishes the object’s initial capacity.

This method is a designated initializer.

## See Also

### Creating and Initializing a Mutable Array

- [init(contentsOfURL:)](init%28contentsofurl_%29.md): Creates and returns a mutable array containing the contents specified by a given URL.
- [init()](init%28%29.md): Initializes a newly allocated array.

# initWithCapacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array, initialized with enough memory to initially hold a given number of objects.

## Declaration

```objectivec
- (instancetype) initWithCapacity:(NSUInteger) numItems;
```

## Parameters

- `numItems`: The initial capacity of the new array.

<a id="return-value"></a>

## Return Value

An array initialized with enough memory to hold `numItems` objects. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

Mutable arrays expand as needed; `numItems` simply establishes the object’s initial capacity.

This method is a designated initializer.

## See Also

### Related Documentation

- [arrayWithCapacity:](arraywithcapacity_.md): Creates and returns an `NSMutableArray` object with enough allocated memory to initially hold a given number of objects.

### Creating and Initializing a Mutable Array

- [arrayWithCapacity:](arraywithcapacity_.md): Creates and returns an `NSMutableArray` object with enough allocated memory to initially hold a given number of objects.
- [arrayWithContentsOfFile:](arraywithcontentsoffile_.md): Creates and returns a mutable array containing the contents of the file specified by the given path.
- [init](init%28%29.md): Initializes a newly allocated array.
- [initWithContentsOfFile:](initwithcontentsoffile_.md): Initializes a newly allocated mutable array with the contents of the file specified by a given path
- [initWithContentsOfURL:](initwithcontentsofurl_.md): Initialized a newly allocated mutable array with the contents of the location specified by a given URL.
