> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderdelegate/provider(_:perform:)-43atg](https://developer.apple.com/documentation/callkit/cxproviderdelegate/provider(_:perform:)-43atg)

# provider(\_:perform:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+

Called when the provider performs the specified set translation action.

## Declaration

```swift
optional func provider(_ provider: CXProvider, perform action: CXSetTranslatingCallAction)
```

## Parameters

- `provider`: The telephony provider.
- `action`: The set translation action.

## See Also

### Handling Call Actions

- [provider(\_:perform:)](provider%28__perform_%29-2lem5.md): Called when the provider performs the specified start call action.
- [provider(\_:perform:)](provider%28__perform_%29-h4in.md): Called when the provider performs the specified answer call action.
- [provider(\_:perform:)](provider%28__perform_%29-9a0m.md): Called when the provider performs the specified end call action.
- [provider(\_:perform:)](provider%28__perform_%29-947b1.md): Called when the provider performs the specified set held call action.
- [provider(\_:perform:)](provider%28__perform_%29-4u3yu.md): Called when the provider performs the specified set muted call action.
- [provider(\_:perform:)](provider%28__perform_%29-9masw.md): Called when the provider performs the specified set group call action.
- [provider(\_:perform:)](provider%28__perform_%29-4htxt.md): Called when the provider performs the specified play DTMF (dual tone multifrequency) call action.
- [provider(\_:timedOutPerforming:)](provider%28__timedoutperforming_%29.md): Called when the provider performs the specified action times out.

# provider:performSetTranslatingCallAction: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+

Called when the provider performs the specified set translation action.

## Declaration

```objectivec
- (void) provider:(CXProvider *) provider performSetTranslatingCallAction:(CXSetTranslatingCallAction *) action;
```

## Parameters

- `provider`: The telephony provider.
- `action`: The set translation action.

## See Also

### Handling Call Actions

- [provider:performStartCallAction:](provider%28__perform_%29-2lem5.md): Called when the provider performs the specified start call action.
- [provider:performAnswerCallAction:](provider%28__perform_%29-h4in.md): Called when the provider performs the specified answer call action.
- [provider:performEndCallAction:](provider%28__perform_%29-9a0m.md): Called when the provider performs the specified end call action.
- [provider:performSetHeldCallAction:](provider%28__perform_%29-947b1.md): Called when the provider performs the specified set held call action.
- [provider:performSetMutedCallAction:](provider%28__perform_%29-4u3yu.md): Called when the provider performs the specified set muted call action.
- [provider:performSetGroupCallAction:](provider%28__perform_%29-9masw.md): Called when the provider performs the specified set group call action.
- [provider:performPlayDTMFCallAction:](provider%28__perform_%29-4htxt.md): Called when the provider performs the specified play DTMF (dual tone multifrequency) call action.
- [provider:timedOutPerformingAction:](provider%28__timedoutperforming_%29.md): Called when the provider performs the specified action times out.
