> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridedriver/phonenumber](https://developer.apple.com/documentation/intents/inridedriver/phonenumber)

# phoneNumber (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The driver’s phone number.

## Declaration

```swift
var phoneNumber: String? { get }
```

<a id="Discussion"></a>

## Discussion

When displaying information about the driver, the system displays the provided string as-is and does not try to format it. You are responsible for formatting the phone number appropriately for the user’s locale.

## See Also

### Getting the Driver Information

- [rating](rating.md): The driver’s current rating.

# phoneNumber (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The driver’s phone number.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * phoneNumber;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * phoneNumber;
```

<a id="Discussion"></a>

## Discussion

When displaying information about the driver, the system displays the provided string as-is and does not try to format it. You are responsible for formatting the phone number appropriately for the user’s locale.

## See Also

### Getting the Driver Information

- [rating](rating.md): The driver’s current rating.
