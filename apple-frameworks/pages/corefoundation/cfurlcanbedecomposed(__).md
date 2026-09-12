> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlcanbedecomposed(_:)](https://developer.apple.com/documentation/corefoundation/cfurlcanbedecomposed(_:))

# CFURLCanBeDecomposed(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines if the given URL conforms to RFC 1808 and therefore can be decomposed.

## Declaration

```swift
func CFURLCanBeDecomposed(_ anURL: CFURL!) -> Bool
```

## Parameters

- `anURL`: The `CFURL` object to test.

<a id="return-value"></a>

## Return Value

`true` if `anURL` conforms to RFC 1808, `false` otherwise.

<a id="Discussion"></a>

## Discussion

If a `CFURL` object can be decomposed, you can retrieve separately each of the four components (scheme, net location, path, and resource specifier), as well as the base URL.

Relative URLs are permitted to have only paths (or a variety of other configurations); these are considered decomposable if their base URL is decomposable. If no base URL is present, they are considered decomposable.

## See Also

### Accessing the Parts of a URL

- [CFURLCopyFileSystemPath(\_:\_:)](cfurlcopyfilesystempath%28____%29.md): Returns the path portion of a given URL.
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

# CFURLCanBeDecomposed (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines if the given URL conforms to RFC 1808 and therefore can be decomposed.

## Declaration

```objectivec
extern Boolean CFURLCanBeDecomposed(CFURLRef anURL);
```

## Parameters

- `anURL`: The `CFURL` object to test.

<a id="return-value"></a>

## Return Value

`true` if `anURL` conforms to RFC 1808, `false` otherwise.

<a id="Discussion"></a>

## Discussion

If a `CFURL` object can be decomposed, you can retrieve separately each of the four components (scheme, net location, path, and resource specifier), as well as the base URL.

Relative URLs are permitted to have only paths (or a variety of other configurations); these are considered decomposable if their base URL is decomposable. If no base URL is present, they are considered decomposable.

## See Also

### Accessing the Parts of a URL

- [CFURLCopyFileSystemPath](cfurlcopyfilesystempath%28____%29.md): Returns the path portion of a given URL.
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
