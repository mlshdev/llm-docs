> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/resourcepath](https://developer.apple.com/documentation/foundation/bundle/resourcepath)

# resourcePath (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The full pathname of the bundle’s subdirectory containing resources.

## Declaration

```swift
var resourcePath: String? { get }
```

## See Also

### Related Documentation

- [bundlePath](bundlepath.md): The full pathname of the receiver’s bundle directory.

### Getting the standard bundle directories

- [resourceURL](resourceurl.md): The file URL of the bundle’s subdirectory containing resource files.
- [executableURL](executableurl.md): The file URL of the receiver’s executable file.
- [privateFrameworksURL](privateframeworksurl.md): The file URL of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksURL](sharedframeworksurl.md): The file URL of the receiver’s subdirectory containing shared frameworks.
- [builtInPlugInsURL](builtinpluginsurl.md): The file URL of the receiver’s subdirectory containing plug-ins.
- [url(forAuxiliaryExecutable:)](url%28forauxiliaryexecutable_%29.md): Returns the file URL of the executable with the specified name in the receiver’s bundle.
- [sharedSupportURL](sharedsupporturl.md): The file URL of the bundle’s subdirectory containing shared support files.
- [appStoreReceiptURL](appstorereceipturl.md): Deprecated. The file URL for the bundle’s App Store receipt.
- [executablePath](executablepath.md): The full pathname of the receiver’s executable file.
- [privateFrameworksPath](privateframeworkspath.md): The full pathname of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksPath](sharedframeworkspath.md): The full pathname of the bundle’s subdirectory containing shared frameworks.
- [builtInPlugInsPath](builtinpluginspath.md): The full pathname of the receiver’s subdirectory containing plug-ins.
- [path(forAuxiliaryExecutable:)](path%28forauxiliaryexecutable_%29.md): Returns the full pathname of the executable with the specified name in the receiver’s bundle.
- [sharedSupportPath](sharedsupportpath.md): The full pathname of the bundle’s subdirectory containing shared support files.

# resourcePath (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The full pathname of the bundle’s subdirectory containing resources.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * resourcePath;
```

## See Also

### Related Documentation

- [bundlePath](bundlepath.md): The full pathname of the receiver’s bundle directory.

### Getting the standard bundle directories

- [resourceURL](resourceurl.md): The file URL of the bundle’s subdirectory containing resource files.
- [executableURL](executableurl.md): The file URL of the receiver’s executable file.
- [privateFrameworksURL](privateframeworksurl.md): The file URL of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksURL](sharedframeworksurl.md): The file URL of the receiver’s subdirectory containing shared frameworks.
- [builtInPlugInsURL](builtinpluginsurl.md): The file URL of the receiver’s subdirectory containing plug-ins.
- [URLForAuxiliaryExecutable:](url%28forauxiliaryexecutable_%29.md): Returns the file URL of the executable with the specified name in the receiver’s bundle.
- [sharedSupportURL](sharedsupporturl.md): The file URL of the bundle’s subdirectory containing shared support files.
- [appStoreReceiptURL](appstorereceipturl.md): Deprecated. The file URL for the bundle’s App Store receipt.
- [executablePath](executablepath.md): The full pathname of the receiver’s executable file.
- [privateFrameworksPath](privateframeworkspath.md): The full pathname of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksPath](sharedframeworkspath.md): The full pathname of the bundle’s subdirectory containing shared frameworks.
- [builtInPlugInsPath](builtinpluginspath.md): The full pathname of the receiver’s subdirectory containing plug-ins.
- [pathForAuxiliaryExecutable:](path%28forauxiliaryexecutable_%29.md): Returns the full pathname of the executable with the specified name in the receiver’s bundle.
- [sharedSupportPath](sharedsupportpath.md): The full pathname of the bundle’s subdirectory containing shared support files.
