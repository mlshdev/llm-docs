> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/init(contentidentifier:)](https://developer.apple.com/documentation/tvservices/tvcontentitem/init(contentidentifier:))

# init(contentIdentifier:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Initializes a new content item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
init(contentIdentifier ident: TVContentIdentifier)
```

## Parameters

- `ident`: The identifier for the new content item.

<a id="return-value"></a>

## Return Value

A new content item.

## See Also

### Initializing a Content Item

- [init(coder:)](init%28coder_%29.md): Deprecated. Returns an object initialized from data in a given unarchiver.

# initWithContentIdentifier: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Initializes a new content item.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
- (instancetype) initWithContentIdentifier:(TVContentIdentifier *) ident;
```

## Parameters

- `ident`: The identifier for the new content item.

<a id="return-value"></a>

## Return Value

A new content item.

## See Also

### Initializing a Content Item

- [initWithCoder:](init%28coder_%29.md): Deprecated. Returns an object initialized from data in a given unarchiver.
