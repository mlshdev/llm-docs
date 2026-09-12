> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsstatfsresult/filesystemsubtype](https://developer.apple.com/documentation/fskit/fsstatfsresult/filesystemsubtype)

# fileSystemSubType (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A property for the file system’s subtype or flavor.

## Declaration

```swift
var fileSystemSubType: Int { get set }
```

<a id="discussion"></a>

## Discussion

Match this value to the `FSPersonalities`‘s `FSSubType` attribute, if it exists within the `EXAppExtensionAttributes` dictionary of the module’s `Info.plist`.

# fileSystemSubType (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A property for the file system’s subtype or flavor.

## Declaration

```objectivec
@property NSInteger fileSystemSubType;
```

<a id="discussion"></a>

## Discussion

Match this value to the `FSPersonalities`‘s `FSSubType` attribute, if it exists within the `EXAppExtensionAttributes` dictionary of the module’s `Info.plist`.
