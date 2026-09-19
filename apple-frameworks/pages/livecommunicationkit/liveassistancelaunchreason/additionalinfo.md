> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/livecommunicationkit/liveassistancelaunchreason/additionalinfo

# LiveAssistanceLaunchReason.additionalInfo

**Framework:** LiveCommunicationKit  
**Kind:** Case  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · visionOS 27.1+

A launch reason that indicates the person using the extension needs to provide some information not related to authentication.

## Declaration

```swift
case additionalInfo
```

<a id="Discussion"></a>

## Discussion

Use this value when your extension needs information like a language preference or other configuration. You might also use this value when you want confirmation to proceed with establishing the assistance service.

## See Also

### Working with launch reasons

- [LiveAssistanceLaunchReason.signIn](signin.md): A launch reason that indicates the person using the extension isn’t signed into the VRS provider service.
