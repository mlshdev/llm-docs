> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/face/entityid](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/face/entityid)

# entityID

**Framework:** Media Intelligence  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An identifier for the entity this face belongs to.

## Declaration

```swift
let entityID: FaceGroupAnalyzer.Entity.ID?
```

## Mentioned In

- [Detecting and grouping faces in images](../../detecting-and-grouping-faces-in-images.md)

<a id="discussion"></a>

## Discussion

This value is `nil` until you call [update(subprogress:)](../update%28subprogress_%29.md). After clustering runs, every face receives an entity identifier that groups it with other faces of the same person.

## See Also

### Identifying a face

- [id](id-swift.property.md): A unique identifier for the face.
- [assetID](assetid.md): An identifier for the image asset that contains this face.
- [FaceGroupAnalyzer.Face.ID](id-swift.struct.md): A unique identifier for a detected face.
