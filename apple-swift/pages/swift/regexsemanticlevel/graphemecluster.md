> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/regexsemanticlevel/graphemecluster

# graphemeCluster

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Match at the character level.

## Declaration

```swift
static var graphemeCluster: RegexSemanticLevel { get }
```

<a id="discussion"></a>

## Discussion

At this semantic level, each matched element is a `Character` value. This is the default semantic level.
