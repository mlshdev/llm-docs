> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/characterset/init(contentsoffile:)

# init(contentsOfFile:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initialize with the contents of a file.

## Declaration

```swift
init?(contentsOfFile file: String)
```

## Parameters

- `file`: The file to read.

<a id="discussion"></a>

## Discussion

Returns `nil` if there was an error reading the file.
