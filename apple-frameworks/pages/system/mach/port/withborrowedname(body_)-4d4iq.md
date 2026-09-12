> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/mach/port/withborrowedname(body:)-4d4iq](https://developer.apple.com/documentation/system/mach/port/withborrowedname(body:)-4d4iq)

# withBorrowedName(body:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** macOS 14.4+

Borrow access to the port name in a block that can perform non-consuming operations.

## Declaration

```swift
func withBorrowedName<ReturnType>(body: (mach_port_name_t, mach_port_context_t) -> ReturnType) -> ReturnType
```

<a id="discussion"></a>

## Discussion

Take care when using this function; many operations consume rights.

If the right is consumed, behavior is undefined.

The body block may optionally return something, which will then be returned to the caller of withBorrowedName.
