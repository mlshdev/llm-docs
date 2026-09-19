> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/xmlnode/localname(forname:)

# localName(forName:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the local name from the specified qualified name.

## Declaration

```swift
class func localName(forName name: String) -> String
```

## Parameters

- `name`: A string that is a qualified name.

<a id="Discussion"></a>

## Discussion

For example, if the qualified name is “bst:title”, this method returns “title”.

## See Also

### Related Documentation

- [predefinedNamespace(forPrefix:)](predefinednamespace%28forprefix_%29.md): Returns an `NSXMLNode` object representing one of the predefined namespaces with the specified prefix.

### Managing Namespaces

- [localName](localname.md): Returns the local name of the receiver.
- [prefix](prefix.md): Returns the prefix of the receiver’s name.
- [prefix(forName:)](prefix%28forname_%29.md): Returns the prefix from the specified qualified name.

# localNameForName: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the local name from the specified qualified name.

## Declaration

```objectivec
+ (NSString *) localNameForName:(NSString *) name;
```

## Parameters

- `name`: A string that is a qualified name.

<a id="Discussion"></a>

## Discussion

For example, if the qualified name is “bst:title”, this method returns “title”.

## See Also

### Related Documentation

- [predefinedNamespaceForPrefix:](predefinednamespace%28forprefix_%29.md): Returns an `NSXMLNode` object representing one of the predefined namespaces with the specified prefix.

### Managing Namespaces

- [localName](localname.md): Returns the local name of the receiver.
- [prefix](prefix.md): Returns the prefix of the receiver’s name.
- [prefixForName:](prefix%28forname_%29.md): Returns the prefix from the specified qualified name.
