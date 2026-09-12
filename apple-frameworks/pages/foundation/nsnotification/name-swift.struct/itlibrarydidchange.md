> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/itlibrarydidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/itlibrarydidchange)

# ITLibraryDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 13.0+

A notification the system posts when a library change occurs.

## Declaration

```swift
static let ITLibraryDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Call [reloadData()](https://developer.apple.com/documentation/ituneslibrary/itlibrary/reloaddata%28%29) to retrieve a new view of the library contents.
