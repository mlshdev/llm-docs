> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_equal(_:_:)](https://developer.apple.com/documentation/xpc/xpc_equal(_:_:))

# xpc_equal(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Compares two objects for equality.

## Declaration

```swift
func xpc_equal(_ object1: xpc_object_t, _ object2: xpc_object_t) -> Bool
```

## Parameters

- `object1`: The first object to compare.
- `object2`: The second object to compare.

<a id="return-value"></a>

## Return Value

Returns true if the objects are equal, otherwise false. Two objects must be of the same type in order to be equal.

<a id="discussion"></a>

## Discussion

For two arrays to be equal, they must contain the same values at the same indexes. For two dictionaries to be equal, they must contain the same values for the same keys.

Two objects being equal implies that their hashes (as returned by [xpc_hash(\_:)](xpc_hash%28__%29.md)) are also equal.

# xpc_equal (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Compares two objects for equality.

## Declaration

```objectivec
extern bool xpc_equal(xpc_object_t object1, xpc_object_t object2);
```

## Parameters

- `object1`: The first object to compare.
- `object2`: The second object to compare.

<a id="return-value"></a>

## Return Value

Returns true if the objects are equal, otherwise false. Two objects must be of the same type in order to be equal.

<a id="discussion"></a>

## Discussion

For two arrays to be equal, they must contain the same values at the same indexes. For two dictionaries to be equal, they must contain the same values for the same keys.

Two objects being equal implies that their hashes (as returned by [xpc_hash](xpc_hash%28__%29.md)) are also equal.
