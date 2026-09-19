> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/recognizeanimalsrequest/revision-swift.enum/revision3

# RecognizeAnimalsRequest.Revision.revision3

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Compared to `.revision2`, this revision generally provides better precision and recall, and can also detect dog and cat heads. This is the default revision on platforms that support it. Specify `.revision2` at instantiation to preserve the previous behavior. Use [supportedRevisions](../supportedrevisions.md) to check if this revision is supported on the platform.

## Declaration

```swift
case revision3
```
