> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/ispersistent](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/ispersistent)

# isPersistent (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A Boolean value that indicates whether this object stores data to disk.

## Declaration

```swift
var isPersistent: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the data store writes data to disk, or [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

## See Also

### Inspecting data store properties

- [identifier](identifier.md): An identifier that uniquely identifies a data store.

# persistent (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A Boolean value that indicates whether this object stores data to disk.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPersistent) BOOL persistent;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the data store writes data to disk, or [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

## See Also

### Inspecting data store properties

- [identifier](identifier.md): An identifier that uniquely identifies a data store.
