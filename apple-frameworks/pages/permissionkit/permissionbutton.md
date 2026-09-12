> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionbutton](https://developer.apple.com/documentation/permissionkit/permissionbutton)

# PermissionButton

**Framework:** PermissionKit  
**Kind:** Structure  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

A button that presents a system UI to a parent or guardian to ask for an exception to a child’s communication limits.

## Declaration

```swift
@MainActor @preconcurrency struct PermissionButton<Topic, Label> where Topic : QuestionTopic, Label : View
```

## Topics

### Creating buttons

- [init(question:label:)](permissionbutton/init%28question_label_%29-25jfa.md): Creates a button that requests permission from parents or guardians.
- [init(question:label:)](permissionbutton/init%28question_label_%29-8291n.md): Creates a button that requests permission from parents or guardians to continue using your app after a significant update.

### Accessing properties

- [question](permissionbutton/question.md): The question to ask a parent or guardian about making an exception to their child’s communication limits.
- [body](permissionbutton/body.md): The body of the view.

### Initializers

- [init(question:permissionFlow:onPermissionResult:label:)](permissionbutton/init%28question_permissionflow_onpermissionresult_label_%29.md): Creates a button that requests permission from parents or guardians, presenting a specific permission flow and reporting the outcome to a completion handler.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
