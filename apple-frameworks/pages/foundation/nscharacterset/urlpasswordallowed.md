> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/urlpasswordallowed](https://developer.apple.com/documentation/foundation/nscharacterset/urlpasswordallowed)

# urlPasswordAllowed (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a password URL subcomponent.

## Declaration

```swift
class var urlPasswordAllowed: CharacterSet { get }
```

<a id="Discussion"></a>

## Discussion

The password component of a URL is the component immediately following the colon after the username component of the URL, and ends at the `@` sign. For example, in the URL `http://username:password@www.example.com/index.html`, the pass component is `password`.

## See Also

### Getting Character Sets for URL Encoding

- [urlFragmentAllowed](urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [urlHostAllowed](urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [urlPathAllowed](urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [urlQueryAllowed](urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.
- [urlUserAllowed](urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.

# URLPasswordAllowedCharacterSet (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a password URL subcomponent.

## Declaration

```objectivec
@property (class, copy, readonly) NSCharacterSet * URLPasswordAllowedCharacterSet;
```

<a id="Discussion"></a>

## Discussion

The password component of a URL is the component immediately following the colon after the username component of the URL, and ends at the `@` sign. For example, in the URL `http://username:password@www.example.com/index.html`, the pass component is `password`.

## See Also

### Getting Character Sets for URL Encoding

- [URLFragmentAllowedCharacterSet](urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [URLHostAllowedCharacterSet](urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [URLPathAllowedCharacterSet](urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [URLQueryAllowedCharacterSet](urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.
- [URLUserAllowedCharacterSet](urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.
