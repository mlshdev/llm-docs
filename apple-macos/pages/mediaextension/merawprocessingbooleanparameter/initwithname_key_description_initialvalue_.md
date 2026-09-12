> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingbooleanparameter/initwithname:key:description:initialvalue:](https://developer.apple.com/documentation/mediaextension/merawprocessingbooleanparameter/initwithname:key:description:initialvalue:)

# initWithName:key:description:initialValue:

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Creates a Boolean parameter object with the initial value.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name key:(NSString *) key description:(NSString *) description initialValue:(BOOL) initialValue;
```

## Parameters

- `name`: A localized human-readable name for the parameter, suitable for displaying in application UI.
- `key`: A unique key string identifying this parameter.
- `description`: A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- `initialValue`: The initial value of this parameter as defined in the sequence metadata.

<a id="return-value"></a>

## Return Value

An instance of [MERAWProcessingBooleanParameter](../merawprocessingparameter/boolean.md).

## See Also

### Creating a boolean parameter object

- [initWithName:key:description:initialValue:cameraValue:](initwithname_key_description_initialvalue_cameravalue_.md): Creates a Boolean parameter object with the initial and camera values.
- [initWithName:key:description:initialValue:neutralValue:](initwithname_key_description_initialvalue_neutralvalue_.md): Creates a Boolean parameter object with the initial and neutral values.
- [initWithName:key:description:initialValue:neutralValue:cameraValue:](initwithname_key_description_initialvalue_neutralvalue_cameravalue_.md): Creates a Boolean parameter object with the initial, neutral, and camera values.
