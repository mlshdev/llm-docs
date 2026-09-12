> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragdropsession/canloadobjects(ofclass:)](https://developer.apple.com/documentation/uikit/uidragdropsession/canloadobjects(ofclass:))

# canLoadObjects(ofClass:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether at least one drag item in the session can create an instance of the specified class.

## Declaration

```swift
func canLoadObjects(ofClass aClass: any NSItemProviderReading.Type) -> Bool
```

## Parameters

- `aClass`: A class conforming to the [NSItemProviderReading](../../foundation/nsitemproviderreading.md) protocol.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if at least one drag item in the session can create an instance of the specified class; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Default Implementations

### UIDragDropSession Implementations

- [canLoadObjects(ofClass:)](canloadobjects%28ofclass_%29-6x43t.md)

## See Also

### Checking for drag items

- [hasItemsConforming(toTypeIdentifiers:)](hasitemsconforming%28totypeidentifiers_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session conforms to at least one of the specified UTIs.
- [items](items.md): An array of drag items in the drag session or drop session.

# canLoadObjectsOfClass: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that indicates whether at least one drag item in the session can create an instance of the specified class.

## Declaration

```objectivec
- (BOOL) canLoadObjectsOfClass:(Class<NSItemProviderReading> *) aClass;
```

## Parameters

- `aClass`: A class conforming to the [NSItemProviderReading](../../foundation/nsitemproviderreading.md) protocol.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if at least one drag item in the session can create an instance of the specified class; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Default Implementations

### UIDragDropSession Implementations

- [canLoadObjects(ofClass:)](canloadobjects%28ofclass_%29-6x43t.md)

## See Also

### Checking for drag items

- [hasItemsConformingToTypeIdentifiers:](hasitemsconforming%28totypeidentifiers_%29.md): Returns a Boolean value that indicates whether at least one drag item in the session conforms to at least one of the specified UTIs.
- [items](items.md): An array of drag items in the drag session or drop session.
