> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/urluserallowed](https://developer.apple.com/documentation/foundation/nscharacterset/urluserallowed)

# urlUserAllowed (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a user URL subcomponent.

## Declaration

```swift
class var urlUserAllowed: CharacterSet { get }
```

<a id="Discussion"></a>

## Discussion

The user component of a URL is an optional component that precedes the host component, and ends at either a colon (if a password is specified) or an `@` sign (if no password is specified). For example, in the URL `http://username:password@www.example.com/index.html`, the user component is `username`.

## See Also

### Getting Character Sets for URL Encoding

- [urlFragmentAllowed](urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [urlHostAllowed](urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [urlPasswordAllowed](urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [urlPathAllowed](urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [urlQueryAllowed](urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.

# URLUserAllowedCharacterSet (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a user URL subcomponent.

## Declaration

```objectivec
@property (class, copy, readonly) NSCharacterSet * URLUserAllowedCharacterSet;
```

<a id="Discussion"></a>

## Discussion

The user component of a URL is an optional component that precedes the host component, and ends at either a colon (if a password is specified) or an `@` sign (if no password is specified). For example, in the URL `http://username:password@www.example.com/index.html`, the user component is `username`.

## See Also

### Getting Character Sets for URL Encoding

- [URLFragmentAllowedCharacterSet](urlfragmentallowed.md): Returns the character set for characters allowed in a fragment URL component.
- [URLHostAllowedCharacterSet](urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [URLPasswordAllowedCharacterSet](urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [URLPathAllowedCharacterSet](urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [URLQueryAllowedCharacterSet](urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.
