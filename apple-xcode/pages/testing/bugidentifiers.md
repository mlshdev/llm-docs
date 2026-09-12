> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/bugidentifiers](https://developer.apple.com/documentation/testing/bugidentifiers)

# Interpreting bug identifiers

**Framework:** Swift Testing  
**Kind:** Article

Examine how the testing library interprets bug identifiers provided by developers.

<a id="Overview"></a>

## Overview

The testing library supports two distinct ways to identify a bug:

1. A URL linking to more information about the bug; and
2. A unique identifier in the bug’s associated bug-tracking system.

> **Note**

> “Bugs” as described in this document may also be referred to as “issues.” To avoid confusion with the [Issue](issue.md) type in the testing library, this document consistently refers to them as “bugs.”

A bug may have both an associated URL *and* an associated unique identifier. It must have at least one or the other in order for the testing library to be able to interpret it correctly.

To create an instance of [Bug](bug.md) with a URL, use the [bug(\_:\_:)](trait/bug%28____%29.md) trait. At compile time, the testing library will validate that the given string can be parsed as a URL according to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt).

To create an instance of [Bug](bug.md) with a bug’s unique identifier, use the [bug(\_:id:\_:)](trait/bug%28__id___%29-10yf5.md) trait. The testing library does not require that a bug’s unique identifier match any particular format, but will interpret unique identifiers starting with `"FB"` as referring to bugs tracked with the [Apple Feedback Assistant](https://feedbackassistant.apple.com). For convenience, you can also directly pass an integer as a bug’s identifier using [bug(\_:id:\_:)](trait/bug%28__id___%29-3vtpl.md).

<a id="Examples"></a>

### Examples

| Trait Function | Inferred Bug-Tracking System |
| --- | --- |
| `.bug(id: 12345)` | None |
| `.bug(id: "12345")` | None |
| `.bug("https://www.example.com?id=12345", id: "12345")` | None |
| `.bug("https://github.com/swiftlang/swift/pull/12345")` | [GitHub Issues for the Swift project](https://github.com/swiftlang/swift/issues) |
| `.bug("https://bugs.webkit.org/show_bug.cgi?id=12345")` | [WebKit Bugzilla](https://bugs.webkit.org/) |
| `.bug(id: "FB12345")` | Apple Feedback Assistant |

## See Also

### Annotating tests

- [Adding tags to tests](addingtags.md): Use tags to provide semantic information for organization, filtering, and customizing appearances.
- [Adding comments to tests](addingcomments.md): Add comments to provide useful information about tests.
- [Associating bugs with tests](associatingbugs.md): Associate bugs uncovered or verified by tests.
- [Tag()](tag%28%29.md): Declare a tag that can be applied to a test function or test suite.
- [bug(\_:\_:)](trait/bug%28____%29.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.
- [bug(\_:id:\_:)](trait/bug%28__id___%29-10yf5.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.
- [bug(\_:id:\_:)](trait/bug%28__id___%29-3vtpl.md): Conforms when `Self` is `Bug`. Constructs a bug to track with a test.
