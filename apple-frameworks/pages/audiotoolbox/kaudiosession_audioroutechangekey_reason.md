> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosession_audioroutechangekey_reason](https://developer.apple.com/documentation/audiotoolbox/kaudiosession_audioroutechangekey_reason)

# kAudioSession_AudioRouteChangeKey_Reason (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Identifies the reason for the audio route change.

> Deprecated in iOS 7.0.

## Declaration

```swift
var kAudioSession_AudioRouteChangeKey_Reason: String { get }
```

<a id="discussion"></a>

## Discussion

Value is a [CFNumber](../corefoundation/cfnumber.md) object that identifies the reason for the audio route change. See [Audio Route Change Reasons](1618380-audio-route-change-reasons.md).

<a id="Discussion"></a>

## Discussion

> **Note**

>  It is typically more convenient to instead use the [CFString](../corefoundation/cfstring.md) version of this constant, [kAudioSession_RouteChangeKey_Reason](kaudiosession_routechangekey_reason.md).

# kAudioSession_AudioRouteChangeKey_Reason (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Identifies the reason for the audio route change.

> Deprecated in iOS 7.0.

## Declaration

```objectivec
#define kAudioSession_AudioRouteChangeKey_Reason
```

<a id="discussion"></a>

## Discussion

Value is a [CFNumberRef](../corefoundation/cfnumber.md) object that identifies the reason for the audio route change. See [Audio Route Change Reasons](1618380-audio-route-change-reasons.md).

<a id="Discussion"></a>

## Discussion

> **Note**

>  It is typically more convenient to instead use the [CFStringRef](../corefoundation/cfstring.md) version of this constant, [kAudioSession_RouteChangeKey_Reason](kaudiosession_routechangekey_reason.md).
