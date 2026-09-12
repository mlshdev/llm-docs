> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/comparison_operator_constants](https://developer.apple.com/documentation/applicationservices/apple_event_manager/comparison_operator_constants)

# Comparison Operator Constants (Swift)

**Framework:** Core Services

Specify a comparison operation to perform on two operands.

<a id="overview"></a>

## Overview

When you call the [CreateCompDescriptor(\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/coreservices/1449155-createcompdescriptor) function, you pass one of these comparison operators in the `comparisonOperator` parameter. The `CreateCompDescriptor` function creates a comparison descriptor that specifies how to compare one or more Apple event objects with either another Apple event object or a descriptor.

The actual comparison of the two operands is performed by the object comparison function provided by the client application—see [OSLCompareProcPtr](https://developer.apple.com/documentation/coreservices/oslcompareprocptr). The way a comparison operator is interpreted is up to each application.

For related information, see [Constants for Object Specifiers, Positions, and Logical and Comparison Operations](https://developer.apple.com/documentation/coreservices/apple_events/1572744-constants_for_object_specifiers_).

## Topics

### Constants

- [kAEBeginsWith](https://developer.apple.com/documentation/coreservices/kaebeginswith): The value of `operand1` begins with the value of `operand2` (for example, the string `"operand"` begins with the string `"opera"`).
- [kAEContains](https://developer.apple.com/documentation/coreservices/kaecontains): The value of `operand1` contains the value of `operand2 `(for example, the string `"operand"` contains the string `"era"`).
- [kAECoreSuite](https://developer.apple.com/documentation/coreservices/kaecoresuite): An Apple event in the Standard Suite.

# Comparison Operator Constants (Objective-C)

**Framework:** Core Services

Specify a comparison operation to perform on two operands.

## Declaration

```objectivec
enum {
   kAEAsk = 'ask ',
   kAEBefore = 'befo',
   kAEBeginning = 'bgng',
   kAEBeginsWith = 'bgwt',
   kAEBeginTransaction = 'begi',
   kAEBold = 'bold',
   kAECaseSensEquals = 'cseq',
   kAECentered = 'cent',
   kAEChangeView = 'view',
   kAEClone = 'clon',
   kAEClose = 'clos',
   kAECondensed = 'cond',
   kAEContains = 'cont',
   kAECopy = 'copy',
   kAECoreSuite = 'core',
   kAECountElements = 'cnte',
   kAECreateElement = 'crel',
   kAECreatePublisher = 'cpub',
   kAECut = 'cut ',
   kAEDelete = 'delo'
};
```

<a id="overview"></a>

## Overview

When you call the [CreateCompDescriptor](https://developer.apple.com/documentation/coreservices/1449155-createcompdescriptor) function, you pass one of these comparison operators in the `comparisonOperator` parameter. The `CreateCompDescriptor` function creates a comparison descriptor that specifies how to compare one or more Apple event objects with either another Apple event object or a descriptor.

The actual comparison of the two operands is performed by the object comparison function provided by the client application—see [OSLCompareProcPtr](https://developer.apple.com/documentation/coreservices/oslcompareprocptr). The way a comparison operator is interpreted is up to each application.

For related information, see [Constants for Object Specifiers, Positions, and Logical and Comparison Operations](https://developer.apple.com/documentation/coreservices/1572744-constants_for_object_specifiers_).

## Topics

### Constants

- [kAEBeginsWith](https://developer.apple.com/documentation/coreservices/1556394-anonymous/kaebeginswith): The value of `operand1` begins with the value of `operand2` (for example, the string `"operand"` begins with the string `"opera"`).
- [kAEContains](https://developer.apple.com/documentation/coreservices/1556394-anonymous/kaecontains): The value of `operand1` contains the value of `operand2 `(for example, the string `"operand"` contains the string `"era"`).
- [kAECoreSuite](https://developer.apple.com/documentation/coreservices/1556394-anonymous/kaecoresuite): An Apple event in the Standard Suite.
