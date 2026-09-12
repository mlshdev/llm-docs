> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccompositionrenderer/propertylistfrominputvalues()](https://developer.apple.com/documentation/quartz/qccompositionrenderer/propertylistfrominputvalues())

# propertyListFromInputValues() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a property list object that represents the current values for all the input keys of the composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func propertyListFromInputValues() -> Any!
```

<a id="return-value"></a>

## Return Value

A property list object.

<a id="Discussion"></a>

## Discussion

This is a convenience method that allows you to easily save the set of input values on a composition. Typically, you store the set of values in application preferences.

## See Also

### Saving and Restoring Input Values

- [setInputValuesWithPropertyList(\_:)](setinputvalueswithpropertylist%28__%29.md): Deprecated. Sets the values for the input keys of the composition from a previously saved property list.

# propertyListFromInputValues (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns a property list object that represents the current values for all the input keys of the composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) propertyListFromInputValues;
```

<a id="return-value"></a>

## Return Value

A property list object.

<a id="Discussion"></a>

## Discussion

This is a convenience method that allows you to easily save the set of input values on a composition. Typically, you store the set of values in application preferences.

## See Also

### Saving and Restoring Input Values

- [setInputValuesWithPropertyList:](setinputvalueswithpropertylist%28__%29.md): Deprecated. Sets the values for the input keys of the composition from a previously saved property list.
