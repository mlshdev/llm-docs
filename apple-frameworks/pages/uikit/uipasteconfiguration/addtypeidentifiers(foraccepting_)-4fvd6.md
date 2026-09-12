> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteconfiguration/addtypeidentifiers(foraccepting:)-4fvd6](https://developer.apple.com/documentation/uikit/uipasteconfiguration/addtypeidentifiers(foraccepting:)-4fvd6)

# addTypeIdentifiers(forAccepting:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Expands the array of accepted UTIs for a paste configuration, based on those declared as supported by a specified class.

## Declaration

```swift
func addTypeIdentifiers(forAccepting aClass: any NSItemProviderReading.Type)
```

## Parameters

- `aClass`: A class conforming to the [NSItemProviderReading](../../foundation/nsitemproviderreading.md) protocol.

<a id="Discussion"></a>

## Discussion

This method uses the property [readableTypeIdentifiersForItemProvider](../../foundation/nsitemproviderreading/readabletypeidentifiersforitemprovider.md), implemented on `aClass`, to determine the uniform type identifiers (UTIs) to add to the paste configuration’s [acceptableTypeIdentifiers](acceptabletypeidentifiers.md) array.

## See Also

### Adding acceptable type identifiers

- [addAcceptableTypeIdentifiers(\_:)](addacceptabletypeidentifiers%28__%29.md): Adds an array of UTI strings to a paste configuration, increasing the variety of types the paste configuration accepts.
- [addTypeIdentifiers(forAccepting:)](addtypeidentifiers%28foraccepting_%29-8af7o.md)

# addTypeIdentifiersForAcceptingClass: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Expands the array of accepted UTIs for a paste configuration, based on those declared as supported by a specified class.

## Declaration

```objectivec
- (void) addTypeIdentifiersForAcceptingClass:(Class<NSItemProviderReading> *) aClass;
```

## Parameters

- `aClass`: A class conforming to the [NSItemProviderReading](../../foundation/nsitemproviderreading.md) protocol.

<a id="Discussion"></a>

## Discussion

This method uses the property [readableTypeIdentifiersForItemProvider](../../foundation/nsitemproviderreading/readabletypeidentifiersforitemprovider.md), implemented on `aClass`, to determine the uniform type identifiers (UTIs) to add to the paste configuration’s [acceptableTypeIdentifiers](acceptabletypeidentifiers.md) array.

## See Also

### Adding acceptable type identifiers

- [addAcceptableTypeIdentifiers:](addacceptabletypeidentifiers%28__%29.md): Adds an array of UTI strings to a paste configuration, increasing the variety of types the paste configuration accepts.
