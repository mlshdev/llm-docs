> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewsupplementaryregistration/registrationwithsupplementarynib:elementkind:configurationhandler:](https://developer.apple.com/documentation/uikit/uicollectionviewsupplementaryregistration/registrationwithsupplementarynib:elementkind:configurationhandler:)

# registrationWithSupplementaryNib:elementKind:configurationHandler:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ (deprecated in 1.0)

Creates a supplementary registration for the specified element kind with a registration handler and nib file.

## Declaration

```objectivec
+ (instancetype) registrationWithSupplementaryNib:(UINib *) supplementaryNib elementKind:(NSString *) elementKind configurationHandler:(UICollectionViewSupplementaryRegistrationConfigurationHandler) configurationHandler;
```

## See Also

### Creating a supplementary registration

- [registrationWithSupplementaryClass:elementKind:configurationHandler:](registrationwithsupplementaryclass_elementkind_configurationhandler_.md): Creates a supplementary registration for the specified element kind with a registration handler.
- [UICollectionViewSupplementaryRegistrationConfigurationHandler](../uicollectionviewsupplementaryregistrationconfigurationhandler.md): A block that handles the supplementary view registration and configuration.
