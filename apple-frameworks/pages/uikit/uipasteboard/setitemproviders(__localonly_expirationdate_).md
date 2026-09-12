> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/setitemproviders(_:localonly:expirationdate:)](https://developer.apple.com/documentation/uikit/uipasteboard/setitemproviders(_:localonly:expirationdate:))

# setItemProviders(\_:localOnly:expirationDate:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets and configures an explicit array of item providers for the pasteboard.

## Declaration

```swift
func setItemProviders(_ itemProviders: [NSItemProvider], localOnly: Bool, expirationDate: Date?)
```

## Parameters

- `itemProviders`: An array of item providers for the pasteboard.
- `localOnly`: If [false](https://developer.apple.com/documentation/swift/false), the pasteboard items are available to other devices through the Handoff feature; if [true](https://developer.apple.com/documentation/swift/true), the pasteboard items are only available to the local device.
- `expirationDate`: An [NSDate](../../foundation/nsdate.md) value that specifies the time and date that you want the system to remove the pasteboard items from the pasteboard.

## See Also

### Getting and setting item providers

- [itemProviders](itemproviders.md): An array of item providers for the pasteboard.
- [setObjects(\_:)](setobjects%28__%29-lljo.md): Sets an array of item providers for the pasteboard, based on a specified array of objects.
- [setObjects(\_:)](setobjects%28__%29-fjg8.md): Sets an array of item providers for the pasteboard, based on a specified array of objects.
- [setObjects(\_:localOnly:expirationDate:)](setobjects%28__localonly_expirationdate_%29-3h3iz.md): Sets and configures an array of item providers for the pasteboard, based on a specified array of objects.
- [setObjects(\_:localOnly:expirationDate:)](setobjects%28__localonly_expirationdate_%29-26u8o.md): Sets and configures an array of item providers for the pasteboard, based on a specified array of objects.

# setItemProviders:localOnly:expirationDate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets and configures an explicit array of item providers for the pasteboard.

## Declaration

```objectivec
- (void) setItemProviders:(NSArray<NSItemProvider *> *) itemProviders localOnly:(BOOL) localOnly expirationDate:(NSDate *) expirationDate;
```

## Parameters

- `itemProviders`: An array of item providers for the pasteboard.
- `localOnly`: If [false](https://developer.apple.com/documentation/swift/false), the pasteboard items are available to other devices through the Handoff feature; if [true](https://developer.apple.com/documentation/swift/true), the pasteboard items are only available to the local device.
- `expirationDate`: An [NSDate](../../foundation/nsdate.md) value that specifies the time and date that you want the system to remove the pasteboard items from the pasteboard.

## See Also

### Getting and setting item providers

- [itemProviders](itemproviders.md): An array of item providers for the pasteboard.
- [setObjects:](setobjects%28__%29-lljo.md): Sets an array of item providers for the pasteboard, based on a specified array of objects.
- [setObjects:localOnly:expirationDate:](setobjects%28__localonly_expirationdate_%29-3h3iz.md): Sets and configures an array of item providers for the pasteboard, based on a specified array of objects.
