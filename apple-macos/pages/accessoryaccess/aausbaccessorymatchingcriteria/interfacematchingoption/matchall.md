> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymatchingcriteria/interfacematchingoption/matchall](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymatchingcriteria/interfacematchingoption/matchall)

# AAUSBAccessoryMatchingCriteria.InterfaceMatchingOption.matchAll (Swift)

**Framework:** Accessory Access  
**Kind:** Case  
**Availability:** macOS 27.0+

A value that indicates the match needs to be all inclusive of the provided interface criteria.

## Declaration

```swift
case matchAll
```

<a id="Discussion"></a>

## Discussion

Matching is successful for the USB accessory that has at least one USB interface matching every criteria in the provided dictionary.

## See Also

- [init(rawValue:)](init%28rawvalue_%29.md): Initializes a new interface matching option with the provided value.
- [AAUSBAccessoryMatchingCriteria.InterfaceMatchingOption.matchAny](matchany.md): A value that indicates that the match needs to cover at least one of the provided interface criteria.

# AAUSBAccessoryMatchingCriteriaInterfaceMatchingOptionMatchAll (Objective-C)

**Framework:** Accessory Access  
**Kind:** Enumeration Case  
**Availability:** macOS 27.0+

A value that indicates the match needs to be all inclusive of the provided interface criteria.

## Declaration

```objectivec
AAUSBAccessoryMatchingCriteriaInterfaceMatchingOptionMatchAll
```

<a id="Discussion"></a>

## Discussion

Matching is successful for the USB accessory that has at least one USB interface matching every criteria in the provided dictionary.

## See Also

- [AAUSBAccessoryMatchingCriteriaInterfaceMatchingOptionMatchAny](matchany.md): A value that indicates that the match needs to cover at least one of the provided interface criteria.
