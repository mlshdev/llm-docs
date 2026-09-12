> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpersonresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inpersonresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with peopleToDisambiguate: [INPerson]) -> Self
```

## Parameters

- `peopleToDisambiguate`: An array of [INPerson](../inperson.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INPersonResolutionResult](../inpersonresolutionresult.md) object.

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one person might match the given information and you can’t pick one definitively. Ask the user to select from among the people you specify.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# disambiguationWithPeopleToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithPeopleToDisambiguate:(NSArray<INPerson *> *) peopleToDisambiguate;
```

## Parameters

- `peopleToDisambiguate`: An array of [INPerson](../inperson.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INPersonResolutionResult](../inpersonresolutionresult.md) object.

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one person might match the given information and you can’t pick one definitively. Ask the user to select from among the people you specify.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedPerson:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithPersonToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
