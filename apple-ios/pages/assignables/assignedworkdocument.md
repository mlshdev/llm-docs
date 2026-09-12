> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument](https://developer.apple.com/documentation/assignables/assignedworkdocument)

# AssignedWorkDocument

**Framework:** Assignables  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

An assigned work document is a document that contains taker and scorer markup specific to a taker. It also contains a copy of the assignable document upon which it is based.

## Declaration

```swift
struct AssignedWorkDocument
```

<a id="overview"></a>

## Overview

This document has a collection of [AssignedWorkDocument.ScoreAnnotation](assignedworkdocument/scoreannotation.md) objects that represent marks such as correct and incorrect marks on a page. Score annotations are not automatically associated with a question defined in the `AssignableDocument` that this work document is based on. To determine the score for the work, you use `computeScore`.

You cannot instantiate this document type directly. Instead, you instantiate it by calling [assign(to:)](assignabledocument/assign%28to_%29.md) or `makeAssignedWorkDocument()`.

This document is fully mergeable, which means that any copies of this document that are independently mutated can be merged into a determinisitic resulting document. You can merge copies of this document into this one using [merge(\_:)](assignedworkdocument/merge%28__%29.md). You can also merge individual parts of copies of this document into this one with [merge(partData:into:)](assignedworkdocument/merge%28partdata_into_%29.md). For example, if deviceA has documentA and deviceB has documentB, which is a copy of documentA. When a user changes a question in documentB on deviceB, deviceB can export that part’s data and send it to deviceA to be merged back into documentA.

You can create as many of these objects as you have memory for. This type assumes single-threaded access.

## Topics

### Creating an assigned work document

- [init(id:assignableDocument:partData:)](assignedworkdocument/init%28id_assignabledocument_partdata_%29-8eh38.md): Construct an instance of this object with the parts data passed in.
- [init(id:assignableDocument:partData:)](assignedworkdocument/init%28id_assignabledocument_partdata_%29-54yg5.md): Deprecated. Construct an instance of this object with the parts data passed in.

### Inspecting a work document

- [AssignedWorkDocument.ID](assignedworkdocument/id-swift.typealias.md): A type representing the stable identity of this document.
- [id](assignedworkdocument/id-swift.property.md): The stable identity of this document.
- [isMultiPageDocument](assignedworkdocument/ismultipagedocument.md): `true`, if this document has more than one page; `false`, otherwise.
- [isPartial](assignedworkdocument/ispartial.md): Denotes whether or not this document is a partial one.
- [AssignedWorkDocument.PartIDs](assignedworkdocument/partids-swift.enum.md): An enumeration containing the identities of parts managed by this view.
- [partIDs](assignedworkdocument/partids-swift.property.md): Returns a collection of identifiers reflecting the manifest of parts available in the document.
- [scoreAnnotations](assignedworkdocument/scoreannotations.md): The collection of score annotations for this work document. Treated as a multiset. i.e. The order of the elements doesn’t matter and duplicate values are allowed.
- [scorers](assignedworkdocument/scorers.md): The identities of users scoring this assigned work. Treated as a set.
- [pagesDebugDescription](assignedworkdocument/pagesdebugdescription.md)
- [AssignedWorkDocument.Error](assignedworkdocument/error.md): Errors for this document type.

### Getting the assignable document

- [assignableDocument](assignedworkdocument/assignabledocument.md): The assignable document that this work document is based on.

### Getting the assignees

- [assignees](assignedworkdocument/assignees.md): The identities of takers of this document. Treated as a set.

### Getting the configuration

- [AssignedWorkDocument.Configuration](assignedworkdocument/configuration-swift.typealias.md): The configuration for an assessment taker work which contains an optional manual score for the document.
- [configuration](assignedworkdocument/configuration-swift.property.md): The configuration for a taker work which contains an optional manual score for the document.

### Merging the parts

- [merge(\_:)](assignedworkdocument/merge%28__%29.md): Merge another object of this type into this object.
- [merge(partData:into:)](assignedworkdocument/merge%28partdata_into_%29.md): Merges an individual part into the specified part of this object.
- [merge(other:)](assignedworkdocument/merge%28other_%29.md): Deprecated. Merge another object of this type into this object.
- [merge(partID:partDataURL:)](assignedworkdocument/merge%28partid_partdataurl_%29.md): Deprecated. Merges an individual part’s data into the specified part of this object.

### Producing thumbnails

- [questionThumbnails(visibleParts:)](assignedworkdocument/questionthumbnails%28visibleparts_%29.md): Produces thumbnails of question regions within the document.

### Computing the score

- [computeScore()](assignedworkdocument/computescore%28%29.md): Gathers all of the points based on all the `AssignedWorkDocument.ScoreAnnotation`s in the document and its `kind` property.
- [AssignedWorkDocument.ScoreAnnotation](assignedworkdocument/scoreannotation.md): A score mark on page of the work document.

### Making the parts

- [makePart(for:)](assignedworkdocument/makepart%28for_%29.md): Creates data for the part with the given identifier.

### Exporting the parts

- [exportParts(identifiedBy:)](assignedworkdocument/exportparts%28identifiedby_%29.md): Given a set of part identifiers, return a dictionary of part ID to part data.
- [export(partIDs:)](assignedworkdocument/export%28partids_%29.md): Deprecated. Given a set of part identifiers, return a dictionary of part ID to data objects for the requested parts.

### Comparing work documents

- [==(\_:\_:)](assignedworkdocument/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Hashing the work document

- [hash(into:)](assignedworkdocument/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Accessing work documents

- [subscript(\_:)](assignedworkdocument/subscript%28__%29-4srtw.md): Access the page that the ID points to, if any.
- [subscript(\_:)](assignedworkdocument/subscript%28__%29-5h89c.md): Access the score annotation that the identifier refers to, if any.

### Default Implementations

- [MergeableDocument Implementations](assignedworkdocument/mergeabledocument-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MergeableDocument](mergeabledocument.md)
- [MergeablePartsContainer](mergeablepartscontainer.md)

## See Also

### Assignable document

- [AssignableDocument](assignabledocument.md): An assignable document is an augmented PDF that allows teachers to mark up the PDF with the intention of students taking the assessment.
- [Assignable](assignable.md): Documents conforming to this protocol can be assigned to a user.
