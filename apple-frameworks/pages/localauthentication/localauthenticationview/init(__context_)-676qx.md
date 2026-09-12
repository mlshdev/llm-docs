> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/localauthenticationview/init(_:context:)-676qx](https://developer.apple.com/documentation/localauthentication/localauthenticationview/init(_:context:)-676qx)

# init(\_:context:)

**Framework:** LocalAuthentication  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a local authentication view with a localizable title and required context.

## Declaration

```swift
@MainActor @preconcurrency init(_ titleKey: LocalizedStringKey, context: LAContext) where Label == Text
```

## Parameters

- `titleKey`: A localized title that displays below the authentication view.
- `context`: A context used to evaluate authentication policies.

## See Also

### Authenticating with a context you supply

- [init(\_:context:)](init%28__context_%29-9xeoo.md): Creates a local authentication view with a required context.
- [init(context:label:)](init%28context_label_%29.md): Creates a local authentication view with a label and required context.
