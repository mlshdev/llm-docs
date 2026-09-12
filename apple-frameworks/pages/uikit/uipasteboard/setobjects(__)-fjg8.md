> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/setobjects(_:)-fjg8](https://developer.apple.com/documentation/uikit/uipasteboard/setobjects(_:)-fjg8)

# setObjects(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS

Sets an array of item providers for the pasteboard, based on a specified array of objects.

## Declaration

```swift
func setObjects<T>(_ objects: [T]) where T : _ObjectiveCBridgeable, T._ObjectiveCType : NSItemProviderWriting
```

## Parameters

- `objects`: An array of item providers for the pasteboard.

## See Also

### Getting and setting item providers

- [itemProviders](itemproviders.md): An array of item providers for the pasteboard.
- [setItemProviders(\_:localOnly:expirationDate:)](setitemproviders%28__localonly_expirationdate_%29.md): Sets and configures an explicit array of item providers for the pasteboard.
- [setObjects(\_:)](setobjects%28__%29-lljo.md): Sets an array of item providers for the pasteboard, based on a specified array of objects.
- [setObjects(\_:localOnly:expirationDate:)](setobjects%28__localonly_expirationdate_%29-3h3iz.md): Sets and configures an array of item providers for the pasteboard, based on a specified array of objects.
- [setObjects(\_:localOnly:expirationDate:)](setobjects%28__localonly_expirationdate_%29-26u8o.md): Sets and configures an array of item providers for the pasteboard, based on a specified array of objects.
