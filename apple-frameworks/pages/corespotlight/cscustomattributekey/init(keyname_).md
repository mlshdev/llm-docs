> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cscustomattributekey/init(keyname:)](https://developer.apple.com/documentation/corespotlight/cscustomattributekey/init(keyname:))

# init(keyName:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns a new custom attribute key with the specified name.

## Declaration

```swift
convenience init?(keyName: String)
```

## Parameters

- `keyName`: The name of the custom attribute for use as a key in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md). The key name must be a string that contains only ASCII characters and no punctuation other than the underscore (that is “\_”). The prefix `kMD` is reserved.

<a id="return-value"></a>

## Return Value

A new custom attribute key.

<a id="Discussion"></a>

## Discussion

To create custom attribute key names, use a reverse DNS format that includes your company name and does not include the period character (”.”). For example, a key name of the form `com_mycompany_myapp_mykeyname` works well.

## See Also

### Creating a custom attribute

- [init(keyName:searchable:searchableByDefault:unique:multiValued:)](init%28keyname_searchable_searchablebydefault_unique_multivalued_%29.md): Returns a new custom attribute key with the specified name and properties.
- [init(coder:)](init%28coder_%29.md)

# initWithKeyName: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns a new custom attribute key with the specified name.

## Declaration

```objectivec
- (instancetype) initWithKeyName:(NSString *) keyName;
```

## Parameters

- `keyName`: The name of the custom attribute for use as a key in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md). The key name must be a string that contains only ASCII characters and no punctuation other than the underscore (that is “\_”). The prefix `kMD` is reserved.

<a id="return-value"></a>

## Return Value

A new custom attribute key.

<a id="Discussion"></a>

## Discussion

To create custom attribute key names, use a reverse DNS format that includes your company name and does not include the period character (”.”). For example, a key name of the form `com_mycompany_myapp_mykeyname` works well.

## See Also

### Creating a custom attribute

- [initWithKeyName:searchable:searchableByDefault:unique:multiValued:](init%28keyname_searchable_searchablebydefault_unique_multivalued_%29.md): Returns a new custom attribute key with the specified name and properties.
