> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/resourcesimporting/resourcesimportprogress

# resourcesImportProgress

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A value to indicate the extension’s progress as it imports resources.

## Declaration

```swift
var resourcesImportProgress: Progress { get }
```

<a id="discussion"></a>

## Discussion

Update this value in your implementation of [importResources(at:request:)](importresources%28at_request_%29.md) as you process files in the provided directory.
