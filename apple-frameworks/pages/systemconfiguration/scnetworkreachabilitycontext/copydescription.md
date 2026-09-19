> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/systemconfiguration/scnetworkreachabilitycontext/copydescription

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
