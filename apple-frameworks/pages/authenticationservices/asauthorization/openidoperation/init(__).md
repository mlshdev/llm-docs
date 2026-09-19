> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorization/openidoperation/init(_:)

# init(\_:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an operation from the given string.

## Declaration

```swift
init(_ rawValue: String)
```

## Parameters

- `rawValue`: The name of the operation.

<a id="Discussion"></a>

## Discussion

Typically you use one of the predefined operations, like [operationLogin](operationlogin.md), instead of initializing one from a string.

## See Also

### Creating an Operation

- [init(rawValue:)](init%28rawvalue_%29.md): Creates an operation from the given string.
