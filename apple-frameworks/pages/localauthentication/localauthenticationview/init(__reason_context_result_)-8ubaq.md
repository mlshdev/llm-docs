> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/localauthenticationview/init(_:reason:context:result:)-8ubaq](https://developer.apple.com/documentation/localauthentication/localauthenticationview/init(_:reason:context:result:)-8ubaq)

# init(\_:reason:context:result:)

**Framework:** LocalAuthentication  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a local authentication view with a title.

## Declaration

```swift
@MainActor @preconcurrency init<S>(_ title: S, reason: Text, context: LAContext? = nil, result: @escaping (Result<Void, any Error>) -> Void) where Label == Text, S : StringProtocol
```

## Parameters

- `title`: A title that displays below the authentication view.
- `reason`: A localized reason that describes why your app presents an authentication prompt to the user.
- `context`: A context used to evaluate authentication policies. If `nil`, the system creates one.
- `result`: A closure to call when the authentication succeeds or fails.

  - **`result`**: A [Result](https://developer.apple.com/documentation/swift/result) instance that indicates success or failure with a reason.

## See Also

### Authenticating with an implicit context

- [init(reason:context:result:label:)](init%28reason_context_result_label_%29.md): Creates a local authentication view.
- [init(\_:reason:context:result:)](init%28__reason_context_result_%29-917ds.md): Creates a local authentication view with a localizable title.
- [init(\_:reason:context:result:)](init%28__reason_context_result_%29-4pkpi.md): Creates a local authentication view with a title text view.
