> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcreceivedmessage/decode(as:)](https://developer.apple.com/documentation/xpc/xpcreceivedmessage/decode(as:))

# decode(as:)

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Decodes a message as the given type.

## Declaration

```swift
func decode<T>(as type: T.Type = T.self) throws -> T where T : Decodable
```

## Parameters

- `type`: The type of the value in the message.

<a id="return-value"></a>

## Return Value

A value of the specified type if the message data decodes successfully.

<a id="Discussion"></a>

## Discussion

If the message data doesn’t decode to the type, this method throws the appropriate [DecodingError](https://developer.apple.com/documentation/swift/decodingerror).

## See Also

### Accessing message content

- [isSync](issync.md): A Boolean value that indicates if this message is from a synchronous request.
