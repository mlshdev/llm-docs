> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousblowlatencyisocframe/1425755-frstatus

# frStatus

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Returns status associated with the frame.

## Declaration

```objectivec
IOReturn frStatus;
```

## See Also

### Fields

- [frReqCount](1425652-frreqcount.md): Input specifiying how many bytes to read or write.
- [frActCount](1426008-fractcount.md): Actual # of bytes transferred.
- [frTimeStamp](1426222-frtimestamp.md): Time stamp that indicates time when frame was procesed.
