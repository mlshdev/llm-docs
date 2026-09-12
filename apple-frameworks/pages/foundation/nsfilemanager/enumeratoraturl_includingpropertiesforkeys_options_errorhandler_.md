> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilemanager/enumeratoraturl:includingpropertiesforkeys:options:errorhandler:](https://developer.apple.com/documentation/foundation/nsfilemanager/enumeratoraturl:includingpropertiesforkeys:options:errorhandler:)

# enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified URL.

## Declaration

```objectivec
- (NSDirectoryEnumerator<NSURL *> *) enumeratorAtURL:(NSURL *) url includingPropertiesForKeys:(NSArray<NSString *> *) keys options:(NSDirectoryEnumerationOptions) mask errorHandler:(BOOL (^)(NSURL *url, NSError *error)) handler;
```

## Parameters

- `url`: The location of the directory for which you want an enumeration. This URL must not be a symbolic link that points to the desired directory. You can use the [URLByResolvingSymlinksInPath](../nsurl/resolvingsymlinksinpath.md) method to resolve any symlinks in the URL.
- `keys`: An array of keys that identify the properties that you want pre-fetched for each item in the enumeration. The values for these keys are cached in the corresponding [NSURL](../nsurl.md) objects. You may specify `nil` for this parameter. For a list of keys you can specify, see [NSURLResourceKey](../urlresourcekey.md).
- `mask`: Options for the enumeration. For a list of valid options, see [NSDirectoryEnumerationOptions](../filemanager/directoryenumerationoptions.md).
- `handler`: An optional error handler block for the file manager to call when an error occurs. The handler block should return [true](https://developer.apple.com/documentation/swift/true) if you want the enumeration to continue or [false](https://developer.apple.com/documentation/swift/false) if you want the enumeration to stop. The block takes the following parameters:

  - **url**: An [NSURL](../nsurl.md) object that identifies the item for which the error occurred.
  - **error**: An [NSError](../nserror.md) object that contains information about the error.

  If you specify `nil` for this parameter, the enumerator object continues to enumerate items as if you had specified a block that returned [true](https://developer.apple.com/documentation/swift/true).

<a id="return-value"></a>

## Return Value

An directory enumerator object that enumerates the contents of the directory at `url`. If `url` is a filename, the method returns an enumerator object that enumerates no files—the first call to [nextObject](../nsenumerator/nextobject%28%29.md) returns `nil`.

<a id="Discussion"></a>

## Discussion

Because the enumeration is deep—that is, it lists the contents of all subdirectories—this enumerator object is useful for performing actions that involve large file-system subtrees. If the method is passed a directory on which another file system is mounted (a mount point), it traverses the mount point. This method does not resolve symbolic links or mount points encountered in the enumeration process, nor does it recurse through them if they point to a directory.

For example, if you pass a URL that points to `/Volumes/MyMountedFileSystem`, the returned enumerator will include the entire directory structure for the file system mounted at that location. If, on the other hand, you pass `/Volumes`, the returned enumerator will include `/Volumes/MyMountedFileSystem` as one of its results, but will not traverse into the file system mounted there.

The [NSDirectoryEnumerator](../filemanager/directoryenumerator.md) class has methods for skipping descendants of the existing path and for returning the number of levels deep the current object is in the directory hierarchy being enumerated (where the directory passed to [enumeratorAtURL:includingPropertiesForKeys:options:errorHandler:](enumeratoraturl_includingpropertiesforkeys_options_errorhandler_.md) is considered to be level 0).

This code fragment enumerates a URL and its subdirectories, collecting the URLs of files (skips directories). It also demonstrates how to ignore the contents of specified directories, in this case directories named “`_extras`”.

```objc
NSURL *directoryURL = [[NSBundle mainBundle] bundleURL];
NSFileManager *localFileManager= [[NSFileManager alloc] init];
NSDirectoryEnumerator *directoryEnumerator =
   [localFileManager enumeratorAtURL:directoryURL
          includingPropertiesForKeys:@[NSURLNameKey, NSURLIsDirectoryKey]
                             options:NSDirectoryEnumerationSkipsHiddenFiles
                        errorHandler:nil];
 
NSMutableArray<NSURL *> *mutableFileURLs = [NSMutableArray array];
for (NSURL *fileURL in directoryEnumerator) {
    NSNumber *isDirectory = nil;
    [fileURL getResourceValue:&isDirectory forKey:NSURLIsDirectoryKey error:nil];
 
    if ([isDirectory boolValue]) {
        NSString *name = nil;
        [fileURL getResourceValue:&name forKey:NSURLNameKey error:nil];
 
        if ([name isEqualToString:@"_extras"]) {
            [directoryEnumerator skipDescendants];
        } else {
            [mutableFileURLs addObject:fileURL];
        }
    }
}
 
NSLog(@"Files: %@", mutableFileURLs);
```

## See Also

### Discovering directory contents

- [contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:](../filemanager/contentsofdirectory%28at_includingpropertiesforkeys_options_%29.md): Performs a shallow search of the specified directory and returns URLs for the contained items.
- [contentsOfDirectoryAtPath:error:](../filemanager/contentsofdirectory%28atpath_%29.md): Performs a shallow search of the specified directory and returns the paths of any contained items.
- [enumeratorAtPath:](../filemanager/enumerator%28atpath_%29.md): Returns a directory enumerator object that can be used to perform a deep enumeration of the directory at the specified path.
- [NSDirectoryEnumerator](../filemanager/directoryenumerator.md): An object that enumerates the contents of a directory.
- [mountedVolumeURLsIncludingResourceValuesForKeys:options:](../filemanager/mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md): Returns an array of URLs that identify the mounted volumes available on the device.
- [NSVolumeEnumerationOptions](../filemanager/volumeenumerationoptions.md): Options for enumerating mounted volumes with the [mountedVolumeURLsIncludingResourceValuesForKeys:options:](../filemanager/mountedvolumeurls%28includingresourcevaluesforkeys_options_%29.md) method.
- [subpathsOfDirectoryAtPath:error:](../filemanager/subpathsofdirectory%28atpath_%29.md): Performs a deep enumeration of the specified directory and returns the paths of all of the contained subdirectories.
- [subpathsAtPath:](../filemanager/subpaths%28atpath_%29.md): Returns an array of strings identifying the paths for all items in the specified directory.
