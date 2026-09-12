> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectioncontext/release](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectioncontext/release)

# release (Swift)

**Framework:** System Configuration  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The calllback used to remove a retain previously added for the info field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value may be `NULL`.

## Declaration

```swift
var release: ((UnsafeRawPointer) -> Void)?
```

# release (Objective-C)

**Framework:** System Configuration  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The calllback used to remove a retain previously added for the info field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value may be `NULL`.

## Declaration

```objectivec
void (*)(const void *) release;
```
