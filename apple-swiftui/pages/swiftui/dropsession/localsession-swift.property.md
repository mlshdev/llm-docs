> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropsession/localsession-swift.property](https://developer.apple.com/documentation/swiftui/dropsession/localsession-swift.property)

# localSession

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Provides additional information about a session if it originated within the app.

## Declaration

```swift
var localSession: DropSession.LocalSession?
```

<a id="discussion"></a>

## Discussion

This property is set to `nil` if drag originated outside the app.

## See Also

### Getting drop session details

- [id](id-swift.property.md): The unique identifier of the drop session.
- [DropSession.ID](id-swift.struct.md): The identifier of a drag session.
- [DropSession.LocalSession](localsession-swift.struct.md): Describes the session originated within the app.
- [phase](phase-swift.property.md): The phase of the current drop session.
- [DropSession.Phase](phase-swift.enum.md): The phase of the current drop session.
- [suggestedOperations](suggestedoperations.md): Operations suggested by the drag source.
