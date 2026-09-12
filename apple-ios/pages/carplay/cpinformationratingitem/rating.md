> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinformationratingitem/rating](https://developer.apple.com/documentation/carplay/cpinformationratingitem/rating)

# rating (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The current rating that the template displays.

## Declaration

```swift
var rating: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

This property is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) that contains a value in the range of 0 to [maximumRating](maximumrating.md). The value is an increment of 0.5.

## See Also

### Accessing the Item’s Attributes

- [maximumRating](maximumrating.md): The maximum rating that the template displays.

# rating (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The current rating that the template displays.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSNumber * rating;
```

<a id="Discussion"></a>

## Discussion

This property is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) that contains a value in the range of 0 to [maximumRating](maximumrating.md). The value is an increment of 0.5.

## See Also

### Accessing the Item’s Attributes

- [maximumRating](maximumrating.md): The maximum rating that the template displays.
