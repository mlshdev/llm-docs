> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachment/metadata](https://developer.apple.com/documentation/healthkit/hkattachment/metadata)

# metadata (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Additional data associated with the attachment in the HealthKit store.

## Declaration

```swift
var metadata: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The metadata dictionary contains extra information describing this object. The dictionary’s keys are all strings. The values can be strings, numbers, or dates. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

Using predefined keys helps facilitate sharing data between apps; however, you’re also encouraged to create your own, custom keys as needed to extend a HealthKit object’s capabilities.

## See Also

### Accessing attachment data

- [name](name.md): The name of the attached file.
- [identifier](identifier.md): The universally unique identifier for the attached file.
- [contentType](contenttype.md): The type of data stored in the attached file.
- [size](size.md): The attachment’s size (in bytes).
- [creationDate](creationdate.md): The attachment’s creation date.
- [HKAttachment.AsyncBytes](asyncbytes.md): An asynchronous sequence that returns the attached file as a series of bytes.

# metadata (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Additional data associated with the attachment in the HealthKit store.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * metadata;
```

<a id="Discussion"></a>

## Discussion

The metadata dictionary contains extra information describing this object. The dictionary’s keys are all strings. The values can be strings, numbers, or dates. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

Using predefined keys helps facilitate sharing data between apps; however, you’re also encouraged to create your own, custom keys as needed to extend a HealthKit object’s capabilities.

## See Also

### Accessing attachment data

- [name](name.md): The name of the attached file.
- [identifier](identifier.md): The universally unique identifier for the attached file.
- [contentType](contenttype.md): The type of data stored in the attached file.
- [size](size.md): The attachment’s size (in bytes).
- [creationDate](creationdate.md): The attachment’s creation date.
