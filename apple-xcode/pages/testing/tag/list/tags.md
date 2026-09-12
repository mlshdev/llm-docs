> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/tag/list/tags](https://developer.apple.com/documentation/testing/tag/list/tags)

# tags

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

The list of tags contained in this instance.

## Declaration

```swift
var tags: [Tag]
```

<a id="discussion"></a>

## Discussion

This preserves the list of the tags exactly as they were originally specified, in their original order, including duplicate entries. To access the complete, unique set of tags applied to a [Test](../../test.md), see [tags](../../test/tags.md).
