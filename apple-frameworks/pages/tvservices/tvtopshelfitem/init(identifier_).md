> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfitem/init(identifier:)](https://developer.apple.com/documentation/tvservices/tvtopshelfitem/init(identifier:))

# init(identifier:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 13.0+

Creates a top shelf item with the specified identifier.

## Declaration

```swift
init(identifier: String)
```

## Parameters

- `identifier`: The string you use to identify this item. This string must be unique among all of the items you ever return from your app. Never recycle identifiers.

<a id="return-value"></a>

## Return Value

An empty item object.

<a id="Discussion"></a>

## Discussion

After creating the item object, call the [setImageURL(\_:for:)](setimageurl%28__for_%29.md) method to assign an image and one or more actions to the item. Include the item object in the [TVTopShelfContent](../tvtopshelfcontent.md) object you return from your extension.

# initWithIdentifier: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Creates a top shelf item with the specified identifier.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The string you use to identify this item. This string must be unique among all of the items you ever return from your app. Never recycle identifiers.

<a id="return-value"></a>

## Return Value

An empty item object.

<a id="Discussion"></a>

## Discussion

After creating the item object, call the [setImageURL:forTraits:](setimageurl%28__for_%29.md) method to assign an image and one or more actions to the item. Include the item object in the [TVTopShelfContent](../tvtopshelfcontent.md) object you return from your extension.
