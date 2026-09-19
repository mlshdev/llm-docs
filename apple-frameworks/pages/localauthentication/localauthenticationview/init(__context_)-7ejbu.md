> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/localauthenticationview/init(_:context:)-7ejbu

# init(\_:context:)

**Framework:** LocalAuthentication  
**Kind:** Initializer  
**Availability:** macOS 26.0+

Creates a new view and pairs it with the specified authentication context.

## Declaration

```swift
@MainActor @preconcurrency init(_ title: LocalizedStringResource, context: LAContext) where Label == Text
```

## Parameters

- `title`: Title shown below the authentication view.
- `context`: `LAContext`  instance to control the authentication.

<a id="discussion"></a>

## Discussion

The authentication is controlled using the provided authentication context. When `evaluatePolicy` or `evaluateAccessControl` is called on this context, the UI will be presented using this view rather than using the standard authentication alert.
