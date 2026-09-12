> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/path(forauxiliaryexecutable:)](https://developer.apple.com/documentation/foundation/bundle/path(forauxiliaryexecutable:))

# path(forAuxiliaryExecutable:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the full pathname of the executable with the specified name in the receiver’s bundle.

## Declaration

```swift
func path(forAuxiliaryExecutable executableName: String) -> String?
```

## Parameters

- `executableName`: The name of an executable file.

<a id="return-value"></a>

## Return Value

The full pathname of the executable `executableName` in the receiver’s bundle.

<a id="Discussion"></a>

## Discussion

This method returns the appropriate path for modern application and framework bundles. This method may not return a path for non-standard bundle formats or for some older bundle formats.

## See Also

### Getting the standard bundle directories

- [resourceURL](resourceurl.md): The file URL of the bundle’s subdirectory containing resource files.
- [executableURL](executableurl.md): The file URL of the receiver’s executable file.
- [privateFrameworksURL](privateframeworksurl.md): The file URL of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksURL](sharedframeworksurl.md): The file URL of the receiver’s subdirectory containing shared frameworks.
- [builtInPlugInsURL](builtinpluginsurl.md): The file URL of the receiver’s subdirectory containing plug-ins.
- [url(forAuxiliaryExecutable:)](url%28forauxiliaryexecutable_%29.md): Returns the file URL of the executable with the specified name in the receiver’s bundle.
- [sharedSupportURL](sharedsupporturl.md): The file URL of the bundle’s subdirectory containing shared support files.
- [appStoreReceiptURL](appstorereceipturl.md): Deprecated. The file URL for the bundle’s App Store receipt.
- [resourcePath](resourcepath.md): The full pathname of the bundle’s subdirectory containing resources.
- [executablePath](executablepath.md): The full pathname of the receiver’s executable file.
- [privateFrameworksPath](privateframeworkspath.md): The full pathname of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksPath](sharedframeworkspath.md): The full pathname of the bundle’s subdirectory containing shared frameworks.
- [builtInPlugInsPath](builtinpluginspath.md): The full pathname of the receiver’s subdirectory containing plug-ins.
- [sharedSupportPath](sharedsupportpath.md): The full pathname of the bundle’s subdirectory containing shared support files.

# pathForAuxiliaryExecutable: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the full pathname of the executable with the specified name in the receiver’s bundle.

## Declaration

```objectivec
- (NSString *) pathForAuxiliaryExecutable:(NSString *) executableName;
```

## Parameters

- `executableName`: The name of an executable file.

<a id="return-value"></a>

## Return Value

The full pathname of the executable `executableName` in the receiver’s bundle.

<a id="Discussion"></a>

## Discussion

This method returns the appropriate path for modern application and framework bundles. This method may not return a path for non-standard bundle formats or for some older bundle formats.

## See Also

### Getting the standard bundle directories

- [resourceURL](resourceurl.md): The file URL of the bundle’s subdirectory containing resource files.
- [executableURL](executableurl.md): The file URL of the receiver’s executable file.
- [privateFrameworksURL](privateframeworksurl.md): The file URL of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksURL](sharedframeworksurl.md): The file URL of the receiver’s subdirectory containing shared frameworks.
- [builtInPlugInsURL](builtinpluginsurl.md): The file URL of the receiver’s subdirectory containing plug-ins.
- [URLForAuxiliaryExecutable:](url%28forauxiliaryexecutable_%29.md): Returns the file URL of the executable with the specified name in the receiver’s bundle.
- [sharedSupportURL](sharedsupporturl.md): The file URL of the bundle’s subdirectory containing shared support files.
- [appStoreReceiptURL](appstorereceipturl.md): Deprecated. The file URL for the bundle’s App Store receipt.
- [resourcePath](resourcepath.md): The full pathname of the bundle’s subdirectory containing resources.
- [executablePath](executablepath.md): The full pathname of the receiver’s executable file.
- [privateFrameworksPath](privateframeworkspath.md): The full pathname of the bundle’s subdirectory containing private frameworks.
- [sharedFrameworksPath](sharedframeworkspath.md): The full pathname of the bundle’s subdirectory containing shared frameworks.
- [builtInPlugInsPath](builtinpluginspath.md): The full pathname of the receiver’s subdirectory containing plug-ins.
- [sharedSupportPath](sharedsupportpath.md): The full pathname of the bundle’s subdirectory containing shared support files.
