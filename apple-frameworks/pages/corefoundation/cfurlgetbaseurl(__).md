> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlgetbaseurl(_:)](https://developer.apple.com/documentation/corefoundation/cfurlgetbaseurl(_:))

# CFURLGetBaseURL(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the base URL of a given URL if it exists.

## Declaration

```swift
func CFURLGetBaseURL(_ anURL: CFURL!) -> CFURL!
```

## Parameters

- `anURL`: The `CFURL` object to examine.

<a id="return-value"></a>

## Return Value

A `CFURL` object representing the base URL of `anURL`. Ownership follows the get rule. See [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting URL Properties

- [CFURLGetBytes(\_:\_:\_:)](cfurlgetbytes%28______%29.md): Returns by reference the byte representation of a URL object.
- [CFURLGetByteRangeForComponent(\_:\_:\_:)](cfurlgetbyterangeforcomponent%28______%29.md): Returns the range of the specified component in the bytes of a URL.
- [CFURLGetTypeID()](cfurlgettypeid%28%29.md): Returns the type identifier for the `CFURL` opaque type.
- [CFURLResourceIsReachable(\_:\_:)](cfurlresourceisreachable%28____%29.md): Returns whether the resource pointed to by a file URL can be reached.

# CFURLGetBaseURL (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the base URL of a given URL if it exists.

## Declaration

```objectivec
extern CFURLRefCFURLGetBaseURL(CFURLRef anURL);
```

## Parameters

- `anURL`: The `CFURL` object to examine.

<a id="return-value"></a>

## Return Value

A `CFURL` object representing the base URL of `anURL`. Ownership follows the get rule. See [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Getting URL Properties

- [CFURLGetBytes](cfurlgetbytes%28______%29.md): Returns by reference the byte representation of a URL object.
- [CFURLGetByteRangeForComponent](cfurlgetbyterangeforcomponent%28______%29.md): Returns the range of the specified component in the bytes of a URL.
- [CFURLGetTypeID](cfurlgettypeid%28%29.md): Returns the type identifier for the `CFURL` opaque type.
- [CFURLResourceIsReachable](cfurlresourceisreachable%28____%29.md): Returns whether the resource pointed to by a file URL can be reached.
