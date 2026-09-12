> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/usesubiquitousstorage](https://developer.apple.com/documentation/appkit/nsdocument/usesubiquitousstorage)

# usesUbiquitousStorage (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.8+

Returns whether the document object stores its contents in the user’s iCloud document storage.

## Declaration

```swift
class var usesUbiquitousStorage: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This method’s default implementation returns [true](https://developer.apple.com/documentation/swift/true) if your app has a valid iCloud document storage entitlement (`com.apple.developer.ubiquity-container-identifiers` or `com.apple.developer.icloud-container-identifiers`, as described in [Entitlement Key Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/AboutEntitlements.html#//apple_ref/doc/uid/TP40011195)). When this method returns [true](https://developer.apple.com/documentation/swift/true), the system adds new menu items and other UI for iCloud documents, as appropriate, and allows documents to be saved or moved into the primary iCloud container. (The primary iCloud container is the one identified by the first container identifier string in the iCloud Containers list in the Xcode target editor.)

To indicate that your [NSDocument](../nsdocument.md) subclass does not use iCloud storage, override this method to return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Storing Documents in iCloud

- [moveToUbiquityContainer(\_:)](movetoubiquitycontainer%28__%29.md): Moves the document to the user’s iCloud storage.

# usesUbiquitousStorage (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.8+

Returns whether the document object stores its contents in the user’s iCloud document storage.

## Declaration

```objectivec
@property (class, readonly) BOOL usesUbiquitousStorage;
```

<a id="Discussion"></a>

## Discussion

This method’s default implementation returns [true](https://developer.apple.com/documentation/swift/true) if your app has a valid iCloud document storage entitlement (`com.apple.developer.ubiquity-container-identifiers` or `com.apple.developer.icloud-container-identifiers`, as described in [Entitlement Key Reference](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/AboutEntitlements.html#//apple_ref/doc/uid/TP40011195)). When this method returns [true](https://developer.apple.com/documentation/swift/true), the system adds new menu items and other UI for iCloud documents, as appropriate, and allows documents to be saved or moved into the primary iCloud container. (The primary iCloud container is the one identified by the first container identifier string in the iCloud Containers list in the Xcode target editor.)

To indicate that your [NSDocument](../nsdocument.md) subclass does not use iCloud storage, override this method to return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Storing Documents in iCloud

- [moveDocumentToUbiquityContainer:](movetoubiquitycontainer%28__%29.md): Moves the document to the user’s iCloud storage.
