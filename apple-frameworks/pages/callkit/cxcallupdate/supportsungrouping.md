> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallupdate/supportsungrouping](https://developer.apple.com/documentation/callkit/cxcallupdate/supportsungrouping)

# supportsUngrouping (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call can be ungrouped from other calls.

## Declaration

```swift
var supportsUngrouping: Bool { get set }
```

## See Also

### Accessing Call Update Attributes

- [localizedCallerName](localizedcallername.md): The localized name of the caller.
- [remoteHandle](remotehandle.md): The handle for the remote party (for an incoming call, this is the caller; for an outgoing call, this is the callee).
- [hasVideo](hasvideo.md): A Boolean value that indicates whether the call includes video in addition to audio.
- [supportsGrouping](supportsgrouping.md): A Boolean value that indicates whether the call can be grouped with other calls.
- [supportsHolding](supportsholding.md): A Boolean value that indicates whether the call can be placed on hold or removed from hold.
- [supportsDTMF](supportsdtmf.md): A Boolean value that indicates whether the call can send DTMF (dual tone multifrequency) tones via hard pause digits or in-call keypad entries.

# supportsUngrouping (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the call can be ungrouped from other calls.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsUngrouping;
```

## See Also

### Accessing Call Update Attributes

- [localizedCallerName](localizedcallername.md): The localized name of the caller.
- [remoteHandle](remotehandle.md): The handle for the remote party (for an incoming call, this is the caller; for an outgoing call, this is the callee).
- [hasVideo](hasvideo.md): A Boolean value that indicates whether the call includes video in addition to audio.
- [supportsGrouping](supportsgrouping.md): A Boolean value that indicates whether the call can be grouped with other calls.
- [supportsHolding](supportsholding.md): A Boolean value that indicates whether the call can be placed on hold or removed from hold.
- [supportsDTMF](supportsdtmf.md): A Boolean value that indicates whether the call can send DTMF (dual tone multifrequency) tones via hard pause digits or in-call keypad entries.
