> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderconfiguration/maximumcallspercallgroup](https://developer.apple.com/documentation/callkit/cxproviderconfiguration/maximumcallspercallgroup)

# maximumCallsPerCallGroup (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

The maximum number of calls per call group.

## Declaration

```swift
var maximumCallsPerCallGroup: Int { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the maximum number is `5`.

## See Also

### Configuring Call Capabilities

- [maximumCallGroups](maximumcallgroups.md): The maximum number of call groups.
- [supportedHandleTypes](supportedhandletypes-kd6i.md): The supported handle types.
- [supportsVideo](supportsvideo.md): A Boolean value that indicates whether the provider supports video in addition to audio.
- [includesCallsInRecents](includescallsinrecents.md): A Boolean value that indicates whether the provider includes a call in the system’s Recents list after the call ends.

# maximumCallsPerCallGroup (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

The maximum number of calls per call group.

## Declaration

```objectivec
@property (nonatomic) NSUInteger maximumCallsPerCallGroup;
```

<a id="Discussion"></a>

## Discussion

By default, the maximum number is `5`.

## See Also

### Configuring Call Capabilities

- [maximumCallGroups](maximumcallgroups.md): The maximum number of call groups.
- [supportedHandleTypes](supportedhandletypes-995uh.md): The supported handle types.
- [supportsVideo](supportsvideo.md): A Boolean value that indicates whether the provider supports video in addition to audio.
- [includesCallsInRecents](includescallsinrecents.md): A Boolean value that indicates whether the provider includes a call in the system’s Recents list after the call ends.
