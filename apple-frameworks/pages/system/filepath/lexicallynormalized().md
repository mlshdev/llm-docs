> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filepath/lexicallynormalized()

# lexicallyNormalized()

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a copy of `self` in lexical-normal form, that is `.` and `..` components have been collapsed lexically (i.e. without following symlinks). See `lexicallyNormalize`

## Declaration

```swift
func lexicallyNormalized() -> FilePath
```
