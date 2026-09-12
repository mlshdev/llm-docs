> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteconfiguration/addtypeidentifiers(foraccepting:)-8af7o](https://developer.apple.com/documentation/uikit/uipasteconfiguration/addtypeidentifiers(foraccepting:)-8af7o)

# addTypeIdentifiers(forAccepting:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS

## Declaration

```swift
@MainActor @preconcurrency func addTypeIdentifiers<T>(forAccepting aClass: T.Type) where T : _ObjectiveCBridgeable, T._ObjectiveCType : NSItemProviderReading
```

## See Also

### Adding acceptable type identifiers

- [addAcceptableTypeIdentifiers(\_:)](addacceptabletypeidentifiers%28__%29.md): Adds an array of UTI strings to a paste configuration, increasing the variety of types the paste configuration accepts.
- [addTypeIdentifiers(forAccepting:)](addtypeidentifiers%28foraccepting_%29-4fvd6.md): Expands the array of accepted UTIs for a paste configuration, based on those declared as supported by a specified class.
