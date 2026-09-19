> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/sendevent(options:timeout:)

# sendEvent(options:timeout:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Sends an Apple event.

## Declaration

```swift
func sendEvent(options sendOptions: NSAppleEventDescriptor.SendOptions = [], timeout timeoutInSeconds: TimeInterval) throws -> NSAppleEventDescriptor
```

# sendEventWithOptions:timeout:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Sends an Apple event.

## Declaration

```objectivec
- (NSAppleEventDescriptor *) sendEventWithOptions:(NSAppleEventSendOptions) sendOptions timeout:(NSTimeInterval) timeoutInSeconds error:(NSError **) error;
```
