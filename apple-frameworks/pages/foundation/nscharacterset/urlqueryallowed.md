> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/urlqueryallowed](https://developer.apple.com/documentation/foundation/nscharacterset/urlqueryallowed)

# urlQueryAllowed (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a query URL component.

## Declaration

```swift
class var urlQueryAllowed: CharacterSet { get }
```

<a id="Discussion"></a>

## Discussion

The query component of a URL is the component immediately following a question mark (`?`). For example, in the URL `http://www.example.com/index.php?key1=value1#jumpLink`, the query component is `key1=value1`.

## See Also

### Getting Character Sets for URL Encoding

- [urlFragmentAllowed](urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [urlHostAllowed](urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [urlPasswordAllowed](urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [urlPathAllowed](urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [urlUserAllowed](urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.

# URLQueryAllowedCharacterSet (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a query URL component.

## Declaration

```objectivec
@property (class, copy, readonly) NSCharacterSet * URLQueryAllowedCharacterSet;
```

<a id="Discussion"></a>

## Discussion

The query component of a URL is the component immediately following a question mark (`?`). For example, in the URL `http://www.example.com/index.php?key1=value1#jumpLink`, the query component is `key1=value1`.

## See Also

### Getting Character Sets for URL Encoding

- [URLFragmentAllowedCharacterSet](urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [URLHostAllowedCharacterSet](urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [URLPasswordAllowedCharacterSet](urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [URLPathAllowedCharacterSet](urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [URLUserAllowedCharacterSet](urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.
