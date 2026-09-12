> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/app-privacy-configuration/nsprivacycollecteddatatypes](https://developer.apple.com/documentation/bundleresources/app-privacy-configuration/nsprivacycollecteddatatypes)

# NSPrivacyCollectedDataTypes

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A list of dictionaries that report the categories of private data your app or third-party SDK collects.

## Details

`NSPrivacyCollectedDataTypes`

## Mentioned In

- [Describing data use in privacy manifests](../describing-data-use-in-privacy-manifests.md)

<a id="Overview"></a>

## Overview

For more information, see [Describing data use in privacy manifests](../describing-data-use-in-privacy-manifests.md).

## Topics

### Reporting categories of collected data

- [NSPrivacyCollectedDataType](nsprivacycollecteddatatypes/nsprivacycollecteddatatype.md): A string that identifies the type of data your app or third-party SDK collects.
- [NSPrivacyCollectedDataTypePurposes](nsprivacycollecteddatatypes/nsprivacycollecteddatatypepurposes.md): An array of strings that identify reasons your app or third-party SDK collects private data.

### Reporting tracking and linking collected data

- [NSPrivacyCollectedDataTypeLinked](nsprivacycollecteddatatypes/nsprivacycollecteddatatypelinked.md): A Boolean that indicates whether your app or third-party SDK links this data type to the user’s identity.
- [NSPrivacyCollectedDataTypeTracking](nsprivacycollecteddatatypes/nsprivacycollecteddatatypetracking.md): A Boolean that indicates whether your app or third-party SDK uses this data type to track.
