> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/sharedsupporturl](https://developer.apple.com/documentation/foundation/bundle/sharedsupporturl)

# sharedSupportURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file URL of the bundle’s subdirectory containing shared support files.

## Declaration

```swift
var sharedSupportURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains  the appropriate path for modern application and framework bundles. This property may not contain a path for non-standard bundle formats or for some older bundle formats.

## See Also

### Getting the standard bundle directories

- [resourceURL](resourceurl.md): The file URL of the bundle’s subdirectory containing resource files.
- [executableURL](executableurl.md): The file URL of the receiver’s executable file.
- [privateFrameworksURL](privateframeworksurl.md): The file URL of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksURL](sharedframeworksurl.md): The file URL of the receiver’s subdirectory containing shared frameworks.
- [builtInPlugInsURL](builtinpluginsurl.md): The file URL of the receiver’s subdirectory containing plug-ins.
- [url(forAuxiliaryExecutable:)](url%28forauxiliaryexecutable_%29.md): Returns the file URL of the executable with the specified name in the receiver’s bundle.
- [appStoreReceiptURL](appstorereceipturl.md): Deprecated. The file URL for the bundle’s App Store receipt.
- [resourcePath](resourcepath.md): The full pathname of the bundle’s subdirectory containing resources.
- [executablePath](executablepath.md): The full pathname of the receiver’s executable file.
- [privateFrameworksPath](privateframeworkspath.md): The full pathname of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksPath](sharedframeworkspath.md): The full pathname of the bundle’s subdirectory containing shared frameworks.
- [builtInPlugInsPath](builtinpluginspath.md): The full pathname of the receiver’s subdirectory containing plug-ins.
- [path(forAuxiliaryExecutable:)](path%28forauxiliaryexecutable_%29.md): Returns the full pathname of the executable with the specified name in the receiver’s bundle.
- [sharedSupportPath](sharedsupportpath.md): The full pathname of the bundle’s subdirectory containing shared support files.

# sharedSupportURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file URL of the bundle’s subdirectory containing shared support files.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * sharedSupportURL;
```

<a id="Discussion"></a>

## Discussion

This property contains  the appropriate path for modern application and framework bundles. This property may not contain a path for non-standard bundle formats or for some older bundle formats.

## See Also

### Getting the standard bundle directories

- [resourceURL](resourceurl.md): The file URL of the bundle’s subdirectory containing resource files.
- [executableURL](executableurl.md): The file URL of the receiver’s executable file.
- [privateFrameworksURL](privateframeworksurl.md): The file URL of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksURL](sharedframeworksurl.md): The file URL of the receiver’s subdirectory containing shared frameworks.
- [builtInPlugInsURL](builtinpluginsurl.md): The file URL of the receiver’s subdirectory containing plug-ins.
- [URLForAuxiliaryExecutable:](url%28forauxiliaryexecutable_%29.md): Returns the file URL of the executable with the specified name in the receiver’s bundle.
- [appStoreReceiptURL](appstorereceipturl.md): Deprecated. The file URL for the bundle’s App Store receipt.
- [resourcePath](resourcepath.md): The full pathname of the bundle’s subdirectory containing resources.
- [executablePath](executablepath.md): The full pathname of the receiver’s executable file.
- [privateFrameworksPath](privateframeworkspath.md): The full pathname of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksPath](sharedframeworkspath.md): The full pathname of the bundle’s subdirectory containing shared frameworks.
- [builtInPlugInsPath](builtinpluginspath.md): The full pathname of the receiver’s subdirectory containing plug-ins.
- [pathForAuxiliaryExecutable:](path%28forauxiliaryexecutable_%29.md): Returns the full pathname of the executable with the specified name in the receiver’s bundle.
- [sharedSupportPath](sharedsupportpath.md): The full pathname of the bundle’s subdirectory containing shared support files.
