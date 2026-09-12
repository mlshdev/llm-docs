> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/defaultplaceholder(for:with:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/defaultplaceholder(for:with:))

# defaultPlaceholder(for:with:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Returns an object that will be used as the placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.

## Declaration

```swift
class func defaultPlaceholder(for marker: Any?, with binding: NSBindingName) -> Any?
```

<a id="Discussion"></a>

## Discussion

The `marker` can be `nil` or one of the constants described in [Selection Markers](https://developer.apple.com/documentation/appkit/selection-markers).

## See Also

### Deprecated Class Methods

- [setDefaultPlaceholder(\_:for:with:)](setdefaultplaceholder%28__for_with_%29.md): Deprecated. Sets `placeholder` as the default placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [useStoredAccessor()](usestoredaccessor%28%29.md): Deprecated. Returns `true` if the stored value methods [storedValue(forKey:)](storedvalue%28forkey_%29.md) and [takeStoredValue(\_:forKey:)](takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.

# defaultPlaceholderForMarker:withBinding: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Returns an object that will be used as the placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.

## Declaration

```objectivec
+ (id) defaultPlaceholderForMarker:(id) marker withBinding:(NSBindingName) binding;
```

<a id="Discussion"></a>

## Discussion

The `marker` can be `nil` or one of the constants described in [Selection Markers](https://developer.apple.com/documentation/appkit/selection-markers).

## See Also

### Deprecated Class Methods

- [setDefaultPlaceholder:forMarker:withBinding:](setdefaultplaceholder%28__for_with_%29.md): Deprecated. Sets `placeholder` as the default placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [setKeys:triggerChangeNotificationsForDependentKey:](setkeys_triggerchangenotificationsfordependentkey_.md): Deprecated. Configures the observed object to post change notifications for a given property if any of the properties specified in a given array changes.
- [useStoredAccessor](usestoredaccessor%28%29.md): Deprecated. Returns `true` if the stored value methods [storedValueForKey:](storedvalue%28forkey_%29.md) and [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.
