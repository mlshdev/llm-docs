> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/lightweightcoderequirements/processcodesigningflags/valueset/issignedbylinker

# isSignedByLinker

**Framework:** LightweightCodeRequirements  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Flag indicating that the code was signed by the linker and not an invocation of codesign.

## Declaration

```swift
static let isSignedByLinker: ProcessCodeSigningFlags.ValueSet
```

<a id="discussion"></a>

## Discussion

This is equivalent to `CS_LINKER_SIGNED` in C APIs.
