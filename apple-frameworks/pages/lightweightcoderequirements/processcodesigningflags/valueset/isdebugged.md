> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/processcodesigningflags/valueset/isdebugged](https://developer.apple.com/documentation/lightweightcoderequirements/processcodesigningflags/valueset/isdebugged)

# isDebugged

**Framework:** LightweightCodeRequirements  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Flag indicating that the process has been attached by a debugger.

## Declaration

```swift
static let isDebugged: ProcessCodeSigningFlags.ValueSet
```

<a id="discussion"></a>

## Discussion

This is equivalent to `CS_DEBUGGED` in C APIs.
