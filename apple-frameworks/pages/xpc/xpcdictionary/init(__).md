> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/init(_:)](https://developer.apple.com/documentation/xpc/xpcdictionary/init(_:))

# init(\_:)

**Framework:** XPC  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a dictionary using the keys and values in the specified object parameter.

## Declaration

```swift
init(_ value: xpc_object_t)
```

## Parameters

- `value`: An XPC dictionary object. The object’s type must be [XPC_TYPE_DICTIONARY](../xpc_type_dictionary-swift.var.md).

## See Also

### Creating a dictionary

- [init()](init%28%29.md): Creates an empty dictionary.
- [copy(into:)](copy%28into_%29.md): Copies the keys and values of the dictionary to a different dictionary.
