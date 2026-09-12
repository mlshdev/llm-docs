> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/toolexpectation/partiallygenerated](https://developer.apple.com/documentation/evaluations/toolexpectation/partiallygenerated)

# ToolExpectation.PartiallyGenerated

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A partially generated form of a tool expectation.

## Declaration

```swift
nonisolated enum PartiallyGenerated
```

## Topics

### Enumeration Cases

- [ToolExpectation.PartiallyGenerated.anyOrder(expectations:)](partiallygenerated/anyorder%28expectations_%29.md): A partially generated group of tool expectations that can match in any order.
- [ToolExpectation.PartiallyGenerated.expectation(name:arguments:)](partiallygenerated/expectation%28name_arguments_%29.md): A partially generated single tool expectation with an optional name and arguments.

### Initializers

- [init(\_:)](partiallygenerated/init%28__%29.md): Creates a partial tool expectation from the given generated content.

## Relationships

### Conforms To

- [ConvertibleFromGeneratedContent](../../foundationmodels/convertiblefromgeneratedcontent.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
