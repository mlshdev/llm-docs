> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecontext/retain](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecontext/retain)

# retain (Swift)

**Framework:** System Configuration  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback used to add a retain for the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value of this parameter can be `NULL`.

## Declaration

```swift
var retain: ((UnsafeRawPointer) -> UnsafeRawPointer)?
```

# retain (Objective-C)

**Framework:** System Configuration  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback used to add a retain for the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value of this parameter can be `NULL`.

## Declaration

```objectivec
const void *(*)(const void *) retain;
```
