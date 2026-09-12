> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/list(name:key:description:list:initialvalue:neutralvalue:cameravalue:)](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/list(name:key:description:list:initialvalue:neutralvalue:cameravalue:))

# list(name:key:description:list:initialValue:neutralValue:cameraValue:)

**Framework:** MediaExtension  
**Kind:** Type Method  
**Availability:** macOS 15.0+

## Declaration

```swift
class func list(name: String, key: String, description: String, list listElements: [MERAWProcessingParameter.ListElement], initialValue: Int, neutralValue: Int?, cameraValue: Int?) -> MERAWProcessingParameter.List
```

## See Also

### Class methods

- [boolean(name:key:description:initialValue:neutralValue:cameraValue:)](boolean%28name_key_description_initialvalue_neutralvalue_cameravalue_%29.md)
- [integer(name:key:description:initialValue:maximum:minimum:neutralValue:cameraValue:)](integer%28name_key_description_initialvalue_maximum_minimum_neutralvalue_cameravalue_%29.md)
- [listElement(name:description:elementID:)](listelement%28name_description_elementid_%29.md)
- [subGroup(name:description:parameters:)](subgroup%28name_description_parameters_%29.md)
- [float(name:key:description:initialValue:maximum:minimum:neutralValue:cameraValue:)](float%28name_key_description_initialvalue_maximum_minimum_neutralvalue_cameravalue_%29.md)
