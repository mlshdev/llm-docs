> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filepath/removingroot()

# removingRoot()

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new path containing just the components, i.e. everything after `root`.

## Declaration

```swift
func removingRoot() -> FilePath
```

<a id="discussion"></a>

## Discussion

Returns self if `root == nil`.

Examples:

- Unix:

  - `/foo/bar => foo/bar`
  - `foo/bar  => foo/bar`
  - `/        => ""`
- Windows:

  - `C:\foo\bar                  => foo\bar`
  - `foo\bar                     => foo\bar`
  - `\\?\UNC\server\share\file   => file`
  - `\\?\device\folder\file.exe  => folder\file.exe`
  - `\\server\share\file         => file`
  - `\                           => ""`
