> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpc_bool_true-c.macro

# XPC_BOOL_TRUE

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that represents a Boolean value of true.

## Declaration

```objectivec
#define XPC_BOOL_TRUE
```

<a id="Discussion"></a>

## Discussion

You may compare a Boolean object against this constant to determine its value.

## See Also

### Boolean objects

- [xpc_bool_create](xpc_bool_create%28__%29.md): Creates an XPC Boolean object.
- [xpc_bool_get_value](xpc_bool_get_value%28__%29.md): Returns the underlying Boolean value from the object.
- [XPC_BOOL_FALSE](xpc_bool_false-c.macro.md): A constant that represents a Boolean value of false.
