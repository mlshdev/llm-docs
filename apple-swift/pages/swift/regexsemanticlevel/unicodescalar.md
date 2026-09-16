> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/regexsemanticlevel/unicodescalar

# unicodeScalar

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Match at the Unicode scalar level.

## Declaration

```swift
static var unicodeScalar: RegexSemanticLevel { get }
```

<a id="discussion"></a>

## Discussion

At this semantic level, the string’s `UnicodeScalarView` is used for matching, and each matched element is a `UnicodeScalar` value.
