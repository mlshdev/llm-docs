> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropinteractiondelegate/dropinteraction(_:performdrop:)](https://developer.apple.com/documentation/uikit/uidropinteractiondelegate/dropinteraction(_:performdrop:))

# dropInteraction(\_:performDrop:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate it can request the item provider data from the session’s drag items.

## Declaration

```swift
optional func dropInteraction(_ interaction: UIDropInteraction, performDrop session: any UIDropSession)
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The session containing the drag items.

## Mentioned In

- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

<a id="Discussion"></a>

## Discussion

You can request a drag item’s [itemProvider](../uidragitem/itemprovider.md) data within the scope of this method only and not at any other time.

To request the data, iterate over the session items calling [loadObject(ofClass:completionHandler:)](../../foundation/nsitemprovider/loadobject%28ofclass_completionhandler_%29-8ak5d.md) on each item’s item provider. For example, if you are expecting the drag items to be images, here’s how you can load each image:

```swift
func dropInteraction(_ interaction: UIDropInteraction, performDrop session: UIDropSession) {
    for item in session.items {
        let itemProvider = item.itemProvider
        guard itemProvider.canLoadObject(ofClass: UIImage.self) 
        else {continue}

        itemProvider.loadObject(ofClass: UIImage.self, completionHandler: { (object, error) in
            if let image = object as? UIImage {
                DispatchQueue.main.async {
                    self.imageView.image = image
                }
            }
        })
    }
}
```

If you need to be more specific about the type of data to load, use one of the following methods to specify the desired data type using its uniform type identifier (UTI):

- [loadDataRepresentation(forTypeIdentifier:completionHandler:)](../../foundation/nsitemprovider/loaddatarepresentation%28fortypeidentifier_completionhandler_%29.md)
- [loadFileRepresentation(forTypeIdentifier:completionHandler:)](../../foundation/nsitemprovider/loadfilerepresentation%28fortypeidentifier_completionhandler_%29.md)
- [loadInPlaceFileRepresentation(forTypeIdentifier:completionHandler:)](../../foundation/nsitemprovider/loadinplacefilerepresentation%28fortypeidentifier_completionhandler_%29.md)

If you want only JPEG images, use the UTI for the JPEG image type:

```swift
import MobileCoreServices // for kUTTypeJPEG
func dropInteraction(_ interaction: UIDropInteraction, performDrop session: UIDropSession) {
    for item in session.items {
        let itemProvider = item.itemProvider
        itemProvider.loadDataRepresentation(forTypeIdentifier: kUTTypeJPEG as String, completionHandler: { (data, error) in
            guard
                let data = data,
                let image = UIImage(data: data)
                else {return}
            
            DispatchQueue.main.async {
                self.imageView.image = image
            }        
        })
    }
}
```

You can also use the session’s convenience method [loadObjects(ofClass:completion:)](../uidropsession/loadobjects%28ofclass_completion_%29.md) to load the data for an item. Note that the completion handler for this method is called on the main thread, which is not true when loading the data from the item provider.

```swift
func dropInteraction(_ interaction: UIDropInteraction, performDrop session: UIDropSession) {
    session.loadObjects(ofClass: UIImage.self) { objects in
        guard let images = objects as? [UIImage] else {return}
        for image in images {
            self.imageView.image = image
        }
    }
}
```

When you ask the session or item provider to load its data, it gives you a [Progress](../../foundation/progress.md) object. You can also get the progress for the session at a later time from its [progress](../../foundation/progressreporting/progress.md) property.

The [Progress](../../foundation/progress.md) object tells you how much of the data transfer is complete and if the transfer has finished. What’s more, it can be used to cancel, pause, and resume the data-load process.

## See Also

### Handling the drop

- [dropInteraction(\_:canHandle:)](dropinteraction%28__canhandle_%29.md): Asks the delegate whether it can handle the session’s drag items.

# dropInteraction:performDrop: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate it can request the item provider data from the session’s drag items.

## Declaration

```objectivec
- (void) dropInteraction:(UIDropInteraction *) interaction performDrop:(id<UIDropSession>) session;
```

## Parameters

- `interaction`: The interaction that called this method.
- `session`: The session containing the drag items.

## Mentioned In

- [Making a view into a drop destination](../making-a-view-into-a-drop-destination.md)

<a id="Discussion"></a>

## Discussion

You can request a drag item’s [itemProvider](../uidragitem/itemprovider.md) data within the scope of this method only and not at any other time.

To request the data, iterate over the session items calling [loadObjectOfClass:completionHandler:](../../foundation/nsitemprovider/loadobject%28ofclass_completionhandler_%29-8ak5d.md) on each item’s item provider. For example, if you are expecting the drag items to be images, here’s how you can load each image:

```swift
func dropInteraction(_ interaction: UIDropInteraction, performDrop session: UIDropSession) {
    for item in session.items {
        let itemProvider = item.itemProvider
        guard itemProvider.canLoadObject(ofClass: UIImage.self) 
        else {continue}

        itemProvider.loadObject(ofClass: UIImage.self, completionHandler: { (object, error) in
            if let image = object as? UIImage {
                DispatchQueue.main.async {
                    self.imageView.image = image
                }
            }
        })
    }
}
```

If you need to be more specific about the type of data to load, use one of the following methods to specify the desired data type using its uniform type identifier (UTI):

- [loadDataRepresentationForTypeIdentifier:completionHandler:](../../foundation/nsitemprovider/loaddatarepresentation%28fortypeidentifier_completionhandler_%29.md)
- [loadFileRepresentationForTypeIdentifier:completionHandler:](../../foundation/nsitemprovider/loadfilerepresentation%28fortypeidentifier_completionhandler_%29.md)
- [loadInPlaceFileRepresentationForTypeIdentifier:completionHandler:](../../foundation/nsitemprovider/loadinplacefilerepresentation%28fortypeidentifier_completionhandler_%29.md)

If you want only JPEG images, use the UTI for the JPEG image type:

```swift
import MobileCoreServices // for kUTTypeJPEG
func dropInteraction(_ interaction: UIDropInteraction, performDrop session: UIDropSession) {
    for item in session.items {
        let itemProvider = item.itemProvider
        itemProvider.loadDataRepresentation(forTypeIdentifier: kUTTypeJPEG as String, completionHandler: { (data, error) in
            guard
                let data = data,
                let image = UIImage(data: data)
                else {return}
            
            DispatchQueue.main.async {
                self.imageView.image = image
            }        
        })
    }
}
```

You can also use the session’s convenience method [loadObjectsOfClass:completion:](../uidropsession/loadobjects%28ofclass_completion_%29.md) to load the data for an item. Note that the completion handler for this method is called on the main thread, which is not true when loading the data from the item provider.

```swift
func dropInteraction(_ interaction: UIDropInteraction, performDrop session: UIDropSession) {
    session.loadObjects(ofClass: UIImage.self) { objects in
        guard let images = objects as? [UIImage] else {return}
        for image in images {
            self.imageView.image = image
        }
    }
}
```

When you ask the session or item provider to load its data, it gives you a [NSProgress](../../foundation/progress.md) object. You can also get the progress for the session at a later time from its [progress](../../foundation/progressreporting/progress.md) property.

The [NSProgress](../../foundation/progress.md) object tells you how much of the data transfer is complete and if the transfer has finished. What’s more, it can be used to cancel, pause, and resume the data-load process.

## See Also

### Handling the drop

- [dropInteraction:canHandleSession:](dropinteraction%28__canhandle_%29.md): Asks the delegate whether it can handle the session’s drag items.
