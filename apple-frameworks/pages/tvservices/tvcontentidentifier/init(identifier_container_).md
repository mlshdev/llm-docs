> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentidentifier/init(identifier:container:)](https://developer.apple.com/documentation/tvservices/tvcontentidentifier/init(identifier:container:))

# init(identifier:container:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Creates a new content identifier.

> TVContentIdentifier has been replaced by TVTopShelfContentProvider

## Declaration

```swift
init(identifier: String, container: TVContentIdentifier?)
```

## Parameters

- `identifier`: The string to be used as the identifier.
- `container`: The container (if any) that contains the content.

<a id="return-value"></a>

## Return Value

A newly initialized content identifier object.

## See Also

### Initializing a Content Identifier

- [init(coder:)](init%28coder_%29.md): Deprecated. Returns an object initialized from data in a given unarchiver.

# initWithIdentifier:container: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Creates a new content identifier.

> TVContentIdentifier has been replaced by TVTopShelfContentProvider

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier container:(TVContentIdentifier *) container;
```

## Parameters

- `identifier`: The string to be used as the identifier.
- `container`: The container (if any) that contains the content.

<a id="return-value"></a>

## Return Value

A newly initialized content identifier object.

## See Also

### Initializing a Content Identifier

- [initWithCoder:](init%28coder_%29.md): Deprecated. Returns an object initialized from data in a given unarchiver.
