> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteconfiguration/init(acceptabletypeidentifiers:)](https://developer.apple.com/documentation/uikit/uipasteconfiguration/init(acceptabletypeidentifiers:))

# init(acceptableTypeIdentifiers:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new paste configuration with a specified array of acceptable UTIs.

## Declaration

```swift
convenience init(acceptableTypeIdentifiers: [String])
```

## Parameters

- `acceptableTypeIdentifiers`: An array of uniform type identifier (UTI) strings.

<a id="return-value"></a>

## Return Value

A paste configuration that is initialized with the specified UTI strings.

<a id="Discussion"></a>

## Discussion

Specify the acceptable UTIs in descending order of fidelity. The UTI that provides the richest data representation should be first in the list. For instance, if the data to paste is contact information, list the vCard UTI first, followed by the plain text UTI.

## See Also

### Initializing a paste configuration

- [init()](init%28%29.md): Initializes a new paste configuration.
- [init(forAccepting:)](init%28foraccepting_%29-6is3h.md): Initializes a new paste configuration with the UTIs declared as supported by a specified class.
- [init(forAccepting:)](init%28foraccepting_%29-84r2r.md)

# initWithAcceptableTypeIdentifiers: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a new paste configuration with a specified array of acceptable UTIs.

## Declaration

```objectivec
- (instancetype) initWithAcceptableTypeIdentifiers:(NSArray<NSString *> *) acceptableTypeIdentifiers;
```

## Parameters

- `acceptableTypeIdentifiers`: An array of uniform type identifier (UTI) strings.

<a id="return-value"></a>

## Return Value

A paste configuration that is initialized with the specified UTI strings.

<a id="Discussion"></a>

## Discussion

Specify the acceptable UTIs in descending order of fidelity. The UTI that provides the richest data representation should be first in the list. For instance, if the data to paste is contact information, list the vCard UTI first, followed by the plain text UTI.

## See Also

### Initializing a paste configuration

- [init](init%28%29.md): Initializes a new paste configuration.
- [initWithTypeIdentifiersForAcceptingClass:](init%28foraccepting_%29-6is3h.md): Initializes a new paste configuration with the UTIs declared as supported by a specified class.
