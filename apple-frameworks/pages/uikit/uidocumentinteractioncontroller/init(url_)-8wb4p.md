> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller/init(url:)-8wb4p](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/init(url:)-8wb4p)

# init(url:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a document interaction controller with the specified URL.

## Declaration

```swift
init(url: URL)
```

## Parameters

- `url`: A URL that specifies the location of the desired document. This parameter is retained. It can be changed later by modifying the [url](url.md) property.

<a id="return-value"></a>

## Return Value

A new document interaction controller object.

# interactionControllerWithURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a document interaction controller with the specified URL.

## Declaration

```objectivec
+ (UIDocumentInteractionController *) interactionControllerWithURL:(NSURL *) url;
```

## Parameters

- `url`: A URL that specifies the location of the desired document. This parameter is retained. It can be changed later by modifying the [URL](url.md) property.

<a id="return-value"></a>

## Return Value

A new document interaction controller object.
