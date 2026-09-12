> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/rpcversionmismatch](https://developer.apple.com/documentation/system/errno/rpcversionmismatch)

# rpcVersionMismatch

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The version of the remote procedure call (RPC) is incorrect.

## Declaration

```swift
static var rpcVersionMismatch: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The version of RPC on the remote peer isn’t compatible with the local version.

The corresponding C error is `ERPCMISMATCH`.

## See Also

### RPC Errors

- [rpcProcedureUnavailable](rpcprocedureunavailable.md): Bad procedure for program.
- [rpcProgramUnavailable](rpcprogramunavailable.md): The remote procedure call (RPC) program isn’t available.
- [rpcProgramVersionMismatch](rpcprogramversionmismatch.md): The version of the remote procedure call (RPC) program is incorrect.
- [rpcUnsuccessful](rpcunsuccessful.md): The structure of the remote procedure call (RPC) is bad.
