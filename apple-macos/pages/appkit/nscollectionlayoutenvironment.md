> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutenvironment](https://developer.apple.com/documentation/appkit/nscollectionlayoutenvironment)

# NSCollectionLayoutEnvironment (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A protocol used to provide information about the layout’s container and environment traits, such as size classes and display scale factor.

## Declaration

```swift
@MainActor protocol NSCollectionLayoutEnvironment : NSObjectProtocol
```

<a id="overview"></a>

## Overview

In a section provider, you use the layout environment to get information about the context that the layout appears in. You can get information about the layout’s container, such as its size and content insets, and the traits of its environment, such as size classes, display scale factor, and user interface idiom. You use this information while rendering the layout’s sections to help you make decisions about how to display the layout.

For example, the following code uses the layout environment’s trait collection to check whether the UI is in Dark Mode while creating the layout’s sections.

**Swift**

```swift
let layout = UICollectionViewCompositionalLayout { (sectionIndex: Int,
    layoutEnvironment: NSCollectionLayoutEnvironment) -> NSCollectionLayoutSection in
        
    if layoutEnvironment.traitCollection.userInterfaceStyle == .dark {
        return sectionForUserInterfaceStyle(.dark)
    } else {
        return sectionForUserInterfaceStyle(.light)
    }
}
```

**Objective-C**

```objc
UICollectionViewCompositionalLayout *layout = [[UICollectionViewCompositionalLayout alloc] initWithSectionProvider:^NSCollectionLayoutSection *(NSInteger section, id<NSCollectionLayoutEnvironment> layoutEnvironment) {
    if (layoutEnvironment.traitCollection.userInterfaceStyle == UIUserInterfaceStyleDark) {
        return [self sectionForUserInterfaceStyle: UIUserInterfaceStyleDark];
    } else {
        return [self sectionForUserInterfaceStyle: UIUserInterfaceStyleLight];
    }
}];
```

## Topics

### Getting the layout’s container

- [container](nscollectionlayoutenvironment/container.md): Information about the layout’s container, such as its size and content insets.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSCollectionLayoutEnvironment (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A protocol used to provide information about the layout’s container and environment traits, such as size classes and display scale factor.

## Declaration

```objectivec
@protocol NSCollectionLayoutEnvironment <NSObject>
```

<a id="overview"></a>

## Overview

In a section provider, you use the layout environment to get information about the context that the layout appears in. You can get information about the layout’s container, such as its size and content insets, and the traits of its environment, such as size classes, display scale factor, and user interface idiom. You use this information while rendering the layout’s sections to help you make decisions about how to display the layout.

For example, the following code uses the layout environment’s trait collection to check whether the UI is in Dark Mode while creating the layout’s sections.

**Swift**

```swift
let layout = UICollectionViewCompositionalLayout { (sectionIndex: Int,
    layoutEnvironment: NSCollectionLayoutEnvironment) -> NSCollectionLayoutSection in
        
    if layoutEnvironment.traitCollection.userInterfaceStyle == .dark {
        return sectionForUserInterfaceStyle(.dark)
    } else {
        return sectionForUserInterfaceStyle(.light)
    }
}
```

**Objective-C**

```objc
UICollectionViewCompositionalLayout *layout = [[UICollectionViewCompositionalLayout alloc] initWithSectionProvider:^NSCollectionLayoutSection *(NSInteger section, id<NSCollectionLayoutEnvironment> layoutEnvironment) {
    if (layoutEnvironment.traitCollection.userInterfaceStyle == UIUserInterfaceStyleDark) {
        return [self sectionForUserInterfaceStyle: UIUserInterfaceStyleDark];
    } else {
        return [self sectionForUserInterfaceStyle: UIUserInterfaceStyleLight];
    }
}];
```

## Topics

### Getting the layout’s container

- [container](nscollectionlayoutenvironment/container.md): Information about the layout’s container, such as its size and content insets.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
