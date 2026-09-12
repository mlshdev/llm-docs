> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setkeys:triggerchangenotificationsfordependentkey:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setkeys:triggerchangenotificationsfordependentkey:)

# setKeys:triggerChangeNotificationsForDependentKey:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Configures the observed object to post change notifications for a given property if any of the properties specified in a given array changes.

> Use the method [keyPathsForValuesAffectingValueForKey:](keypathsforvaluesaffectingvalue%28forkey_%29.md) instead.

## Declaration

```objectivec
+ (void) setKeys:(NSArray *) keys triggerChangeNotificationsForDependentKey:(NSString *) dependentKey;
```

## Parameters

- `keys`: The names of the properties upon which the value of the property identified by `dependentKey` depends.
- `dependentKey`: The name of a property whose value depends on the properties specified by `keys`.

<a id="Discussion"></a>

## Discussion

Invocations of will- and did-change KVO notification methods for any key in `keys` automatically invokes the corresponding change notification methods for `dependentKey`. The observed object does not receive `willChange` or `didChange` messages to generate the notifications.

Dependencies should be registered before any instances of the receiving class are created, so you typically invoke this method in a class’s [initialize](initialize%28%29.md) method, as illustrated in the following example.

```objc
+ (void)initialize {
    [self setKeys:@[@"firstName", @"lastName"] triggerChangeNotificationsForDependentKey:@"fullName"];
}
```

## See Also

### Deprecated Class Methods

- [defaultPlaceholderForMarker:withBinding:](defaultplaceholder%28for_with_%29.md): Deprecated. Returns an object that will be used as the placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [setDefaultPlaceholder:forMarker:withBinding:](setdefaultplaceholder%28__for_with_%29.md): Deprecated. Sets `placeholder` as the default placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [useStoredAccessor](usestoredaccessor%28%29.md): Deprecated. Returns `true` if the stored value methods [storedValueForKey:](storedvalue%28forkey_%29.md) and [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.
