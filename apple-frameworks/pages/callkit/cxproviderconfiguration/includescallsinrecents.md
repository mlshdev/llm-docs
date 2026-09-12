> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderconfiguration/includescallsinrecents](https://developer.apple.com/documentation/callkit/cxproviderconfiguration/includescallsinrecents)

# includesCallsInRecents (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the provider includes a call in the system’s Recents list after the call ends.

## Declaration

```swift
var includesCallsInRecents: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Call Capabilities

- [maximumCallGroups](maximumcallgroups.md): The maximum number of call groups.
- [maximumCallsPerCallGroup](maximumcallspercallgroup.md): The maximum number of calls per call group.
- [supportedHandleTypes](supportedhandletypes-kd6i.md): The supported handle types.
- [supportsVideo](supportsvideo.md): A Boolean value that indicates whether the provider supports video in addition to audio.

# includesCallsInRecents (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the provider includes a call in the system’s Recents list after the call ends.

## Declaration

```objectivec
@property (nonatomic) BOOL includesCallsInRecents;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Call Capabilities

- [maximumCallGroups](maximumcallgroups.md): The maximum number of call groups.
- [maximumCallsPerCallGroup](maximumcallspercallgroup.md): The maximum number of calls per call group.
- [supportedHandleTypes](supportedhandletypes-995uh.md): The supported handle types.
- [supportsVideo](supportsvideo.md): A Boolean value that indicates whether the provider supports video in addition to audio.
