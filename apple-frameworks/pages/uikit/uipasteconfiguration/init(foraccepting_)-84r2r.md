> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteconfiguration/init(foraccepting:)-84r2r](https://developer.apple.com/documentation/uikit/uipasteconfiguration/init(foraccepting:)-84r2r)

# init(forAccepting:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS

## Declaration

```swift
@MainActor @preconcurrency convenience init<T>(forAccepting _: T.Type) where T : _ObjectiveCBridgeable, T._ObjectiveCType : NSItemProviderReading
```

## See Also

### Initializing a paste configuration

- [init()](init%28%29.md): Initializes a new paste configuration.
- [init(acceptableTypeIdentifiers:)](init%28acceptabletypeidentifiers_%29.md): Initializes a new paste configuration with a specified array of acceptable UTIs.
- [init(forAccepting:)](init%28foraccepting_%29-6is3h.md): Initializes a new paste configuration with the UTIs declared as supported by a specified class.
