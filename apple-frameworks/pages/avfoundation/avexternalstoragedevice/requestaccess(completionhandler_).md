> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avexternalstoragedevice/requestaccess(completionhandler:)

# requestAccess(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Requests access to an external storage device on behalf of your app, which can present a dialog to a person on their device’s display.

## Declaration

```swift
class func requestAccess(completionHandler handler: @escaping @Sendable (Bool) -> Void)
```

```swift
class func requestAccess() async -> Bool
```

## Parameters

- `handler`: A closure you provide the system calls to inform your app whether the person authorizes it to access the storage device. The system can call your closure on any dispatch queue and it’s your app’s responsibility to update its UI on the main thread or queue.

<a id="Discussion"></a>

## Discussion

Use this method to request access to save image assets to the external storage device. Your app can’t access the external storage device without generating an error until a person gives it permission.

The system only presents the dialog to a person the first time your app calls the method.

> **Note**

>  The method doesn’t block while the system presents a dialog to a person.

# requestAccessWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Requests access to an external storage device on behalf of your app, which can present a dialog to a person on their device’s display.

## Declaration

```objectivec
+ (void) requestAccessWithCompletionHandler:(void (^)(BOOL granted)) handler;
```

## Parameters

- `handler`: A closure you provide the system calls to inform your app whether the person authorizes it to access the storage device. The system can call your closure on any dispatch queue and it’s your app’s responsibility to update its UI on the main thread or queue.

<a id="Discussion"></a>

## Discussion

Use this method to request access to save image assets to the external storage device. Your app can’t access the external storage device without generating an error until a person gives it permission.

The system only presents the dialog to a person the first time your app calls the method.

> **Note**

>  The method doesn’t block while the system presents a dialog to a person.
