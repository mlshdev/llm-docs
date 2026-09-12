> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwareobject/modelname](https://developer.apple.com/documentation/coreaudio/audiohardwareobject/modelname)

# modelName

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

A String that contains the human readable model name of the object. The model name differs from name in that two objects of the same model will have the same value for this property but may have different values for name.

## Declaration

```swift
var modelName: String { get throws }
```
