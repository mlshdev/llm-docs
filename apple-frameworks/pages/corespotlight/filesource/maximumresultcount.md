> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/filesource/maximumresultcount](https://developer.apple.com/documentation/corespotlight/filesource/maximumresultcount)

# maximumResultCount

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The maximum number of results to retrieve from this source.

## Declaration

```swift
var maximumResultCount: Int?
```

<a id="discussion"></a>

## Discussion

Use this property to limit the number of results the Spotlight search tool returns to the model. If you specify `nil`, the tool returns all results that match the model’s query. This maximum applies only to the current source, and doesn’t include results from other sources, which have their own maximum values. The default value of this property is `nil`.

## See Also

### Configuring the search options

- [fetchAttributes](fetchattributes.md): The attributes to fetch for each file or directory and provide to the model.
- [scopes](scopes.md): The directories to search.
