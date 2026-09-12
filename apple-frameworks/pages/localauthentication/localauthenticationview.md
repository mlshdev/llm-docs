> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/localauthenticationview](https://developer.apple.com/documentation/localauthentication/localauthenticationview)

# LocalAuthenticationView

**Framework:** LocalAuthentication  
**Kind:** Structure  
**Availability:** macOS 13.0+

A SwiftUI view that displays an authentication interface.

## Declaration

```swift
@MainActor @preconcurrency struct LocalAuthenticationView<Label> where Label : View
```

<a id="overview"></a>

## Overview

Use a [LocalAuthenticationView](localauthenticationview.md) to display a view that prompts users to authenticate with the app. The view visually represents the state of an [LAPolicy](lapolicy.md) evaluation from the [Local Authentication](../localauthentication.md) framework.

The following shows a [LocalAuthenticationView](localauthenticationview.md) in a Mac app with an implicit [LAContext](lacontext.md) instance:

```swift
var body: some View {
    LocalAuthenticationView(
        "Continue with Touch ID",
        reason: Text("Access sandcastle competition designs")
    ) { result in
        switch result {
        case .success:
            print("Authorized")
        case .failure(let error):
            print("Authorization failed: \(error)")
        }
    }
    .controlSize(.large)
}
```

If your app’s authorization flow reuses an existing [LAContext](lacontext.md), pass it as part of initializing a [LocalAuthenticationView](localauthenticationview.md) and call its [evaluatePolicy(\_:localizedReason:reply:)](lacontext/evaluatepolicy%28__localizedreason_reply_%29.md) method after the view appears.

## Topics

### Authenticating with an implicit context

- [init(reason:context:result:label:)](localauthenticationview/init%28reason_context_result_label_%29.md): Creates a local authentication view.
- [init(\_:reason:context:result:)](localauthenticationview/init%28__reason_context_result_%29-8ubaq.md): Creates a local authentication view with a title.
- [init(\_:reason:context:result:)](localauthenticationview/init%28__reason_context_result_%29-917ds.md): Creates a local authentication view with a localizable title.
- [init(\_:reason:context:result:)](localauthenticationview/init%28__reason_context_result_%29-4pkpi.md): Creates a local authentication view with a title text view.

### Authenticating with a context you supply

- [init(\_:context:)](localauthenticationview/init%28__context_%29-9xeoo.md): Creates a local authentication view with a required context.
- [init(context:label:)](localauthenticationview/init%28context_label_%29.md): Creates a local authentication view with a label and required context.
- [init(\_:context:)](localauthenticationview/init%28__context_%29-676qx.md): Creates a local authentication view with a localizable title and required context.

### Initializers

- [init(\_:context:)](localauthenticationview/init%28__context_%29-7ejbu.md): Creates a new view and pairs it with the specified authentication context.
- [init(\_:reason:context:result:)](localauthenticationview/init%28__reason_context_result_%29-88u6u.md): Creates a new `LocalAuthenticationView`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
