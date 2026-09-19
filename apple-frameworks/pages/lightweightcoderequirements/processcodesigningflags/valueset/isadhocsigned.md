> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/lightweightcoderequirements/processcodesigningflags/valueset/isadhocsigned

# isAdhocSigned

**Framework:** LightweightCodeRequirements  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The code is adhoc signed i.e. it contains a code directory and page hashes but no CMS signature.

## Declaration

```swift
static let isAdhocSigned: ProcessCodeSigningFlags.ValueSet
```

<a id="discussion"></a>

## Discussion

This is equivalent to `CS_ADHOC` in C APIs.
