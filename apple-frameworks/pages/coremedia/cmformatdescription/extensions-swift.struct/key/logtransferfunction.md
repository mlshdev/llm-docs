> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmformatdescription/extensions-swift.struct/key/logtransferfunction

# logTransferFunction

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+ · watchOS 10.2+

Indicates that the transfer function or gamma of the content is a log format and identifies the specific log curve.

## Declaration

```swift
@backDeployed(before: macOS 26.0, iOS 26.0, tvOS 26.0, watchOS 26.0, visionOS 26.0)
static var logTransferFunction: CMFormatDescription.Extensions.Key { get }
```
