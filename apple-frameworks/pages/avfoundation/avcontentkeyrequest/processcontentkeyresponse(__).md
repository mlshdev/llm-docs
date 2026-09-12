> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/processcontentkeyresponse(_:)](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/processcontentkeyresponse(_:))

# processContentKeyResponse(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Sends the specified content key response to the receiver for processing.

## Declaration

```swift
func processContentKeyResponse(_ keyResponse: AVContentKeyResponse)
```

## Parameters

- `keyResponse`: An [AVContentKeyResponse](../avcontentkeyresponse.md) object carrying a response to a content key request.

<a id="Discussion"></a>

## Discussion

After receiving a content key request and calling [makeStreamingContentKeyRequestData(forApp:contentIdentifier:options:completionHandler:)](makestreamingcontentkeyrequestdata%28forapp_contentidentifier_options_completionhandler_%29.md) on that request, you must obtain a response to the request in accordance with the protocol used by the entity that controls the use of the media data. Use this method to provide the content key response, to make protected content available for processing.

## See Also

### Responding to the content key request

- [processContentKeyResponseError(\_:)](processcontentkeyresponseerror%28__%29.md): Tells the receiver that the app was unable to obtain a content key response.
- [respondByRequestingPersistableContentKeyRequest()](respondbyrequestingpersistablecontentkeyrequest%28%29.md): Deprecated. Tells the receiver that the app requires a persistable content key request object for processing.

# processContentKeyResponse: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Sends the specified content key response to the receiver for processing.

## Declaration

```objectivec
- (void) processContentKeyResponse:(AVContentKeyResponse *) keyResponse;
```

## Parameters

- `keyResponse`: An [AVContentKeyResponse](../avcontentkeyresponse.md) object carrying a response to a content key request.

<a id="Discussion"></a>

## Discussion

After receiving a content key request and calling [makeStreamingContentKeyRequestDataForApp:contentIdentifier:options:completionHandler:](makestreamingcontentkeyrequestdata%28forapp_contentidentifier_options_completionhandler_%29.md) on that request, you must obtain a response to the request in accordance with the protocol used by the entity that controls the use of the media data. Use this method to provide the content key response, to make protected content available for processing.

## See Also

### Responding to the content key request

- [processContentKeyResponseError:](processcontentkeyresponseerror%28__%29.md): Tells the receiver that the app was unable to obtain a content key response.
- [respondByRequestingPersistableContentKeyRequest](respondbyrequestingpersistablecontentkeyrequest%28%29.md): Deprecated. Tells the receiver that the app requires a persistable content key request object for processing.
