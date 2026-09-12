> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelasset/metadata-swift.struct/creatordefinedmetadata](https://developer.apple.com/documentation/coreai/aimodelasset/metadata-swift.struct/creatordefinedmetadata)

# creatorDefinedMetadata

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The custom key-value pairs defined by the model’s creator.

## Declaration

```swift
var creatorDefinedMetadata: [String : AIModelAsset.Metadata.CreatorDefinedValue] { get set }
```

<a id="discussion"></a>

## Discussion

Returns an empty dictionary if the model has no creator-defined metadata.

## See Also

### Accessing creator-defined metadata

- [subscript(\_:\_:)](subscript%28____%29-44ov4.md): Accesses a custom metadata string value for the specified key.
- [subscript(\_:\_:)](subscript%28____%29-50v52.md): Accesses a custom metadata Boolean value for the specified key.
- [subscript(\_:\_:)](subscript%28____%29-5o1kb.md): Accesses a custom metadata array value for the specified key.
- [subscript(\_:\_:)](subscript%28____%29-5se5j.md): Accesses a custom metadata dictionary value for the specified key.
- [subscript(\_:\_:)](subscript%28____%29-6bxrd.md): Accesses a custom metadata number value for the specified key.
- [subscript(\_:\_:)](subscript%28____%29-9hpy0.md): Accesses a custom metadata integer value for the specified key.
