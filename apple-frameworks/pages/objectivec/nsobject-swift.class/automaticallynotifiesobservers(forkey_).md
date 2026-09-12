> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/automaticallynotifiesobservers(forkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/automaticallynotifiesobservers(forkey:))

# automaticallyNotifiesObservers(forKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the observed object supports automatic key-value observation for the given key.

## Declaration

```swift
class func automaticallyNotifiesObservers(forKey key: String) -> Bool
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the key-value observing machinery should automatically invoke [willChangeValue(forKey:)](willchangevalue%28forkey_%29.md)/[didChangeValue(forKey:)](didchangevalue%28forkey_%29.md) and [willChange(\_:valuesAt:forKey:)](willchange%28__valuesat_forkey_%29.md)/[didChange(\_:valuesAt:forKey:)](didchange%28__valuesat_forkey_%29.md) whenever instances of the class receive key-value coding messages for the `key`, or mutating key-value-coding-compliant methods for the `key` are invoked; otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

The default implementation returns [YES](../yes.md). Starting in OS X 10.5, the default implementation of this method searches the receiving class for a method whose name matches the pattern `+automaticallyNotifiesObserversOf<Key>`, and returns the result of invoking that method if it is found. Any found methods must return `BOOL`. If no such method is found [YES](../yes.md) is returned.

## See Also

### Observing Customization

- [keyPathsForValuesAffectingValue(forKey:)](keypathsforvaluesaffectingvalue%28forkey_%29.md): Returns a set of key paths for properties whose values affect the value of the specified key.
- [NSKeyValueObservingCustomization](../../foundation/nskeyvalueobservingcustomization.md): Conforming to NSKeyValueObservingCustomization is not required to use Key-Value Observing. Provide an implementation of these functions if you need to disable auto-notifying for a key, or add dependent keys
- [observationInfo](observationinfo.md): Returns a pointer that identifies information about all of the observers that are registered with the observed object.

# automaticallyNotifiesObserversForKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the observed object supports automatic key-value observation for the given key.

## Declaration

```objectivec
+ (BOOL) automaticallyNotifiesObserversForKey:(NSString *) key;
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the key-value observing machinery should automatically invoke [willChangeValueForKey:](willchangevalue%28forkey_%29.md)/[didChangeValueForKey:](didchangevalue%28forkey_%29.md) and [willChange:valuesAtIndexes:forKey:](willchange%28__valuesat_forkey_%29.md)/[didChange:valuesAtIndexes:forKey:](didchange%28__valuesat_forkey_%29.md) whenever instances of the class receive key-value coding messages for the `key`, or mutating key-value-coding-compliant methods for the `key` are invoked; otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

The default implementation returns [YES](../yes.md). Starting in OS X 10.5, the default implementation of this method searches the receiving class for a method whose name matches the pattern `+automaticallyNotifiesObserversOf<Key>`, and returns the result of invoking that method if it is found. Any found methods must return `BOOL`. If no such method is found [YES](../yes.md) is returned.

## See Also

### Observing Customization

- [keyPathsForValuesAffectingValueForKey:](keypathsforvaluesaffectingvalue%28forkey_%29.md): Returns a set of key paths for properties whose values affect the value of the specified key.
- [setKeys:triggerChangeNotificationsForDependentKey:](setkeys_triggerchangenotificationsfordependentkey_.md): Deprecated. Configures the observed object to post change notifications for a given property if any of the properties specified in a given array changes.
- [observationInfo](observationinfo.md): Returns a pointer that identifies information about all of the observers that are registered with the observed object.
