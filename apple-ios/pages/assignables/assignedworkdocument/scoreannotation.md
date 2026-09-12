> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/scoreannotation](https://developer.apple.com/documentation/assignables/assignedworkdocument/scoreannotation)

# AssignedWorkDocument.ScoreAnnotation

**Framework:** Assignables  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A score mark on page of the work document.

## Declaration

```swift
struct ScoreAnnotation
```

## Topics

### Creating a score annotation

- [init(id:pageID:location:kind:)](scoreannotation/init%28id_pageid_location_kind_%29.md): Initializes an instance of this object with the given values.

### Inspecting a score annotation

- [AssignedWorkDocument.ScoreAnnotation.ID](scoreannotation/id-swift.typealias.md): A type representing the stable identity of this score annotation.
- [id](scoreannotation/id-swift.property.md): The stable identity of this score annotation.
- [AssignedWorkDocument.ScoreAnnotation.Kind](scoreannotation/kind-swift.enum.md): The kind of a score annotation.
- [kind](scoreannotation/kind-swift.property.md): The kind of score annotation this is. e.g. Incorrect or correct mark.
- [location](scoreannotation/location.md): The location of the score annotation on the associated page.
- [pageID](scoreannotation/pageid.md): The ID of the page this score annotation is for.
- [AssignedWorkDocument.ScoreAnnotation.Document](scoreannotation/document.md): The document type this element is for.

### Comparing score annotations

- [==(\_:\_:)](scoreannotation/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Hashing the score annotation

- [hash(into:)](scoreannotation/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

## Relationships

### Conforms To

- [AssignedWorkDocumentElement](../assignedworkdocumentelement.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DocumentElement](../documentelement.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Computing the score

- [computeScore()](computescore%28%29.md): Gathers all of the points based on all the `AssignedWorkDocument.ScoreAnnotation`s in the document and its `kind` property.
