> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorization/scope/init(_:)](https://developer.apple.com/documentation/authenticationservices/asauthorization/scope/init(_:))

# init(\_:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a scope from the given string.

## Declaration

```swift
init(_ rawValue: String)
```

## Parameters

- `rawValue`: The name of the scope.

<a id="Discussion"></a>

## Discussion

Typically you use one of the predefined scopes, like [email](email.md), instead of initializing one from a string.

## See Also

### Creating a Scope

- [init(rawValue:)](init%28rawvalue_%29.md): Creates a scope from the given string.
