> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filepath/isrelative

# isRelative

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns true if this path is not absolute (see `isAbsolute`).

## Declaration

```swift
var isRelative: Bool { get }
```

<a id="discussion"></a>

## Discussion

Examples:

- Unix:

  - `~/bar`
  - `tmp/foo.txt`
- Windows:

  - `bar\baz`
  - `C:Users\`
  - `\Users`
