> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument](https://developer.apple.com/documentation/assignables/assignabledocument)

# AssignableDocument

**Framework:** Assignables  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

An assignable document is an augmented PDF that allows teachers to mark up the PDF with the intention of students taking the assessment.

## Declaration

```swift
struct AssignableDocument
```

<a id="overview"></a>

## Overview

The document has several parts, which includes the ability to modify the PDF, annotate the PDF, and define question regions in the PDF.

To add a question to this assignable, you can use [appendQuestion(pageID:rect:maxScore:)](assignabledocument/appendquestion%28pageid_rect_maxscore_%29.md) which will take care of associating a box to a page and adding a question connected to that box to the document.

This document is fully mergeable, which means that any copies of this document that are independently mutated can be merged into a determinisitic resulting document. You can merge copies of this document into this one using [merge(\_:)](assignabledocument/merge%28__%29.md). You can also merge individual parts of copies of this document into this one with [merge(partData:into:)](assignabledocument/merge%28partdata_into_%29.md). For example, if deviceA has documentA and deviceB has documentB, which is a copy of documentA. When a user changes a question in documentB on deviceB, deviceB can export that part’s data and send it to deviceA to be merged back into documentA.

You can create as many of these objects as you have memory for. This type assumes single-threaded access.

## Topics

### Creating an assignable document

- [init(pdfURL:id:)](assignabledocument/init%28pdfurl_id_%29.md): Initializes a new assessment document that is based on the PDF located at the provided URL. If the file located at the URL provided cannot be accessed, this initializer throws.
- [init(id:partData:)](assignabledocument/init%28id_partdata_%29-8gf6g.md): Construct an instance of this object with the parts data passed in.
- [MergeablePartData](mergeablepartdata.md)
- [init(id:partData:)](assignabledocument/init%28id_partdata_%29-4am19.md): Deprecated. Construct an instance of this object with the parts data passed in.
- [init(pdfURL:authors:id:)](assignabledocument/init%28pdfurl_authors_id_%29.md): Deprecated. Initializes a new assessment document that is based on the PDF located at the provided URL. If the file located at the URL provided cannot be accessed, this initializer throws.

### Inspecting an assignable document

- [AssignableDocument.ID](assignabledocument/id-swift.typealias.md): A type representing the stable identity of this document.
- [id](assignabledocument/id-swift.property.md): The stable identity of this document.
- [isMultiPageDocument](assignabledocument/ismultipagedocument.md): `true`, if this document has more than one page; `false`, otherwise.
- [isPartial](assignabledocument/ispartial.md): Denotes whether or not this document is a partial one.
- [AssignableDocument.PartIDs](assignabledocument/partids-swift.enum.md): An enumeration containing the identities of parts managed by this view.
- [partIDs](assignabledocument/partids-swift.property.md): Returns a collection of identifiers reflecting the manifest of parts available in the document.
- [AssignableDocument.Question](assignabledocument/question.md): A question in the assignable document.
- [AssignableDocument.QuestionBox](assignabledocument/questionbox.md): A box on a page for a question.
- [questions](assignabledocument/questions.md): A collection of questions defined for this assignable.
- [AssignableDocument.Element](assignabledocument/element.md): The type for elements of this document. An element is a component of the document such as a page or question.
- [pagesDebugDescription](assignabledocument/pagesdebugdescription.md)
- [AssignableDocument.Error](assignabledocument/error.md): Errors for this document type.

### Getting and setting the questions

- [appendQuestion(pageID:rect:maxScore:)](assignabledocument/appendquestion%28pageid_rect_maxscore_%29.md): Creates a new question and appends it to the document.
- [questions(on:)](assignabledocument/questions%28on_%29.md): Find questions that exist on the specified page.
- [removeQuestion(\_:)](assignabledocument/removequestion%28__%29.md): Deprecated. Removes a question and its boxes from the document.

### Computing the max score

- [computeMaxScore(defaultQuestionMaxScore:)](assignabledocument/computemaxscore%28defaultquestionmaxscore_%29.md): Computes the maximum possible score for this `AssignableDocument` as defined by each individual question’s `maxScore`.

### Getting the authors

- [authors](assignabledocument/authors.md): The set of identities of users that created or modified this assignable. Treated as a set.

### Getting the configuration

- [AssignableDocument.Configuration](assignabledocument/configuration-swift.typealias.md): The configuration for an assessment which contains options for display of marks and their point values.
- [configuration](assignabledocument/configuration-swift.property.md): The configuration of this assessment which contains options for display of marks and their point values.
- [AssignableDocument.CorrectMarkType](assignabledocument/correctmarktype.md): The glyph to use that represents a correct mark.

### Merging the parts

- [merge(\_:)](assignabledocument/merge%28__%29.md): Merge another object of this type into this object.
- [merge(partData:into:)](assignabledocument/merge%28partdata_into_%29.md): Merges an individual part into the specified part of this object.
- [merge(other:)](assignabledocument/merge%28other_%29.md): Deprecated. Merge another object of this type into this object.
- [merge(partID:partDataURL:)](assignabledocument/merge%28partid_partdataurl_%29.md): Deprecated. Merges an individual part’s data into the specified part of this object.

### Producing thumbnails

- [questionThumbnails(visibleParts:)](assignabledocument/questionthumbnails%28visibleparts_%29.md): Produces thumbnails of question regions within the document.

### Making the parts

- [makePart(for:)](assignabledocument/makepart%28for_%29.md): Creates data for the part with the given identifier.

### Exporting the parts

- [exportBaseAsPDF()](assignabledocument/exportbaseaspdf%28%29.md): Exports the base part of this document to a `PDFDocument`.
- [exportParts(identifiedBy:)](assignabledocument/exportparts%28identifiedby_%29.md): Given a set of part identifiers, return a dictionary of part ID to part data.
- [export(partIDs:)](assignabledocument/export%28partids_%29.md): Deprecated. Given a set of part identifiers, return a dictionary of part ID to data objects for the requested layers.

### Accessing documents

- [subscript(\_:)](assignabledocument/subscript%28__%29-8ou91.md): Access the page that the identifier denotes, if any.
- [subscript(\_:)](assignabledocument/subscript%28__%29-68enn.md): Deprecated. Access the question box that the identifier denotes, if any.
- [subscript(\_:)](assignabledocument/subscript%28__%29-7fijz.md): Deprecated. Access the question that the identifier denotes, if any.

### Comparing assignable documents

- [==(\_:\_:)](assignabledocument/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Hashing the assignable document

- [hash(into:)](assignabledocument/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Default Implementations

- [Assignable Implementations](assignabledocument/assignable-implementations.md)
- [MergeableDocument Implementations](assignabledocument/mergeabledocument-implementations.md)

## Relationships

### Conforms To

- [Assignable](assignable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [MergeableDocument](mergeabledocument.md)
- [MergeablePartsContainer](mergeablepartscontainer.md)

## See Also

### Assignable document

- [AssignedWorkDocument](assignedworkdocument.md): An assigned work document is a document that contains taker and scorer markup specific to a taker. It also contains a copy of the assignable document upon which it is based.
- [Assignable](assignable.md): Documents conforming to this protocol can be assigned to a user.
