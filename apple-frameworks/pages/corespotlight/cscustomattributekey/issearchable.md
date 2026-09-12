> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cscustomattributekey/issearchable](https://developer.apple.com/documentation/corespotlight/cscustomattributekey/issearchable)

# isSearchable (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A Boolean value that indicates if the custom attribute can be specified as a search term.

## Declaration

```swift
var isSearchable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `true`.

## See Also

### Getting the attribute details

- [keyName](keyname.md): The name of the custom attribute key.
- [isMultiValued](ismultivalued.md): A Boolean value that indicates if the custom attribute is likely to have multiple values, such as arrays, associated with it.
- [isSearchableByDefault](issearchablebydefault.md): A Boolean value that indicates if the custom attribute should be searchable by default.
- [isUnique](isunique.md): A Boolean value that indicates if duplicate custom attribute values should be treated as the same value to save storage space.

# searchable (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A Boolean value that indicates if the custom attribute can be specified as a search term.

## Declaration

```objectivec
@property (readonly, getter=isSearchable) BOOL searchable;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `true`.

## See Also

### Getting the attribute details

- [keyName](keyname.md): The name of the custom attribute key.
- [multiValued](ismultivalued.md): A Boolean value that indicates if the custom attribute is likely to have multiple values, such as arrays, associated with it.
- [searchableByDefault](issearchablebydefault.md): A Boolean value that indicates if the custom attribute should be searchable by default.
- [unique](isunique.md): A Boolean value that indicates if duplicate custom attribute values should be treated as the same value to save storage space.
