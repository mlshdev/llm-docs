> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodataqueuedispatchsource/free

# free

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Performs any final cleanup for the data-queue dispatch source.

## Declaration

```objectivec
virtual void free();
```

## See Also

### Configuring the Dispatch Source

- [Create](create.md): Creates a dispatch source that you use as a shared-memory data queue.
- [init](init.md): Handles the basic initialization of the dispatch source.
