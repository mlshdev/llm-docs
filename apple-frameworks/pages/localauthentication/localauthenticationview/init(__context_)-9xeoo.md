> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/localauthenticationview/init(_:context:)-9xeoo](https://developer.apple.com/documentation/localauthentication/localauthenticationview/init(_:context:)-9xeoo)

# init(\_:context:)

**Framework:** LocalAuthentication  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a local authentication view with a required context.

## Declaration

```swift
@MainActor @preconcurrency init<S>(_ title: S, context: LAContext) where Label == Text, S : StringProtocol
```

## Parameters

- `title`: A title that displays below the authentication view.
- `context`: A context used to evaluate authentication policies.

## See Also

### Authenticating with a context you supply

- [init(context:label:)](init%28context_label_%29.md): Creates a local authentication view with a label and required context.
- [init(\_:context:)](init%28__context_%29-676qx.md): Creates a local authentication view with a localizable title and required context.
