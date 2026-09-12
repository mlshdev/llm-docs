> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/opensystemurl(_:)](https://developer.apple.com/documentation/watchkit/wkextension/opensystemurl(_:))

# openSystemURL(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

Opens the specified system URL.

## Declaration

```swift
func openSystemURL(_ url: URL)
```

## Parameters

- `url`: A URL that supports the `tel:` or `sms:` scheme. For information about the format of these URL schemes, see [Apple URL Scheme Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007899).

<a id="Discussion"></a>

## Discussion

Use this method to initiate phone calls or send messages. The URL you open is sent to the appropriate system app for handling, at which point the user can choose whether to continue the operation.

# openSystemURL: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

Opens the specified system URL.

## Declaration

```objectivec
- (void) openSystemURL:(NSURL *) url;
```

## Parameters

- `url`: A URL that supports the `tel:` or `sms:` scheme. For information about the format of these URL schemes, see [Apple URL Scheme Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007899).

<a id="Discussion"></a>

## Discussion

Use this method to initiate phone calls or send messages. The URL you open is sent to the appropriate system app for handling, at which point the user can choose whether to continue the operation.
