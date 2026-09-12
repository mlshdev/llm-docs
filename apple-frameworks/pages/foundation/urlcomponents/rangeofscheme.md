> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcomponents/rangeofscheme](https://developer.apple.com/documentation/foundation/urlcomponents/rangeofscheme)

# rangeOfScheme

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character range of the scheme in the string returned by the string property.

## Declaration

```swift
var rangeOfScheme: Range<String.Index>? { get }
```

<a id="Discussion"></a>

## Discussion

If the component does not exist, nil is returned.

> **Note**

>  Zero length components are legal. For example, the URL string “scheme://:@/?#” has a zero length user, password, host, query and fragment; the URL strings “scheme:” and “” both have a zero length path.

## See Also

### Locating components in the URL string representation

- [rangeOfFragment](rangeoffragment.md): Returns the character range of the fragment in the string returned by the string property.
- [rangeOfHost](rangeofhost.md): Returns the character range of the host in the string returned by the string property.
- [rangeOfPassword](rangeofpassword.md): Returns the character range of the password in the string returned by the string property.
- [rangeOfPath](rangeofpath.md): Returns the character range of the path in the string returned by the string property.
- [rangeOfPort](rangeofport.md): Returns the character range of the port in the string returned by the string property.
- [rangeOfQuery](rangeofquery.md): Returns the character range of the query in the string returned by the string property.
- [rangeOfUser](rangeofuser.md): Returns the character range of the user in the string returned by the string property.
