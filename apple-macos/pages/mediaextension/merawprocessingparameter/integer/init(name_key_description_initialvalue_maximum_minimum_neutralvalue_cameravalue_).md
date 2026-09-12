> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/integer/init(name:key:description:initialvalue:maximum:minimum:neutralvalue:cameravalue:)](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/integer/init(name:key:description:initialvalue:maximum:minimum:neutralvalue:cameravalue:))

# init(name:key:description:initialValue:maximum:minimum:neutralValue:cameraValue:)

**Framework:** MediaExtension  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates an integer parameter object.

## Declaration

```swift
convenience init(name: String, key: String, description: String, initialValue: Int, maximum: Int, minimum: Int, neutralValue: Int? = nil, cameraValue: Int? = nil)
```

## Parameters

- `name`: A localized human-readable name for the parameter, suitable for displaying in application UI.
- `key`: A unique key string identifying this parameter.
- `description`: A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- `initialValue`: The initial value of this parameter as defined in the sequence metadata.
- `maximum`: The maximum value of this parameter.
- `minimum`: The minimum value of this parameter.
- `neutralValue`: The neutral value of this parameter.
- `cameraValue`: The camera value for this parameter.
