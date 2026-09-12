> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/historytoken/storeidentifier](https://developer.apple.com/documentation/swiftdata/historytoken/storeidentifier)

# storeIdentifier

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The on-disk identifier of the data store this token covers.

## Declaration

```swift
var storeIdentifier: String { get }
```

<a id="discussion"></a>

## Discussion

Use with [configurationName(forStoreIdentifier:)](../modelcontainer/configurationname%28forstoreidentifier_%29.md) to map the identifier back to the [ModelConfiguration](../modelconfiguration.md) name.
