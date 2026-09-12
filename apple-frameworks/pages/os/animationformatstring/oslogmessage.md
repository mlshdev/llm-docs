> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/animationformatstring/oslogmessage](https://developer.apple.com/documentation/os/animationformatstring/oslogmessage)

# AnimationFormatString.OSLogMessage

**Framework:** os  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A log message that includes an animation tag.

## Declaration

```swift
@frozen struct OSLogMessage
```

<a id="overview"></a>

## Overview

An [AnimationFormatString.OSLogMessage](oslogmessage.md) structure contains a message that you construct from a string interpolation or string literal. This message includes an additional animation tag. Don’t create this structure directly. The system creates one automatically when you log a message using the [os_signpost(\_:dso:log:name:signpostID:\_:\_:)](../os_signpost%28__dso_log_name_signpostid_____%29-nez5.md) function

## Topics

### Creating a Format String

- [init(stringLiteral:)](oslogmessage/init%28stringliteral_%29.md): Creates a log message using a string literal.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
