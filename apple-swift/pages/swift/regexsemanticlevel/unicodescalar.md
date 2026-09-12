> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexsemanticlevel/unicodescalar](https://developer.apple.com/documentation/swift/regexsemanticlevel/unicodescalar)

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
