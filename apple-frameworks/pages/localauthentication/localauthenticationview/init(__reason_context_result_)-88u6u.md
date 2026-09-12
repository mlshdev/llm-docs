> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/localauthenticationview/init(_:reason:context:result:)-88u6u](https://developer.apple.com/documentation/localauthentication/localauthenticationview/init(_:reason:context:result:)-88u6u)

# init(\_:reason:context:result:)

**Framework:** LocalAuthentication  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a new `LocalAuthenticationView`.

## Declaration

```swift
@MainActor @preconcurrency init(_ title: LocalizedStringResource, reason: Text, context: LAContext? = nil, result: @escaping (Result<Void, any Error>) -> Void) where Label == Text
```

## Parameters

- `title`: Title shown below the authentication view.
- `reason`: Localized reason used for policy evaluation.
- `context`: `LAContext` instance used for policy evaluation.
- `result`: Result closure used for reporting the result of authentication.

<a id="discussion"></a>

## Discussion

The view takes `LAContext` instance or creates own one if none provided and starts evaluating `deviceOwnerAuthenticationWithBiometricsOrCompanion` policy. The result of authentication is reported back using `result` closure.
