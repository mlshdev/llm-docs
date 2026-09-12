> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/identifier](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/identifier)

# identifier (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An identifier that uniquely identifies a data store.

## Declaration

```swift
var identifier: UUID? { get }
```

## See Also

### Inspecting data store properties

- [isPersistent](ispersistent.md): A Boolean value that indicates whether this object stores data to disk.

# identifier (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An identifier that uniquely identifies a data store.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSUUID * identifier;
```

## See Also

### Inspecting data store properties

- [persistent](ispersistent.md): A Boolean value that indicates whether this object stores data to disk.
