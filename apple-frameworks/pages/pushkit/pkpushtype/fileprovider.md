> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pushkit/pkpushtype/fileprovider

# fileProvider (Swift)

**Framework:** PushKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

A push type for file provider updates.

## Declaration

```swift
static let fileProvider: PKPushType
```

<a id="Discussion"></a>

## Discussion

Use file provider notifications to update your File Provider extension’s content from your server. For more information, see [Tracking Your File Provider’s Changes](../../fileprovider/tracking-your-file-provider-s-changes.md).

## See Also

### Notification Types

- [complication](complication.md): Deprecated. A push type for watchOS complications.
- [voIP](voip.md): A push type for Voice-over-IP (VoIP) call invitations.

# PKPushTypeFileProvider (Objective-C)

**Framework:** PushKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A push type for file provider updates.

## Declaration

```objectivec
extern PKPushType const PKPushTypeFileProvider;
```

<a id="Discussion"></a>

## Discussion

Use file provider notifications to update your File Provider extension’s content from your server. For more information, see [Tracking Your File Provider’s Changes](../../fileprovider/tracking-your-file-provider-s-changes.md).

## See Also

### Notification Types

- [PKPushTypeComplication](complication.md): Deprecated. A push type for watchOS complications.
- [PKPushTypeVoIP](voip.md): A push type for Voice-over-IP (VoIP) call invitations.
