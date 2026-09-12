> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/rpcprocedureunavailable](https://developer.apple.com/documentation/system/errno/rpcprocedureunavailable)

# rpcProcedureUnavailable

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Bad procedure for program.

## Declaration

```swift
static var rpcProcedureUnavailable: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A remote procedure call was attempted for a procedure that doesn’t exist in the remote program.

The corresponding C error is `EPROCUNAVAIL`.

## See Also

### RPC Errors

- [rpcProgramUnavailable](rpcprogramunavailable.md): The remote procedure call (RPC) program isn’t available.
- [rpcProgramVersionMismatch](rpcprogramversionmismatch.md): The version of the remote procedure call (RPC) program is incorrect.
- [rpcUnsuccessful](rpcunsuccessful.md): The structure of the remote procedure call (RPC) is bad.
- [rpcVersionMismatch](rpcversionmismatch.md): The version of the remote procedure call (RPC) is incorrect.
