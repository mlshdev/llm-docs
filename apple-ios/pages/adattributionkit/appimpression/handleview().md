> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/appimpression/handleview()](https://developer.apple.com/documentation/adattributionkit/appimpression/handleview())

# handleView()

**Framework:** AdAttributionKit  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

Handles a view through ad impression.

## Declaration

```swift
func handleView() async throws
```

## Mentioned In

- [Presenting ads in your app](../presenting-ads-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Call this method on the app impression to register a person’s viewing of the ad content.

## See Also

### Displaying view-through ads

- [beginView()](beginview%28%29.md): Begins recording a view-through impression when ad content corresponding to the impression becomes visible.
- [endView()](endview%28%29.md): Ends the view-through impression when the ad content corresponding to the impression disappears.
