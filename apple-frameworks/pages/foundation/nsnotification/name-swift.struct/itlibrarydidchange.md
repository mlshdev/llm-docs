> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/itlibrarydidchange

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
