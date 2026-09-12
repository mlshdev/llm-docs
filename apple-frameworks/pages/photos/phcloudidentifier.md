> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcloudidentifier](https://developer.apple.com/documentation/photos/phcloudidentifier)

# PHCloudIdentifier (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.13+ · tvOS 15.0+ · visionOS 1.0+

An object that identifies an asset or collection that syncs through iCloud Photos.

## Declaration

```swift
class PHCloudIdentifier
```

<a id="overview"></a>

## Overview

A cloud identifier is a type of identifier that behaves like a local identifier. Use cloud identifiers to identify objects that sync across devices through iCloud Photos. You can store, sync, and use cloud identifiers with devices synced with an iCloud account. You’re also able to use secure coding to encode and decode cloud identifiers.

A local identifier is valid for referring to objects only in the context of a local device. These objects include [PHAsset](phasset.md), [PHAssetCollection](phassetcollection.md), and [PHCollectionList](phcollectionlist.md).

Because a cloud identifier is universal, you can use it on any iCloud-synced device. Convert the cloud identifier back to a local identifier and perform a fetch to find the equivalent object on that device. Perform batch lookups of identifiers using [localIdentifierMappingsForCloudIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiermappingsforcloudidentifiers:) and [cloudIdentifierMappingsForLocalIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/cloudidentifiermappingsforlocalidentifiers:).

```swift
// Get the local identifier mappings for the cloud identifiers.
let identifierMappings = library.localIdentifierMappings(for: assetCloudIdentifiers)
```

Retrieving identifier mappings can be an expensive operation, so perform lookups sparingly. If a lookup fails, inspect the error property on [PHCloudIdentifierMapping](https://developer.apple.com/documentation/photos/phcloudidentifiermapping) or [PHLocalIdentifierMapping](https://developer.apple.com/documentation/photos/phlocalidentifiermapping) for details. See [PHPhotosError.Code](phphotoserror-swift.struct/code.md) for additional error details.

```swift
// Iterate over the cloud identifiers and add or handle missing local identifiers.
for cloudIdentifier in assetCloudIdentifiers {
    guard let identifierMapping = identifierMappings[cloudIdentifier] else {
        print("Failed to find a mapping for \(cloudIdentifier).")
        continue
    }

    // Track the local identifier if it exists.
    if let localIdentifier = identifierMapping.localIdentifier {
        localIdentifiers.append(localIdentifier)
    } else if let error = identifierMapping.error as? PHPhotosError {
        switch error.code {
        case .identifierNotFound:
            // Skip the missing or deleted assets.
            print("Failed to find the local identifier for \(cloudIdentifier). \(error.localizedDescription))")
        case .multipleIdentifiersFound:
            // Prompt the user to resolve the cloud identifier that matched multiple assets.
            print("Found multiple local identifiers for \(cloudIdentifier). \(error.localizedDescription)")
            if let selectedLocalIdentifier = promptUserForPotentialReplacement(with: error.userInfo[PHLocalIdentifiersErrorKey]) {
                localIdentifiers.append(selectedLocalIdentifier)
            }
        default:
            print("Encountered an unexpected error looking up the local identifier for \(cloudIdentifier). \(error.localizedDescription)")
        }
    }
}

// Fetch assets using the found identifiers.
let mappedAssets = PHAsset.fetchAssets(withLocalIdentifiers: localIdentifiers, 
                                       options: nil)
```

## Topics

### Using Cloud Identifiers

- [init(stringValue:)](phcloudidentifier/init%28stringvalue_%29.md): Deprecated. Deserializes a cloud identifier from its string value.
- [stringValue](phcloudidentifier/stringvalue.md): Deprecated. A string version of the cloud identifier to use in serialization.
- [notFound](phcloudidentifier/notfound.md): Deprecated. The global identifier used in an array slot for items that couldn’t be found.

### Initializers

- [init(archivalStringValue:)](phcloudidentifier/init%28archivalstringvalue_%29.md): Archival string can be used to serialize and deserialize the PHCloudIdentifier (Note the archival format is compatible with strings archived via the deprecated API `stringValue`)
- [init(coder:)](phcloudidentifier/init%28coder_%29.md)

### Instance Properties

- [archivalStringValue](phcloudidentifier/archivalstringvalue.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Converting Between Local and iCloud Identifiers

- [cloudIdentifierMappings(forLocalIdentifiers:)](phphotolibrary/cloudidentifiermappings%28forlocalidentifiers_%29.md): Retrieves the cloud identifier mappings for the list of local identifiers.
- [localIdentifierMappings(for:)](phphotolibrary/localidentifiermappings%28for_%29.md): Retrieves the local identifier mappings for the list of cloud identifiers.
- [cloudIdentifiers(forLocalIdentifiers:)](phphotolibrary/cloudidentifiers%28forlocalidentifiers_%29.md): Deprecated. Retrieves the equivalent iCloud identifiers for the list of local identifiers.
- [localIdentifiers(for:)](phphotolibrary/localidentifiers%28for_%29.md): Deprecated. Retrieves the equivalent local identifiers for the list of iCloud identifiers.
- [PHLocalIdentifierNotFound](phlocalidentifiernotfound.md): Deprecated. A constant value that indicates that the system can’t resolve a local object from a global identifier.

# PHCloudIdentifier (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.13+ · tvOS 15.0+ · visionOS 1.0+

An object that identifies an asset or collection that syncs through iCloud Photos.

## Declaration

```objectivec
@interface PHCloudIdentifier : NSObject
```

<a id="overview"></a>

## Overview

A cloud identifier is a type of identifier that behaves like a local identifier. Use cloud identifiers to identify objects that sync across devices through iCloud Photos. You can store, sync, and use cloud identifiers with devices synced with an iCloud account. You’re also able to use secure coding to encode and decode cloud identifiers.

A local identifier is valid for referring to objects only in the context of a local device. These objects include [PHAsset](phasset.md), [PHAssetCollection](phassetcollection.md), and [PHCollectionList](phcollectionlist.md).

Because a cloud identifier is universal, you can use it on any iCloud-synced device. Convert the cloud identifier back to a local identifier and perform a fetch to find the equivalent object on that device. Perform batch lookups of identifiers using [localIdentifierMappingsForCloudIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiermappingsforcloudidentifiers:) and [cloudIdentifierMappingsForLocalIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/cloudidentifiermappingsforlocalidentifiers:).

```swift
// Get the local identifier mappings for the cloud identifiers.
let identifierMappings = library.localIdentifierMappings(for: assetCloudIdentifiers)
```

Retrieving identifier mappings can be an expensive operation, so perform lookups sparingly. If a lookup fails, inspect the error property on [PHCloudIdentifierMapping](https://developer.apple.com/documentation/photos/phcloudidentifiermapping) or [PHLocalIdentifierMapping](https://developer.apple.com/documentation/photos/phlocalidentifiermapping) for details. See [PHPhotosError](phphotoserror-swift.struct/code.md) for additional error details.

```swift
// Iterate over the cloud identifiers and add or handle missing local identifiers.
for cloudIdentifier in assetCloudIdentifiers {
    guard let identifierMapping = identifierMappings[cloudIdentifier] else {
        print("Failed to find a mapping for \(cloudIdentifier).")
        continue
    }

    // Track the local identifier if it exists.
    if let localIdentifier = identifierMapping.localIdentifier {
        localIdentifiers.append(localIdentifier)
    } else if let error = identifierMapping.error as? PHPhotosError {
        switch error.code {
        case .identifierNotFound:
            // Skip the missing or deleted assets.
            print("Failed to find the local identifier for \(cloudIdentifier). \(error.localizedDescription))")
        case .multipleIdentifiersFound:
            // Prompt the user to resolve the cloud identifier that matched multiple assets.
            print("Found multiple local identifiers for \(cloudIdentifier). \(error.localizedDescription)")
            if let selectedLocalIdentifier = promptUserForPotentialReplacement(with: error.userInfo[PHLocalIdentifiersErrorKey]) {
                localIdentifiers.append(selectedLocalIdentifier)
            }
        default:
            print("Encountered an unexpected error looking up the local identifier for \(cloudIdentifier). \(error.localizedDescription)")
        }
    }
}

// Fetch assets using the found identifiers.
let mappedAssets = PHAsset.fetchAssets(withLocalIdentifiers: localIdentifiers, 
                                       options: nil)
```

## Topics

### Using Cloud Identifiers

- [initWithStringValue:](phcloudidentifier/init%28stringvalue_%29.md): Deprecated. Deserializes a cloud identifier from its string value.
- [stringValue](phcloudidentifier/stringvalue.md): Deprecated. A string version of the cloud identifier to use in serialization.
- [notFoundIdentifier](phcloudidentifier/notfound.md): Deprecated. The global identifier used in an array slot for items that couldn’t be found.

### Instance Properties

- [archivalStringValue](phcloudidentifier/archivalstringvalue.md)

### Instance Methods

- [initWithArchivalStringValue:](phcloudidentifier/init%28archivalstringvalue_%29.md): Archival string can be used to serialize and deserialize the PHCloudIdentifier (Note the archival format is compatible with strings archived via the deprecated API `stringValue`)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Converting Between Local and iCloud Identifiers

- [cloudIdentifierMappingsForLocalIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/cloudidentifiermappingsforlocalidentifiers:): Retrieves the cloud identifier mappings for the list of local identifiers.
- [localIdentifierMappingsForCloudIdentifiers:](https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiermappingsforcloudidentifiers:): Retrieves the local identifier mappings for the list of cloud identifiers.
- [PHCloudIdentifierMapping](https://developer.apple.com/documentation/photos/phcloudidentifiermapping): An object that contains the cloud identifier result from looking up a local identifier, or an error indicating why the lookup failed.
- [PHLocalIdentifierMapping](https://developer.apple.com/documentation/photos/phlocalidentifiermapping): An object that contains the local identifier result from looking up a cloud identifier, or an error indicating why the lookup failed.
- [cloudIdentifiersForLocalIdentifiers:](phphotolibrary/cloudidentifiers%28forlocalidentifiers_%29.md): Deprecated. Retrieves the equivalent iCloud identifiers for the list of local identifiers.
- [localIdentifiersForCloudIdentifiers:](phphotolibrary/localidentifiers%28for_%29.md): Deprecated. Retrieves the equivalent local identifiers for the list of iCloud identifiers.
- [PHLocalIdentifierNotFound](phlocalidentifiernotfound.md): Deprecated. A constant value that indicates that the system can’t resolve a local object from a global identifier.
