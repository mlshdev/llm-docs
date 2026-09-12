> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_copy_description(_:)](https://developer.apple.com/documentation/xpc/xpc_copy_description(_:))

# xpc_copy_description(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Copies a debug string that describes the object.

## Declaration

```swift
func xpc_copy_description(_ object: xpc_object_t) -> UnsafeMutablePointer<CChar>
```

## Parameters

- `object`: The object which is to be examined.

<a id="return-value"></a>

## Return Value

A string describing object which contains information useful for debugging. This string should be disposed of with `free(3)` when done.

## See Also

### Copying

- [xpc_copy(\_:)](xpc_copy%28__%29.md): Creates a copy of the object.

# xpc_copy_description (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Copies a debug string that describes the object.

## Declaration

```objectivec
extern char *xpc_copy_description(xpc_object_t object);
```

## Parameters

- `object`: The object which is to be examined.

<a id="return-value"></a>

## Return Value

A string describing object which contains information useful for debugging. This string should be disposed of with `free(3)` when done.

## See Also

### Copying

- [xpc_copy](xpc_copy%28__%29.md): Creates a copy of the object.
