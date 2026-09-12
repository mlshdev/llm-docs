> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/ondiskcodesigningflags/valueset/iscertificateexpirationenforced](https://developer.apple.com/documentation/lightweightcoderequirements/ondiskcodesigningflags/valueset/iscertificateexpirationenforced)

# isCertificateExpirationEnforced

**Framework:** LightweightCodeRequirements  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Flag indicating that the signature on this code should be treated as invalid if the certificate it was signed with expired.

## Declaration

```swift
static let isCertificateExpirationEnforced: OnDiskCodeSigningFlags.ValueSet
```

<a id="discussion"></a>

## Discussion

By default code signatures are valid if the certificate they were signed with was valid at the time of signing. This flag invalidates signatures from certificatest that are expired at the time of use. This is equivalent to `CS_CHECK_EXPIRATION` in C APIs.
