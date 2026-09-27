> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/isrecorddescriptor

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
