> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/callkit/cxproviderdelegate/provider(_:diddeactivate:)

# provider(\_:didDeactivate:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Called when the provider’s audio session is deactivated.

## Declaration

```swift
optional func provider(_ provider: CXProvider, didDeactivate audioSession: AVAudioSession)
```

## Parameters

- `provider`: The telephony provider.
- `audioSession`: The audio session that was deactivated.

## See Also

### Handling Changes to Audio Session Activation State

- [provider(\_:didActivate:)](provider%28__didactivate_%29.md): Called when the provider’s audio session is activated.

# provider:didDeactivateAudioSession: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Called when the provider’s audio session is deactivated.

## Declaration

```objectivec
- (void) provider:(CXProvider *) provider didDeactivateAudioSession:(AVAudioSession *) audioSession;
```

## Parameters

- `provider`: The telephony provider.
- `audioSession`: The audio session that was deactivated.

## See Also

### Handling Changes to Audio Session Activation State

- [provider:didActivateAudioSession:](provider%28__didactivate_%29.md): Called when the provider’s audio session is activated.
