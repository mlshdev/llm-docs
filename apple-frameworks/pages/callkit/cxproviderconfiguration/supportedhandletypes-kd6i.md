> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxproviderconfiguration/supportedhandletypes-kd6i](https://developer.apple.com/documentation/callkit/cxproviderconfiguration/supportedhandletypes-kd6i)

# supportedHandleTypes

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The supported handle types.

## Declaration

```swift
@nonobjc final var supportedHandleTypes: Set<CXHandle.HandleType> { get set }
```

<a id="Discussion"></a>

## Discussion

For possible values, see [CXHandle.HandleType](../cxhandle/handletype.md).

## See Also

### Configuring Call Capabilities

- [maximumCallGroups](maximumcallgroups.md): The maximum number of call groups.
- [maximumCallsPerCallGroup](maximumcallspercallgroup.md): The maximum number of calls per call group.
- [supportsVideo](supportsvideo.md): A Boolean value that indicates whether the provider supports video in addition to audio.
- [includesCallsInRecents](includescallsinrecents.md): A Boolean value that indicates whether the provider includes a call in the system’s Recents list after the call ends.
