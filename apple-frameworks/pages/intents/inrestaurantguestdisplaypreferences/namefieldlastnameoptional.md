> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inrestaurantguestdisplaypreferences/namefieldlastnameoptional

# nameFieldLastNameOptional (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the reservation requires the guest’s last name.

## Declaration

```swift
var nameFieldLastNameOptional: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which prevents completion of the reservation if the last name field is empty.

## See Also

### Specifying Required Fields

- [nameFieldFirstNameOptional](namefieldfirstnameoptional.md): A Boolean value indicating whether the reservation requires the guest’s first name.

# nameFieldLastNameOptional (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the reservation requires the guest’s last name.

## Declaration

```objectivec
@property (nonatomic) BOOL nameFieldLastNameOptional;
```

```objectivec
@property (atomic) BOOL nameFieldLastNameOptional;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which prevents completion of the reservation if the last name field is empty.

## See Also

### Specifying Required Fields

- [nameFieldFirstNameOptional](namefieldfirstnameoptional.md): A Boolean value indicating whether the reservation requires the guest’s first name.
