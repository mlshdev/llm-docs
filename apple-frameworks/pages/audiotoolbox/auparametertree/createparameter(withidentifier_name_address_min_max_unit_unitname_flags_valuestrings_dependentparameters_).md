> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparametertree/createparameter(withidentifier:name:address:min:max:unit:unitname:flags:valuestrings:dependentparameters:)](https://developer.apple.com/documentation/audiotoolbox/auparametertree/createparameter(withidentifier:name:address:min:max:unit:unitname:flags:valuestrings:dependentparameters:))

# createParameter(withIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a single parameter object.

## Declaration

```swift
class func createParameter(withIdentifier identifier: String, name: String, address: AUParameterAddress, min: AUValue, max: AUValue, unit: AudioUnitParameterUnit, unitName: String?, flags: AudioUnitParameterOptions = [], valueStrings: [String]?, dependentParameters: [NSNumber]?) -> AUParameter
```

## Parameters

- `identifier`: The parameter’s non-localized, permanent name.
- `name`: The parameter’s localized name for display.
- `address`: The parameter’s address.
- `min`: The parameter’s minimum value.
- `max`: The parameter’s maximum value.
- `unit`: The parameter’s unit of measurement.
- `unitName`: The parameter’s localized unit name.
- `flags`: The parameter’s characteristic details.
- `valueStrings`: The parameter’s localized value strings.
- `dependentParameters`: Any other parameter’s whose values may change as a side effect of this parameter’s value changing.

<a id="return-value"></a>

## Return Value

A newly-initialized parameter object.

## See Also

### Related Documentation

- [AUParameter](../auparameter.md): An object that represents a single audio unit parameter.

### Audio Unit Implementations

- [createGroup(withIdentifier:name:children:)](creategroup%28withidentifier_name_children_%29.md): Creates a parameter group object.
- [createGroupTemplate(\_:)](creategrouptemplate%28__%29.md): Creates a template group which may be used as a prototype for further group instances.
- [createGroup(fromTemplate:identifier:name:addressOffset:)](creategroup%28fromtemplate_identifier_name_addressoffset_%29.md): Initializes a group as a copied instance of a template group.
- [createTree(withChildren:)](createtree%28withchildren_%29.md): Creates a parameter tree object.

# createParameterWithIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a single parameter object.

## Declaration

```objectivec
+ (AUParameter *) createParameterWithIdentifier:(NSString *) identifier name:(NSString *) name address:(AUParameterAddress) address min:(AUValue) min max:(AUValue) max unit:(AudioUnitParameterUnit) unit unitName:(NSString *) unitName flags:(AudioUnitParameterOptions) flags valueStrings:(NSArray<NSString *> *) valueStrings dependentParameters:(NSArray<NSNumber *> *) dependentParameters;
```

## Parameters

- `identifier`: The parameter’s non-localized, permanent name.
- `name`: The parameter’s localized name for display.
- `address`: The parameter’s address.
- `min`: The parameter’s minimum value.
- `max`: The parameter’s maximum value.
- `unit`: The parameter’s unit of measurement.
- `unitName`: The parameter’s localized unit name.
- `flags`: The parameter’s characteristic details.
- `valueStrings`: The parameter’s localized value strings.
- `dependentParameters`: Any other parameter’s whose values may change as a side effect of this parameter’s value changing.

<a id="return-value"></a>

## Return Value

A newly-initialized parameter object.

## See Also

### Related Documentation

- [AUParameter](../auparameter.md): An object that represents a single audio unit parameter.

### Audio Unit Implementations

- [createGroupWithIdentifier:name:children:](creategroup%28withidentifier_name_children_%29.md): Creates a parameter group object.
- [createGroupTemplate:](creategrouptemplate%28__%29.md): Creates a template group which may be used as a prototype for further group instances.
- [createGroupFromTemplate:identifier:name:addressOffset:](creategroup%28fromtemplate_identifier_name_addressoffset_%29.md): Initializes a group as a copied instance of a template group.
- [createTreeWithChildren:](createtree%28withchildren_%29.md): Creates a parameter tree object.
