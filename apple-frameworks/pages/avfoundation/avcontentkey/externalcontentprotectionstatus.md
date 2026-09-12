> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkey/externalcontentprotectionstatus](https://developer.apple.com/documentation/avfoundation/avcontentkey/externalcontentprotectionstatus)

# externalContentProtectionStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

The external protection status for the content key based on all attached displays.

## Declaration

```swift
var externalContentProtectionStatus: AVExternalContentProtectionStatus { get }
```

<a id="Discussion"></a>

## Discussion

This property isn’t key-value observable. Instead, use the [contentKeySession(\_:externalProtectionStatusDidChangeFor:)](../avcontentkeysessiondelegate/contentkeysession%28__externalprotectionstatusdidchangefor_%29.md) delegate method to monitor changes to this value.

## See Also

### Inspecting protection status

- [revoke()](revoke%28%29.md)

# externalContentProtectionStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

The external protection status for the content key based on all attached displays.

## Declaration

```objectivec
@property (readonly) AVExternalContentProtectionStatus externalContentProtectionStatus;
```

<a id="Discussion"></a>

## Discussion

This property isn’t key-value observable. Instead, use the [contentKeySession:externalProtectionStatusDidChangeForContentKey:](../avcontentkeysessiondelegate/contentkeysession%28__externalprotectionstatusdidchangefor_%29.md) delegate method to monitor changes to this value.

## See Also

### Inspecting protection status

- [revoke](revoke%28%29.md)
