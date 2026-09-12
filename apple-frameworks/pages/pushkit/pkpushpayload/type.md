> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushpayload/type](https://developer.apple.com/documentation/pushkit/pkpushpayload/type)

# type (Swift)

**Framework:** PushKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The type value indicating how to interpret the payload.

## Declaration

```swift
var type: PKPushType { get }
```

<a id="Discussion"></a>

## Discussion

For possible values, see [PKPushType](../pkpushtype.md).

## See Also

### Payload Data

- [dictionaryPayload](dictionarypayload.md): The contents of the received payload.

# type (Objective-C)

**Framework:** PushKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The type value indicating how to interpret the payload.

## Declaration

```objectivec
@property (copy, readonly) PKPushType type;
```

<a id="Discussion"></a>

## Discussion

For possible values, see [PKPushType](../pkpushtype.md).

## See Also

### Payload Data

- [dictionaryPayload](dictionarypayload.md): The contents of the received payload.
