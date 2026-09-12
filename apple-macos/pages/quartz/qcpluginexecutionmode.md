> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcpluginexecutionmode](https://developer.apple.com/documentation/quartz/qcpluginexecutionmode)

# QCPlugInExecutionMode (Swift)

**Framework:** Quartz  
**Kind:** Structure  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Execution modes for custom patches.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
struct QCPlugInExecutionMode
```

## Topics

### Constants

- [kQCPlugInExecutionModeProvider](kqcpluginexecutionmodeprovider.md): A provider execution mode. The custom patch executes on demand—that is, whenever data is requested of it, but at most once per frame.
- [kQCPlugInExecutionModeProcessor](kqcpluginexecutionmodeprocessor.md): A processor execution mode. The custom patch executes whenever its inputs change or if the time change (assuming it’s time-dependent).
- [kQCPlugInExecutionModeConsumer](kqcpluginexecutionmodeconsumer.md): A consumer execution mode. The custom patch always executes assuming the value of its Enable input port is `true`. (The Enable port is automatically added by the system.)

### Initializers

- [init(\_:)](qcpluginexecutionmode/init%28__%29.md): Deprecated.
- [init(rawValue:)](qcpluginexecutionmode/init%28rawvalue_%29.md): Deprecated.

### Instance Properties

- [rawValue](qcpluginexecutionmode/rawvalue.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [QCPlugInTimeMode](qcplugintimemode.md): Deprecated. Time modes for custom patches.

# QCPlugInExecutionMode (Objective-C)

**Framework:** Quartz  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

Execution modes for custom patches.

## Declaration

```objectivec
typedef enum { ... } QCPlugInExecutionMode;
```

## Topics

### Constants

- [kQCPlugInExecutionModeProvider](kqcpluginexecutionmodeprovider.md): A provider execution mode. The custom patch executes on demand—that is, whenever data is requested of it, but at most once per frame.
- [kQCPlugInExecutionModeProcessor](kqcpluginexecutionmodeprocessor.md): A processor execution mode. The custom patch executes whenever its inputs change or if the time change (assuming it’s time-dependent).
- [kQCPlugInExecutionModeConsumer](kqcpluginexecutionmodeconsumer.md): A consumer execution mode. The custom patch always executes assuming the value of its Enable input port is `true`. (The Enable port is automatically added by the system.)

## See Also

### Structures

- [QCPlugInTimeMode](qcplugintimemode.md): Deprecated. Time modes for custom patches.
