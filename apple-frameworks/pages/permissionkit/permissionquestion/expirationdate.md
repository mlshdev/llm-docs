> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionquestion/expirationdate](https://developer.apple.com/documentation/permissionkit/permissionquestion/expirationdate)

# expirationDate

**Framework:** PermissionKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The date that this question expires, if any.

## Declaration

```swift
final var expirationDate: Date?
```

<a id="discussion"></a>

## Discussion

Once the date passes, the person that receives the question can no longer respond.

## See Also

### Accessing properties

- [id](id.md): A unique identifier for the question.
- [topic](topic.md): A topic that can be used to interpret a person’s request.
