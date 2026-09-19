> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iocommand/commandchain

# CommandChain

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
queue_chain_t * CommandChain();
```

<a id="return-value"></a>

## Return Value

Queue chain structure used to queue commands.

<a id="discussion"></a>

## Discussion

Accessor to queue chain structure used to queue commands.
