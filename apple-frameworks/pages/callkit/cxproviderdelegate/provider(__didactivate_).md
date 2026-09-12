> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderdelegate/provider(_:didactivate:)](https://developer.apple.com/documentation/callkit/cxproviderdelegate/provider(_:didactivate:))

# provider(\_:didActivate:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Called when the provider’s audio session is activated.

## Declaration

```swift
optional func provider(_ provider: CXProvider, didActivate audioSession: AVAudioSession)
```

## Parameters

- `provider`: The telephony provider.
- `audioSession`: The audio session that was activated.

## See Also

### Handling Changes to Audio Session Activation State

- [provider(\_:didDeactivate:)](provider%28__diddeactivate_%29.md): Called when the provider’s audio session is deactivated.

# provider:didActivateAudioSession: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Called when the provider’s audio session is activated.

## Declaration

```objectivec
- (void) provider:(CXProvider *) provider didActivateAudioSession:(AVAudioSession *) audioSession;
```

## Parameters

- `provider`: The telephony provider.
- `audioSession`: The audio session that was activated.

## See Also

### Handling Changes to Audio Session Activation State

- [provider:didDeactivateAudioSession:](provider%28__diddeactivate_%29.md): Called when the provider’s audio session is deactivated.
