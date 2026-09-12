> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/core-foundation-url-access-utilities](https://developer.apple.com/documentation/corefoundation/core-foundation-url-access-utilities)

# Core Foundation URL Access Utilities (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

Core Foundation URL Access Utilities give you convenient system-independent methods of creating, reading, updating, or deleting a URL resource.

Given a [CFURL](cfurl.md) object that holds either a file or http URL, you can read the resource’s data with the [CFURLCreateDataAndPropertiesFromResource(\_:\_:\_:\_:\_:\_:)](cfurlcreatedataandpropertiesfromresource%28____________%29.md) function. You can write data to the URL resource, possibly creating a new file, with the [CFURLWriteDataAndPropertiesToResource(\_:\_:\_:\_:)](cfurlwritedataandpropertiestoresource%28________%29.md) function. Finally, you can destroy, or delete, the resource pointed to by the URL with the [CFURLDestroyResource(\_:\_:)](cfurldestroyresource%28____%29.md) function.

## Topics

### Core Foundation URL Access Utilities Miscellaneous Functions

- [CFURLCreateDataAndPropertiesFromResource(\_:\_:\_:\_:\_:\_:)](cfurlcreatedataandpropertiesfromresource%28____________%29.md): Deprecated. Loads the data and properties referred to by a given URL.
- [CFURLCreatePropertyFromResource(\_:\_:\_:\_:)](cfurlcreatepropertyfromresource%28________%29.md): Deprecated. Returns a given property specified by a given URL and property string.
- [CFURLDestroyResource(\_:\_:)](cfurldestroyresource%28____%29.md): Deprecated. Destroys a resource indicated by a given URL.
- [CFURLWriteDataAndPropertiesToResource(\_:\_:\_:\_:)](cfurlwritedataandpropertiestoresource%28________%29.md): Deprecated. Writes the given data and properties to a given URL.

### Constants

- [CFURLError](cfurlerror.md): Deprecated. `CFURL` error codes.
- [File URL Properties](file-url-properties.md): Properties for file URL resources.
- [HTTP URL Properties](http-url-properties.md): Properties for HTTP URL resources.

## See Also

### Utilities

- [Base Utilities](base-utilities.md)
- [Byte-Order Utilities](byte-order-utilities.md)
- [Preferences Utilities](preferences-utilities.md)
- [Socket Name Server Utilities](socket-name-server-utilities.md)
- [Time Utilities](time-utilities.md)

# Core Foundation URL Access Utilities (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

Core Foundation URL Access Utilities give you convenient system-independent methods of creating, reading, updating, or deleting a URL resource.

Given a [CFURLRef](cfurl.md) object that holds either a file or http URL, you can read the resource’s data with the [CFURLCreateDataAndPropertiesFromResource](cfurlcreatedataandpropertiesfromresource%28____________%29.md) function. You can write data to the URL resource, possibly creating a new file, with the [CFURLWriteDataAndPropertiesToResource](cfurlwritedataandpropertiestoresource%28________%29.md) function. Finally, you can destroy, or delete, the resource pointed to by the URL with the [CFURLDestroyResource](cfurldestroyresource%28____%29.md) function.

## Topics

### Core Foundation URL Access Utilities Miscellaneous Functions

- [CFURLCreateDataAndPropertiesFromResource](cfurlcreatedataandpropertiesfromresource%28____________%29.md): Deprecated. Loads the data and properties referred to by a given URL.
- [CFURLCreatePropertyFromResource](cfurlcreatepropertyfromresource%28________%29.md): Deprecated. Returns a given property specified by a given URL and property string.
- [CFURLDestroyResource](cfurldestroyresource%28____%29.md): Deprecated. Destroys a resource indicated by a given URL.
- [CFURLWriteDataAndPropertiesToResource](cfurlwritedataandpropertiestoresource%28________%29.md): Deprecated. Writes the given data and properties to a given URL.

### Constants

- [CFURLError](cfurlerror.md): Deprecated. `CFURL` error codes.
- [File URL Properties](file-url-properties.md): Properties for file URL resources.
- [HTTP URL Properties](http-url-properties.md): Properties for HTTP URL resources.

## See Also

### Utilities

- [Base Utilities](base-utilities.md)
- [Byte-Order Utilities](byte-order-utilities.md)
- [Preferences Utilities](preferences-utilities.md)
- [Socket Name Server Utilities](socket-name-server-utilities.md)
- [Time Utilities](time-utilities.md)
