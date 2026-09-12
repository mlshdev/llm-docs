> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/localauthenticationview/init(reason:context:result:label:)](https://developer.apple.com/documentation/localauthentication/localauthenticationview/init(reason:context:result:label:))

# init(reason:context:result:label:)

**Framework:** LocalAuthentication  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a local authentication view.

## Declaration

```swift
@MainActor @preconcurrency init(reason: Text, context: LAContext? = nil, result: @escaping (Result<Void, any Error>) -> Void, @ViewBuilder label: () -> Label)
```

## Parameters

- `reason`: A localized reason that describes why your app presents an authentication prompt to the user.
- `context`: A context used to evaluate authentication policies. If `nil`, the system creates one.
- `result`: A closure to call when the authentication succeeds or fails.

  - **`result`**: A [Result](https://developer.apple.com/documentation/swift/result) instance that indicates success or failure with a reason.
- `label`: A label that displays below the authentication view.

## See Also

### Authenticating with an implicit context

- [init(\_:reason:context:result:)](init%28__reason_context_result_%29-8ubaq.md): Creates a local authentication view with a title.
- [init(\_:reason:context:result:)](init%28__reason_context_result_%29-917ds.md): Creates a local authentication view with a localizable title.
- [init(\_:reason:context:result:)](init%28__reason_context_result_%29-4pkpi.md): Creates a local authentication view with a title text view.
