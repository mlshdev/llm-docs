> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/innotebookitemtyperesolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/innotebookitemtyperesolutionresult/disambiguation(with:))

# disambiguation(with:)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · watchOS 4.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
@nonobjc static func disambiguation(with notebookItemTypesToDisambiguate: [INNotebookItemType]) -> Self
```

## Parameters

- `notebookItemTypesToDisambiguate`: An array of [INNotebookItemType](../innotebookitemtype.md) values for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INNotebookItemTypeResolutionResult](../innotebookitemtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one notebook item type matches the given information and you cannot pick one definitively. Ask the user to select from among the item types that you specify.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires confirmation from the user before proceeding.
