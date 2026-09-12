> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/init(workingdirectory:)](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/init(workingdirectory:))

# init(workingDirectory:)

**Framework:** Media Intelligence  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a face group analyzer at the specified directory.

## Declaration

```swift
init(workingDirectory: URL) throws
```

## Parameters

- `workingDirectory`: The directory where the analyzer stores its face data and metadata. The directory must already exist.

## Mentioned In

- [Detecting and grouping faces in images](../detecting-and-grouping-faces-in-images.md)

<a id="discussion"></a>

## Discussion

The analyzer loads any existing face data from `workingDirectory` on initialization, so subsequent runs resume from where the previous session ended.
