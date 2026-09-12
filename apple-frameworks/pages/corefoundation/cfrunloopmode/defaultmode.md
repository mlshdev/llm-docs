> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopmode/defaultmode](https://developer.apple.com/documentation/corefoundation/cfrunloopmode/defaultmode)

# defaultMode (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Run loop mode that should be used when a thread is in its default, or idle, state, waiting for an event. This mode is used when the run loop is started with [CFRunLoopRun()](../cfrunlooprun%28%29.md).

## Declaration

```swift
static let defaultMode: CFRunLoopMode!
```

# kCFRunLoopDefaultMode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Run loop mode that should be used when a thread is in its default, or idle, state, waiting for an event. This mode is used when the run loop is started with [CFRunLoopRun](../cfrunlooprun%28%29.md).

## Declaration

```objectivec
extern CFRunLoopMode const kCFRunLoopDefaultMode;
```
