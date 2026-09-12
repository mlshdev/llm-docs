> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585592-anonymous](https://developer.apple.com/documentation/coreservices/1585592-anonymous)

# Anonymous

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kMPAnyRemoteContext](1585592-anonymous/kmpanyremotecontext.md): Deprecated. Any cooperative context can execute the function. Note that the called function may not have access to any of the owning context’s process-specific low-memory values.
- [kMPAsyncInterruptRemoteContext](1585592-anonymous/kmpasyncinterruptremotecontext.md): Deprecated.
- [kMPInterruptRemoteContext](1585592-anonymous/kmpinterruptremotecontext.md): Deprecated.
- [kMPOwningProcessRemoteContext](1585592-anonymous/kmpowningprocessremotecontext.md): Deprecated. Only the context that owns the task can execute the function.
