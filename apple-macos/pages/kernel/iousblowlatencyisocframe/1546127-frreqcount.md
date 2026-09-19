> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousblowlatencyisocframe/1546127-frreqcount

# frReqCount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

Input specifiying the number of bytes to read or write.

## Declaration

```objectivec
UInt16 frReqCount;
```

## See Also

### Getting the Properties

- [frActCount](1546558-fractcount.md): The actual number of bytes that were transferred.
- [frStatus](1546079-frstatus.md): The status of the frame.
- [frTimeStamp](1546493-frtimestamp.md): A timestamp that indicates when the system processed the frame.
