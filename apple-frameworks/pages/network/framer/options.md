> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/framer/options](https://developer.apple.com/documentation/network/framer/options)

# options

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The framer options to use with this framer.

## Declaration

```swift
var options: NWProtocolFramer.Options
```

<a id="discussion"></a>

## Discussion

Framer implementations can provide extensions with chainable functions that internally set keys on this options object.
