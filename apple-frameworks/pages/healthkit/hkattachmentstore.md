> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachmentstore](https://developer.apple.com/documentation/healthkit/hkattachmentstore)

# HKAttachmentStore (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The access point for attachments associated with samples in the HealthKit store.

## Declaration

```swift
class HKAttachmentStore
```

<a id="overview"></a>

## Overview

Use an [HKAttachmentStore](hkattachmentstore.md) object to manage attachments for samples that your app has saved to the HealthKit store.

## Topics

### Creating an attachment store

- [init(healthStore:)](hkattachmentstore/init%28healthstore_%29.md): Creates an attachment store for the provided HealthKit store.

### Adding attachments

- [addAttachment(to:name:contentType:url:metadata:)](hkattachmentstore/addattachment%28to_name_contenttype_url_metadata_%29.md): Asynchronously adds an attachment to the specified object.
- [addAttachment(to:name:contentType:url:metadata:completion:)](hkattachmentstore/addattachment%28to_name_contenttype_url_metadata_completion_%29.md): Adds an attachment to the specified object.

### Accessing attachments

- [getAttachments(for:completion:)](hkattachmentstore/getattachments%28for_completion_%29.md): Returns all the attachments for the specified object.
- [dataReader(for:)](hkattachmentstore/datareader%28for_%29.md): Returns a data reader for the attachment.
- [getData(for:completion:)](hkattachmentstore/getdata%28for_completion_%29.md): Returns an attachment’s data.
- [streamData(for:dataHandler:)](hkattachmentstore/streamdata%28for_datahandler_%29.md): Asynchronously returns the attachment’s data.

### Removing attachments

- [removeAttachment(\_:from:completion:)](hkattachmentstore/removeattachment%28__from_completion_%29.md): Removes the specified attachment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Attachments

- [HKAttachment](hkattachment.md): A file that is attached to a sample in the HealthKit store.
- [HKAttachmentDataReader](hkattachmentdatareader.md): A reader that provides access to an attachment’s data.

# HKAttachmentStore (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The access point for attachments associated with samples in the HealthKit store.

## Declaration

```objectivec
@interface HKAttachmentStore : NSObject
```

<a id="overview"></a>

## Overview

Use an [HKAttachmentStore](hkattachmentstore.md) object to manage attachments for samples that your app has saved to the HealthKit store.

## Topics

### Creating an attachment store

- [initWithHealthStore:](hkattachmentstore/init%28healthstore_%29.md): Creates an attachment store for the provided HealthKit store.

### Adding attachments

- [addAttachmentToObject:name:contentType:URL:metadata:completion:](hkattachmentstore/addattachmenttoobject_name_contenttype_url_metadata_completion_.md): Adds an attachment to the specified object.

### Accessing attachments

- [getAttachmentsForObject:completion:](hkattachmentstore/getattachments%28for_completion_%29.md): Returns all the attachments for the specified object.
- [getDataForAttachment:completion:](hkattachmentstore/getdata%28for_completion_%29.md): Returns an attachment’s data.
- [streamDataForAttachment:dataHandler:](hkattachmentstore/streamdata%28for_datahandler_%29.md): Asynchronously returns the attachment’s data.

### Removing attachments

- [removeAttachment:fromObject:completion:](hkattachmentstore/removeattachment%28__from_completion_%29.md): Removes the specified attachment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Attachments

- [HKAttachment](hkattachment.md): A file that is attached to a sample in the HealthKit store.
