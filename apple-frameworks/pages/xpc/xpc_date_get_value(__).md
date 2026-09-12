> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_date_get_value(_:)](https://developer.apple.com/documentation/xpc/xpc_date_get_value(_:))

# xpc_date_get_value(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the underlying date interval from an object.

## Declaration

```swift
func xpc_date_get_value(_ xdate: xpc_object_t) -> Int64
```

## Parameters

- `xdate`: The date object which is to be examined.

<a id="return-value"></a>

## Return Value

The underlying date interval.

## See Also

### Date objects

- [xpc_date_create(\_:)](xpc_date_create%28__%29.md): Creates an XPC date object.
- [xpc_date_create_from_current()](xpc_date_create_from_current%28%29.md): Creates an XPC date object that represents the current date.

# xpc_date_get_value (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the underlying date interval from an object.

## Declaration

```objectivec
extern int64_t xpc_date_get_value(xpc_object_t xdate);
```

## Parameters

- `xdate`: The date object which is to be examined.

<a id="return-value"></a>

## Return Value

The underlying date interval.

## See Also

### Date objects

- [xpc_date_create](xpc_date_create%28__%29.md): Creates an XPC date object.
- [xpc_date_create_from_current](xpc_date_create_from_current%28%29.md): Creates an XPC date object that represents the current date.
