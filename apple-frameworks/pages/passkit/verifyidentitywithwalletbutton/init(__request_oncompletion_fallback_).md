> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/verifyidentitywithwalletbutton/init(_:request:oncompletion:fallback:)](https://developer.apple.com/documentation/passkit/verifyidentitywithwalletbutton/init(_:request:oncompletion:fallback:))

# init(\_:request:onCompletion:fallback:)

**Framework:** PassKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Creates a verify identity button that starts the identity authorization flow, with a fallback view to use if the app can’t start the flow.

## Declaration

```swift
nonisolated init(_ label: VerifyIdentityWithWalletButtonLabel = .verifyIdentity, request: PKIdentityRequest, onCompletion: @escaping (Result<PKIdentityDocument, any Error>) -> Void, @ViewBuilder fallback: () -> Fallback)
```

## Parameters

- `label`: The button’s label.
- `request`: The identity request to make when a person taps the button.
- `onCompletion`: The completion handler the framework calls when finishing the authorization flow.

  - **`result`**: A result that contains an identity document, if successful; otherwise, an error.
- `fallback`: A view to display if the app can’t perform an identity request.

## See Also

### Creating the button

- [init(\_:action:)](init%28__action_%29.md): Conforms when `Fallback` is `EmptyView`. Creates a verify identity button that starts the identity authorization flow.
- [init(\_:request:onCompletion:)](init%28__request_oncompletion_%29.md): Conforms when `Fallback` is `EmptyView`. Creates a verify identity button that starts the identity authorization flow, with a completion handler.
