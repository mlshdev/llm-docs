> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsdistantobjectrequest/replywithexception:

# replyWithException:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Sends a reply back to the remote object making the distant object request.

## Declaration

```objectivec
- (void) replyWithException:(NSException *) exception;
```

## Parameters

- `exception`: The exception to send.

<a id="Discussion"></a>

## Discussion

If `exception` is `nil`, the return value of the receiver’s invocation is sent; otherwise, `exception` is sent and is automatically raised when it arrives at its destination.
