> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/category](https://developer.apple.com/documentation/homekit/hmaccessory/category)

# category (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The category to which the accessory belongs.

## Declaration

```swift
var category: HMAccessoryCategory { get }
```

<a id="Discussion"></a>

## Discussion

The accessory’s [category](category.md) property contains an instance of the [HMAccessoryCategory](../hmaccessorycategory.md) class that indicates the kind of accessory, like light bulb, garage door opener, or faucet. Use this information to help users distinguish among different accessories in their environment.

## See Also

### Categorizing an accessory

- [HMAccessoryCategory](../hmaccessorycategory.md): A category for a HomeKit accessory.

# category (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The category to which the accessory belongs.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) HMAccessoryCategory * category;
```

<a id="Discussion"></a>

## Discussion

The accessory’s [category](category.md) property contains an instance of the [HMAccessoryCategory](../hmaccessorycategory.md) class that indicates the kind of accessory, like light bulb, garage door opener, or faucet. Use this information to help users distinguish among different accessories in their environment.

## See Also

### Categorizing an accessory

- [HMAccessoryCategory](../hmaccessorycategory.md): A category for a HomeKit accessory.
