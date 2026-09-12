> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/shouldenableaction(for:identifier:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/shouldenableaction(for:identifier:))

# shouldEnableAction(for:identifier:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate to determine whether the action should be enabled.

## Declaration

```swift
func shouldEnableAction(for person: ABPerson!, identifier: String!) -> Bool
```

## Parameters

- `person`: The person on which the action will be taken.
- `identifier`: The unique identifier of the selected value.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the action is applicable; otherwise, [NO](../no.md).

<a id="Discussion"></a>

## Discussion

If the property returned by [actionProperty()](actionproperty%28%29.md) is a multivalue property, `identifier` contains the unique identifier of the value selected.

# shouldEnableActionForPerson:identifier: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate to determine whether the action should be enabled.

## Declaration

```objectivec
- (BOOL) shouldEnableActionForPerson:(ABPerson *) person identifier:(NSString *) identifier;
```

## Parameters

- `person`: The person on which the action will be taken.
- `identifier`: The unique identifier of the selected value.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the action is applicable; otherwise, [NO](../no.md).

<a id="Discussion"></a>

## Discussion

If the property returned by [actionProperty](actionproperty%28%29.md) is a multivalue property, `identifier` contains the unique identifier of the value selected.
