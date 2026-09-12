> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopmode/commonmodes](https://developer.apple.com/documentation/corefoundation/cfrunloopmode/commonmodes)

# commonModes (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Objects added to a run loop using this value as the mode are monitored by all run loop modes that have been declared as a member of the set of “common” modes with [CFRunLoopAddCommonMode(\_:\_:)](../cfrunloopaddcommonmode%28____%29.md).

## Declaration

```swift
static let commonModes: CFRunLoopMode!
```

# kCFRunLoopCommonModes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Objects added to a run loop using this value as the mode are monitored by all run loop modes that have been declared as a member of the set of “common” modes with [CFRunLoopAddCommonMode](../cfrunloopaddcommonmode%28____%29.md).

## Declaration

```objectivec
extern CFRunLoopMode const kCFRunLoopCommonModes;
```
