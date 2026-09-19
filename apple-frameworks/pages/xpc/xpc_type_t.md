> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpc_type_t

# xpc_type_t (Swift)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that describes XPC object types.

## Declaration

```swift
typealias xpc_type_t = OpaquePointer
```

## See Also

### Objects

- [xpc_object_t](xpc_object_t.md): A type that can describe all XPC objects, including dictionaries, arrays, strings, and numbers.
- [OS_xpc_object](os_xpc_object.md): The interface for an XPC object.
- [OS_xpc_listener](os_xpc_listener-swift.class.md)

# xpc_type_t (Objective-C)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that describes XPC object types.

## Declaration

```objectivec
typedef const struct _xpc_type_s * xpc_type_t;
```

## See Also

### Objects

- [xpc_object_t](xpc_object_t.md): A type that can describe all XPC objects, including dictionaries, arrays, strings, and numbers.
- [OS_xpc_object](os_xpc_object.md): The interface for an XPC object.
- [OS_xpc_listener](os_xpc_listener-c.protocol.md)
