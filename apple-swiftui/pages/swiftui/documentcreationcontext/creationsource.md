> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/documentcreationcontext/creationsource](https://developer.apple.com/documentation/swiftui/documentcreationcontext/creationsource)

# creationSource

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The source associated with the button that created this document.

## Declaration

```swift
var creationSource: DocumentCreationSource? { get }
```

<a id="discussion"></a>

## Discussion

On iOS, you can specify the source using a [NewDocumentButton](../newdocumentbutton.md) in [DocumentGroupLaunchScene](../documentgrouplaunchscene.md). On macOS, this is always `nil`.
