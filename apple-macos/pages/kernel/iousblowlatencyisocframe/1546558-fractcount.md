> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousblowlatencyisocframe/1546558-fractcount](https://developer.apple.com/documentation/kernel/iousblowlatencyisocframe/1546558-fractcount)

# frActCount

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

The actual number of bytes that were transferred.

## Declaration

```objectivec
UInt16 frActCount;
```

## See Also

### Getting the Properties

- [frReqCount](1546127-frreqcount.md): Input specifiying the number of bytes to read or write.
- [frStatus](1546079-frstatus.md): The status of the frame.
- [frTimeStamp](1546493-frtimestamp.md): A timestamp that indicates when the system processed the frame.
