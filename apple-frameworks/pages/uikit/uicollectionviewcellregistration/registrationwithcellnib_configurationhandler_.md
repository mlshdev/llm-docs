> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcellregistration/registrationwithcellnib:configurationhandler:](https://developer.apple.com/documentation/uikit/uicollectionviewcellregistration/registrationwithcellnib:configurationhandler:)

# registrationWithCellNib:configurationHandler:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ (deprecated in 1.0)

Creates a cell registration with the specified registration handler and nib file.

## Declaration

```objectivec
+ (instancetype) registrationWithCellNib:(UINib *) cellNib configurationHandler:(UICollectionViewCellRegistrationConfigurationHandler) configurationHandler;
```

## See Also

### Creating a cell registration

- [registrationWithCellClass:configurationHandler:](registrationwithcellclass_configurationhandler_.md): Creates a cell registration with the specified registration handler.
- [UICollectionViewCellRegistrationConfigurationHandler](../uicollectionviewcellregistrationconfigurationhandler.md): A closure that handles the cell registration and configuration.
