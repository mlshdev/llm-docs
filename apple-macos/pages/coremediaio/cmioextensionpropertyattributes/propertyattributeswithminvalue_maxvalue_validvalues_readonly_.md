> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionpropertyattributes/propertyattributeswithminvalue:maxvalue:validvalues:readonly:](https://developer.apple.com/documentation/coremediaio/cmioextensionpropertyattributes/propertyattributeswithminvalue:maxvalue:validvalues:readonly:)

# propertyAttributesWithMinValue:maxValue:validValues:readOnly:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new property attributes object with the specified configuration.

## Declaration

```objectivec
+ (instancetype) propertyAttributesWithMinValue:(ObjectType) minValue maxValue:(ObjectType) maxValue validValues:(NSArray<id> *) validValues readOnly:(BOOL) readOnly;
```

## Parameters

- `minValue`: An optional minimum value for the property.
- `maxValue`: An optional maximum value for the property.
- `validValues`: An optional array of valid values for the property.
- `readOnly`: A Boolean value that indicates whether the property is read-only.

<a id="return-value"></a>

## Return Value

A new property attributes object.

<a id="Discussion"></a>

## Discussion

Configure the attributes of a property by optionally specifying:

- A minimum or maximum value to restrict the range of values a property supports.
- An array of valid values to restrict the property to discrete values.

If you don’t specify minimum, maximum, or valid values, the property supports any value.

## See Also

### Creating Property Attributes

- [initWithMinValue:maxValue:validValues:readOnly:](init%28minvalue_maxvalue_validvalues_readonly_%29.md): Creates a property attributes object with the specified configuration.
