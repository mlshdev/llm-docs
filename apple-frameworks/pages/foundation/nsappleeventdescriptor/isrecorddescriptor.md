> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/isrecorddescriptor](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/isrecorddescriptor)

# isRecordDescriptor (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

Returns whether or not the receiver is a record-like descriptor.

## Declaration

```swift
var isRecordDescriptor: Bool { get }
```

<a id="discussion"></a>

## Discussion

Record-like descriptors function as records, but may have a `descriptorType` other than `typeAERecord`, such as `typeObjectSpecifier`.

# isRecordDescriptor (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

Returns whether or not the receiver is a record-like descriptor.

## Declaration

```objectivec
@property (readonly) BOOL isRecordDescriptor;
```

<a id="discussion"></a>

## Discussion

Record-like descriptors function as records, but may have a `descriptorType` other than `typeAERecord`, such as `typeObjectSpecifier`.
