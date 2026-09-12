> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/creationintent](https://developer.apple.com/documentation/uikit/uidocument/creationintent)

# UIDocument.CreationIntent (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An app intent that creates new documents for your app.

## Declaration

```swift
struct CreationIntent
```

## Mentioned In

- [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md)

<a id="overview"></a>

## Overview

UIKit provides a default intent. You can extend this structure to provide additional intents for your app.

```swift
// Extend the creation intent enumeration to add custom options for document creation.
extension UIDocument.CreationIntent {
    static let template = UIDocument.CreationIntent("template")
}
```

For more information, see [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md).

## Topics

### Accessing creation intents

- [default](creationintent/default.md): The default document creation intent.

### Creating new intents

- [init(\_:)](creationintent/init%28__%29.md): Create a new document creation intent using the provided string.
- [init(rawValue:)](creationintent/init%28rawvalue_%29.md): Create a new document creation intent using the provided string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# UIDocumentCreationIntent (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An app intent that creates new documents for your app.

## Declaration

```objectivec
typedef NSString * UIDocumentCreationIntent;
```

## Mentioned In

- [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md)

<a id="overview"></a>

## Overview

UIKit provides a default intent. You can extend this structure to provide additional intents for your app.

```swift
// Extend the creation intent enumeration to add custom options for document creation.
extension UIDocument.CreationIntent {
    static let template = UIDocument.CreationIntent("template")
}
```

For more information, see [Customizing a document-based app’s launch experience](../customizing-a-document-based-app-s-launch-experience.md).

## Topics

### Accessing creation intents

- [UIDocumentCreationIntentDefault](creationintent/default.md): The default document creation intent.
