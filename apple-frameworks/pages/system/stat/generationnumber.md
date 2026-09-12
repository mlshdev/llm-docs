> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/stat/generationnumber](https://developer.apple.com/documentation/system/stat/generationnumber)

# generationNumber

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

File generation number

## Declaration

```swift
var generationNumber: UInt64 { get set }
```

<a id="discussion"></a>

## Discussion

The file generation number may be used to distinguish between different files that have used the same inode over time.

The corresponding C property is `st_gen`.

> **Note**

> Only available on Darwin, FreeBSD, and OpenBSD. The underlying C field is 32-bit on Darwin and OpenBSD, and 64-bit on FreeBSD.
