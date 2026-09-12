> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeyboardtypeheader/1390499-keyboardtypefirst](https://developer.apple.com/documentation/coreservices/uckeyboardtypeheader/1390499-keyboardtypefirst)

# keyboardTypeFirst (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An unsigned 32-bit integer specifying the first keyboard type in this entry. For the initial entry (that is, the default entry) in an array of `UCKeyboardTypeHeader` structures, you should set this value to 0. The initial `UCKeyboardTypeHeader` entry is used if the keyboard type passed to the function [UCKeyTranslate(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../1390584-uckeytranslate.md) does not match any other entry, that is, if it is not within the range of values specified by `keyboardTypeFirst` and `keyboardTypeLast` for any entry.

## Declaration

```swift
var keyboardTypeFirst: UInt32
```

# keyboardTypeFirst (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An unsigned 32-bit integer specifying the first keyboard type in this entry. For the initial entry (that is, the default entry) in an array of `UCKeyboardTypeHeader` structures, you should set this value to 0. The initial `UCKeyboardTypeHeader` entry is used if the keyboard type passed to the function [UCKeyTranslate](../1390584-uckeytranslate.md) does not match any other entry, that is, if it is not within the range of values specified by `keyboardTypeFirst` and `keyboardTypeLast` for any entry.

## Declaration

```objectivec
UInt32 keyboardTypeFirst;
```
