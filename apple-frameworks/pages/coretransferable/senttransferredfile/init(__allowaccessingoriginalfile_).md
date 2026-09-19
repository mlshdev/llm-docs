> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretransferable/senttransferredfile/init(_:allowaccessingoriginalfile:)

# init(\_:allowAccessingOriginalFile:)

**Framework:** Core Transferable  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a description of a file from the perspective of the sender.

## Declaration

```swift
init(_ file: URL, allowAccessingOriginalFile: Bool = false)
```

## Parameters

- `file`: A URL that describes the location of the file.
- `allowAccessingOriginalFile`: A Boolean value that indicates whether the receiver can read and write the original file. When set to `false`, the receiver can only gain access to a copy of the file.

## See Also

### Configuring a file transfer

- [file](file.md): A URL that describes the location of the file.
- [allowAccessingOriginalFile](allowaccessingoriginalfile.md): A Boolean value that indicates whether the receiver can read and write the original file. When set to `false`, the receiver can only gain access to a copy of the file.
