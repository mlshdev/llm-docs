> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorization/scope/init(rawvalue:)

# init(rawValue:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a scope from the given string.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: The name of the scope.

<a id="Discussion"></a>

## Discussion

Typically you use one of the predefined scopes, like [email](email.md), instead of initializing one from a string.

## See Also

### Creating a Scope

- [init(\_:)](init%28__%29.md): Creates a scope from the given string.
