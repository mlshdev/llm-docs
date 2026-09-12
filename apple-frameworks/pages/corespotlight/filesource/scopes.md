> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/filesource/scopes](https://developer.apple.com/documentation/corespotlight/filesource/scopes)

# scopes

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The directories to search.

## Declaration

```swift
var scopes: [URL]
```

<a id="discussion"></a>

## Discussion

Specify one or more directory URLs to scope the search to those directories and their subdirectories. The default value of this property is an empty array, which searches all indexed volumes.

## See Also

### Configuring the search options

- [fetchAttributes](fetchattributes.md): The attributes to fetch for each file or directory and provide to the model.
- [maximumResultCount](maximumresultcount.md): The maximum number of results to retrieve from this source.
