> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videosubscriberaccount/vsaccountproviderauthenticationscheme/init(rawvalue:)

# init(rawValue:)

**Framework:** Video Subscriber Account  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · macOS · tvOS · visionOS

Creates a new authentication scheme with the specified raw value.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: The raw value to use to create the authentication scheme.

<a id="Discussion"></a>

## Discussion

This initializer returns `nil` if the raw value you specify doesn’t correspond to a valid authentication scheme type.

## See Also

### Creating an Authentication Scheme

- [init(\_:)](init%28__%29.md): Creates a new authentication scheme with the specified string.
