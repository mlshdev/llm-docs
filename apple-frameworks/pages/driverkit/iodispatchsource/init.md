> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodispatchsource/init

# init

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Handles the basic initialization of the dispatch source.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

`true` if initialization was successful, or `false` if an error occurred.

## See Also

### Configuring the Dispatch Source

- [free](free.md): Performs any final cleanup for the dispatch source.
- [Cancel](cancel.md): Cancel all callbacks from the dispatch source.
