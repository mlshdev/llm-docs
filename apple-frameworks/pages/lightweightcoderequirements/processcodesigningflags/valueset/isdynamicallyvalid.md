> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/processcodesigningflags/valueset/isdynamicallyvalid](https://developer.apple.com/documentation/lightweightcoderequirements/processcodesigningflags/valueset/isdynamicallyvalid)

# isDynamicallyValid

**Framework:** LightweightCodeRequirements  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Flag indicating that no code signing validation errors have been found for the process.

## Declaration

```swift
static let isDynamicallyValid: ProcessCodeSigningFlags.ValueSet
```

<a id="discussion"></a>

## Discussion

This is equivalent to `CS_VALID` in C APIs.
