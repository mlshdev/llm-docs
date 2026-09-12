> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentidentifier/init(coder:)](https://developer.apple.com/documentation/tvservices/tvcontentidentifier/init(coder:))

# init(coder:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Returns an object initialized from data in a given unarchiver.

> TVContentIdentifier has been replaced by TVTopShelfContentProvider

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: An unarchiver object.

<a id="return-value"></a>

## Return Value

A newly initialized content identifier object.

## See Also

### Initializing a Content Identifier

- [init(identifier:container:)](init%28identifier_container_%29.md): Deprecated. Creates a new content identifier.

# initWithCoder: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Returns an object initialized from data in a given unarchiver.

> TVContentIdentifier has been replaced by TVTopShelfContentProvider

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: An unarchiver object.

<a id="return-value"></a>

## Return Value

A newly initialized content identifier object.

## See Also

### Initializing a Content Identifier

- [initWithIdentifier:container:](init%28identifier_container_%29.md): Deprecated. Creates a new content identifier.
