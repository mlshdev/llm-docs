> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/url(forauxiliaryexecutable:)](https://developer.apple.com/documentation/foundation/bundle/url(forauxiliaryexecutable:))

# url(forAuxiliaryExecutable:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the file URL of the executable with the specified name in the receiver’s bundle.

## Declaration

```swift
func url(forAuxiliaryExecutable executableName: String) -> URL?
```

## Parameters

- `executableName`: The name of an executable file.

<a id="return-value"></a>

## Return Value

The file URL of the executable `executableName` in the receiver’s bundle.

<a id="Discussion"></a>

## Discussion

This method returns the appropriate path for modern application and framework bundles. This method may not return a URL for non-standard bundle formats or for some older bundle formats.

## See Also

### Getting the standard bundle directories

- [resourceURL](resourceurl.md): The file URL of the bundle’s subdirectory containing resource files.
- [executableURL](executableurl.md): The file URL of the receiver’s executable file.
- [privateFrameworksURL](privateframeworksurl.md): The file URL of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksURL](sharedframeworksurl.md): The file URL of the receiver’s subdirectory containing shared frameworks.
- [builtInPlugInsURL](builtinpluginsurl.md): The file URL of the receiver’s subdirectory containing plug-ins.
- [sharedSupportURL](sharedsupporturl.md): The file URL of the bundle’s subdirectory containing shared support files.
- [appStoreReceiptURL](appstorereceipturl.md): Deprecated. The file URL for the bundle’s App Store receipt.
- [resourcePath](resourcepath.md): The full pathname of the bundle’s subdirectory containing resources.
- [executablePath](executablepath.md): The full pathname of the receiver’s executable file.
- [privateFrameworksPath](privateframeworkspath.md): The full pathname of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksPath](sharedframeworkspath.md): The full pathname of the bundle’s subdirectory containing shared frameworks.
- [builtInPlugInsPath](builtinpluginspath.md): The full pathname of the receiver’s subdirectory containing plug-ins.
- [path(forAuxiliaryExecutable:)](path%28forauxiliaryexecutable_%29.md): Returns the full pathname of the executable with the specified name in the receiver’s bundle.
- [sharedSupportPath](sharedsupportpath.md): The full pathname of the bundle’s subdirectory containing shared support files.

# URLForAuxiliaryExecutable: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the file URL of the executable with the specified name in the receiver’s bundle.

## Declaration

```objectivec
- (NSURL *) URLForAuxiliaryExecutable:(NSString *) executableName;
```

## Parameters

- `executableName`: The name of an executable file.

<a id="return-value"></a>

## Return Value

The file URL of the executable `executableName` in the receiver’s bundle.

<a id="Discussion"></a>

## Discussion

This method returns the appropriate path for modern application and framework bundles. This method may not return a URL for non-standard bundle formats or for some older bundle formats.

## See Also

### Getting the standard bundle directories

- [resourceURL](resourceurl.md): The file URL of the bundle’s subdirectory containing resource files.
- [executableURL](executableurl.md): The file URL of the receiver’s executable file.
- [privateFrameworksURL](privateframeworksurl.md): The file URL of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksURL](sharedframeworksurl.md): The file URL of the receiver’s subdirectory containing shared frameworks.
- [builtInPlugInsURL](builtinpluginsurl.md): The file URL of the receiver’s subdirectory containing plug-ins.
- [sharedSupportURL](sharedsupporturl.md): The file URL of the bundle’s subdirectory containing shared support files.
- [appStoreReceiptURL](appstorereceipturl.md): Deprecated. The file URL for the bundle’s App Store receipt.
- [resourcePath](resourcepath.md): The full pathname of the bundle’s subdirectory containing resources.
- [executablePath](executablepath.md): The full pathname of the receiver’s executable file.
- [privateFrameworksPath](privateframeworkspath.md): The full pathname of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksPath](sharedframeworkspath.md): The full pathname of the bundle’s subdirectory containing shared frameworks.
- [builtInPlugInsPath](builtinpluginspath.md): The full pathname of the receiver’s subdirectory containing plug-ins.
- [pathForAuxiliaryExecutable:](path%28forauxiliaryexecutable_%29.md): Returns the full pathname of the executable with the specified name in the receiver’s bundle.
- [sharedSupportPath](sharedsupportpath.md): The full pathname of the bundle’s subdirectory containing shared support files.
