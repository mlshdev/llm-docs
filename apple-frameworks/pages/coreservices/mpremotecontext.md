> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mpremotecontext](https://developer.apple.com/documentation/coreservices/mpremotecontext)

# MPRemoteContext

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify which contexts are allowed to execute the callback function when using `MPRemoteCall`.

## Declaration

```objectivec
typedef UInt8 MPRemoteContext;
```

<a id="discussion"></a>

## Discussion

These constants are used to support older versions of Mac OS and are ignored in macOS.

## Topics

### Constants

- [kMPAnyRemoteContext](1585592-anonymous/kmpanyremotecontext.md): Deprecated. Any cooperative context can execute the function. Note that the called function may not have access to any of the owning context’s process-specific low-memory values.
- [kMPOwningProcessRemoteContext](1585592-anonymous/kmpowningprocessremotecontext.md): Deprecated. Only the context that owns the task can execute the function.
- [kMPInterruptRemoteContext](1585592-anonymous/kmpinterruptremotecontext.md): Deprecated.
- [kMPAsyncInterruptRemoteContext](1585592-anonymous/kmpasyncinterruptremotecontext.md): Deprecated.
