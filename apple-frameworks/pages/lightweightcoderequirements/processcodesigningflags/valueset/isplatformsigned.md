> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/lightweightcoderequirements/processcodesigningflags/valueset/isplatformsigned

# isPlatformSigned

**Framework:** LightweightCodeRequirements  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Flag indicating that the binary has been identified as a platform binary (Apple Signed).

## Declaration

```swift
static let isPlatformSigned: ProcessCodeSigningFlags.ValueSet
```

<a id="discussion"></a>

## Discussion

This is equivalent to `CS_PLATFORM_BINARY` in C APIs.
