> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandpool/1560741-getcommand](https://developer.apple.com/documentation/kernel/iocommandpool/1560741-getcommand)

# getCommand

**Interface language:** Objective-C

**Framework:** DriverKit, Kernel  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+ · macOS 10.11.4+

## Declaration

```objectivec
virtual IOCommandPtr getCommand(bool blockForCommand);
```

```objectivec
virtual OSPtr<IOCommand> getCommand(bool blockForCommand);
```
