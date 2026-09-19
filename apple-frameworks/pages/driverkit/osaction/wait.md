> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osaction/wait

# Wait

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
kern_return_t Wait(OSActionWaitToken *token, uint64_t options, uint64_t deadline);
```

## See Also

### Instance Methods

- [EndWait](endwait.md)
- [WillWait](willwait.md)
