> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmlnode/localname](https://developer.apple.com/documentation/foundation/xmlnode/localname)

# localName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the local name of the receiver.

## Declaration

```swift
var localName: String? { get }
```

<a id="return-value"></a>

## Return Value

A string containing the local name of the receiver.

<a id="Discussion"></a>

## Discussion

The local name is the part of a node name that follows a namespace-qualifying colon or the full name if there is no colon. For example, “chapter” is the local name in the qualified name “acme:chapter”.

## See Also

### Managing Namespaces

- [localName(forName:)](localname%28forname_%29.md): Returns the local name from the specified qualified name.
- [prefix](prefix.md): Returns the prefix of the receiver’s name.
- [prefix(forName:)](prefix%28forname_%29.md): Returns the prefix from the specified qualified name.

# localName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the local name of the receiver.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * localName;
```

<a id="return-value"></a>

## Return Value

A string containing the local name of the receiver.

<a id="Discussion"></a>

## Discussion

The local name is the part of a node name that follows a namespace-qualifying colon or the full name if there is no colon. For example, “chapter” is the local name in the qualified name “acme:chapter”.

## See Also

### Managing Namespaces

- [localNameForName:](localname%28forname_%29.md): Returns the local name from the specified qualified name.
- [prefix](prefix.md): Returns the prefix of the receiver’s name.
- [prefixForName:](prefix%28forname_%29.md): Returns the prefix from the specified qualified name.
