> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/messageport/disconnect(throwing:)](https://developer.apple.com/documentation/webkit/wkwebextension/messageport/disconnect(throwing:))

# disconnect(throwing:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Disconnects the port, terminating all further messages with an optional error.

## Declaration

```swift
func disconnect(throwing error: (any Error)?)
```

## Parameters

- `error`: An optional error indicating the reason for disconnection.

# disconnectWithError: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Disconnects the port, terminating all further messages with an optional error.

## Declaration

```objectivec
- (void) disconnectWithError:(NSError *) error;
```

## Parameters

- `error`: An optional error indicating the reason for disconnection.
