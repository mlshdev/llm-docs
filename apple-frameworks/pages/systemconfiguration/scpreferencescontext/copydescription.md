> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencescontext/copydescription](https://developer.apple.com/documentation/systemconfiguration/scpreferencescontext/copydescription)

# copyDescription (Swift)

**Framework:** System Configuration  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback used to provide a description of the `info` field.

## Declaration

```swift
var copyDescription: ((UnsafeRawPointer) -> Unmanaged<CFString>)?
```

# copyDescription (Objective-C)

**Framework:** System Configuration  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The callback used to provide a description of the `info` field.

## Declaration

```objectivec
const struct __CFString *(*)(const void *) copyDescription;
```
