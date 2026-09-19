> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/stat/flags-swift.struct/symlinknofollow

# symlinkNoFollow

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

If the path ends with a symbolic link, return information about the link itself.

## Declaration

```swift
static var symlinkNoFollow: Stat.Flags { get }
```

<a id="discussion"></a>

## Discussion

The corresponding C constant is `AT_SYMLINK_NOFOLLOW`.
