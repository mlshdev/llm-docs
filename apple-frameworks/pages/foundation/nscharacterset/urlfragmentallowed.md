> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/urlfragmentallowed](https://developer.apple.com/documentation/foundation/nscharacterset/urlfragmentallowed)

# urlFragmentAllowed (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a fragment URL component.

## Declaration

```swift
class var urlFragmentAllowed: CharacterSet { get }
```

<a id="Discussion"></a>

## Discussion

The fragment component of a URL is the component after a `#` symbol. For example, in the URL `http://www.example.com/index.html#jumpLocation`, the fragment is `jumpLocation`.

## See Also

### Getting Character Sets for URL Encoding

- [urlHostAllowed](urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [urlPasswordAllowed](urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [urlPathAllowed](urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [urlQueryAllowed](urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.
- [urlUserAllowed](urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.

# URLFragmentAllowedCharacterSet (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character set for characters allowed in a fragment URL component.

## Declaration

```objectivec
@property (class, copy, readonly) NSCharacterSet * URLFragmentAllowedCharacterSet;
```

<a id="Discussion"></a>

## Discussion

The fragment component of a URL is the component after a `#` symbol. For example, in the URL `http://www.example.com/index.html#jumpLocation`, the fragment is `jumpLocation`.

## See Also

### Getting Character Sets for URL Encoding

- [URLHostAllowedCharacterSet](urlhostallowed.md): Returns the character set for characters allowed in a host URL subcomponent.
- [URLPasswordAllowedCharacterSet](urlpasswordallowed.md): Returns the character set for characters allowed in a password URL subcomponent.
- [URLPathAllowedCharacterSet](urlpathallowed.md): Returns the character set for characters allowed in a path URL component.
- [URLQueryAllowedCharacterSet](urlqueryallowed.md): Returns the character set for characters allowed in a query URL component.
- [URLUserAllowedCharacterSet](urluserallowed.md): Returns the character set for characters allowed in a user URL subcomponent.
