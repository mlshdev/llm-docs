> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/kqcplugintimemodeidle](https://developer.apple.com/documentation/quartz/kqcplugintimemodeidle)

# kQCPlugInTimeModeIdle (Swift)

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

An idle time dependency. The custom patch does not depend on time but needs the system to execute it periodically. For example if the custom patch connects to a piece of hardware, to ensure that it pulls data from the hardware, you would set the custom patch time dependency to idle time mode. This time mode is  typically used with providers.\]\]

## Declaration

```swift
var kQCPlugInTimeModeIdle: QCPlugInTimeMode { get }
```

## See Also

### Constants

- [kQCPlugInTimeModeNone](kqcplugintimemodenone.md): No time dependency. The custom patch does not depend on time at all. (It does not use the `time` parameter of the `execute:atTime:withArguments:` method.)
- [kQCPlugInTimeModeTimeBase](kqcplugintimemodetimebase.md): A time base dependency. The custom patch does depend on time explicitly and has a time base defined by the system. (It uses the `time` parameter of the `execute:atTime:withArguments:` method.)

# kQCPlugInTimeModeIdle (Objective-C)

**Framework:** Quartz  
**Kind:** Enumeration Case  
**Availability:** macOS 10.4+

An idle time dependency. The custom patch does not depend on time but needs the system to execute it periodically. For example if the custom patch connects to a piece of hardware, to ensure that it pulls data from the hardware, you would set the custom patch time dependency to idle time mode. This time mode is  typically used with providers.\]\]

## Declaration

```objectivec
kQCPlugInTimeModeIdle
```

## See Also

### Constants

- [kQCPlugInTimeModeNone](kqcplugintimemodenone.md): No time dependency. The custom patch does not depend on time at all. (It does not use the `time` parameter of the `execute:atTime:withArguments:` method.)
- [kQCPlugInTimeModeTimeBase](kqcplugintimemodetimebase.md): A time base dependency. The custom patch does depend on time explicitly and has a time base defined by the system. (It uses the `time` parameter of the `execute:atTime:withArguments:` method.)
