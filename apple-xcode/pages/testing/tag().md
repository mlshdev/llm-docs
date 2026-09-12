> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/tag()](https://developer.apple.com/documentation/testing/tag())

# Tag()

**Framework:** Swift Testing  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Declare a tag that can be applied to a test function or test suite.

## Declaration

```swift
@attached(accessor) @attached(peer) macro Tag()
```

## Mentioned In

- [Adding tags to tests](addingtags.md)

<a id="overview"></a>

## Overview

Use this tag with members of the [Tag](tag.md) type declared in an extension to mark them as usable with tests. For more information on declaring tags, see [Adding tags to tests](addingtags.md).

## See Also

### Annotating tests

- [Adding tags to tests](addingtags.md): Use tags to provide semantic information for organization, filtering, and customizing appearances.
- [Adding comments to tests](addingcomments.md): Add comments to provide useful information about tests.
- [Associating bugs with tests](associatingbugs.md): Associate bugs uncovered or verified by tests.
- [Interpreting bug identifiers](bugidentifiers.md): Examine how the testing library interprets bug identifiers provided by developers.
- [bug(\_:\_:)](trait/bug%28____%29.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.
- [bug(\_:id:\_:)](trait/bug%28__id___%29-10yf5.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.
- [bug(\_:id:\_:)](trait/bug%28__id___%29-3vtpl.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.
