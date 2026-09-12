> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/domain](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/domain)

# domain (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

The domain managed by this file provider object.

## Declaration

```swift
var domain: NSFileProviderDomain? { get }
```

<a id="Discussion"></a>

## Discussion

If the File Provider extension does not use domains, this property is set to `nil`. By default, a File Provider extension does not have any domains.

A new [NSFileProviderExtension](../nsfileproviderextension.md) object is created for each domain added to the File Provider manager. The new File Provider’s [domain](domain.md) property is set to the added domain, and any items returned by the File Provider belong to that domain.

# domain (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+

The domain managed by this file provider object.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSFileProviderDomain * domain;
```

<a id="Discussion"></a>

## Discussion

If the File Provider extension does not use domains, this property is set to `nil`. By default, a File Provider extension does not have any domains.

A new [NSFileProviderExtension](../nsfileproviderextension.md) object is created for each domain added to the File Provider manager. The new File Provider’s [domain](domain.md) property is set to the added domain, and any items returned by the File Provider belong to that domain.
