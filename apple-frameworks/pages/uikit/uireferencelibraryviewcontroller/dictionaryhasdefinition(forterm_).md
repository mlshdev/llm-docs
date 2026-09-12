> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uireferencelibraryviewcontroller/dictionaryhasdefinition(forterm:)](https://developer.apple.com/documentation/uikit/uireferencelibraryviewcontroller/dictionaryhasdefinition(forterm:))

# dictionaryHasDefinition(forTerm:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns whether a definition is available for the given term.

## Declaration

```swift
class func dictionaryHasDefinition(forTerm term: String) -> Bool
```

## Parameters

- `term`: The term to be defined.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a definition for `term` is available; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a reference-library view controller

- [init(term:)](init%28term_%29.md): Initializes a newly created reference-library view controller to display the definition of the given term.
- [init(coder:)](init%28coder_%29.md): Creates a reference-library view controller from data in an unarchiver.

# dictionaryHasDefinitionForTerm: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns whether a definition is available for the given term.

## Declaration

```objectivec
+ (BOOL) dictionaryHasDefinitionForTerm:(NSString *) term;
```

## Parameters

- `term`: The term to be defined.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a definition for `term` is available; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a reference-library view controller

- [initWithTerm:](init%28term_%29.md): Initializes a newly created reference-library view controller to display the definition of the given term.
- [initWithCoder:](init%28coder_%29.md): Creates a reference-library view controller from data in an unarchiver.
