> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/init(_:)](https://developer.apple.com/documentation/usdkit/usdvalue/init(_:))

# init(\_:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a value wrapping `value`.

## Declaration

```swift
init<T>(_ value: T) where T : USDValueProtocol
```

## Parameters

- `value`: A value of any type that conforms to [USDValueProtocol](../usdvalueprotocol.md).

## See Also

### Creating a value

- [init()](init%28%29.md): Creates an empty value.
