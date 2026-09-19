> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/nshealthclinicalhealthrecordsshareusagedescription

# NSHealthClinicalHealthRecordsShareUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · visionOS 1.0+

A message to the user that explains why the app requested permission to read clinical records.

## Details

`NSHealthClinicalHealthRecordsShareUsageDescription`

<a id="Discussion"></a>

## Discussion

> **Important**

>  This key is required if your app uses APIs that access the user’s clinical records.

## See Also

### Health

- [Setting up HealthKit](../../healthkit/setting-up-healthkit.md): Set up and configure your HealthKit store.
- [NSHealthShareUsageDescription](nshealthshareusagedescription.md): A message that explains to people why the app requests permission to read samples from the HealthKit store.
- [NSHealthUpdateUsageDescription](nshealthupdateusagedescription.md): A message to the user that explains why the app requested permission to save samples to the HealthKit store.
- [NSHealthRequiredReadAuthorizationTypeIdentifiers](nshealthrequiredreadauthorizationtypeidentifiers.md): The clinical record data types that your app must get permission to read.
