> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/urlhostallowed](https://developer.apple.com/documentation/foundation/nscharacterset/urlhostallowed)

# urlHostAllowed (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a host URL subcomponent.

## Declaration

```swift
class var urlHostAllowed: CharacterSet { get }
```

<a id="Discussion"></a>

## Discussion

The host component of a URL is usually the component immediately after the first two leading slashes. If the URL contains a username and password, the host component is the component after the `@` sign. For example, in the URL `http://username:password@www.example.com/index.html`, the host component is `www.example.com`.

## See Also

### Getting Character Sets for URL Encoding

- [urlFragmentAllowed](urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [urlPasswordAllowed](urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [urlPathAllowed](urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [urlQueryAllowed](urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.
- [urlUserAllowed](urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.

# URLHostAllowedCharacterSet (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a host URL subcomponent.

## Declaration

```objectivec
@property (class, copy, readonly) NSCharacterSet * URLHostAllowedCharacterSet;
```

<a id="Discussion"></a>

## Discussion

The host component of a URL is usually the component immediately after the first two leading slashes. If the URL contains a username and password, the host component is the component after the `@` sign. For example, in the URL `http://username:password@www.example.com/index.html`, the host component is `www.example.com`.

## See Also

### Getting Character Sets for URL Encoding

- [URLFragmentAllowedCharacterSet](urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [URLPasswordAllowedCharacterSet](urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [URLPathAllowedCharacterSet](urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [URLQueryAllowedCharacterSet](urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.
- [URLUserAllowedCharacterSet](urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.
