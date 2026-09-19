> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsstatfsresult/filesystemtypename

# fileSystemTypeName (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A property for the file system type name.

## Declaration

```swift
var fileSystemTypeName: String { get }
```

<a id="discussion"></a>

## Discussion

Match this value to the `FSShortName` attribute within the `EXAppExtensionAttributes` dictionary of the module’s `Info.plist`. The maximum allowed length is `MFSTYPENAMELEN`, including the terminating `NUL` character.

# fileSystemTypeName (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A property for the file system type name.

## Declaration

```objectivec
@property (copy, readonly) NSString * fileSystemTypeName;
```

<a id="discussion"></a>

## Discussion

Match this value to the `FSShortName` attribute within the `EXAppExtensionAttributes` dictionary of the module’s `Info.plist`. The maximum allowed length is `MFSTYPENAMELEN`, including the terminating `NUL` character.
