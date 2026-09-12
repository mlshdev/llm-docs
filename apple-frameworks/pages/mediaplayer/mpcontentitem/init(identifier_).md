> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpcontentitem/init(identifier:)](https://developer.apple.com/documentation/mediaplayer/mpcontentitem/init(identifier:))

# init(identifier:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

Sets the identifier for a media item.

## Declaration

```swift
init(identifier: String)
```

## Parameters

- `identifier`: A unique identifier for the content item.

<a id="return-value"></a>

## Return Value

The created `MPContentItem` object.

<a id="Discussion"></a>

## Discussion

Each media item identifier must be unique. The use of nonunique identifiers can prevent media items from updating properly. Create a new identifier when creating an `MPContentItem` object.

# initWithIdentifier: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

Sets the identifier for a media item.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A unique identifier for the content item.

<a id="return-value"></a>

## Return Value

The created `MPContentItem` object.

<a id="Discussion"></a>

## Discussion

Each media item identifier must be unique. The use of nonunique identifiers can prevent media items from updating properly. Create a new identifier when creating an `MPContentItem` object.
