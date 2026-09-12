> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nshashtable/init(pointerfunctions:capacity:)](https://developer.apple.com/documentation/foundation/nshashtable/init(pointerfunctions:capacity:))

# init(pointerFunctions:capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a hash table initialized with the given functions and capacity.

## Declaration

```swift
init(pointerFunctions functions: NSPointerFunctions, capacity initialCapacity: Int)
```

## Parameters

- `functions`: The pointer functions for the new hash table.
- `initialCapacity`: The initial capacity of the hash table.

<a id="return-value"></a>

## Return Value

A hash table initialized with the given functions and capacity.

<a id="Discussion"></a>

## Discussion

Hash tables allocate additional memory as needed, so `initialCapacity` simply establishes the object’s initial capacity.

## See Also

### Initialization

- [init(options:capacity:)](init%28options_capacity_%29.md): Returns a hash table initialized with the given attributes.

# initWithPointerFunctions:capacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a hash table initialized with the given functions and capacity.

## Declaration

```objectivec
- (instancetype) initWithPointerFunctions:(NSPointerFunctions *) functions capacity:(NSUInteger) initialCapacity;
```

## Parameters

- `functions`: The pointer functions for the new hash table.
- `initialCapacity`: The initial capacity of the hash table.

<a id="return-value"></a>

## Return Value

A hash table initialized with the given functions and capacity.

<a id="Discussion"></a>

## Discussion

Hash tables allocate additional memory as needed, so `initialCapacity` simply establishes the object’s initial capacity.

## See Also

### Initialization

- [initWithOptions:capacity:](init%28options_capacity_%29.md): Returns a hash table initialized with the given attributes.
