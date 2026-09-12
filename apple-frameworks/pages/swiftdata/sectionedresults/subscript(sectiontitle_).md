> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/sectionedresults/subscript(sectiontitle:)](https://developer.apple.com/documentation/swiftdata/sectionedresults/subscript(sectiontitle:))

# subscript(sectionTitle:)

**Framework:** SwiftData  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the section with the given title, or `nil` if no such section exists.

## Declaration

```swift
subscript(sectionTitle title: SectionTitle) -> ResultsSection<Element, SectionTitle>? { get }
```

<a id="overview"></a>

## Overview

> **Complexity**

> O(1)
