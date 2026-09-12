> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspickerdisplayitem/init(name:productimage:descriptor:)](https://developer.apple.com/documentation/accessorysetupkit/aspickerdisplayitem/init(name:productimage:descriptor:))

# init(name:productImage:descriptor:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Creates a picker display item with a name and image to display and a descriptor to match discovered accessories.

## Declaration

```swift
init(name: String, productImage: UIImage, descriptor: ASDiscoveryDescriptor)
```

## Parameters

- `name`: The accessory name to display in the picker.
- `productImage`: An image of the accessory to display in the picker.
- `descriptor`: A descriptor that the picker uses to determine which discovered accessories to display.

# initWithName:productImage:descriptor: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Creates a picker display item with a name and image to display and a descriptor to match discovered accessories.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name productImage:(UIImage *) productImage descriptor:(ASDiscoveryDescriptor *) descriptor;
```

## Parameters

- `name`: The accessory name to display in the picker.
- `productImage`: An image of the accessory to display in the picker.
- `descriptor`: A descriptor that the picker uses to determine which discovered accessories to display.
