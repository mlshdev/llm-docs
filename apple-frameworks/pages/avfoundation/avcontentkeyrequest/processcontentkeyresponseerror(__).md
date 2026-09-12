> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/processcontentkeyresponseerror(_:)](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/processcontentkeyresponseerror(_:))

# processContentKeyResponseError(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Tells the receiver that the app was unable to obtain a content key response.

## Declaration

```swift
func processContentKeyResponseError(_ error: any Error)
```

## Parameters

- `error`: An [NSError](../../foundation/nserror.md) that describes why the content key response failed.

## See Also

### Responding to the content key request

- [processContentKeyResponse(\_:)](processcontentkeyresponse%28__%29.md): Sends the specified content key response to the receiver for processing.
- [respondByRequestingPersistableContentKeyRequest()](respondbyrequestingpersistablecontentkeyrequest%28%29.md): Deprecated. Tells the receiver that the app requires a persistable content key request object for processing.

# processContentKeyResponseError: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Tells the receiver that the app was unable to obtain a content key response.

## Declaration

```objectivec
- (void) processContentKeyResponseError:(NSError *) error;
```

## Parameters

- `error`: An [NSError](../../foundation/nserror.md) that describes why the content key response failed.

## See Also

### Responding to the content key request

- [processContentKeyResponse:](processcontentkeyresponse%28__%29.md): Sends the specified content key response to the receiver for processing.
- [respondByRequestingPersistableContentKeyRequest](respondbyrequestingpersistablecontentkeyrequest%28%29.md): Deprecated. Tells the receiver that the app requires a persistable content key request object for processing.
