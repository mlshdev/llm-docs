> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/init(uniqueidentifier:domainidentifier:attributeset:)](https://developer.apple.com/documentation/corespotlight/cssearchableitem/init(uniqueidentifier:domainidentifier:attributeset:))

# init(uniqueIdentifier:domainIdentifier:attributeSet:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns a searchable item associated with the specified identifier, domain identifier, and attribute set.

## Declaration

```swift
init(uniqueIdentifier: String?, domainIdentifier: String?, attributeSet: CSSearchableItemAttributeSet)
```

## Parameters

- `uniqueIdentifier`: The unique identifier for the item. If you specify `NULL`, an identifier is generated automatically.
- `domainIdentifier`: An identifier for a domain, such as an album, that helps you group items together in a way that makes sense.
- `attributeSet`: A set of properties that specify the metadata you want to display about an item in a search result. See [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) for the types of properties you can use.

<a id="return-value"></a>

## Return Value

A searchable item that’s associated with the specified identifier, domain identifier, and attribute set.

## See Also

### Getting a searchable item

- [init(appEntity:)](init%28appentity_%29-3hv5.md): Initializes a new searchable item with the relevant fields populated from the provided app entity. Resolves deferred properties before indexing.
- [init(appEntity:)](init%28appentity_%29-89ehq.md): Initializes a new searchable item with the relevant fields populated from the provided app entity.
- [init(appEntity:priority:)](init%28appentity_priority_%29-7h9s.md): Initializes a new searchable item with the relevant fields populated from the provided app entity.
- [init(appEntity:priority:)](init%28appentity_priority_%29-7xlow.md): Initializes a new searchable item with the relevant fields populated from the provided app entity. Resolves deferred properties before indexing.
- [init(coder:)](init%28coder_%29.md)

# initWithUniqueIdentifier:domainIdentifier:attributeSet: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Returns a searchable item associated with the specified identifier, domain identifier, and attribute set.

## Declaration

```objectivec
- (instancetype) initWithUniqueIdentifier:(NSString *) uniqueIdentifier domainIdentifier:(NSString *) domainIdentifier attributeSet:(CSSearchableItemAttributeSet *) attributeSet;
```

## Parameters

- `uniqueIdentifier`: The unique identifier for the item. If you specify `NULL`, an identifier is generated automatically.
- `domainIdentifier`: An identifier for a domain, such as an album, that helps you group items together in a way that makes sense.
- `attributeSet`: A set of properties that specify the metadata you want to display about an item in a search result. See [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) for the types of properties you can use.

<a id="return-value"></a>

## Return Value

A searchable item that’s associated with the specified identifier, domain identifier, and attribute set.
