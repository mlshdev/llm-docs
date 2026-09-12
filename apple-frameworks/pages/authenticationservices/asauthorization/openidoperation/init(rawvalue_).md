> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorization/openidoperation/init(rawvalue:)](https://developer.apple.com/documentation/authenticationservices/asauthorization/openidoperation/init(rawvalue:))

# init(rawValue:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an operation from the given string.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: The name of the operation.

<a id="Discussion"></a>

## Discussion

Typically you use one of the predefined operations, like [operationLogin](operationlogin.md), instead of initializing one from a string.

## See Also

### Creating an Operation

- [init(\_:)](init%28__%29.md): Creates an operation from the given string.
