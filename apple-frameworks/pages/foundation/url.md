> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url](https://developer.apple.com/documentation/foundation/url)

# URL

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value that identifies the location of a resource, such as an item on a remote server or the path to a local file.

## Declaration

```swift
struct URL
```

## Mentioned In

- [Using the file system effectively](using-the-file-system-effectively.md)
- [Checking Volume Storage Capacity](checking-volume-storage-capacity.md)
- [Downloading files from websites](downloading-files-from-websites.md)
- [Encoding and Decoding Custom Types](encoding-and-decoding-custom-types.md)
- [Processing URL session data task results with Combine](processing-url-session-data-task-results-with-combine.md)

<a id="overview"></a>

## Overview

You can construct URLs and access their parts. For URLs that represent local files, you can also manipulate properties of those files directly, such as changing the file’s last modification date. Finally, you can pass URLs to other APIs to retrieve the contents of those URLs. For example, you can use [URLSession](urlsession.md) and its related classes to access the contents of remote resources.

URLs are the preferred way to refer to local files. Most objects that read data from or write data to a file have methods that accept a URL instead of a pathname as the file reference. For example, you can get the contents of a local file URL as [String](https://developer.apple.com/documentation/swift/string) by calling [init(contentsOf:encoding:)](https://developer.apple.com/documentation/swift/string/init%28contentsof:encoding:%29), or as a [Data](data.md) by calling [init(contentsOf:options:)](data/init%28contentsof_options_%29.md).

As a convenience, you can use Swift’s `async`-`await` syntax to asynchronously access the contents of a [URL](url.md) through the [resourceBytes](url/resourcebytes.md) and [lines](url/lines.md) properties. These properties use the shared [URLSession](urlsession.md) instance to load the resource.

`URL` defines a set of properties for common directories like [documentsDirectory](url/documentsdirectory.md) and [cachesDirectory](url/cachesdirectory.md), some of which have distinct behaviors for backup or automatic purging. To make the best use of these directories, see [Using the file system effectively](using-the-file-system-effectively.md).

## Topics

### Creating a URL from a string

- [init(string:)](url/init%28string_%29.md): Creates a URL instance from the provided string.
- [init(string:encodingInvalidCharacters:)](url/init%28string_encodinginvalidcharacters_%29.md): Creates a URL instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [init(string:relativeTo:)](url/init%28string_relativeto_%29.md): Creates a URL instance from the provided string, relative to another URL.
- [init(resolvingBookmarkData:options:relativeTo:bookmarkDataIsStale:)](url/init%28resolvingbookmarkdata_options_relativeto_bookmarkdataisstale_%29-3ic6f.md): Creates a URL that refers to a location specified by resolving bookmark data.
- [init(resolvingBookmarkData:options:relativeTo:bookmarkDataIsStale:)](url/init%28resolvingbookmarkdata_options_relativeto_bookmarkdataisstale_%29-97e6x.md): Initializes a URL that refers to a location specified by resolving bookmark data.

### Creating a file URL from a string path

- [init(filePath:directoryHint:relativeTo:)](url/init%28filepath_directoryhint_relativeto_%29.md): Creates a file URL that references a path you specify as a string.
- [URL.DirectoryHint](url/directoryhint.md): A hint to URL file APIs for handling paths that may reference directories.
- [init(fileURLWithPath:)](url/init%28fileurlwithpath_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path.
- [init(fileURLWithPath:isDirectory:)](url/init%28fileurlwithpath_isdirectory_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path.
- [init(fileURLWithPath:relativeTo:)](url/init%28fileurlwithpath_relativeto_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path, relative to a base URL.
- [init(fileURLWithPath:isDirectory:relativeTo:)](url/init%28fileurlwithpath_isdirectory_relativeto_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path, relative to a base URL.
- [init(fileURLWithFileSystemRepresentation:isDirectory:relativeTo:)](url/init%28fileurlwithfilesystemrepresentation_isdirectory_relativeto_%29.md): Creates a file URL that references the local file or directory for the file system representation of the path.
- [init(fileReferenceLiteralResourceName:)](url/init%28filereferenceliteralresourcename_%29.md): Creates a URL from a playground file literal.
- [init(filePath:directoryHint:)](url/init%28filepath_directoryhint_%29.md): Creates a file URL that references a file path.

### Creating a file URL from a file path

- [init(\_:)](url/init%28__%29.md): Deprecated. Creates a file URL that references the local file or directory at the file path you specify.
- [init(\_:isDirectory:)](url/init%28__isdirectory_%29.md): Deprecated. Creates a file URL that references the local file or directory at the file path you specify.
- [FilePath](../system/filepath.md): Represents a location in the file system.

### Creating a file URL for a common directory

- [init(for:in:appropriateFor:create:)](url/init%28for_in_appropriatefor_create_%29.md): Creates a file URL for a common directory in a domain.
- [FileManager.SearchPathDirectory](filemanager/searchpathdirectory.md): The location of significant directories.
- [FileManager.SearchPathDomainMask](filemanager/searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.

### Creating a URL by resolving a bookmark

- [init(resolvingBookmarkData:options:relativeTo:bookmarkDataIsStale:)](url/init%28resolvingbookmarkdata_options_relativeto_bookmarkdataisstale_%29-3ic6f.md): Creates a URL that refers to a location specified by resolving bookmark data.
- [init(resolvingAliasFileAt:options:)](url/init%28resolvingaliasfileat_options_%29.md): Creates a URL that refers to the location specified by resolving an alias file.
- [URL.BookmarkResolutionOptions](url/bookmarkresolutionoptions.md): An alias for the bookmark resolution options type.
- [NSURL.BookmarkResolutionOptions](nsurl/bookmarkresolutionoptions.md): Options used when resolving bookmark data.

### Creating a URL from a resource

- [init(resource:)](url/init%28resource_%29.md): Creates a URL from a resource.

### Creating a URL by parsing

- [init(\_:strategy:)](url/init%28__strategy_%29.md): Creates a URL instance by parsing the provided input in accordance with a parse strategy.
- [URL.ParseStrategy](url/parsestrategy.md): A parse strategy for creating URLs from formatted strings.

### Accessing the parts of a URL

- [fragment(percentEncoded:)](url/fragment%28percentencoded_%29.md): Returns the fragment component of the URL, optionally removing any percent-encoding.
- [fragment](url/fragment.md): Deprecated. The fragment component of the URL if the URL conforms to RFC 3986; otherwise, nil.
- [host(percentEncoded:)](url/host%28percentencoded_%29.md): Returns the host component of the URL, optionally removing any percent-encoding.
- [host](url/host.md): Deprecated. The host component of a URL if the URL conforms to RFC 3986; otherwise, nil.
- [lastPathComponent](url/lastpathcomponent.md): The last path component of the URL, or an empty string if the path is an empty string.
- [path(percentEncoded:)](url/path%28percentencoded_%29.md): Returns the path component of the URL, optionally removing any percent-encoding.
- [path](url/path.md): Deprecated. The path component of the URL if the URL conforms to RFC 3986; otherwise, an empty string.
- [password(percentEncoded:)](url/password%28percentencoded_%29.md): Returns the password component of the URL, optionally removing any percent-encoding.
- [password](url/password.md): Deprecated. The password component of the URL if the URL conforms to RFC 3986; otherwise, nil.
- [pathComponents](url/pathcomponents.md): The path components of the URL, or an empty array if the path is an empty string.
- [pathExtension](url/pathextension.md): The path extension of the URL, or an empty string if the path is an empty string.
- [port](url/port.md): The port component of the URL if the URL conforms to RFC 3986; otherwise, nil.
- [query(percentEncoded:)](url/query%28percentencoded_%29.md): Returns the query component of the URL, optionally removing any percent-encoding.
- [query](url/query.md): Deprecated. The query of the URL if the URL conforms to RFC 3986; otherwise, nil.
- [scheme](url/scheme.md): The scheme of the URL.
- [user(percentEncoded:)](url/user%28percentencoded_%29.md): Returns the user component of the URL, optionally removing any percent-encoding.
- [user](url/user.md): Deprecated. The user component of the URL if the URL conforms to RFC 3986; otherwise, nil.

### Accessing URL representations

- [baseURL](url/baseurl.md): The base URL.
- [absoluteString](url/absolutestring.md): The absolute string for the URL.
- [absoluteURL](url/absoluteurl.md): The absolute URL.
- [relativePath](url/relativepath.md): The relative path of the URL if the URL conforms to RFC 3986, otherwise nil.
- [relativeString](url/relativestring.md): The relative portion of a URL.
- [standardized](url/standardized.md): A version of the URL with any instances of “..” or “.” resolved in its path.
- [standardizedFileURL](url/standardizedfileurl.md): A standardized version of the path of a file URL.

### Accessing resource values

- [resourceValues(forKeys:)](url/resourcevalues%28forkeys_%29.md): Returns a collection of resource values identified by the given resource keys.
- [setResourceValues(\_:)](url/setresourcevalues%28__%29.md): Sets the resource value identified by a given resource key.
- [removeCachedResourceValue(forKey:)](url/removecachedresourcevalue%28forkey_%29.md): Removes the cached resource value identified by a given resource value key from the URL object.
- [removeAllCachedResourceValues()](url/removeallcachedresourcevalues%28%29.md): Removes all cached resource values and all temporary resource values from the URL object.
- [setTemporaryResourceValue(\_:forKey:)](url/settemporaryresourcevalue%28__forkey_%29.md): Sets a temporary resource value on the URL object.
- [URLResourceKey](urlresourcekey.md): Keys that apply to file system URLs.
- [URLResourceValues](urlresourcevalues.md): The properties that the file system resources support.

### Working with the data representation of a URL

- [init(dataRepresentation:relativeTo:isAbsolute:)](url/init%28datarepresentation_relativeto_isabsolute_%29.md): Initializes a newly created URL using the contents of the given data, relative to a base URL.
- [dataRepresentation](url/datarepresentation.md): The data representation of the URL’s relativeString.

### Working with file URLs

- [isFileURL](url/isfileurl.md): A Boolean that is true if the scheme is `file:`.
- [hasDirectoryPath](url/hasdirectorypath.md): A Boolean that is true if the URL path represents a directory.
- [withUnsafeFileSystemRepresentation(\_:)](url/withunsafefilesystemrepresentation%28__%29.md): Passes the URL’s path in the file system representation to a closure.
- [resolveSymlinksInPath()](url/resolvesymlinksinpath%28%29.md): Resolves any symlinks in the path of a file URL.
- [resolvingSymlinksInPath()](url/resolvingsymlinksinpath%28%29.md): Resolves any symlinks in the path of a file URL.
- [standardize()](url/standardize%28%29.md): Standardizes the path of a file URL.

### Accessing common directories

- [applicationDirectory](url/applicationdirectory.md): The standard directory for apps.
- [applicationSupportDirectory](url/applicationsupportdirectory.md): The standard directory for application support files.
- [cachesDirectory](url/cachesdirectory.md): The standard directory for discardable cache files.
- [desktopDirectory](url/desktopdirectory.md): The standard directory for files on the desktop.
- [documentsDirectory](url/documentsdirectory.md): The standard directory for document files.
- [downloadsDirectory](url/downloadsdirectory.md): The standard directory for download files.
- [libraryDirectory](url/librarydirectory.md): The standard directory for documentation, support, and configuration files.
- [moviesDirectory](url/moviesdirectory.md): The standard directory for movie files.
- [musicDirectory](url/musicdirectory.md): The standard directory for music files.
- [picturesDirectory](url/picturesdirectory.md): The standard directory for image files.
- [sharedPublicDirectory](url/sharedpublicdirectory.md): The standard directory for publicly shared files.
- [temporaryDirectory](url/temporarydirectory.md): The standard directory for temporary files.
- [trashDirectory](url/trashdirectory.md): The standard trash directory.
- [userDirectory](url/userdirectory.md): The container directory of user home directories.

### Accessing home and user directories

- [currentDirectory()](url/currentdirectory%28%29.md): Returns the working directory of the current process.
- [homeDirectory](url/homedirectory.md): The home directory for the current user.
- [homeDirectory(forUser:)](url/homedirectory%28foruser_%29.md): Returns the home directory for the specified user.

### Adding path components

- [append(path:directoryHint:)](url/append%28path_directoryhint_%29.md): Appends a path to the URL, with a hint for handling directory awareness.
- [append(component:directoryHint:)](url/append%28component_directoryhint_%29.md): Appends a path component to the URL, with a hint for handling directory awareness.
- [appendPathComponent(\_:)](url/appendpathcomponent%28__%29.md): Deprecated. Appends a path component to the URL.
- [appendPathComponent(\_:isDirectory:)](url/appendpathcomponent%28__isdirectory_%29.md): Deprecated. Appends a path component to the URL, specifying whether the resulting path is a directory.
- [appending(path:directoryHint:)](url/appending%28path_directoryhint_%29.md): Returns a URL by appending the specified path to the URL, with a hint for handling directory awareness.
- [appending(component:directoryHint:)](url/appending%28component_directoryhint_%29.md): Returns a URL by appending the specified path component to the URL, with a hint for handling directory awareness.
- [appendingPathComponent(\_:)](url/appendingpathcomponent%28__%29.md): Deprecated. Returns a URL by appending the specified path component to self.
- [appendingPathComponent(\_:isDirectory:)](url/appendingpathcomponent%28__isdirectory_%29.md): Deprecated. Returns a URL by appending the specified path component to self, specifying whether the resulting path is a directory.
- [append(components:directoryHint:)](url/append%28components_directoryhint_%29.md): Appends multiple path components to the URL, with a hint for handling directory awareness.
- [appending(components:directoryHint:)](url/appending%28components_directoryhint_%29.md): Returns a new URL by appending multiple path components to the URL, with a hint for handling directory awareness.
- [appendPathComponent(\_:conformingTo:)](url/appendpathcomponent%28__conformingto_%29.md): Appends a path component to the URL that conforms to a uniform type identifier.
- [appendingPathComponent(\_:conformingTo:)](url/appendingpathcomponent%28__conformingto_%29.md): Returns a URL by appending the specified path component that conforms to a uniform type identifier.

### Adding a path extension

- [appendPathExtension(\_:)](url/appendpathextension%28__%29.md): Appends the specified path extension to self.
- [appendingPathExtension(\_:)](url/appendingpathextension%28__%29.md): Returns a URL by appending the specified path extension to self.
- [appendPathExtension(for:)](url/appendpathextension%28for_%29.md): Appends the preferred path extension for the type you specify.
- [appendingPathExtension(for:)](url/appendingpathextension%28for_%29.md): Returns a URL by appending the preferred path extension for the type you specify to the URL’s last path component.

### Adding query items

- [append(queryItems:)](url/append%28queryitems_%29.md): Appends a list of query items to the URL.
- [appending(queryItems:)](url/appending%28queryitems_%29.md): Returns a new URL formed by appending a list of query items to the URL.
- [URLQueryItem](urlqueryitem.md): A single name-value pair from the query portion of a URL.

### Removing path components

- [deleteLastPathComponent()](url/deletelastpathcomponent%28%29.md): Returns a URL constructed by removing the last path component of self.
- [deletingLastPathComponent()](url/deletinglastpathcomponent%28%29.md): Returns a URL constructed by removing the last path component of self.

### Removing a path extension

- [deletePathExtension()](url/deletepathextension%28%29.md): Returns a URL constructed by removing any path extension.
- [deletingPathExtension()](url/deletingpathextension%28%29.md): Returns a URL constructed by removing any path extension.

### Creating bookmarks

- [bookmarkData(options:includingResourceValuesForKeys:relativeTo:)](url/bookmarkdata%28options_includingresourcevaluesforkeys_relativeto_%29.md): Returns bookmark data for the URL, created with specified options and resource values.
- [bookmarkData(withContentsOf:)](url/bookmarkdata%28withcontentsof_%29.md): Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.
- [writeBookmarkData(\_:to:)](url/writebookmarkdata%28__to_%29.md): Creates an alias file on disk at a specified location with specified bookmark data.
- [resourceValues(forKeys:fromBookmarkData:)](url/resourcevalues%28forkeys_frombookmarkdata_%29.md): Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.
- [URL.BookmarkCreationOptions](url/bookmarkcreationoptions.md): An alias for bookmark creation options.
- [NSURL.BookmarkCreationOptions](nsurl/bookmarkcreationoptions.md): Options used when creating bookmark data.

### Checking reachability

- [checkResourceIsReachable()](url/checkresourceisreachable%28%29.md): Returns whether the URL’s resource exists and is reachable.

### Loading URL contents asynchronously

- [resourceBytes](url/resourcebytes.md): The URL’s resource data, as an asynchronous sequence of bytes.
- [lines](url/lines.md): The URL’s resource data, as an asynchronous sequence of lines of text.
- [URL.AsyncBytes](url/asyncbytes.md): An asynchronous sequence of bytes loaded from the URL.

### Working with promised items

- [checkPromisedItemIsReachable()](url/checkpromiseditemisreachable%28%29.md): Returns whether the promised item URL’s resource exists and is reachable.
- [promisedItemResourceValues(forKeys:)](url/promiseditemresourcevalues%28forkeys_%29.md): Gets resource values from URLs of ‘promised’ items.

### Working with security scoped resources

- [startAccessingSecurityScopedResource()](url/startaccessingsecurityscopedresource%28%29.md): Given a url created by resolving a bookmark data created with security scope, make the resource referenced by the url accessible to the process.
- [stopAccessingSecurityScopedResource()](url/stopaccessingsecurityscopedresource%28%29.md): Revokes the access granted to the url by a prior successful call to the complementary start function.

### Describing a URL

- [customPlaygroundQuickLook](url/customplaygroundquicklook.md): Deprecated. A playground quicklook for the URL.

### Formatting a URL

- [formatted()](url/formatted%28%29.md): Formats the URL using a default format style.
- [formatted(\_:)](url/formatted%28__%29.md): Formats the URL, using the provided format style.
- [URL.FormatStyle](url/formatstyle.md): A structure that converts between URL instances and their textual representations.

### Using reference types

- [NSURL](nsurl.md): An object that represents the location of a resource, such as an item on a remote server or the path to a local file.

### App Intents support

- [defaultResolverSpecification](url/defaultresolverspecification.md): The default resolver specification that the App Intents framework uses.
- [URL.Specification](url/specification.md): The specification type for conforming with App Intents.
- [URL.UnwrappedType](url/unwrappedtype.md): The core type for conforming with App Intents.
- [URL.ValueType](url/valuetype.md): The value type for conforming with App Intents.

### Structures

- [URL.Template](url/template.md): A template for constructing a URL from variable expansions.

### Initializers

- [init(template:variables:)](url/init%28template_variables_%29.md): Creates a new `URL` by expanding the RFC 6570 template and variables.

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [CustomURLRepresentationParameterConvertible](../appintents/customurlrepresentationparameterconvertible.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](../coretransferable/transferable.md)

## See Also

### URLs

- [URLComponents](urlcomponents.md): A structure that parses URLs into and constructs URLs from their constituent parts.
- [URLQueryItem](urlqueryitem.md): A single name-value pair from the query portion of a URL.
