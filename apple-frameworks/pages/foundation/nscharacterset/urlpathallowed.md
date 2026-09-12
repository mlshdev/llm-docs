> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/urlpathallowed](https://developer.apple.com/documentation/foundation/nscharacterset/urlpathallowed)

# urlPathAllowed (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a path URL component.

## Declaration

```swift
class var urlPathAllowed: CharacterSet { get }
```

<a id="Discussion"></a>

## Discussion

The path component of a URL is the component immediately following the host component (if present). It ends wherever the query or fragment component begins. For example, in the URL `http://www.example.com/index.php?key1=value1`, the path component is `/index.php`.

## See Also

### Getting Character Sets for URL Encoding

- [urlFragmentAllowed](urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [urlHostAllowed](urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [urlPasswordAllowed](urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [urlQueryAllowed](urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.
- [urlUserAllowed](urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.

# URLPathAllowedCharacterSet (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a path URL component.

## Declaration

```objectivec
@property (class, copy, readonly) NSCharacterSet * URLPathAllowedCharacterSet;
```

<a id="Discussion"></a>

## Discussion

The path component of a URL is the component immediately following the host component (if present). It ends wherever the query or fragment component begins. For example, in the URL `http://www.example.com/index.php?key1=value1`, the path component is `/index.php`.

## See Also

### Getting Character Sets for URL Encoding

- [URLFragmentAllowedCharacterSet](urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [URLHostAllowedCharacterSet](urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [URLPasswordAllowedCharacterSet](urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [URLQueryAllowedCharacterSet](urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.
- [URLUserAllowedCharacterSet](urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.
