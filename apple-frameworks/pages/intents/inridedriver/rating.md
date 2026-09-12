> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridedriver/rating](https://developer.apple.com/documentation/intents/inridedriver/rating)

# rating (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The driver’s current rating.

## Declaration

```swift
var rating: String? { get }
```

<a id="Discussion"></a>

## Discussion

Siri displays the string you provide when displaying the status of a ride request.

## See Also

### Getting the Driver Information

- [phoneNumber](phonenumber.md): The driver’s phone number.

# rating (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The driver’s current rating.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * rating;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * rating;
```

<a id="Discussion"></a>

## Discussion

Siri displays the string you provide when displaying the status of a ride request.

## See Also

### Getting the Driver Information

- [phoneNumber](phonenumber.md): The driver’s phone number.
