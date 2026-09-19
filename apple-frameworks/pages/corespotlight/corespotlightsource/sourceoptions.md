> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corespotlight/corespotlightsource/sourceoptions

# sourceOptions

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Options you use to specify access to restricted content.

## Declaration

```swift
var sourceOptions: CSSearchQueryContext.SourceOptions
```

<a id="discussion"></a>

## Discussion

Use this property to specify access to sensitive items like email.

## See Also

### Configuring the search options

- [fetchAttributes](fetchattributes.md): The attributes to fetch for each item and provide to the model.
- [maximumResultCount](maximumresultcount.md): The maximum number of results to retrieve from this source.
