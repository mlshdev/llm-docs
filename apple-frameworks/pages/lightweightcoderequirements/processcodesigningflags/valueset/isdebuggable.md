> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/processcodesigningflags/valueset/isdebuggable](https://developer.apple.com/documentation/lightweightcoderequirements/processcodesigningflags/valueset/isdebuggable)

# isDebuggable

**Framework:** LightweightCodeRequirements  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Flag indicating that the process is debuggable by authorized debuggers.

## Declaration

```swift
static let isDebuggable: ProcessCodeSigningFlags.ValueSet
```

<a id="discussion"></a>

## Discussion

This is equivalent to `CS_GET_TASK_ALLOW` in C APIs.
