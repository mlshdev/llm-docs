> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeyboardlayout/1390494-keyboardtypelist](https://developer.apple.com/documentation/coreservices/uckeyboardlayout/1390494-keyboardtypelist)

# keyboardTypeList (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A variable-length array containing structures of type `UCKeyboardTypeHeader`. Each `UCKeyboardTypeHeader` entry specifies a range of physical keyboard types and contains offsets to each of the key mapping sections to be used for that range of keyboard types.

## Declaration

```swift
var keyboardTypeList: UCKeyboardTypeHeader
```

# keyboardTypeList (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A variable-length array containing structures of type `UCKeyboardTypeHeader`. Each `UCKeyboardTypeHeader` entry specifies a range of physical keyboard types and contains offsets to each of the key mapping sections to be used for that range of keyboard types.

## Declaration

```objectivec
UCKeyboardTypeHeader keyboardTypeList[1];
```
