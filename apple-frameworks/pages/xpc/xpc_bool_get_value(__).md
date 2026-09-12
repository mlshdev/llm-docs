> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_bool_get_value(_:)](https://developer.apple.com/documentation/xpc/xpc_bool_get_value(_:))

# xpc_bool_get_value(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the underlying Boolean value from the object.

## Declaration

```swift
func xpc_bool_get_value(_ xbool: xpc_object_t) -> Bool
```

## Parameters

- `xbool`: The Boolean object which is to be examined.

<a id="return-value"></a>

## Return Value

The underlying Boolean value.

## See Also

### Boolean objects

- [xpc_bool_create(\_:)](xpc_bool_create%28__%29.md): Creates an XPC Boolean object.
- [XPC_BOOL_TRUE](xpc_bool_true-swift.var.md): A constant that represents a Boolean value of true.
- [XPC_BOOL_FALSE](xpc_bool_false-swift.var.md): A constant that represents a Boolean value of false.

# xpc_bool_get_value (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the underlying Boolean value from the object.

## Declaration

```objectivec
extern bool xpc_bool_get_value(xpc_object_t xbool);
```

## Parameters

- `xbool`: The Boolean object which is to be examined.

<a id="return-value"></a>

## Return Value

The underlying Boolean value.

## See Also

### Boolean objects

- [xpc_bool_create](xpc_bool_create%28__%29.md): Creates an XPC Boolean object.
- [XPC_BOOL_TRUE](xpc_bool_true-c.macro.md): A constant that represents a Boolean value of true.
- [XPC_BOOL_FALSE](xpc_bool_false-c.macro.md): A constant that represents a Boolean value of false.
