> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/appimpression/beginview()](https://developer.apple.com/documentation/adattributionkit/appimpression/beginview())

# beginView()

**Framework:** AdAttributionKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Begins recording a view-through impression when ad content corresponding to the impression becomes visible.

## Declaration

```swift
func beginView() async throws
```

<a id="discussion"></a>

## Discussion

Begin the view impression process by calling [beginView()](beginview%28%29.md), as  the following example shows:

```swift
   func handleAdAppeared(impression: AppImpression) async {
       do {
           try await impression.beginView()
       }
       catch {
           print("Failed to begin view-through impression: \(error).")
       }
   }
```

## See Also

### Displaying view-through ads

- [endView()](endview%28%29.md): Ends the view-through impression when the ad content corresponding to the impression disappears.
- [handleView()](handleview%28%29.md): Handles a view through ad impression.
