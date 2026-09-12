> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrenderer/setinputvalueswithpropertylist(_:)](https://developer.apple.com/documentation/quartz/qccompositionrenderer/setinputvalueswithpropertylist(_:))

# setInputValuesWithPropertyList(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the values for the input keys of the composition from a previously saved property list.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func setInputValuesWithPropertyList(_ plist: Any!)
```

<a id="Discussion"></a>

## Discussion

This is a convenience method that allows you to restore the set of input values that you obtained previously by calling the method [propertyListFromInputValues()](propertylistfrominputvalues%28%29.md). If the property list object does not define a value for an input key, or if the value is not of the proper type, Quartz Composer does not set a value for the corresponding input port.

## See Also

### Saving and Restoring Input Values

- [propertyListFromInputValues()](propertylistfrominputvalues%28%29.md): Deprecated. Returns a property list object that represents the current values for all the input keys of the composition.

# setInputValuesWithPropertyList: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the values for the input keys of the composition from a previously saved property list.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) setInputValuesWithPropertyList:(id) plist;
```

<a id="Discussion"></a>

## Discussion

This is a convenience method that allows you to restore the set of input values that you obtained previously by calling the method [propertyListFromInputValues](propertylistfrominputvalues%28%29.md). If the property list object does not define a value for an input key, or if the value is not of the proper type, Quartz Composer does not set a value for the corresponding input port.

## See Also

### Saving and Restoring Input Values

- [propertyListFromInputValues](propertylistfrominputvalues%28%29.md): Deprecated. Returns a property list object that represents the current values for all the input keys of the composition.
