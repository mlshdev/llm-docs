> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/kqcpluginexecutionmodeprovider](https://developer.apple.com/documentation/quartz/kqcpluginexecutionmodeprovider)

# kQCPlugInExecutionModeProvider (Swift)

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A provider execution mode. The custom patch executes on demand—that is, whenever data is requested of it, but at most once per frame.

## Declaration

```swift
var kQCPlugInExecutionModeProvider: QCPlugInExecutionMode { get }
```

## See Also

### Constants

- [kQCPlugInExecutionModeProcessor](kqcpluginexecutionmodeprocessor.md): A processor execution mode. The custom patch executes whenever its inputs change or if the time change (assuming it’s time-dependent).
- [kQCPlugInExecutionModeConsumer](kqcpluginexecutionmodeconsumer.md): A consumer execution mode. The custom patch always executes assuming the value of its Enable input port is `true`. (The Enable port is automatically added by the system.)

# kQCPlugInExecutionModeProvider (Objective-C)

**Framework:** Quartz  
**Kind:** Enumeration Case  
**Availability:** macOS 10.4+

A provider execution mode. The custom patch executes on demand—that is, whenever data is requested of it, but at most once per frame.

## Declaration

```objectivec
kQCPlugInExecutionModeProvider
```

## See Also

### Constants

- [kQCPlugInExecutionModeProcessor](kqcpluginexecutionmodeprocessor.md): A processor execution mode. The custom patch executes whenever its inputs change or if the time change (assuming it’s time-dependent).
- [kQCPlugInExecutionModeConsumer](kqcpluginexecutionmodeconsumer.md): A consumer execution mode. The custom patch always executes assuming the value of its Enable input port is `true`. (The Enable port is automatically added by the system.)
