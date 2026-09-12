> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/decodingerror/context/init(codingpath:debugdescription:underlyingerror:)](https://developer.apple.com/documentation/swift/decodingerror/context/init(codingpath:debugdescription:underlyingerror:))

# init(codingPath:debugDescription:underlyingError:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new context with the given path of coding keys and a description of what went wrong.

## Declaration

```swift
init(codingPath: [any CodingKey], debugDescription: String, underlyingError: (any Error)? = nil)
```

## Parameters

- `codingPath`: The path of coding keys taken to get to the point of the failing decode call.
- `debugDescription`: A description of what went wrong, for debugging purposes.
- `underlyingError`: The underlying error which caused this error, if any.
