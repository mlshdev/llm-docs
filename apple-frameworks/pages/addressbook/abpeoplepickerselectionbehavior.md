> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickerselectionbehavior](https://developer.apple.com/documentation/addressbook/abpeoplepickerselectionbehavior)

# ABPeoplePickerSelectionBehavior (Swift)

**Framework:** Address Book  
**Kind:** Structure  
**Availability:** macOS

Constants indicating the possible value selection behaviors.

## Declaration

```swift
struct ABPeoplePickerSelectionBehavior
```

<a id="overview"></a>

## Overview

These constants are of the type [ABPeoplePickerSelectionBehavior](abpeoplepickerselectionbehavior.md) and are used by [valueSelectionBehavior](abpeoplepickerview/valueselectionbehavior.md).

## Topics

### Selection Behaviors

- [ABNoValueSelection](abnovalueselection.md): The user cannot select individual values.
- [ABSingleValueSelection](absinglevalueselection.md): The user can select a single value.
- [ABMultipleValueSelection](abmultiplevalueselection.md): The user can select multiple values.

### Initializers

- [init(\_:)](abpeoplepickerselectionbehavior/init%28__%29.md): Initializes a constant from an integer value that represents a picker selection behavior.
- [init(rawValue:)](abpeoplepickerselectionbehavior/init%28rawvalue_%29.md): Initializes a constant from a raw value that represents a picker selection behavior.

### Instance Properties

- [rawValue](abpeoplepickerselectionbehavior/rawvalue.md): The raw integer value of a possible selection behavior constant.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Specifying Selection Behavior

- [valueSelectionBehavior](abpeoplepickerview/valueselectionbehavior.md): The current selection behavior.

# ABPeoplePickerSelectionBehavior (Objective-C)

**Framework:** Address Book  
**Kind:** Enumeration  
**Availability:** macOS

Constants indicating the possible value selection behaviors.

## Declaration

```objectivec
typedef enum { ... } ABPeoplePickerSelectionBehavior;
```

<a id="overview"></a>

## Overview

These constants are of the type [ABPeoplePickerSelectionBehavior](abpeoplepickerselectionbehavior.md) and are used by [valueSelectionBehavior](abpeoplepickerview/valueselectionbehavior.md).

## Topics

### Selection Behaviors

- [ABNoValueSelection](abnovalueselection.md): The user cannot select individual values.
- [ABSingleValueSelection](absinglevalueselection.md): The user can select a single value.
- [ABMultipleValueSelection](abmultiplevalueselection.md): The user can select multiple values.

## See Also

### Specifying Selection Behavior

- [valueSelectionBehavior](abpeoplepickerview/valueselectionbehavior.md): The current selection behavior.
