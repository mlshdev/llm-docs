> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/aimodelasset/metadata-swift.struct/author

# author

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The name of the model’s author.

## Declaration

```swift
var author: String { get set }
```

<a id="discussion"></a>

## Discussion

Returns an empty string if the model has no author.

## See Also

### Reading model information

- [description](description.md): A human-readable description of the model.
- [license](license.md): The license text for the model.
- [creationDate](creationdate.md): The model’s creation date.
