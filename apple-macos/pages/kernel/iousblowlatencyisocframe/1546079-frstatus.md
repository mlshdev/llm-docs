> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousblowlatencyisocframe/1546079-frstatus](https://developer.apple.com/documentation/kernel/iousblowlatencyisocframe/1546079-frstatus)

# frStatus

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

The status of the frame.

## Declaration

```objectivec
IOReturn frStatus;
```

## See Also

### Getting the Properties

- [frActCount](1546558-fractcount.md): The actual number of bytes that were transferred.
- [frReqCount](1546127-frreqcount.md): Input specifiying the number of bytes to read or write.
- [frTimeStamp](1546493-frtimestamp.md): A timestamp that indicates when the system processed the frame.
