> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/regexwordboundarykind/default

# default

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A word boundary algorithm that implements the “default word boundary” Unicode recommendation.

## Declaration

```swift
static var `default`: RegexWordBoundaryKind { get }
```

<a id="discussion"></a>

## Discussion

Default word boundaries use a Unicode algorithm that handles some cases better than simple word boundaries, such as words with internal punctuation, changes in script, and Emoji.
