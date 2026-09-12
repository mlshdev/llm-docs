> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcellregistrationconfigurationhandler](https://developer.apple.com/documentation/uikit/uicollectionviewcellregistrationconfigurationhandler)

# UICollectionViewCellRegistrationConfigurationHandler

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A closure that handles the cell registration and configuration.

## Declaration

```objectivec
typedef void (^)(__kindof UICollectionViewCell *, NSIndexPath *, id) UICollectionViewCellRegistrationConfigurationHandler;
```

<a id="discussion"></a>

## Discussion

The closure takes the following parameters:

- **`cell`**: The [UICollectionViewCell](uicollectionviewcell.md) or subclass instance to configure.
- **`indexPath`**: The [IndexPath](../foundation/indexpath.md) of the cell to configure.
- **`item`**: The data item you provide in [dequeueConfiguredReusableCellWithRegistration:forIndexPath:item:](uicollectionview/dequeueconfiguredreusablecellwithregistration_forindexpath_item_.md).

## See Also

### Creating a cell registration

- [registrationWithCellClass:configurationHandler:](uicollectionviewcellregistration/registrationwithcellclass_configurationhandler_.md): Creates a cell registration with the specified registration handler.
- [registrationWithCellNib:configurationHandler:](uicollectionviewcellregistration/registrationwithcellnib_configurationhandler_.md): Deprecated. Creates a cell registration with the specified registration handler and nib file.
