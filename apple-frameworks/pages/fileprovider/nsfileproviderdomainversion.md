> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomainversion](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomainversion)

# NSFileProviderDomainVersion (Swift)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

An opaque object that identifies a specific version of a domain.

## Declaration

```swift
class NSFileProviderDomainVersion
```

<a id="overview"></a>

## Overview

The file provider extension is responsible for assigning and updating the domain version. To specify the domain version, adopt the [NSFileProviderDomainState](nsfileproviderdomainstate.md) protocol. The system then calls your extension’s [domainVersion](nsfileproviderdomainstate/domainversion.md) method to read the current version.

The system reads the domain version after you call:

- The [createItem(basedOn:fields:contents:options:request:completionHandler:)](nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) completion handler
- The [modifyItem(\_:baseVersion:changedFields:contents:options:request:completionHandler:)](nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md) completion handler
- The [deleteItem(identifier:baseVersion:options:request:completionHandler:)](nsfileproviderreplicatedextension/deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md) completion handler
- The [item(for:request:completionHandler:)](nsfileproviderreplicatedextension/item%28for_request_completionhandler_%29.md) completion handler
- The [finishEnumerating(upTo:)](nsfileproviderenumerationobserver/finishenumerating%28upto_%29.md) or [finishEnumeratingWithError(\_:)](nsfileproviderenumerationobserver/finishenumeratingwitherror%28__%29.md) method when enumerating the materialized set.

The system always reads the domain version on the same dispatch queue as the completion handler.

Your extension defines when the domain version changes. When you update the version, call the [signalEnumerator(for:completionHandler:)](nsfileprovidermanager/signalenumerator%28for_completionhandler_%29.md) and passing the [workingSet](nsfileprovideritemidentifier/workingset.md) constant as the `containerItemIdentifier` property. This notifies the system of the update. The system ignores any lower versions.

When the system discovers a change on disk, it associates that change with the current domain version. It then includes the version in the [NSFileProviderRequest](nsfileproviderrequest.md) object passed to the file provider extension.

Only file provider extensions based on the [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md) use instances of this class. Each version object is immutable. You can use them as keys in a dictionary.

## Topics

### Creating Versions

- [next()](nsfileproviderdomainversion/next%28%29.md): Creates a new version that supersedes the current version.

### Initializers

- [init(coder:)](nsfileproviderdomainversion/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Domains

- [NSFileProviderDomainState](nsfileproviderdomainstate.md): An object that contains global state data about the domain.

# NSFileProviderDomainVersion (Objective-C)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

An opaque object that identifies a specific version of a domain.

## Declaration

```objectivec
@interface NSFileProviderDomainVersion : NSObject
```

<a id="overview"></a>

## Overview

The file provider extension is responsible for assigning and updating the domain version. To specify the domain version, adopt the [NSFileProviderDomainState](nsfileproviderdomainstate.md) protocol. The system then calls your extension’s [domainVersion](nsfileproviderdomainstate/domainversion.md) method to read the current version.

The system reads the domain version after you call:

- The [createItemBasedOnTemplate:fields:contents:options:request:completionHandler:](nsfileproviderreplicatedextension/createitem%28basedon_fields_contents_options_request_completionhandler_%29.md) completion handler
- The [modifyItem:baseVersion:changedFields:contents:options:request:completionHandler:](nsfileproviderreplicatedextension/modifyitem%28__baseversion_changedfields_contents_options_request_completionhandler_%29.md) completion handler
- The [deleteItemWithIdentifier:baseVersion:options:request:completionHandler:](nsfileproviderreplicatedextension/deleteitem%28identifier_baseversion_options_request_completionhandler_%29.md) completion handler
- The [itemForIdentifier:request:completionHandler:](nsfileproviderreplicatedextension/item%28for_request_completionhandler_%29.md) completion handler
- The [finishEnumeratingUpToPage:](nsfileproviderenumerationobserver/finishenumerating%28upto_%29.md) or [finishEnumeratingWithError:](nsfileproviderenumerationobserver/finishenumeratingwitherror%28__%29.md) method when enumerating the materialized set.

The system always reads the domain version on the same dispatch queue as the completion handler.

Your extension defines when the domain version changes. When you update the version, call the [signalEnumeratorForContainerItemIdentifier:completionHandler:](nsfileprovidermanager/signalenumerator%28for_completionhandler_%29.md) and passing the [NSFileProviderWorkingSetContainerItemIdentifier](nsfileprovideritemidentifier/workingset.md) constant as the `containerItemIdentifier` property. This notifies the system of the update. The system ignores any lower versions.

When the system discovers a change on disk, it associates that change with the current domain version. It then includes the version in the [NSFileProviderRequest](nsfileproviderrequest.md) object passed to the file provider extension.

Only file provider extensions based on the [NSFileProviderReplicatedExtension](nsfileproviderreplicatedextension.md) use instances of this class. Each version object is immutable. You can use them as keys in a dictionary.

## Topics

### Creating Versions

- [next](nsfileproviderdomainversion/next%28%29.md): Creates a new version that supersedes the current version.

### Comparing Versions

- [compare:](nsfileproviderdomainversion/compare_.md): Compares another domain version with this one.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Domains

- [NSFileProviderDomainState](nsfileproviderdomainstate.md): An object that contains global state data about the domain.
