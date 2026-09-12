> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_bool_false-c.macro](https://developer.apple.com/documentation/xpc/xpc_bool_false-c.macro)

# XPC_BOOL_FALSE

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that represents a Boolean value of false.

## Declaration

```objectivec
#define XPC_BOOL_FALSE
```

<a id="Discussion"></a>

## Discussion

You may compare a Boolean object against this constant to determine its value.

## See Also

### Boolean objects

- [xpc_bool_create](xpc_bool_create%28__%29.md): Creates an XPC Boolean object.
- [xpc_bool_get_value](xpc_bool_get_value%28__%29.md): Returns the underlying Boolean value from the object.
- [XPC_BOOL_TRUE](xpc_bool_true-c.macro.md): A constant that represents a Boolean value of true.
