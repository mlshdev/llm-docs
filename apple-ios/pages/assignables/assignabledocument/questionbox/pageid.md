> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/assignabledocument/questionbox/pageid

# pageID

**Framework:** Assignables  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

A read-only property providing the identifier of the page that owns this question box. If the box is not yet assigned to a page, this value is `nil`.

## Declaration

```swift
var pageID: AssignableDocument.Page.ID? { get }
```
