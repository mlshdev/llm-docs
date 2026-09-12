> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugintimemode](https://developer.apple.com/documentation/quartz/qcplugintimemode)

# QCPlugInTimeMode (Swift)

**Framework:** Quartz  
**Kind:** Structure  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Time modes for custom patches.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
struct QCPlugInTimeMode
```

## Topics

### Constants

- [kQCPlugInTimeModeNone](kqcplugintimemodenone.md): No time dependency. The custom patch does not depend on time at all. (It does not use the `time` parameter of the `execute:atTime:withArguments:` method.)
- [kQCPlugInTimeModeIdle](kqcplugintimemodeidle.md): An idle time dependency. The custom patch does not depend on time but needs the system to execute it periodically. For example if the custom patch connects to a piece of hardware, to ensure that it pulls data from the hardware, you would set the custom patch time dependency to idle time mode. This time mode is typically used with providers.\]\]
- [kQCPlugInTimeModeTimeBase](kqcplugintimemodetimebase.md): A time base dependency. The custom patch does depend on time explicitly and has a time base defined by the system. (It uses the `time` parameter of the `execute:atTime:withArguments:` method.)

### Initializers

- [init(\_:)](qcplugintimemode/init%28__%29.md): Deprecated.
- [init(rawValue:)](qcplugintimemode/init%28rawvalue_%29.md): Deprecated.

### Instance Properties

- [rawValue](qcplugintimemode/rawvalue.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [QCPlugInExecutionMode](qcpluginexecutionmode.md): Deprecated. Execution modes for custom patches.

# QCPlugInTimeMode (Objective-C)

**Framework:** Quartz  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

Time modes for custom patches.

## Declaration

```objectivec
typedef enum { ... } QCPlugInTimeMode;
```

## Topics

### Constants

- [kQCPlugInTimeModeNone](kqcplugintimemodenone.md): No time dependency. The custom patch does not depend on time at all. (It does not use the `time` parameter of the `execute:atTime:withArguments:` method.)
- [kQCPlugInTimeModeIdle](kqcplugintimemodeidle.md): An idle time dependency. The custom patch does not depend on time but needs the system to execute it periodically. For example if the custom patch connects to a piece of hardware, to ensure that it pulls data from the hardware, you would set the custom patch time dependency to idle time mode. This time mode is typically used with providers.\]\]
- [kQCPlugInTimeModeTimeBase](kqcplugintimemodetimebase.md): A time base dependency. The custom patch does depend on time explicitly and has a time base defined by the system. (It uses the `time` parameter of the `execute:atTime:withArguments:` method.)

## See Also

### Structures

- [QCPlugInExecutionMode](qcpluginexecutionmode.md): Deprecated. Execution modes for custom patches.
