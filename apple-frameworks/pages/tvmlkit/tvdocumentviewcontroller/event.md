> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvdocumentviewcontroller/event](https://developer.apple.com/documentation/tvmlkit/tvdocumentviewcontroller/event)

# TVDocumentViewController.Event (Swift)

**Framework:** TVMLKit  
**Kind:** Structure  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

Events that can be triggered on the document view controller.

> Please use SwiftUI or UIKit

## Declaration

```swift
struct Event
```

## Topics

### Initializers for Document View Controller Events

- [init(\_:)](event/init%28__%29.md): Deprecated. Create a new document view controller event based on a string value.
- [init(rawValue:)](event/init%28rawvalue_%29.md): Deprecated. Create an instance of a new document view controller event based on a string value.

### Event Types

- [appear](event/appear.md): Deprecated. An event that signals when the document appears.
- [disappear](event/disappear.md): Deprecated. An event that signals when the document disappears.
- [highlight](event/highlight.md): Deprecated. An event that signals when the document is highlighted.
- [holdSelect](event/holdselect.md): Deprecated. An event that signals when the document is held down and selected.
- [load](event/load.md): Deprecated. An event that signals when the document is loaded.
- [play](event/play.md): Deprecated. An event that signals when the document is played.
- [select](event/select.md): Deprecated. An event that signals when the document is selected.
- [unload](event/unload.md): Deprecated. An event that signals when the document is unloaded.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# TVDocumentEvent (Objective-C)

**Framework:** TVMLKit  
**Kind:** Type Alias  
**Availability:** tvOS 13.0+ (deprecated in 18.0)

Events that can be triggered on the document view controller.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
typedef NSString * TVDocumentEvent;
```

## Topics

### Event Types

- [TVDocumentEventAppear](event/appear.md): Deprecated. An event that signals when the document appears.
- [TVDocumentEventDisappear](event/disappear.md): Deprecated. An event that signals when the document disappears.
- [TVDocumentEventHighlight](event/highlight.md): Deprecated. An event that signals when the document is highlighted.
- [TVDocumentEventHoldSelect](event/holdselect.md): Deprecated. An event that signals when the document is held down and selected.
- [TVDocumentEventLoad](event/load.md): Deprecated. An event that signals when the document is loaded.
- [TVDocumentEventPlay](event/play.md): Deprecated. An event that signals when the document is played.
- [TVDocumentEventSelect](event/select.md): Deprecated. An event that signals when the document is selected.
- [TVDocumentEventUnload](event/unload.md): Deprecated. An event that signals when the document is unloaded.
