> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandpool/1560742-gatedgetcommand](https://developer.apple.com/documentation/kernel/iocommandpool/1560742-gatedgetcommand)

# gatedGetCommand

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+ · macOS 10.11.4+

## Declaration

```objectivec
virtual kern_return_t gatedGetCommand(IOCommand **command, bool blockForCommand);
```

```objectivec
virtual IOReturn gatedGetCommand(IOCommand **command, bool blockForCommand);
```
