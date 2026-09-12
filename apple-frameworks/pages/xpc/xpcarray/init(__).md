> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcarray/init(_:)](https://developer.apple.com/documentation/xpc/xpcarray/init(_:))

# init(\_:)

**Framework:** XPC  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a new array that contains the given XPC object.

## Declaration

```swift
init(_ value: xpc_object_t)
```

## Parameters

- `value`: An XPC object. The object’s type must be [XPC_TYPE_ARRAY](../xpc_type_array-swift.var.md).

## See Also

### Creating an array

- [init()](init%28%29.md): Creates a new, empty array.
- [copy(into:)](copy%28into_%29.md): Copies the elements of the array to a different array.
