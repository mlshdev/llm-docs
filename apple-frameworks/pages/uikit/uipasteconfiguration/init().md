> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteconfiguration/init()](https://developer.apple.com/documentation/uikit/uipasteconfiguration/init())

# init() (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new paste configuration.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

A paste configuration that has no acceptable uniform type identifiers (UTIs).

<a id="Discussion"></a>

## Discussion

Use this initializer to create a paste configuration that has an empty [acceptableTypeIdentifiers](acceptabletypeidentifiers.md) array. After you create the paste configuration, you can use its [addAcceptableTypeIdentifiers(\_:)](addacceptabletypeidentifiers%28__%29.md) method or [addTypeIdentifiers(forAccepting:)](addtypeidentifiers%28foraccepting_%29-4fvd6.md) method to add acceptable UTIs to the array.

## See Also

### Initializing a paste configuration

- [init(acceptableTypeIdentifiers:)](init%28acceptabletypeidentifiers_%29.md): Initializes a new paste configuration with a specified array of acceptable UTIs.
- [init(forAccepting:)](init%28foraccepting_%29-6is3h.md): Initializes a new paste configuration with the UTIs declared as supported by a specified class.
- [init(forAccepting:)](init%28foraccepting_%29-84r2r.md)

# init (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new paste configuration.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

A paste configuration that has no acceptable uniform type identifiers (UTIs).

<a id="Discussion"></a>

## Discussion

Use this initializer to create a paste configuration that has an empty [acceptableTypeIdentifiers](acceptabletypeidentifiers.md) array. After you create the paste configuration, you can use its [addAcceptableTypeIdentifiers:](addacceptabletypeidentifiers%28__%29.md) method or [addTypeIdentifiersForAcceptingClass:](addtypeidentifiers%28foraccepting_%29-4fvd6.md) method to add acceptable UTIs to the array.

## See Also

### Initializing a paste configuration

- [initWithAcceptableTypeIdentifiers:](init%28acceptabletypeidentifiers_%29.md): Initializes a new paste configuration with a specified array of acceptable UTIs.
- [initWithTypeIdentifiersForAcceptingClass:](init%28foraccepting_%29-6is3h.md): Initializes a new paste configuration with the UTIs declared as supported by a specified class.
