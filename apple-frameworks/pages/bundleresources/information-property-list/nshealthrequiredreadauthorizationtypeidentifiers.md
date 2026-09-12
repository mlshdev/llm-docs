> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nshealthrequiredreadauthorizationtypeidentifiers](https://developer.apple.com/documentation/bundleresources/information-property-list/nshealthrequiredreadauthorizationtypeidentifiers)

# NSHealthRequiredReadAuthorizationTypeIdentifiers (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · visionOS 1.0+

The clinical record data types that your app must get permission to read.

## Details

`NSHealthRequiredReadAuthorizationTypeIdentifiers`

<a id="Discussion"></a>

## Discussion

Use this key to indicate that your app requires access to specific clinical record data types to function properly. Set the value to an array of strings containing the type identifiers for your required types. For a list of type identifiers, see [HKClinicalTypeIdentifier](../../healthkit/hkclinicaltypeidentifier.md).

To protect the user’s privacy, you must specify three or more required clinical record types. If the user denies authorization to any of the types, authorization fails with an [HKError.Code.errorRequiredAuthorizationDenied](../../healthkit/hkerror/code/errorrequiredauthorizationdenied.md) error. Your app is not told the record types to which the user denied access.

## See Also

### Health

- [Setting up HealthKit](../../healthkit/setting-up-healthkit.md): Set up and configure your HealthKit store.
- [NSHealthClinicalHealthRecordsShareUsageDescription](nshealthclinicalhealthrecordsshareusagedescription.md): A message to the user that explains why the app requested permission to read clinical records.
- [NSHealthShareUsageDescription](nshealthshareusagedescription.md): A message that explains to people why the app requests permission to read samples from the HealthKit store.
- [NSHealthUpdateUsageDescription](nshealthupdateusagedescription.md): A message to the user that explains why the app requested permission to save samples to the HealthKit store.

# NSHealthRequiredReadAuthorizationTypeIdentifiers (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · visionOS 1.0+

The clinical record data types that your app must get permission to read.

## Details

`NSHealthRequiredReadAuthorizationTypeIdentifiers`

<a id="Discussion"></a>

## Discussion

Use this key to indicate that your app requires access to specific clinical record data types to function properly. Set the value to an array of strings containing the type identifiers for your required types. For a list of type identifiers, see [HKClinicalTypeIdentifier](../../healthkit/hkclinicaltypeidentifier.md).

To protect the user’s privacy, you must specify three or more required clinical record types. If the user denies authorization to any of the types, authorization fails with an [HKErrorRequiredAuthorizationDenied](../../healthkit/hkerror/code/errorrequiredauthorizationdenied.md) error. Your app is not told the record types to which the user denied access.

## See Also

### Health

- [Setting up HealthKit](../../healthkit/setting-up-healthkit.md): Set up and configure your HealthKit store.
- [NSHealthClinicalHealthRecordsShareUsageDescription](nshealthclinicalhealthrecordsshareusagedescription.md): A message to the user that explains why the app requested permission to read clinical records.
- [NSHealthShareUsageDescription](nshealthshareusagedescription.md): A message that explains to people why the app requests permission to read samples from the HealthKit store.
- [NSHealthUpdateUsageDescription](nshealthupdateusagedescription.md): A message to the user that explains why the app requested permission to save samples to the HealthKit store.
