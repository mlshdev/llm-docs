> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantguestdisplaypreferences/namefieldfirstnameoptional](https://developer.apple.com/documentation/intents/inrestaurantguestdisplaypreferences/namefieldfirstnameoptional)

# nameFieldFirstNameOptional (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the reservation requires the guest’s first name.

## Declaration

```swift
var nameFieldFirstNameOptional: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which prevents completion of the reservation if the first name field is empty.

## See Also

### Specifying Required Fields

- [nameFieldLastNameOptional](namefieldlastnameoptional.md): A Boolean value indicating whether the reservation requires the guest’s last name.

# nameFieldFirstNameOptional (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the reservation requires the guest’s first name.

## Declaration

```objectivec
@property (nonatomic) BOOL nameFieldFirstNameOptional;
```

```objectivec
@property (atomic) BOOL nameFieldFirstNameOptional;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which prevents completion of the reservation if the first name field is empty.

## See Also

### Specifying Required Fields

- [nameFieldLastNameOptional](namefieldlastnameoptional.md): A Boolean value indicating whether the reservation requires the guest’s last name.
