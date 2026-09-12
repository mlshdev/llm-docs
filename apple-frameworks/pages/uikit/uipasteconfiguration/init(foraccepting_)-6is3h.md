> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteconfiguration/init(foraccepting:)-6is3h](https://developer.apple.com/documentation/uikit/uipasteconfiguration/init(foraccepting:)-6is3h)

# init(forAccepting:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new paste configuration with the UTIs declared as supported by a specified class.

## Declaration

```swift
convenience init(forAccepting aClass: any NSItemProviderReading.Type)
```

## Parameters

- `aClass`: A class conforming to the [NSItemProviderReading](../../foundation/nsitemproviderreading.md) protocol.

<a id="return-value"></a>

## Return Value

A paste configuration initialized with acceptable uniform type identifiers (UTIs) supported by the specified class.

<a id="Discussion"></a>

## Discussion

When you use this initializer, the property [readableTypeIdentifiersForItemProvider](../../foundation/nsitemproviderreading/readabletypeidentifiersforitemprovider.md), implemented on `aClass`, is used to determine the acceptable UTIs.

## See Also

### Initializing a paste configuration

- [init()](init%28%29.md): Initializes a new paste configuration.
- [init(acceptableTypeIdentifiers:)](init%28acceptabletypeidentifiers_%29.md): Initializes a new paste configuration with a specified array of acceptable UTIs.
- [init(forAccepting:)](init%28foraccepting_%29-84r2r.md)

# initWithTypeIdentifiersForAcceptingClass: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new paste configuration with the UTIs declared as supported by a specified class.

## Declaration

```objectivec
- (instancetype) initWithTypeIdentifiersForAcceptingClass:(Class<NSItemProviderReading> *) aClass;
```

## Parameters

- `aClass`: A class conforming to the [NSItemProviderReading](../../foundation/nsitemproviderreading.md) protocol.

<a id="return-value"></a>

## Return Value

A paste configuration initialized with acceptable uniform type identifiers (UTIs) supported by the specified class.

<a id="Discussion"></a>

## Discussion

When you use this initializer, the property [readableTypeIdentifiersForItemProvider](../../foundation/nsitemproviderreading/readabletypeidentifiersforitemprovider.md), implemented on `aClass`, is used to determine the acceptable UTIs.

## See Also

### Initializing a paste configuration

- [init](init%28%29.md): Initializes a new paste configuration.
- [initWithAcceptableTypeIdentifiers:](init%28acceptabletypeidentifiers_%29.md): Initializes a new paste configuration with a specified array of acceptable UTIs.
