> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymatchingcriteria/interfacematchingoption/init(rawvalue:)

# init(rawValue:)

**Framework:** Accessory Access  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Initializes a new interface matching option with the provided value.

## Declaration

```swift
init?(rawValue: Int)
```

## See Also

- [AAUSBAccessoryMatchingCriteria.InterfaceMatchingOption.matchAll](matchall.md): A value that indicates the match needs to be all inclusive of the provided interface criteria.
- [AAUSBAccessoryMatchingCriteria.InterfaceMatchingOption.matchAny](matchany.md): A value that indicates that the match needs to cover at least one of the provided interface criteria.
