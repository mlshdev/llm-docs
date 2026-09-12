> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cscustomattributekey/init(keyname:searchable:searchablebydefault:unique:multivalued:)](https://developer.apple.com/documentation/corespotlight/cscustomattributekey/init(keyname:searchable:searchablebydefault:unique:multivalued:))

# init(keyName:searchable:searchableByDefault:unique:multiValued:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns a new custom attribute key with the specified name and properties.

## Declaration

```swift
init?(keyName: String, searchable: Bool, searchableByDefault: Bool, unique: Bool, multiValued: Bool)
```

## Parameters

- `keyName`: The name of the custom attribute for use as a key in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md). The key name must be a string that contains only ASCII characters and no punctuation other than the underscore (that is, “\_”). The prefix `kMD` is reserved.
- `searchable`: A Boolean value that indicates if the attribute can be specified as a search term.
- `searchableByDefault`: A Boolean value that indicates if the attribute should be searchable by default.
- `unique`: A Boolean value that indicates if duplicate values should be treated as the same value to save storage space.
- `multiValued`: A Boolean value that indicates if the attribute is likely to have multiple values, such as arrays, associated with it.

<a id="return-value"></a>

## Return Value

A new custom attribute key with the specified name and properties.

<a id="Discussion"></a>

## Discussion

To create custom attribute key names, it’s recommended that you use a reverse DNS format that includes your company name and does not include the period character (”.”). For example, a key name of the form `com_mycompany_myapp_mykeyname` works well.

## See Also

### Creating a custom attribute

- [init(keyName:)](init%28keyname_%29.md): Returns a new custom attribute key with the specified name.
- [init(coder:)](init%28coder_%29.md)

# initWithKeyName:searchable:searchableByDefault:unique:multiValued: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns a new custom attribute key with the specified name and properties.

## Declaration

```objectivec
- (instancetype) initWithKeyName:(NSString *) keyName searchable:(BOOL) searchable searchableByDefault:(BOOL) searchableByDefault unique:(BOOL) unique multiValued:(BOOL) multiValued;
```

## Parameters

- `keyName`: The name of the custom attribute for use as a key in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md). The key name must be a string that contains only ASCII characters and no punctuation other than the underscore (that is, “\_”). The prefix `kMD` is reserved.
- `searchable`: A Boolean value that indicates if the attribute can be specified as a search term.
- `searchableByDefault`: A Boolean value that indicates if the attribute should be searchable by default.
- `unique`: A Boolean value that indicates if duplicate values should be treated as the same value to save storage space.
- `multiValued`: A Boolean value that indicates if the attribute is likely to have multiple values, such as arrays, associated with it.

<a id="return-value"></a>

## Return Value

A new custom attribute key with the specified name and properties.

<a id="Discussion"></a>

## Discussion

To create custom attribute key names, it’s recommended that you use a reverse DNS format that includes your company name and does not include the period character (”.”). For example, a key name of the form `com_mycompany_myapp_mykeyname` works well.

## See Also

### Creating a custom attribute

- [initWithKeyName:](init%28keyname_%29.md): Returns a new custom attribute key with the specified name.
