> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/rpcunsuccessful](https://developer.apple.com/documentation/system/errno/rpcunsuccessful)

# rpcUnsuccessful

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The structure of the remote procedure call (RPC) is bad.

## Declaration

```swift
static var rpcUnsuccessful: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

Exchange of RPC information was unsuccessful.

The corresponding C error is `EBADRPC`.

## See Also

### RPC Errors

- [rpcProcedureUnavailable](rpcprocedureunavailable.md): Bad procedure for program.
- [rpcProgramUnavailable](rpcprogramunavailable.md): The remote procedure call (RPC) program isn’t available.
- [rpcProgramVersionMismatch](rpcprogramversionmismatch.md): The version of the remote procedure call (RPC) program is incorrect.
- [rpcVersionMismatch](rpcversionmismatch.md): The version of the remote procedure call (RPC) is incorrect.
