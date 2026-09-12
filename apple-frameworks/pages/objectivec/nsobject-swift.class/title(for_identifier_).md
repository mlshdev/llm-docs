> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/title(for:identifier:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/title(for:identifier:))

# title(for:identifier:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate to request the title of the menu item for the action.

## Declaration

```swift
func title(for person: ABPerson!, identifier: String!) -> String!
```

## Parameters

- `person`: The person on which the action will be taken.
- `identifier`: The unique identifier of the value for which the menu item will be displayed.

<a id="return-value"></a>

## Return Value

The title of the menu item for the action.

<a id="Discussion"></a>

## Discussion

If the property returned by [actionProperty()](actionproperty%28%29.md) is a multivalue property, `identifier` contains the unique identifier of the value selected.

# titleForPerson:identifier: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Sent to the delegate to request the title of the menu item for the action.

## Declaration

```objectivec
- (NSString *) titleForPerson:(ABPerson *) person identifier:(NSString *) identifier;
```

## Parameters

- `person`: The person on which the action will be taken.
- `identifier`: The unique identifier of the value for which the menu item will be displayed.

<a id="return-value"></a>

## Return Value

The title of the menu item for the action.

<a id="Discussion"></a>

## Discussion

If the property returned by [actionProperty](actionproperty%28%29.md) is a multivalue property, `identifier` contains the unique identifier of the value selected.
