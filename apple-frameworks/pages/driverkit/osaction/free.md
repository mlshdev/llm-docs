> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osaction/free

# free

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Performs any final cleanup for the action object.

## Declaration

```objectivec
virtual void free();
```

## See Also

### Configuring the Action

- [SetAbortedHandler](setabortedhandler.md): Install a handler for the system to call when no other processes reference the action object.
