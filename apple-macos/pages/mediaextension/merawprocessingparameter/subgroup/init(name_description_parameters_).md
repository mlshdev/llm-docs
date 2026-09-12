> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/subgroup/init(name:description:parameters:)](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/subgroup/init(name:description:parameters:))

# init(name:description:parameters:) (Swift)

**Framework:** MediaExtension  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a sub group parameter object with the parameters value.

## Declaration

```swift
init(name: String, description: String, parameters: [MERAWProcessingParameter])
```

## Parameters

- `name`: A localized human-readable name for the parameter, suitable for displaying in application UI.
- `description`: A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- `parameters`: The array of [MERAWProcessingParameter](../../merawprocessingparameter.md) objects in the sub group.

<a id="return-value"></a>

## Return Value

An instance of [MERAWProcessingParameter.SubGroup](../subgroup.md).

# initWithName:description:parameters: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Creates a sub group parameter object with the parameters value.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name description:(NSString *) description parameters:(NSArray<MERAWProcessingParameter *> *) parameters;
```

## Parameters

- `name`: A localized human-readable name for the parameter, suitable for displaying in application UI.
- `description`: A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- `parameters`: The array of [MERAWProcessingParameter](../../merawprocessingparameter.md) objects in the sub group.

<a id="return-value"></a>

## Return Value

An instance of [MERAWProcessingSubGroupParameter](../subgroup.md).
