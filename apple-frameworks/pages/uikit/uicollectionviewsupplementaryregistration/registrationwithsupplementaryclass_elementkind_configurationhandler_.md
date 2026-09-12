> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewsupplementaryregistration/registrationwithsupplementaryclass:elementkind:configurationhandler:](https://developer.apple.com/documentation/uikit/uicollectionviewsupplementaryregistration/registrationwithsupplementaryclass:elementkind:configurationhandler:)

# registrationWithSupplementaryClass:elementKind:configurationHandler:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a supplementary registration for the specified element kind with a registration handler.

## Declaration

```objectivec
+ (instancetype) registrationWithSupplementaryClass:(Class) supplementaryClass elementKind:(NSString *) elementKind configurationHandler:(UICollectionViewSupplementaryRegistrationConfigurationHandler) configurationHandler;
```

## See Also

### Creating a supplementary registration

- [registrationWithSupplementaryNib:elementKind:configurationHandler:](registrationwithsupplementarynib_elementkind_configurationhandler_.md): Deprecated. Creates a supplementary registration for the specified element kind with a registration handler and nib file.
- [UICollectionViewSupplementaryRegistrationConfigurationHandler](../uicollectionviewsupplementaryregistrationconfigurationhandler.md): A block that handles the supplementary view registration and configuration.
