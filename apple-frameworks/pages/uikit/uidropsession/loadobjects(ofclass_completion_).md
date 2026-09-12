> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropsession/loadobjects(ofclass:completion:)](https://developer.apple.com/documentation/uikit/uidropsession/loadobjects(ofclass:completion:))

# loadObjects(ofClass:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates and loads a new instance of the specified class for each drag item in the session.

## Declaration

```swift
func loadObjects(ofClass aClass: any NSItemProviderReading.Type, completion: @escaping ([any NSItemProviderReading]) -> Void) -> Progress
```

## Parameters

- `aClass`: A class conforming to the [NSItemProviderReading](../../foundation/nsitemproviderreading.md) protocol.
- `completion`: The block that is executed after all objects are loaded.

<a id="return-value"></a>

## Return Value

An aggregate of the load progress for each object that is loaded.

## Mentioned In

- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

<a id="Discussion"></a>

## Discussion

You can use this method only in the drop interaction delegate’s implementation of the [dropInteraction(\_:performDrop:)](../uidropinteractiondelegate/dropinteraction%28__performdrop_%29.md) method. This method is called after the user drops the items into the destination view.

The completion handler is called on the main queue. It provides an array of all objects created, in the same order that the drag items were added to the drag session.

## Default Implementations

### UIDropSession Implementations

- [loadObjects(ofClass:completion:)](loadobjects%28ofclass_completion_%29-3ab01.md)

# loadObjectsOfClass:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates and loads a new instance of the specified class for each drag item in the session.

## Declaration

```objectivec
- (NSProgress *) loadObjectsOfClass:(Class<NSItemProviderReading> *) aClass completion:(void (^)(NSArray<__kindof id<NSItemProviderReading>> *objects)) completion;
```

## Parameters

- `aClass`: A class conforming to the [NSItemProviderReading](../../foundation/nsitemproviderreading.md) protocol.
- `completion`: The block that is executed after all objects are loaded.

<a id="return-value"></a>

## Return Value

An aggregate of the load progress for each object that is loaded.

## Mentioned In

- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

<a id="Discussion"></a>

## Discussion

You can use this method only in the drop interaction delegate’s implementation of the [dropInteraction:performDrop:](../uidropinteractiondelegate/dropinteraction%28__performdrop_%29.md) method. This method is called after the user drops the items into the destination view.

The completion handler is called on the main queue. It provides an array of all objects created, in the same order that the drag items were added to the drag session.

## Default Implementations

### UIDropSession Implementations

- [loadObjects(ofClass:completion:)](loadobjects%28ofclass_completion_%29-3ab01.md)
