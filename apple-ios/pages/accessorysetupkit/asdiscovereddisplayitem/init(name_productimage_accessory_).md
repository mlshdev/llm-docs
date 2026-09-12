> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asdiscovereddisplayitem/init(name:productimage:accessory:)](https://developer.apple.com/documentation/accessorysetupkit/asdiscovereddisplayitem/init(name:productimage:accessory:))

# init(name:productImage:accessory:) (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Initializer  
**Availability:** iOS 26.1+ · iPadOS 26.1+

Creates a discovered picker display item with a name and image to display and a descriptor to match discovered accessories.

## Declaration

```swift
init(name: String, productImage: UIImage, accessory: ASDiscoveredAccessory)
```

## Parameters

- `name`: The accessory name to display in the picker.
- `productImage`: An image of the accessory to display in the picker.
- `accessory`: App filtered accessory to display in the picker.

# initWithName:productImage:accessory: (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+

Creates a discovered picker display item with a name and image to display and a descriptor to match discovered accessories.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name productImage:(UIImage *) productImage accessory:(ASDiscoveredAccessory *) accessory;
```

## Parameters

- `name`: The accessory name to display in the picker.
- `productImage`: An image of the accessory to display in the picker.
- `accessory`: App filtered accessory to display in the picker.
