> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewsupplementaryregistrationconfigurationhandler](https://developer.apple.com/documentation/uikit/uicollectionviewsupplementaryregistrationconfigurationhandler)

# UICollectionViewSupplementaryRegistrationConfigurationHandler

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A block that handles the supplementary view registration and configuration.

## Declaration

```objectivec
typedef void (^)(__kindof UICollectionReusableView *, NSString *, NSIndexPath *) UICollectionViewSupplementaryRegistrationConfigurationHandler;
```

## See Also

### Creating a supplementary registration

- [registrationWithSupplementaryClass:elementKind:configurationHandler:](uicollectionviewsupplementaryregistration/registrationwithsupplementaryclass_elementkind_configurationhandler_.md): Creates a supplementary registration for the specified element kind with a registration handler.
- [registrationWithSupplementaryNib:elementKind:configurationHandler:](uicollectionviewsupplementaryregistration/registrationwithsupplementarynib_elementkind_configurationhandler_.md): Deprecated. Creates a supplementary registration for the specified element kind with a registration handler and nib file.
