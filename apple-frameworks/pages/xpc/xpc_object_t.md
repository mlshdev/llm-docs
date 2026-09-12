> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_object_t](https://developer.apple.com/documentation/xpc/xpc_object_t)

# xpc_object_t (Swift)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that can describe all XPC objects, including dictionaries, arrays, strings, and numbers.

## Declaration

```swift
typealias xpc_object_t = any OS_xpc_object
```

<a id="Discussion"></a>

## Discussion

XPC objects are created with a retain count of 1, and therefore it is the caller’s responsibility to call [xpc_release](xpc_release.md) on them when they are no longer needed.

## See Also

### Objects

- [xpc_type_t](xpc_type_t.md): A type that describes XPC object types.
- [OS_xpc_object](os_xpc_object.md): The interface for an XPC object.
- [OS_xpc_listener](os_xpc_listener-swift.class.md)

# xpc_object_t (Objective-C)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that can describe all XPC objects, including dictionaries, arrays, strings, and numbers.

## Declaration

```objectivec
typedef NSObject<OS_xpc_object> * xpc_object_t;
```

<a id="Discussion"></a>

## Discussion

XPC objects are created with a retain count of 1, and therefore it is the caller’s responsibility to call [xpc_release](xpc_release.md) on them when they are no longer needed.

## See Also

### Objects

- [xpc_type_t](xpc_type_t.md): A type that describes XPC object types.
- [OS_xpc_object](os_xpc_object.md): The interface for an XPC object.
- [OS_xpc_listener](os_xpc_listener-c.protocol.md)
