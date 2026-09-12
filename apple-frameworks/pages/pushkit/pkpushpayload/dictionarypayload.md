> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushpayload/dictionarypayload](https://developer.apple.com/documentation/pushkit/pkpushpayload/dictionarypayload)

# dictionaryPayload (Swift)

**Framework:** PushKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The contents of the received payload.

## Declaration

```swift
var dictionaryPayload: [AnyHashable : Any] { get }
```

<a id="Discussion"></a>

## Discussion

For VoIP pushes, the sender is free to specify any fields for the contained data as long as it is provided in a text-encodable JSON format.

## See Also

### Payload Data

- [type](type.md): The type value indicating how to interpret the payload.

# dictionaryPayload (Objective-C)

**Framework:** PushKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The contents of the received payload.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary * dictionaryPayload;
```

<a id="Discussion"></a>

## Discussion

For VoIP pushes, the sender is free to specify any fields for the contained data as long as it is provided in a text-encodable JSON format.

## See Also

### Payload Data

- [type](type.md): The type value indicating how to interpret the payload.
