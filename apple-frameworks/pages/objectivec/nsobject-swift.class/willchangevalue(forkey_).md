> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/willchangevalue(forkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/willchangevalue(forkey:))

# willChangeValue(forKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Informs the observed object that the value of a given property is about to change.

## Declaration

```swift
func willChangeValue(forKey key: String)
```

## Parameters

- `key`: The name of the property that will change.

<a id="Discussion"></a>

## Discussion

Use this method when implementing key-value observer compliance manually to inform the observed object that the value at `key` is about to change.

The change type of this method is `NSKeyValueChangeSetting`.

> **Important**

>  After the values have been changed, a corresponding [didChangeValue(forKey:)](didchangevalue%28forkey_%29.md) must be invoked with the same parameter.

<a id="Special-Considerations"></a>

### Special Considerations

You rarely need to override this method in subclasses, but if you do, be sure to call `super`.

## See Also

### Notifying Observers of Changes

- [didChangeValue(forKey:)](didchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property has changed.
- [willChange(\_:valuesAt:forKey:)](willchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change is about to be executed at given indexes for a specified ordered to-many relationship.
- [didChange(\_:valuesAt:forKey:)](didchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change has occurred on the indexes for a specified ordered to-many relationship.
- [willChangeValue(forKey:withSetMutation:using:)](willchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change is about to be made to a specified unordered to-many relationship.
- [didChangeValue(forKey:withSetMutation:using:)](didchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change was made to a specified unordered to-many relationship.

# willChangeValueForKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Informs the observed object that the value of a given property is about to change.

## Declaration

```objectivec
- (void) willChangeValueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of the property that will change.

<a id="Discussion"></a>

## Discussion

Use this method when implementing key-value observer compliance manually to inform the observed object that the value at `key` is about to change.

The change type of this method is `NSKeyValueChangeSetting`.

> **Important**

>  After the values have been changed, a corresponding [didChangeValueForKey:](didchangevalue%28forkey_%29.md) must be invoked with the same parameter.

<a id="Special-Considerations"></a>

### Special Considerations

You rarely need to override this method in subclasses, but if you do, be sure to call `super`.

## See Also

### Notifying Observers of Changes

- [didChangeValueForKey:](didchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property has changed.
- [willChange:valuesAtIndexes:forKey:](willchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change is about to be executed at given indexes for a specified ordered to-many relationship.
- [didChange:valuesAtIndexes:forKey:](didchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change has occurred on the indexes for a specified ordered to-many relationship.
- [willChangeValueForKey:withSetMutation:usingObjects:](willchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change is about to be made to a specified unordered to-many relationship.
- [didChangeValueForKey:withSetMutation:usingObjects:](didchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change was made to a specified unordered to-many relationship.
