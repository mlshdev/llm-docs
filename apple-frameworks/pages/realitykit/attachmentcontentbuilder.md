> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/attachmentcontentbuilder](https://developer.apple.com/documentation/realitykit/attachmentcontentbuilder)

# AttachmentContentBuilder

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A result builder that creates attachment content from closures.

## Declaration

```swift
@resultBuilder struct AttachmentContentBuilder
```

<a id="overview"></a>

## Overview

The `buildBlock` methods in this type create [AttachmentContent](attachmentcontent.md) instances based on the number and types of sources provided as parameters.

RealityKit calls this builder for you when SwiftUI annotates the `attachment` parameter of some [RealityView](realityview.md) initializers that have the `@AttachmentContentBuilder` annotation.

## Topics

### Type Methods

- [buildBlock()](attachmentcontentbuilder/buildblock%28%29.md): Creates an empty attachment content containing no statements.
- [buildBlock(\_:)](attachmentcontentbuilder/buildblock%28__%29.md): Creates a single content result.
- [buildEither(first:)](attachmentcontentbuilder/buildeither%28first_%29.md): Provides support for “if” statements in multi-statement closures, producing conditional content for the “then” branch.
- [buildEither(second:)](attachmentcontentbuilder/buildeither%28second_%29.md): Provides support for “if-else” statements in multi-statement closures, producing conditional content for the “else” branch.
- [buildExpression(\_:)](attachmentcontentbuilder/buildexpression%28__%29.md): Builds an expression within the builder.
- [buildIf(\_:)](attachmentcontentbuilder/buildif%28__%29.md): Provides support for “if” statements in multi-statement closures, producing an optional view that is visible only when the condition evaluates to `true`.
- [buildLimitedAvailability(\_:)](attachmentcontentbuilder/buildlimitedavailability%28__%29.md): Provides support for “if” statements with `#available()` clauses in multi-statement closures, producing conditional content for the “then” branch, i.e. the conditionally-available branch.

## See Also

### Attachment types

- [AttachmentContent](attachmentcontent.md): A type that provides content for an attachment content builder.
- [TuplePackAttachmentContent](tuplepackattachmentcontent.md)
- [ConditionalAttachmentContent](conditionalattachmentcontent.md)
- [EmptyAttachmentContent](emptyattachmentcontent.md): A attachment content that doesn’t contain any content.
- [TupleAttachmentContent](tupleattachmentcontent.md): Deprecated.
- [AnyAttachmentContent](anyattachmentcontent.md): A type-erased attachment content.
