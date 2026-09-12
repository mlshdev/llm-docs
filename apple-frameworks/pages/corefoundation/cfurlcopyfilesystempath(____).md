> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcopyfilesystempath(_:_:)](https://developer.apple.com/documentation/corefoundation/cfurlcopyfilesystempath(_:_:))

# CFURLCopyFileSystemPath(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the path portion of a given URL.

## Declaration

```swift
func CFURLCopyFileSystemPath(_ anURL: CFURL!, _ pathStyle: CFURLPathStyle) -> CFString!
```

## Parameters

- `anURL`: The `CFURL` object whose path you want to obtain.
- `pathStyle`: The operating system path style to be used to create the path. See [CFURLPathStyle](cfurlpathstyle.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

The URL’s path in the format specified by `pathStyle`. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function returns the URL’s path as a file system path for a given path style.

## See Also

### Accessing the Parts of a URL

- [CFURLCanBeDecomposed(\_:)](cfurlcanbedecomposed%28__%29.md): Determines if the given URL conforms to RFC 1808 and therefore can be decomposed.
- [CFURLCopyFragment(\_:\_:)](cfurlcopyfragment%28____%29.md): Returns the fragment from a given URL.
- [CFURLCopyHostName(\_:)](cfurlcopyhostname%28__%29.md): Returns the host name of a given URL.
- [CFURLCopyLastPathComponent(\_:)](cfurlcopylastpathcomponent%28__%29.md): Returns the last path component of a given URL.
- [CFURLCopyNetLocation(\_:)](cfurlcopynetlocation%28__%29.md): Returns the net location portion of a given URL.
- [CFURLCopyParameterString(\_:\_:)](cfurlcopyparameterstring%28____%29.md): Deprecated. Returns the parameter string from a given URL.
- [CFURLCopyPassword(\_:)](cfurlcopypassword%28__%29.md): Returns the password of a given URL.
- [CFURLCopyPath(\_:)](cfurlcopypath%28__%29.md): Returns the path portion of a given URL.
- [CFURLCopyPathExtension(\_:)](cfurlcopypathextension%28__%29.md): Returns the path extension of a given URL.
- [CFURLCopyQueryString(\_:\_:)](cfurlcopyquerystring%28____%29.md): Returns the query string of a given URL.
- [CFURLCopyResourceSpecifier(\_:)](cfurlcopyresourcespecifier%28__%29.md): Returns any additional resource specifiers after the path.
- [CFURLCopyScheme(\_:)](cfurlcopyscheme%28__%29.md): Returns the scheme portion of a given URL.
- [CFURLCopyStrictPath(\_:\_:)](cfurlcopystrictpath%28____%29.md): Returns the path portion of a given URL.
- [CFURLCopyUserName(\_:)](cfurlcopyusername%28__%29.md): Returns the user name from a given URL.
- [CFURLGetPortNumber(\_:)](cfurlgetportnumber%28__%29.md): Returns the port number from a given URL.

# CFURLCopyFileSystemPath (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the path portion of a given URL.

## Declaration

```objectivec
extern CFStringRefCFURLCopyFileSystemPath(CFURLRef anURL, CFURLPathStyle pathStyle);
```

## Parameters

- `anURL`: The `CFURL` object whose path you want to obtain.
- `pathStyle`: The operating system path style to be used to create the path. See [CFURLPathStyle](cfurlpathstyle.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

The URL’s path in the format specified by `pathStyle`. Ownership follows the create rule. See [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

This function returns the URL’s path as a file system path for a given path style.

## See Also

### Accessing the Parts of a URL

- [CFURLCanBeDecomposed](cfurlcanbedecomposed%28__%29.md): Determines if the given URL conforms to RFC 1808 and therefore can be decomposed.
- [CFURLCopyFragment](cfurlcopyfragment%28____%29.md): Returns the fragment from a given URL.
- [CFURLCopyHostName](cfurlcopyhostname%28__%29.md): Returns the host name of a given URL.
- [CFURLCopyLastPathComponent](cfurlcopylastpathcomponent%28__%29.md): Returns the last path component of a given URL.
- [CFURLCopyNetLocation](cfurlcopynetlocation%28__%29.md): Returns the net location portion of a given URL.
- [CFURLCopyParameterString](cfurlcopyparameterstring%28____%29.md): Deprecated. Returns the parameter string from a given URL.
- [CFURLCopyPassword](cfurlcopypassword%28__%29.md): Returns the password of a given URL.
- [CFURLCopyPath](cfurlcopypath%28__%29.md): Returns the path portion of a given URL.
- [CFURLCopyPathExtension](cfurlcopypathextension%28__%29.md): Returns the path extension of a given URL.
- [CFURLCopyQueryString](cfurlcopyquerystring%28____%29.md): Returns the query string of a given URL.
- [CFURLCopyResourceSpecifier](cfurlcopyresourcespecifier%28__%29.md): Returns any additional resource specifiers after the path.
- [CFURLCopyScheme](cfurlcopyscheme%28__%29.md): Returns the scheme portion of a given URL.
- [CFURLCopyStrictPath](cfurlcopystrictpath%28____%29.md): Returns the path portion of a given URL.
- [CFURLCopyUserName](cfurlcopyusername%28__%29.md): Returns the user name from a given URL.
- [CFURLGetPortNumber](cfurlgetportnumber%28__%29.md): Returns the port number from a given URL.
