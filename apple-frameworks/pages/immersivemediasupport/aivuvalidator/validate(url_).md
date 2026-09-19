> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/aivuvalidator/validate(url:)

# validate(url:)

**Framework:** Immersive Media Support  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Validates the AIVU file given its URL. It throws an error message with error details, if any.

## Declaration

```swift
static func validate(url: URL) async throws -> Bool
```

## Parameters

- `url`: The url of an AIVU file to be validated.

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws an exception with error details, if any.
