> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phcontenteditingcontroller](https://developer.apple.com/documentation/photosui/phcontenteditingcontroller)

# PHContentEditingController (Swift)

**Framework:** PhotosUI  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.11+ · visionOS 1.0+

A protocol your custom view controller class implements to provide a user interface for your Photos extension.

## Declaration

```swift
@MainActor protocol PHContentEditingController : NSObjectProtocol
```

## Mentioned In

- [Creating Photo Editing Extensions](../photokit/creating-photo-editing-extensions.md)

<a id="overview"></a>

## Overview

The [PHContentEditingController](phcontenteditingcontroller.md) protocol defines methods you implement in a custom view controller class in order to create a Photos extension. The Photos app hosts your extension’s view controller to provide a user interface for editing photo or video assets.

## Topics

### Working with Adjustment Data

- [canHandle(\_:)](phcontenteditingcontroller/canhandle%28__%29.md): Asks your extension whether it can continue working with the most recent edit that was made to an asset.

### Performing an Edit

- [startContentEditing(with:placeholderImage:)](phcontenteditingcontroller/startcontentediting%28with_placeholderimage_%29.md): Tells your extension that asset data is available for editing.
- [finishContentEditing(completionHandler:)](phcontenteditingcontroller/finishcontentediting%28completionhandler_%29.md): Asks your extension for edited asset data to finish the editing session.

### Canceling an Edit

- [shouldShowCancelConfirmation](phcontenteditingcontroller/shouldshowcancelconfirmation.md): A Boolean value that determines whether Photos should prompt the user when canceling the editing session.
- [cancelContentEditing()](phcontenteditingcontroller/cancelcontentediting%28%29.md): Tells your extension to cancel editing.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Photo editing extensions

- [Creating Photo Editing Extensions](../photokit/creating-photo-editing-extensions.md): Provide custom functionality in the Photos app by bundling an app extension.

# PHContentEditingController (Objective-C)

**Framework:** PhotosUI  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · macOS 10.11+ · visionOS 1.0+

A protocol your custom view controller class implements to provide a user interface for your Photos extension.

## Declaration

```objectivec
@protocol PHContentEditingController <NSObject>
```

## Mentioned In

- [Creating Photo Editing Extensions](../photokit/creating-photo-editing-extensions.md)

<a id="overview"></a>

## Overview

The [PHContentEditingController](phcontenteditingcontroller.md) protocol defines methods you implement in a custom view controller class in order to create a Photos extension. The Photos app hosts your extension’s view controller to provide a user interface for editing photo or video assets.

## Topics

### Working with Adjustment Data

- [canHandleAdjustmentData:](phcontenteditingcontroller/canhandle%28__%29.md): Asks your extension whether it can continue working with the most recent edit that was made to an asset.

### Performing an Edit

- [startContentEditingWithInput:placeholderImage:](phcontenteditingcontroller/startcontentediting%28with_placeholderimage_%29.md): Tells your extension that asset data is available for editing.
- [finishContentEditingWithCompletionHandler:](phcontenteditingcontroller/finishcontentediting%28completionhandler_%29.md): Asks your extension for edited asset data to finish the editing session.

### Canceling an Edit

- [shouldShowCancelConfirmation](phcontenteditingcontroller/shouldshowcancelconfirmation.md): A Boolean value that determines whether Photos should prompt the user when canceling the editing session.
- [cancelContentEditing](phcontenteditingcontroller/cancelcontentediting%28%29.md): Tells your extension to cancel editing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Photo editing extensions

- [Creating Photo Editing Extensions](../photokit/creating-photo-editing-extensions.md): Provide custom functionality in the Photos app by bundling an app extension.
