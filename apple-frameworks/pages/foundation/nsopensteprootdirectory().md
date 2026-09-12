> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsopensteprootdirectory()](https://developer.apple.com/documentation/foundation/nsopensteprootdirectory())

# NSOpenStepRootDirectory() (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the root directory of the user’s system.

## Declaration

```swift
func NSOpenStepRootDirectory() -> String
```

<a id="return-value"></a>

## Return Value

A string identifying the root directory of the user’s system.

<a id="Discussion"></a>

## Discussion

For more information on file system utilities, see Low-Level File Management Programming Topics.

## See Also

### Related Documentation

- [NSHomeDirectory()](nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSHomeDirectoryForUser(\_:)](nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.

### Locating system directories

- [url(for:in:appropriateFor:create:)](filemanager/url%28for_in_appropriatefor_create_%29.md): Locates and optionally creates the specified common directory in a domain.
- [urls(for:in:)](filemanager/urls%28for_in_%29.md): Returns an array of URLs for the specified common directory in the requested domains.
- [NSSearchPathForDirectoriesInDomains(\_:\_:\_:)](nssearchpathfordirectoriesindomains%28______%29.md): Creates a list of directory search paths.

# NSOpenStepRootDirectory (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the root directory of the user’s system.

## Declaration

```objectivec
extern NSString *NSOpenStepRootDirectory();
```

<a id="return-value"></a>

## Return Value

A string identifying the root directory of the user’s system.

<a id="Discussion"></a>

## Discussion

For more information on file system utilities, see Low-Level File Management Programming Topics.

## See Also

### Related Documentation

- [NSHomeDirectory](nshomedirectory%28%29.md): Returns the path to either the user’s or application’s home directory, depending on the platform.
- [NSHomeDirectoryForUser](nshomedirectoryforuser%28__%29.md): Returns the path to a given user’s home directory.

### Locating system directories

- [URLForDirectory:inDomain:appropriateForURL:create:error:](filemanager/url%28for_in_appropriatefor_create_%29.md): Locates and optionally creates the specified common directory in a domain.
- [URLsForDirectory:inDomains:](filemanager/urls%28for_in_%29.md): Returns an array of URLs for the specified common directory in the requested domains.
- [NSSearchPathForDirectoriesInDomains](nssearchpathfordirectoriesindomains%28______%29.md): Creates a list of directory search paths.
