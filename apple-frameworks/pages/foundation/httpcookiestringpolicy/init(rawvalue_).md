> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/httpcookiestringpolicy/init(rawvalue:)

# init(rawValue:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an HTTP cookie string policy from the given raw string.

## Declaration

```swift
init(rawValue: String)
```

<a id="Discussion"></a>

## Discussion

URL Loading System ignores any policy with a raw value other than the predefined policy values: `strict` and `lax`.
