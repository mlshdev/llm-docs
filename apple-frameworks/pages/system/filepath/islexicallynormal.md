> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filepath/islexicallynormal

# isLexicallyNormal

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Whether the path is in lexical-normal form, that is `.` and `..` components have been collapsed lexically (i.e. without following symlinks).

## Declaration

```swift
var isLexicallyNormal: Bool { get }
```

<a id="discussion"></a>

## Discussion

Examples:

- `"/usr/local/bin".isLexicallyNormal == true`
- `"../local/bin".isLexicallyNormal   == true`
- `"local/bin/..".isLexicallyNormal   == false`
