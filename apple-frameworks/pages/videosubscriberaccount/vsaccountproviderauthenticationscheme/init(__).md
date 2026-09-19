> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videosubscriberaccount/vsaccountproviderauthenticationscheme/init(_:)

# init(\_:)

**Framework:** Video Subscriber Account  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · macOS · tvOS · visionOS

Creates a new authentication scheme with the specified string.

## Declaration

```swift
init(_ rawValue: String)
```

## Parameters

- `rawValue`: The string to use to create the authentication scheme.

<a id="Discussion"></a>

## Discussion

This initializer returns `nil` if the string value you specify doesn’t correspond to a valid authentication scheme type.

## See Also

### Creating an Authentication Scheme

- [init(rawValue:)](init%28rawvalue_%29.md): Creates a new authentication scheme with the specified raw value.
