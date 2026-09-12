> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_date_create(_:)](https://developer.apple.com/documentation/xpc/xpc_date_create(_:))

# xpc_date_create(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC date object.

## Declaration

```swift
func xpc_date_create(_ interval: Int64) -> xpc_object_t
```

## Parameters

- `interval`: The date interval which is to be boxed. Negative values indicate the number of nanoseconds before the epoch. Positive values indicate the number of nanoseconds after the epoch.

<a id="return-value"></a>

## Return Value

A new date object.

## See Also

### Date objects

- [xpc_date_create_from_current()](xpc_date_create_from_current%28%29.md): Creates an XPC date object that represents the current date.
- [xpc_date_get_value(\_:)](xpc_date_get_value%28__%29.md): Returns the underlying date interval from an object.

# xpc_date_create (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC date object.

## Declaration

```objectivec
extern xpc_object_txpc_date_create(int64_t interval);
```

## Parameters

- `interval`: The date interval which is to be boxed. Negative values indicate the number of nanoseconds before the epoch. Positive values indicate the number of nanoseconds after the epoch.

<a id="return-value"></a>

## Return Value

A new date object.

## See Also

### Date objects

- [xpc_date_create_from_current](xpc_date_create_from_current%28%29.md): Creates an XPC date object that represents the current date.
- [xpc_date_get_value](xpc_date_get_value%28__%29.md): Returns the underlying date interval from an object.
