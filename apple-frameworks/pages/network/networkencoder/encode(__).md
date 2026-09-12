> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkencoder/encode(_:)](https://developer.apple.com/documentation/network/networkencoder/encode(_:))

# encode(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func encode<T>(_ value: T) throws -> Data where T : Encodable
```

## Parameters

- `value`: An encodable value to encode

<a id="return-value"></a>

## Return Value

Encoded data or throws an error if unable to encode
