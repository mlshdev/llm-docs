> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem/init(coder:)](https://developer.apple.com/documentation/tvservices/tvcontentitem/init(coder:))

# init(coder:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Returns an object initialized from data in a given unarchiver.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: An unarchiver object.

<a id="return-value"></a>

## Return Value

A newly initialized content  object.

## See Also

### Initializing a Content Item

- [init(contentIdentifier:)](init%28contentidentifier_%29.md): Deprecated. Initializes a new content item.

# initWithCoder: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Returns an object initialized from data in a given unarchiver.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: An unarchiver object.

<a id="return-value"></a>

## Return Value

A newly initialized content  object.

## See Also

### Initializing a Content Item

- [initWithContentIdentifier:](init%28contentidentifier_%29.md): Deprecated. Initializes a new content item.
