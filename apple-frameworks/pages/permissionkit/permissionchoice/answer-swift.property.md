> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/permissionkit/permissionchoice/answer-swift.property

# answer

**Framework:** PermissionKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The type of answer this choice represents.

## Declaration

```swift
var answer: PermissionChoice.Answer { get set }
```

<a id="discussion"></a>

## Discussion

The system uses this value to style how the choice appears to the person making the decision.

## See Also

### Accessing answers

- [PermissionChoice.Answer](answer-swift.enum.md): An answer to the permission request.
- [approve](approve.md): The system-preferred choice to approve a permission request.
- [decline](decline.md): The system-preferred choice to decline a permission request.
