> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsservicesmenurequestor](https://developer.apple.com/documentation/appkit/nsservicesmenurequestor)

# NSServicesMenuRequestor (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that support interaction with items users can share through a sharing service.

## Declaration

```swift
protocol NSServicesMenuRequestor : NSObjectProtocol
```

## Mentioned In

- [Supporting Writing Tools via the pasteboard](supporting-writing-tools-via-the-pasteboard.md)

<a id="overview"></a>

## Overview

This informal protocol consists of two methods, [writeSelection(to:types:)](nsservicesmenurequestor/writeselection%28to_types_%29.md) and [readSelection(from:)](nsservicesmenurequestor/readselection%28from_%29.md). The first method provides data to a remote service, and the second receives any data the remote service might send back. Both respond to messages that are generated when the user chooses a command from the Services menu.

## Topics

### Working with Pasteboards

- [readSelection(from:)](nsservicesmenurequestor/readselection%28from_%29.md): Reads data from the pasteboard and uses it to replace the current selection.
- [writeSelection(to:types:)](nsservicesmenurequestor/writeselection%28to_types_%29.md): Writes the current selection to the pasteboard.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### App Services

- [NSSharingService](nssharingservice.md): An object that facilitates the sharing of content with social media services, or with apps like Mail or Safari.
- [NSSharingServicePicker](nssharingservicepicker.md): A list of sharing services that the user can choose from.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.
- [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md): A toolbar item that displays the macOS share sheet.
- [NSCloudSharingServiceDelegate](nscloudsharingservicedelegate.md): A set of methods for responding to the life cycle events of the cloud-sharing service.
- [Services Functions](services-functions.md): Configure the contents of your app’s Services menu.

# NSServicesMenuRequestor (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that support interaction with items users can share through a sharing service.

## Declaration

```objectivec
@protocol NSServicesMenuRequestor <NSObject>
```

## Mentioned In

- [Supporting Writing Tools via the pasteboard](supporting-writing-tools-via-the-pasteboard.md)

<a id="overview"></a>

## Overview

This informal protocol consists of two methods, [writeSelectionToPasteboard:types:](nsservicesmenurequestor/writeselection%28to_types_%29.md) and [readSelectionFromPasteboard:](nsservicesmenurequestor/readselection%28from_%29.md). The first method provides data to a remote service, and the second receives any data the remote service might send back. Both respond to messages that are generated when the user chooses a command from the Services menu.

## Topics

### Working with Pasteboards

- [readSelectionFromPasteboard:](nsservicesmenurequestor/readselection%28from_%29.md): Reads data from the pasteboard and uses it to replace the current selection.
- [writeSelectionToPasteboard:types:](nsservicesmenurequestor/writeselection%28to_types_%29.md): Writes the current selection to the pasteboard.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### App Services

- [NSSharingService](nssharingservice.md): An object that facilitates the sharing of content with social media services, or with apps like Mail or Safari.
- [NSSharingServicePicker](nssharingservicepicker.md): A list of sharing services that the user can choose from.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.
- [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md): A toolbar item that displays the macOS share sheet.
- [NSCloudSharingServiceDelegate](nscloudsharingservicedelegate.md): A set of methods for responding to the life cycle events of the cloud-sharing service.
- [Services Functions](services-functions.md): Configure the contents of your app’s Services menu.
