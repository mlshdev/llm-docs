> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/kqcpluginexecutionmodeprocessor](https://developer.apple.com/documentation/quartz/kqcpluginexecutionmodeprocessor)

# kQCPlugInExecutionModeProcessor (Swift)

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A processor execution mode. The custom patch executes whenever its inputs change or if the time change (assuming it’s time-dependent).

## Declaration

```swift
var kQCPlugInExecutionModeProcessor: QCPlugInExecutionMode { get }
```

## See Also

### Constants

- [kQCPlugInExecutionModeProvider](kqcpluginexecutionmodeprovider.md): A provider execution mode. The custom patch executes on demand—that is, whenever data is requested of it, but at most once per frame.
- [kQCPlugInExecutionModeConsumer](kqcpluginexecutionmodeconsumer.md): A consumer execution mode. The custom patch always executes assuming the value of its Enable input port is `true`. (The Enable port is automatically added by the system.)

# kQCPlugInExecutionModeProcessor (Objective-C)

**Framework:** Quartz  
**Kind:** Enumeration Case  
**Availability:** macOS 10.4+

A processor execution mode. The custom patch executes whenever its inputs change or if the time change (assuming it’s time-dependent).

## Declaration

```objectivec
kQCPlugInExecutionModeProcessor
```

## See Also

### Constants

- [kQCPlugInExecutionModeProvider](kqcpluginexecutionmodeprovider.md): A provider execution mode. The custom patch executes on demand—that is, whenever data is requested of it, but at most once per frame.
- [kQCPlugInExecutionModeConsumer](kqcpluginexecutionmodeconsumer.md): A consumer execution mode. The custom patch always executes assuming the value of its Enable input port is `true`. (The Enable port is automatically added by the system.)
