> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/localauthenticationview/init(context:label:)](https://developer.apple.com/documentation/localauthentication/localauthenticationview/init(context:label:))

# init(context:label:)

**Framework:** LocalAuthentication  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a local authentication view with a label and required context.

## Declaration

```swift
@MainActor @preconcurrency init(context: LAContext, @ViewBuilder label: () -> Label)
```

## Parameters

- `context`: A context used to evaluate authentication policies.
- `label`: A label that displays below the authentication view.

## See Also

### Authenticating with a context you supply

- [init(\_:context:)](init%28__context_%29-9xeoo.md): Creates a local authentication view with a required context.
- [init(\_:context:)](init%28__context_%29-676qx.md): Creates a local authentication view with a localizable title and required context.
