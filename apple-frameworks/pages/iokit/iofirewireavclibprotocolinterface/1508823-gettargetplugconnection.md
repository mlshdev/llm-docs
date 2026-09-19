> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508823-gettargetplugconnection

# getTargetPlugConnection

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Gets the connection details for a specific plug.

## Declaration

```objectivec
IOReturn (*getTargetPlugConnection)(void *self, UInt32 subunitTypeAndID, IOFWAVCPlugTypes plugType, UInt32 plugNum, UInt32 *pConnectedSubunitTypeAndID, IOFWAVCPlugTypes *pConnectedPlugType, UInt32 *pConnectedPlugNum, bool *pLockConnection, bool *pPermConnection);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `subunitTypeAndID`: The subunit type and ID of the plug.
- `plugType`: The plug type.
- `plugNum`: The plug number.
- `pConnectedSubunitTypeAndID`: The subunit type and ID of the connected plug.
- `pConnectedPlugType`: The type of the connected plug.
- `pConnectedPlugNum`: The number of the connected plug.
- `pLockConnection`: A pointer for returning the lock status of the connection.
- `pPermConnection`: A pointer for returning the perm status of the connection.
