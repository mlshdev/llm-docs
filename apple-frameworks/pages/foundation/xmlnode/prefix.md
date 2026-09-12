> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/prefix](https://developer.apple.com/documentation/foundation/xmlnode/prefix)

# prefix (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the prefix of the receiver’s name.

## Declaration

```swift
var prefix: String? { get }
```

<a id="return-value"></a>

## Return Value

A string containing the receiver’s prefix. This method returns an empty string if the receiver’s name is not qualified by a namespace.

<a id="Discussion"></a>

## Discussion

The prefix is the part of a namespace-qualified name that precedes the colon. For example, “acme” is the prefix in the qualified name “acme:chapter”.

## See Also

### Managing Namespaces

- [localName](localname.md): Returns the local name of the receiver.
- [localName(forName:)](localname%28forname_%29.md): Returns the local name from the specified qualified name.
- [prefix(forName:)](prefix%28forname_%29.md): Returns the prefix from the specified qualified name.

# prefix (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the prefix of the receiver’s name.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * prefix;
```

<a id="return-value"></a>

## Return Value

A string containing the receiver’s prefix. This method returns an empty string if the receiver’s name is not qualified by a namespace.

<a id="Discussion"></a>

## Discussion

The prefix is the part of a namespace-qualified name that precedes the colon. For example, “acme” is the prefix in the qualified name “acme:chapter”.

## See Also

### Managing Namespaces

- [localName](localname.md): Returns the local name of the receiver.
- [localNameForName:](localname%28forname_%29.md): Returns the local name from the specified qualified name.
- [prefixForName:](prefix%28forname_%29.md): Returns the prefix from the specified qualified name.
