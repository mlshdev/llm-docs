> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/usestoredaccessor()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/usestoredaccessor())

# useStoredAccessor() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns `true` if the stored value methods [storedValue(forKey:)](storedvalue%28forkey_%29.md) and [takeStoredValue(\_:forKey:)](takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.

> This method has no direct replacement, although see [accessInstanceVariablesDirectly](accessinstancevariablesdirectly.md).

## Declaration

```swift
class func useStoredAccessor() -> Bool
```

<a id="Discussion"></a>

## Discussion

Returning [NO](../no.md) causes the stored value methods to use the same accessor method or instance variable search order as the corresponding basic key-value coding methods ([value(forKey:)](value%28forkey_%29.md) and [takeValue(\_:forKey:)](takevalue%28__forkey_%29.md)). The default implementation returns [YES](../yes.md).

Applications should use the `valueForKey:` and `setValue:forKey:` methods instead of `storedValueForKey:` and `takeStoredValue:forKey:`.

## See Also

### Deprecated Class Methods

- [defaultPlaceholder(for:with:)](defaultplaceholder%28for_with_%29.md): Deprecated. Returns an object that will be used as the placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [setDefaultPlaceholder(\_:for:with:)](setdefaultplaceholder%28__for_with_%29.md): Deprecated. Sets `placeholder` as the default placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.

# useStoredAccessor (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.4) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns `true` if the stored value methods [storedValueForKey:](storedvalue%28forkey_%29.md) and [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md) should use private accessor methods in preference to public accessors.

> This method has no direct replacement, although see [accessInstanceVariablesDirectly](accessinstancevariablesdirectly.md).

## Declaration

```objectivec
+ (BOOL) useStoredAccessor;
```

<a id="Discussion"></a>

## Discussion

Returning [NO](../no.md) causes the stored value methods to use the same accessor method or instance variable search order as the corresponding basic key-value coding methods ([valueForKey:](value%28forkey_%29.md) and [takeValue:forKey:](takevalue%28__forkey_%29.md)). The default implementation returns [YES](../yes.md).

Applications should use the `valueForKey:` and `setValue:forKey:` methods instead of `storedValueForKey:` and `takeStoredValue:forKey:`.

## See Also

### Deprecated Class Methods

- [defaultPlaceholderForMarker:withBinding:](defaultplaceholder%28for_with_%29.md): Deprecated. Returns an object that will be used as the placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [setDefaultPlaceholder:forMarker:withBinding:](setdefaultplaceholder%28__for_with_%29.md): Deprecated. Sets `placeholder` as the default placeholder for the `binding`, when a key value coding compliant property of an instance of the receiving class returns the value specified by `marker`, and no other placeholder has been specified.
- [setKeys:triggerChangeNotificationsForDependentKey:](setkeys_triggerchangenotificationsfordependentkey_.md): Deprecated. Configures the observed object to post change notifications for a given property if any of the properties specified in a given array changes.
