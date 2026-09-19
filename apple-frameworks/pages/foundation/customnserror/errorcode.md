> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/customnserror/errorcode

# errorCode

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The error code within the given domain.

## Declaration

```swift
var errorCode: Int { get }
```

## Default Implementations

### CustomNSError Implementations

- [errorCode](errorcode-2opgi.md): The error code within the given domain.
- [errorCode](errorcode-839wu.md): Conforms when `Self` conforms to `RawRepresentable` and `RawValue` conforms to `FixedWidthInteger`.
