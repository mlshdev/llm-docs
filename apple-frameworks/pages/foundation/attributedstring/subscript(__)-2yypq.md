> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/subscript(_:)-2yypq](https://developer.apple.com/documentation/foundation/attributedstring/subscript(_:)-2yypq)

# subscript(\_:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Obtain the discontiguous substring of a selection.

## Declaration

```swift
subscript(selection: AttributedTextSelection) -> DiscontiguousAttributedSubstring { get }
```

<a id="overview"></a>

## Overview

In the case of an insertion point, this substring is empty. Otherwise, the substring contains all selected characters.
