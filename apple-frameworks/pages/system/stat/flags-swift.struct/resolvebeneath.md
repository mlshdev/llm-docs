> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/stat/flags-swift.struct/resolvebeneath](https://developer.apple.com/documentation/system/stat/flags-swift.struct/resolvebeneath)

# resolveBeneath

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

If the path does not reside in the hierarchy beneath the starting directory, return an error.

## Declaration

```swift
static var resolveBeneath: Stat.Flags { get }
```

<a id="discussion"></a>

## Discussion

The corresponding C constant is `AT_RESOLVE_BENEATH`.

> **Note**

> Only available on Darwin and FreeBSD.
