> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setdefaultplaceholder(_:for:with:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setdefaultplaceholder(_:for:with:))

# setDefaultPlaceholder(\_:for:with:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Sets `placeholder` as the default placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.

## Declaration

```swift
class func setDefaultPlaceholder(_ placeholder: Any?, for marker: Any?, with binding: NSBindingName)
```

<a id="Discussion"></a>

## Discussion

The `marker` can be `nil` or one of the constants described in [Selection Markers](https://developer.apple.com/documentation/appkit/selection-markers).

## See Also

### Related Documentation

- [Cocoa Bindings Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html#//apple_ref/doc/uid/10000167i)

### Deprecated Class Methods

- [defaultPlaceholder(for:with:)](defaultplaceholder%28for_with_%29.md): Deprecated. Returns an object that will be used as the placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [useStoredAccessor()](usestoredaccessor%28%29.md): Deprecated. Returns `true` if the stored value methods [storedValue(forKey:)](storedvalue%28forkey_%29.md) and [takeStoredValue(\_:forKey:)](takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.

# setDefaultPlaceholder:forMarker:withBinding: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Sets `placeholder` as the default placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.

## Declaration

```objectivec
+ (void) setDefaultPlaceholder:(id) placeholder forMarker:(id) marker withBinding:(NSBindingName) binding;
```

<a id="Discussion"></a>

## Discussion

The `marker` can be `nil` or one of the constants described in [Selection Markers](https://developer.apple.com/documentation/appkit/selection-markers).

## See Also

### Related Documentation

- [Cocoa Bindings Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaBindings/CocoaBindings.html#//apple_ref/doc/uid/10000167i)

### Deprecated Class Methods

- [defaultPlaceholderForMarker:withBinding:](defaultplaceholder%28for_with_%29.md): Deprecated. Returns an object that will be used as the placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [setKeys:triggerChangeNotificationsForDependentKey:](setkeys_triggerchangenotificationsfordependentkey_.md): Deprecated. Configures the observed object to post change notifications for a given property if any of the properties specified in a given array changes.
- [useStoredAccessor](usestoredaccessor%28%29.md): Deprecated. Returns `true` if the stored value methods [storedValueForKey:](storedvalue%28forkey_%29.md) and [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.
