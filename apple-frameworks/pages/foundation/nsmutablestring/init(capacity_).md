> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablestring/init(capacity:)](https://developer.apple.com/documentation/foundation/nsmutablestring/init(capacity:))

# init(capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSMutableString` object initialized with initial storage for a given number of characters,

## Declaration

```swift
init(capacity: Int)
```

## Parameters

- `capacity`: The number of characters the string is expected to initially contain.

<a id="return-value"></a>

## Return Value

An initialized `NSMutableString` object with initial storage for `capacity` characters. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

The number of characters indicated by `capacity` is simply a hint to increase the efficiency of data storage. The value does *not* limit the length of the string.

# initWithCapacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSMutableString` object initialized with initial storage for a given number of characters,

## Declaration

```objectivec
- (NSMutableString *) initWithCapacity:(NSUInteger) capacity;
```

## Parameters

- `capacity`: The number of characters the string is expected to initially contain.

<a id="return-value"></a>

## Return Value

An initialized `NSMutableString` object with initial storage for `capacity` characters. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

The number of characters indicated by `capacity` is simply a hint to increase the efficiency of data storage. The value does *not* limit the length of the string.

## See Also

### Creating and Initializing a Mutable String

- [stringWithCapacity:](stringwithcapacity_.md): Returns an empty `NSMutableString` object with initial storage for a given number of characters.
