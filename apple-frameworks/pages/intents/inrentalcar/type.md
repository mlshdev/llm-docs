> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrentalcar/type](https://developer.apple.com/documentation/intents/inrentalcar/type)

# type (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The type of rental car the user reserved.

## Declaration

```swift
var type: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property typically contains a string that describes the type of rental car reserved as defined by the rental car company, such as “Economy Class” or “Compact”.

## See Also

### Getting the Rental Car Information

- [rentalCompanyName](rentalcompanyname.md): The name of the rental car company.
- [make](make.md): The name of the company that made the rental car.
- [model](model.md): The name of the rental car model.
- [rentalCarDescription](rentalcardescription.md): A description of the rental car.

# type (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The type of rental car the user reserved.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * type;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * type;
```

<a id="Discussion"></a>

## Discussion

This property typically contains a string that describes the type of rental car reserved as defined by the rental car company, such as “Economy Class” or “Compact”.

## See Also

### Getting the Rental Car Information

- [rentalCompanyName](rentalcompanyname.md): The name of the rental car company.
- [make](make.md): The name of the company that made the rental car.
- [model](model.md): The name of the rental car model.
- [rentalCarDescription](rentalcardescription.md): A description of the rental car.
