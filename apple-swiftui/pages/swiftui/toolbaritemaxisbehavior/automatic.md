> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbaritemaxisbehavior/automatic

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · macOS 27.1+ · tvOS 27.1+ · visionOS 27.1+ · watchOS 27.1+

The automatic axis behavior.

## Declaration

```swift
static let automatic: ToolbarItemAxisBehavior
```

<a id="discussion"></a>

## Discussion

The system infers the supported axes based on the content type of the item. Image items support both axes; text and custom view items support only the horizontal axis.

## See Also

### Getting behavior options

- [horizontalOnly](horizontalonly.md): The item only supports horizontal bars. If an item only supports horizontal bars and no horizontal bars are present, the item is not shown.
- [verticalPreferred](verticalpreferred.md): The item supports both horizontal and vertical bars, and prefers a vertical placement when both horizontal and vertical bars are present.
