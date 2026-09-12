> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteconfiguration/addacceptabletypeidentifiers(_:)](https://developer.apple.com/documentation/uikit/uipasteconfiguration/addacceptabletypeidentifiers(_:))

# addAcceptableTypeIdentifiers(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds an array of UTI strings to a paste configuration, increasing the variety of types the paste configuration accepts.

## Declaration

```swift
func addAcceptableTypeIdentifiers(_ acceptableTypeIdentifiers: [String])
```

## Parameters

- `acceptableTypeIdentifiers`: An array of uniform type identifier (UTI) strings.

<a id="Discussion"></a>

## Discussion

List the acceptable UTIs in descending order of fidelity. The UTI that provides the richest data representation should be first in the list. For instance, if the data to paste is contact information, list the vCard UTI first, followed by the plain text UTI.

## See Also

### Adding acceptable type identifiers

- [addTypeIdentifiers(forAccepting:)](addtypeidentifiers%28foraccepting_%29-4fvd6.md): Expands the array of accepted UTIs for a paste configuration, based on those declared as supported by a specified class.
- [addTypeIdentifiers(forAccepting:)](addtypeidentifiers%28foraccepting_%29-8af7o.md)

# addAcceptableTypeIdentifiers: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds an array of UTI strings to a paste configuration, increasing the variety of types the paste configuration accepts.

## Declaration

```objectivec
- (void) addAcceptableTypeIdentifiers:(NSArray<NSString *> *) acceptableTypeIdentifiers;
```

## Parameters

- `acceptableTypeIdentifiers`: An array of uniform type identifier (UTI) strings.

<a id="Discussion"></a>

## Discussion

List the acceptable UTIs in descending order of fidelity. The UTI that provides the richest data representation should be first in the list. For instance, if the data to paste is contact information, list the vCard UTI first, followed by the plain text UTI.

## See Also

### Adding acceptable type identifiers

- [addTypeIdentifiersForAcceptingClass:](addtypeidentifiers%28foraccepting_%29-4fvd6.md): Expands the array of accepted UTIs for a paste configuration, based on those declared as supported by a specified class.
