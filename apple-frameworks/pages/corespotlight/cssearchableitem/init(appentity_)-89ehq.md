> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/init(appentity:)-89ehq](https://developer.apple.com/documentation/corespotlight/cssearchableitem/init(appentity:)-89ehq)

# init(appEntity:)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Initializes a new searchable item with the relevant fields populated from the provided app entity.

## Declaration

```swift
convenience init(appEntity: some IndexedEntity)
```

## Parameters

- `appEntity`: The app entity to use for initialization.

## See Also

### Getting a searchable item

- [init(uniqueIdentifier:domainIdentifier:attributeSet:)](init%28uniqueidentifier_domainidentifier_attributeset_%29.md): Returns a searchable item associated with the specified identifier, domain identifier, and attribute set.
- [init(appEntity:)](init%28appentity_%29-3hv5.md): Initializes a new searchable item with the relevant fields populated from the provided app entity. Resolves deferred properties before indexing.
- [init(appEntity:priority:)](init%28appentity_priority_%29-7h9s.md): Initializes a new searchable item with the relevant fields populated from the provided app entity.
- [init(appEntity:priority:)](init%28appentity_priority_%29-7xlow.md): Initializes a new searchable item with the relevant fields populated from the provided app entity. Resolves deferred properties before indexing.
- [init(coder:)](init%28coder_%29.md)
