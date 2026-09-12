> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachment](https://developer.apple.com/documentation/healthkit/hkattachment)

# HKAttachment (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A file that is attached to a sample in the HealthKit store.

## Declaration

```swift
class HKAttachment
```

<a id="overview"></a>

## Overview

To access the attachment’s data, get a data reader from the attachment store for each attachment.

```swift
let attachmentStore = HKAttachmentStore(healthStore: store)

let attachments: [HKAttachment]
do {
    attachments = try await attachmentStore.attachments(for: prescription)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while accessing the attachments for a prescription: \(error.localizedDescription) ***")
}

// Use the attachments here.
print("*** \(attachments.count) attachments found ***")

for attachment in attachments {

    // Get a data reader for the attachment.
    let dataReader = attachmentStore.dataReader(for:   attachment)

    // Read the data here.
}
```

You can then asynchronously access the whole data object.

```swift
let data: Data
do {
    data = try await dataReader.data
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while accessing the attachment's data. \(error.localizedDescription) ***")
}
```

Alternatively, you can access the file’s contents as an asynchronous sequence of bytes.

```swift
// Asynchronously access the attachment's bytes.
var data = Data()
do {
    for try await byte in dataReader.bytes {
        // Use the bytes here.
        data.append(byte)
    }
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while reading the attachment's data: \(error.localizedDescription) ***")
}
```

> **Note**

>  You can only add attachments to [HKVisionPrescription](hkvisionprescription.md), [HKGlassesPrescription](hkglassesprescription.md), and [HKContactsPrescription](hkcontactsprescription.md) samples. You can also read attachments from [clinicalNoteRecord](hkclinicaltypeidentifier/clinicalnoterecord.md) samples.

## Topics

### Accessing attachment data

- [name](hkattachment/name.md): The name of the attached file.
- [identifier](hkattachment/identifier.md): The universally unique identifier for the attached file.
- [contentType](hkattachment/contenttype.md): The type of data stored in the attached file.
- [size](hkattachment/size.md): The attachment’s size (in bytes).
- [creationDate](hkattachment/creationdate.md): The attachment’s creation date.
- [metadata](hkattachment/metadata.md): Additional data associated with the attachment in the HealthKit store.
- [HKAttachment.AsyncBytes](hkattachment/asyncbytes.md): An asynchronous sequence that returns the attached file as a series of bytes.

### Initializers

- [init(coder:)](hkattachment/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [HKVisionPrescription](hkvisionprescription.md): A sample that stores a vision prescription.
- [HKGlassesPrescription](hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](hkcontactsprescription.md): A sample that store a prescription for contacts.

### Attachments

- [HKAttachmentStore](hkattachmentstore.md): The access point for attachments associated with samples in the HealthKit store.
- [HKAttachmentDataReader](hkattachmentdatareader.md): A reader that provides access to an attachment’s data.

# HKAttachment (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

A file that is attached to a sample in the HealthKit store.

## Declaration

```objectivec
@interface HKAttachment : NSObject
```

<a id="overview"></a>

## Overview

To access the attachment’s data, get a data reader from the attachment store for each attachment.

```swift
let attachmentStore = HKAttachmentStore(healthStore: store)

let attachments: [HKAttachment]
do {
    attachments = try await attachmentStore.attachments(for: prescription)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while accessing the attachments for a prescription: \(error.localizedDescription) ***")
}

// Use the attachments here.
print("*** \(attachments.count) attachments found ***")

for attachment in attachments {

    // Get a data reader for the attachment.
    let dataReader = attachmentStore.dataReader(for:   attachment)

    // Read the data here.
}
```

You can then asynchronously access the whole data object.

```swift
let data: Data
do {
    data = try await dataReader.data
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while accessing the attachment's data. \(error.localizedDescription) ***")
}
```

Alternatively, you can access the file’s contents as an asynchronous sequence of bytes.

```swift
// Asynchronously access the attachment's bytes.
var data = Data()
do {
    for try await byte in dataReader.bytes {
        // Use the bytes here.
        data.append(byte)
    }
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while reading the attachment's data: \(error.localizedDescription) ***")
}
```

> **Note**

>  You can only add attachments to [HKVisionPrescription](hkvisionprescription.md), [HKGlassesPrescription](hkglassesprescription.md), and [HKContactsPrescription](hkcontactsprescription.md) samples. You can also read attachments from [HKClinicalTypeIdentifierClinicalNoteRecord](hkclinicaltypeidentifier/clinicalnoterecord.md) samples.

## Topics

### Accessing attachment data

- [name](hkattachment/name.md): The name of the attached file.
- [identifier](hkattachment/identifier.md): The universally unique identifier for the attached file.
- [contentType](hkattachment/contenttype.md): The type of data stored in the attached file.
- [size](hkattachment/size.md): The attachment’s size (in bytes).
- [creationDate](hkattachment/creationdate.md): The attachment’s creation date.
- [metadata](hkattachment/metadata.md): Additional data associated with the attachment in the HealthKit store.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Related Documentation

- [HKVisionPrescription](hkvisionprescription.md): A sample that stores a vision prescription.
- [HKGlassesPrescription](hkglassesprescription.md): A sample that stores a prescription for glasses.
- [HKContactsPrescription](hkcontactsprescription.md): A sample that store a prescription for contacts.

### Attachments

- [HKAttachmentStore](hkattachmentstore.md): The access point for attachments associated with samples in the HealthKit store.
