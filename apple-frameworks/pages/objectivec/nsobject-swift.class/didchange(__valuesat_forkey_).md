> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/didchange(_:valuesat:forkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/didchange(_:valuesat:forkey:))

# didChange(\_:valuesAt:forKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Informs the observed object that the specified change has occurred on the indexes for a specified ordered to-many relationship.

## Declaration

```swift
func didChange(_ changeKind: NSKeyValueChange, valuesAt indexes: IndexSet, forKey key: String)
```

## Parameters

- `changeKind`: The type of change that was made.
- `indexes`: The indexes of the to-many relationship that were affected by the change.
- `key`: The name of a property that is an ordered to-many relationship.

<a id="Discussion"></a>

## Discussion

Use this method when implementing key-value-observing compliance manually.

<a id="Special-Considerations"></a>

### Special Considerations

You rarely need to override this method in subclasses, but if you do, be sure to call `super`. Calls to this method are always paired with a matching call to [willChange(\_:valuesAt:forKey:)](willchange%28__valuesat_forkey_%29.md).

## See Also

### Notifying Observers of Changes

- [willChangeValue(forKey:)](willchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property is about to change.
- [didChangeValue(forKey:)](didchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property has changed.
- [willChange(\_:valuesAt:forKey:)](willchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change is about to be executed at given indexes for a specified ordered to-many relationship.
- [willChangeValue(forKey:withSetMutation:using:)](willchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change is about to be made to a specified unordered to-many relationship.
- [didChangeValue(forKey:withSetMutation:using:)](didchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change was made to a specified unordered to-many relationship.

# didChange:valuesAtIndexes:forKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Informs the observed object that the specified change has occurred on the indexes for a specified ordered to-many relationship.

## Declaration

```objectivec
- (void) didChange:(NSKeyValueChange) changeKind valuesAtIndexes:(NSIndexSet *) indexes forKey:(NSString *) key;
```

## Parameters

- `changeKind`: The type of change that was made.
- `indexes`: The indexes of the to-many relationship that were affected by the change.
- `key`: The name of a property that is an ordered to-many relationship.

<a id="Discussion"></a>

## Discussion

Use this method when implementing key-value-observing compliance manually.

<a id="Special-Considerations"></a>

### Special Considerations

You rarely need to override this method in subclasses, but if you do, be sure to call `super`. Calls to this method are always paired with a matching call to [willChange:valuesAtIndexes:forKey:](willchange%28__valuesat_forkey_%29.md).

## See Also

### Notifying Observers of Changes

- [willChangeValueForKey:](willchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property is about to change.
- [didChangeValueForKey:](didchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property has changed.
- [willChange:valuesAtIndexes:forKey:](willchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change is about to be executed at given indexes for a specified ordered to-many relationship.
- [willChangeValueForKey:withSetMutation:usingObjects:](willchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change is about to be made to a specified unordered to-many relationship.
- [didChangeValueForKey:withSetMutation:usingObjects:](didchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change was made to a specified unordered to-many relationship.
