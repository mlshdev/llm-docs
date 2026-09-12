> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/appimpression/endview()](https://developer.apple.com/documentation/adattributionkit/appimpression/endview())

# endView()

**Framework:** AdAttributionKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Ends the view-through impression when the ad content corresponding to the impression disappears.

## Declaration

```swift
func endView() async throws
```

<a id="discussion"></a>

## Discussion

End the view-through impression, as the following example shows:

```swift
   func handleAdDisappeared(impression: AppImpression) async {
       do {
           try await impression.endView()
       }
       catch {
           print("Failed to end view-through impression: \(error).")
       }
   }    
```

## See Also

### Displaying view-through ads

- [beginView()](beginview%28%29.md): Begins recording a view-through impression when ad content corresponding to the impression becomes visible.
- [handleView()](handleview%28%29.md): Handles a view through ad impression.
