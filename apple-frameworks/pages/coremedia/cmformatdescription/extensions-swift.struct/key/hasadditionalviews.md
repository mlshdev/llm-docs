> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmformatdescription/extensions-swift.struct/key/hasadditionalviews

# hasAdditionalViews

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A boolean indicating that one or more additional views may be present beyond stereo left and stereo right eyes (e.g,. a “centerline” view).

## Declaration

```swift
@backDeployed(before: macOS 26.0, iOS 26.0, visionOS 26.0)
static var hasAdditionalViews: CMFormatDescription.Extensions.Key { get }
```
