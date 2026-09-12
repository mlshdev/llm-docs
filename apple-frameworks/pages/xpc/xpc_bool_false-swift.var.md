> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_bool_false-swift.var](https://developer.apple.com/documentation/xpc/xpc_bool_false-swift.var)

# XPC_BOOL_FALSE

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 2.0+

A constant that represents a Boolean value of false.

## Declaration

```swift
var XPC_BOOL_FALSE: xpc_object_t { get }
```

<a id="Discussion"></a>

## Discussion

You may compare a Boolean object against this constant to determine its value.

## See Also

### Boolean objects

- [xpc_bool_create(\_:)](xpc_bool_create%28__%29.md): Creates an XPC Boolean object.
- [xpc_bool_get_value(\_:)](xpc_bool_get_value%28__%29.md): Returns the underlying Boolean value from the object.
- [XPC_BOOL_TRUE](xpc_bool_true-swift.var.md): A constant that represents a Boolean value of true.
