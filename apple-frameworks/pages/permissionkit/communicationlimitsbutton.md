> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationlimitsbutton](https://developer.apple.com/documentation/permissionkit/communicationlimitsbutton)

# CommunicationLimitsButton

**Framework:** PermissionKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A button that presents a system UI to a parent or guardian to ask for an exception to a child’s communication limits.

## Declaration

```swift
@MainActor @preconcurrency struct CommunicationLimitsButton<Label> where Label : View
```

## Topics

### Creating a view

- [init(question:label:)](communicationlimitsbutton/init%28question_label_%29.md): Deprecated. Creates a new instance.
- [body](communicationlimitsbutton/body.md): Deprecated. The body of the view.
- [question](communicationlimitsbutton/question.md): Deprecated. The question to ask a parent or guardian about making an exception to their child’s communication limits.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
