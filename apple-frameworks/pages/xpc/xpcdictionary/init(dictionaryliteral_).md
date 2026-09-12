> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/init(dictionaryliteral:)](https://developer.apple.com/documentation/xpc/xpcdictionary/init(dictionaryliteral:))

# init(dictionaryLiteral:)

**Framework:** XPC  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS · watchOS 27.0+

Creates an `XPCDictionary` initialized with the given key-value pairs.

## Declaration

```swift
init(dictionaryLiteral elements: (String, XPCLiteralValue)...)
```

## Parameters

- `elements`: The key-value pairs that will make up the new dictionary. Values can be strings, integers, booleans, floating-point numbers, or other XPC-compatible types.

<a id="discussion"></a>

## Discussion

Example usage:

```swift
let dict: XPCDictionary = [
    "name": "John",
    "age": 30,
    "isActive": true,
    "score": 95.5
]
```

For more complex types, you can explicitly create XPCLiteralValue:

```swift
let dict: XPCDictionary = [
    "nested": XPCLiteralValue(anotherDict),
    "endpoint": XPCLiteralValue(someEndpoint)
]
```
