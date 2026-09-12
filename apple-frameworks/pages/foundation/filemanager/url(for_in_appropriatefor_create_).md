> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/url(for:in:appropriatefor:create:)](https://developer.apple.com/documentation/foundation/filemanager/url(for:in:appropriatefor:create:))

# url(for:in:appropriateFor:create:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Locates and optionally creates the specified common directory in a domain.

## Declaration

```swift
func url(for directory: FileManager.SearchPathDirectory, in domain: FileManager.SearchPathDomainMask, appropriateFor url: URL?, create shouldCreate: Bool) throws -> URL
```

## Parameters

- `directory`: The search path directory. The supported values are described in [FileManager.SearchPathDirectory](searchpathdirectory.md).
- `domain`: The file system domain to search. The value for this parameter is one of the constants described in [FileManager.SearchPathDomainMask](searchpathdomainmask.md). You should specify only one domain for your search and you may not specify the [allDomainsMask](searchpathdomainmask/alldomainsmask.md) constant for this parameter.
- `url`: The file URL used to determine the location of the returned URL. Only the volume of this parameter is used.

  This parameter is ignored unless the `directory` parameter contains the value [FileManager.SearchPathDirectory.itemReplacementDirectory](searchpathdirectory/itemreplacementdirectory.md) and the `domain` parameter contains the value [userDomainMask](searchpathdomainmask/userdomainmask.md).
- `shouldCreate`: Whether to create the directory if it does not already exist.

  When creating a temporary directory, this parameter is ignored and the directory is always created.

<a id="return-value"></a>

## Return Value

The [NSURL](../nsurl.md) for the requested directory. When using Objective-C, if an error occurs, this method returns `nil` and assigns an appropriate error object to the `error` parameter.

<a id="Discussion"></a>

## Discussion

You typically use this method to locate one of the standard system directories, such as the `Documents`, `Application Support` or `Caches` directories. After locating (or creating) the desired directory, this method returns the URL for that directory. If more than one appropriate directory exists in the specified domain, this method returns only the first one it finds.

> **Important**

>  Passing a directory and domain pair that makes no sense (for example [FileManager.SearchPathDirectory.desktopDirectory](searchpathdirectory/desktopdirectory.md) and [networkDomainMask](searchpathdomainmask/networkdomainmask.md)) raises an exception.

You can use this method to create a new temporary directory. To do so, specify [FileManager.SearchPathDirectory.itemReplacementDirectory](searchpathdirectory/itemreplacementdirectory.md) for the `directory` parameter, [userDomainMask](searchpathdomainmask/userdomainmask.md) for the `domain` parameter, and a URL for the `url` parameter which determines the volume of the returned URL.

For example, the following code results in a new temporary directory with a path in the form of `/private/var/folders/d0/h37cw8ns3h1bfr_2gnwq2yyc0000gn/T/TemporaryItems/Untitled/`:

**Swift**

```swift
let desktop = URL(fileURLWithPath: "/Users/jappleseed/Desktop/")

do {
    let temporaryDirectory = try FileManager.default.url(
        for: .itemReplacementDirectory,
        in: .userDomainMask,
        appropriateFor: desktop,
        create: true
    )
    
    print(temporaryDirectory)
} catch {
    // Handle the error.
}
```

**Objective-C**

```objc
NSURL *desktopURL = [NSURL fileURLWithPath:@"/Users/jappleseed/Desktop/"
                               isDirectory:YES];
NSError *error = nil;

NSURL *temporaryDirectoryURL = [[NSFileManager defaultManager] URLForDirectory:NSItemReplacementDirectory
                                                                      inDomain:NSUserDomainMask
                                                             appropriateForURL:desktopURL
                                                                        create:YES
                                                                         error:&error];
NSLog(@"%@", temporaryDirectoryURL);

if (error) {
    // Handle the error.
}
```

> **Important**

>  If you use this method to create a temporary directory, you should not rely on the existence of that temporary directory after the app is exited. It is recommended that you remove any temporary directories that are created after they’re no longer needed.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Locating system directories

- [urls(for:in:)](urls%28for_in_%29.md): Returns an array of URLs for the specified common directory in the requested domains.
- [NSSearchPathForDirectoriesInDomains(\_:\_:\_:)](../nssearchpathfordirectoriesindomains%28______%29.md): Creates a list of directory search paths.
- [NSOpenStepRootDirectory()](../nsopensteprootdirectory%28%29.md): Returns the root directory of the user’s system.

# URLForDirectory:inDomain:appropriateForURL:create:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Locates and optionally creates the specified common directory in a domain.

## Declaration

```objectivec
- (NSURL *) URLForDirectory:(NSSearchPathDirectory) directory inDomain:(NSSearchPathDomainMask) domain appropriateForURL:(NSURL *) url create:(BOOL) shouldCreate error:(NSError **) error;
```

## Parameters

- `directory`: The search path directory. The supported values are described in [NSSearchPathDirectory](searchpathdirectory.md).
- `domain`: The file system domain to search. The value for this parameter is one of the constants described in [NSSearchPathDomainMask](searchpathdomainmask.md). You should specify only one domain for your search and you may not specify the [NSAllDomainsMask](searchpathdomainmask/alldomainsmask.md) constant for this parameter.
- `url`: The file URL used to determine the location of the returned URL. Only the volume of this parameter is used.

  This parameter is ignored unless the `directory` parameter contains the value [NSItemReplacementDirectory](searchpathdirectory/itemreplacementdirectory.md) and the `domain` parameter contains the value [NSUserDomainMask](searchpathdomainmask/userdomainmask.md).
- `shouldCreate`: Whether to create the directory if it does not already exist.

  When creating a temporary directory, this parameter is ignored and the directory is always created.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

The [NSURL](../nsurl.md) for the requested directory. When using Objective-C, if an error occurs, this method returns `nil` and assigns an appropriate error object to the `error` parameter.

<a id="Discussion"></a>

## Discussion

You typically use this method to locate one of the standard system directories, such as the `Documents`, `Application Support` or `Caches` directories. After locating (or creating) the desired directory, this method returns the URL for that directory. If more than one appropriate directory exists in the specified domain, this method returns only the first one it finds.

> **Important**

>  Passing a directory and domain pair that makes no sense (for example [NSDesktopDirectory](searchpathdirectory/desktopdirectory.md) and [NSNetworkDomainMask](searchpathdomainmask/networkdomainmask.md)) raises an exception.

You can use this method to create a new temporary directory. To do so, specify [NSItemReplacementDirectory](searchpathdirectory/itemreplacementdirectory.md) for the `directory` parameter, [NSUserDomainMask](searchpathdomainmask/userdomainmask.md) for the `domain` parameter, and a URL for the `url` parameter which determines the volume of the returned URL.

For example, the following code results in a new temporary directory with a path in the form of `/private/var/folders/d0/h37cw8ns3h1bfr_2gnwq2yyc0000gn/T/TemporaryItems/Untitled/`:

**Swift**

```swift
let desktop = URL(fileURLWithPath: "/Users/jappleseed/Desktop/")

do {
    let temporaryDirectory = try FileManager.default.url(
        for: .itemReplacementDirectory,
        in: .userDomainMask,
        appropriateFor: desktop,
        create: true
    )
    
    print(temporaryDirectory)
} catch {
    // Handle the error.
}
```

**Objective-C**

```objc
NSURL *desktopURL = [NSURL fileURLWithPath:@"/Users/jappleseed/Desktop/"
                               isDirectory:YES];
NSError *error = nil;

NSURL *temporaryDirectoryURL = [[NSFileManager defaultManager] URLForDirectory:NSItemReplacementDirectory
                                                                      inDomain:NSUserDomainMask
                                                             appropriateForURL:desktopURL
                                                                        create:YES
                                                                         error:&error];
NSLog(@"%@", temporaryDirectoryURL);

if (error) {
    // Handle the error.
}
```

> **Important**

>  If you use this method to create a temporary directory, you should not rely on the existence of that temporary directory after the app is exited. It is recommended that you remove any temporary directories that are created after they’re no longer needed.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Locating system directories

- [URLsForDirectory:inDomains:](urls%28for_in_%29.md): Returns an array of URLs for the specified common directory in the requested domains.
- [NSSearchPathForDirectoriesInDomains](../nssearchpathfordirectoriesindomains%28______%29.md): Creates a list of directory search paths.
- [NSOpenStepRootDirectory](../nsopensteprootdirectory%28%29.md): Returns the root directory of the user’s system.
