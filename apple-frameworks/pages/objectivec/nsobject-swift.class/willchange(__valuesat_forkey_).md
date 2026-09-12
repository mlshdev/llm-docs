> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/willchange(_:valuesat:forkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/willchange(_:valuesat:forkey:))

# willChange(\_:valuesAt:forKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Informs the observed object that the specified change is about to be executed at given indexes for a specified ordered to-many relationship.

## Declaration

```swift
func willChange(_ changeKind: NSKeyValueChange, valuesAt indexes: IndexSet, forKey key: String)
```

## Parameters

- `changeKind`: The type of change that is about to be made.
- `indexes`: The indexes of the to-many relationship that will be affected by the change.
- `key`: The name of a property that is an ordered to-many relationship.

<a id="Discussion"></a>

## Discussion

Use this method when implementing key-value-observing compliance manually.

> **Important**

>  After the values have been changed, a corresponding [didChange(\_:valuesAt:forKey:)](didchange%28__valuesat_forkey_%29.md) must be invoked with the same parameters.

<a id="Special-Considerations"></a>

### Special Considerations

You rarely need to override this method in subclasses, but if you do, be sure to call `super`.

## See Also

### Notifying Observers of Changes

- [willChangeValue(forKey:)](willchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property is about to change.
- [didChangeValue(forKey:)](didchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property has changed.
- [didChange(\_:valuesAt:forKey:)](didchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change has occurred on the indexes for a specified ordered to-many relationship.
- [willChangeValue(forKey:withSetMutation:using:)](willchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change is about to be made to a specified unordered to-many relationship.
- [didChangeValue(forKey:withSetMutation:using:)](didchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change was made to a specified unordered to-many relationship.

# willChange:valuesAtIndexes:forKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Informs the observed object that the specified change is about to be executed at given indexes for a specified ordered to-many relationship.

## Declaration

```objectivec
- (void) willChange:(NSKeyValueChange) changeKind valuesAtIndexes:(NSIndexSet *) indexes forKey:(NSString *) key;
```

## Parameters

- `changeKind`: The type of change that is about to be made.
- `indexes`: The indexes of the to-many relationship that will be affected by the change.
- `key`: The name of a property that is an ordered to-many relationship.

<a id="Discussion"></a>

## Discussion

Use this method when implementing key-value-observing compliance manually.

> **Important**

>  After the values have been changed, a corresponding [didChange:valuesAtIndexes:forKey:](didchange%28__valuesat_forkey_%29.md) must be invoked with the same parameters.

<a id="Special-Considerations"></a>

### Special Considerations

You rarely need to override this method in subclasses, but if you do, be sure to call `super`.

## See Also

### Notifying Observers of Changes

- [willChangeValueForKey:](willchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property is about to change.
- [didChangeValueForKey:](didchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property has changed.
- [didChange:valuesAtIndexes:forKey:](didchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change has occurred on the indexes for a specified ordered to-many relationship.
- [willChangeValueForKey:withSetMutation:usingObjects:](willchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change is about to be made to a specified unordered to-many relationship.
- [didChangeValueForKey:withSetMutation:usingObjects:](didchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change was made to a specified unordered to-many relationship.
