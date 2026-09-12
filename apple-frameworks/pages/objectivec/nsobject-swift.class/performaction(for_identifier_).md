> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/performaction(for:identifier:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/performaction(for:identifier:))

# performAction(for:identifier:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate to perform the action.

## Declaration

```swift
func performAction(for person: ABPerson!, identifier: String!)
```

## Parameters

- `person`: The person on which the action will be taken.
- `identifier`: The unique identifier of the selected value.

<a id="Discussion"></a>

## Discussion

If the property returned by [actionProperty()](actionproperty%28%29.md) is a multivalue property, `identifier` contains the unique identifier of the value selected. The person being displayed in the Address Book application’s card view when the rollover menu is accesses is passed as `person`.

# performActionForPerson:identifier: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate to perform the action.

## Declaration

```objectivec
- (void) performActionForPerson:(ABPerson *) person identifier:(NSString *) identifier;
```

## Parameters

- `person`: The person on which the action will be taken.
- `identifier`: The unique identifier of the selected value.

<a id="Discussion"></a>

## Discussion

If the property returned by [actionProperty](actionproperty%28%29.md) is a multivalue property, `identifier` contains the unique identifier of the value selected. The person being displayed in the Address Book application’s card view when the rollover menu is accesses is passed as `person`.
