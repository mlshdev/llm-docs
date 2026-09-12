> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfitem/expirationdate](https://developer.apple.com/documentation/tvservices/tvtopshelfitem/expirationdate)

# expirationDate (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The date on which the item becomes unavailable.

## Declaration

```swift
var expirationDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify an expiration date when the content associated with the item has a limited lifespan. For example, use it to specify the date on which a rented movie expires. The system uses this property to remove items that have expired since you last provided data.

## See Also

### Getting the Item Attributes

- [identifier](identifier.md): The unique identifier for the item.

# expirationDate (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The date on which the item becomes unavailable.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * expirationDate;
```

<a id="Discussion"></a>

## Discussion

Specify an expiration date when the content associated with the item has a limited lifespan. For example, use it to specify the date on which a rented movie expires. The system uses this property to remove items that have expired since you last provided data.

## See Also

### Getting the Item Attributes

- [identifier](identifier.md): The unique identifier for the item.
