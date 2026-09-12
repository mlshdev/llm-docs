> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/verifyidentitywithwalletbutton/init(_:action:)](https://developer.apple.com/documentation/passkit/verifyidentitywithwalletbutton/init(_:action:))

# init(\_:action:)

**Framework:** PassKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Creates a verify identity button that starts the identity authorization flow.

## Declaration

```swift
nonisolated init(_ label: VerifyIdentityWithWalletButtonLabel = .verifyIdentity, action: @escaping () -> Void)
```

## Parameters

- `label`: The button’s label.
- `action`: The action to perform when a person taps the button.

## See Also

### Creating the button

- [init(\_:request:onCompletion:)](init%28__request_oncompletion_%29.md): Conforms when `Fallback` is `EmptyView`. Creates a verify identity button that starts the identity authorization flow, with a completion handler.
- [init(\_:request:onCompletion:fallback:)](init%28__request_oncompletion_fallback_%29.md): Conforms when `Fallback` conforms to `View`. Creates a verify identity button that starts the identity authorization flow, with a fallback view to use if the app can’t start the flow.
