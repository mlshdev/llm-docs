> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uireferencelibraryviewcontroller/init(term:)](https://developer.apple.com/documentation/uikit/uireferencelibraryviewcontroller/init(term:))

# init(term:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a newly created reference-library view controller to display the definition of the given term.

## Declaration

```swift
init(term: String)
```

## Parameters

- `term`: The term to define.

<a id="return-value"></a>

## Return Value

The newly initialized reference library view controller.

<a id="Discussion"></a>

## Discussion

If a definition for the term is not available, a localized message is displayed instead. Use the [dictionaryHasDefinition(forTerm:)](dictionaryhasdefinition%28forterm_%29.md) class method to determine whether a definition is available before creating instances of this class.

## See Also

### Creating a reference-library view controller

- [dictionaryHasDefinition(forTerm:)](dictionaryhasdefinition%28forterm_%29.md): Returns whether a definition is available for the given term.
- [init(coder:)](init%28coder_%29.md): Creates a reference-library view controller from data in an unarchiver.

# initWithTerm: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a newly created reference-library view controller to display the definition of the given term.

## Declaration

```objectivec
- (instancetype) initWithTerm:(NSString *) term;
```

## Parameters

- `term`: The term to define.

<a id="return-value"></a>

## Return Value

The newly initialized reference library view controller.

<a id="Discussion"></a>

## Discussion

If a definition for the term is not available, a localized message is displayed instead. Use the [dictionaryHasDefinitionForTerm:](dictionaryhasdefinition%28forterm_%29.md) class method to determine whether a definition is available before creating instances of this class.

## See Also

### Creating a reference-library view controller

- [dictionaryHasDefinitionForTerm:](dictionaryhasdefinition%28forterm_%29.md): Returns whether a definition is available for the given term.
- [initWithCoder:](init%28coder_%29.md): Creates a reference-library view controller from data in an unarchiver.
