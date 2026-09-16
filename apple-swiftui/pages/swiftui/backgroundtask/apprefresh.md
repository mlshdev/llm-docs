> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/backgroundtask/apprefresh

# appRefresh

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** watchOS 9.0+

A task that updates your app’s state in the background.

> Use appRefresh(\_ identifier: String)

## Declaration

```swift
static var appRefresh: BackgroundTask<String?, Void> { get }
```

## See Also

### Deprecated symbols

- [snapshot](snapshot.md): A background task used to update your app’s user interface in preparation for a snapshot.
