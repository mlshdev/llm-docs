> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderconfiguration/supportsvideo](https://developer.apple.com/documentation/callkit/cxproviderconfiguration/supportsvideo)

# supportsVideo (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the provider supports video in addition to audio.

## Declaration

```swift
var supportsVideo: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Call Capabilities

- [maximumCallGroups](maximumcallgroups.md): The maximum number of call groups.
- [maximumCallsPerCallGroup](maximumcallspercallgroup.md): The maximum number of calls per call group.
- [supportedHandleTypes](supportedhandletypes-kd6i.md): The supported handle types.
- [includesCallsInRecents](includescallsinrecents.md): A Boolean value that indicates whether the provider includes a call in the system’s Recents list after the call ends.

# supportsVideo (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the provider supports video in addition to audio.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsVideo;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Call Capabilities

- [maximumCallGroups](maximumcallgroups.md): The maximum number of call groups.
- [maximumCallsPerCallGroup](maximumcallspercallgroup.md): The maximum number of calls per call group.
- [supportedHandleTypes](supportedhandletypes-995uh.md): The supported handle types.
- [includesCallsInRecents](includescallsinrecents.md): A Boolean value that indicates whether the provider includes a call in the system’s Recents list after the call ends.
