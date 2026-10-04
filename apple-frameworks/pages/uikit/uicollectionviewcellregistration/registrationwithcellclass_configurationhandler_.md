> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionviewcellregistration/registrationwithcellclass:configurationhandler:

# registrationWithCellClass:configurationHandler:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a cell registration with the specified registration handler.

## Declaration

```objectivec
+ (instancetype) registrationWithCellClass:(Class) cellClass configurationHandler:(UICollectionViewCellRegistrationConfigurationHandler) configurationHandler;
```

## See Also

### Creating a cell registration

- [registrationWithCellNib:configurationHandler:](registrationwithcellnib_configurationhandler_.md): Deprecated. Creates a cell registration with the specified registration handler and nib file.
- [UICollectionViewCellRegistrationConfigurationHandler](../uicollectionviewcellregistrationconfigurationhandler.md): A closure that handles the cell registration and configuration.
