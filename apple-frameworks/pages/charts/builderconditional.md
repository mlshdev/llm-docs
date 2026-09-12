> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/builderconditional](https://developer.apple.com/documentation/charts/builderconditional)

# BuilderConditional

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A conditional result from a result builder.

## Declaration

```swift
@frozen struct BuilderConditional<TrueContent, FalseContent>
```

<a id="overview"></a>

## Overview

Don’t use this type directly. The result builders defined by the framework, like [ChartContentBuilder](chartcontentbuilder.md) and [AxisContentBuilder](axiscontentbuilder.md), use it as part of the building process.

## Relationships

### Conforms To

- [AxisContent](axiscontent.md)
- [AxisMark](axismark.md)
- [Chart3DContent](chart3dcontent.md)
- [ChartContent](chartcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
