> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiverootobjectkey](https://developer.apple.com/documentation/foundation/nskeyedarchiverootobjectkey)

# NSKeyedArchiveRootObjectKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Archives created using the class method [archivedData(withRootObject:)](nskeyedarchiver/archiveddata%28withrootobject_%29.md) use this key for the root object in the hierarchy of encoded objects. The [NSKeyedUnarchiver](nskeyedunarchiver.md) class method [unarchiveObject(with:)](nskeyedunarchiver/unarchiveobject%28with_%29.md) looks for this root key as well.

## Declaration

```swift
let NSKeyedArchiveRootObjectKey: String
```

# NSKeyedArchiveRootObjectKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Archives created using the class method [archivedDataWithRootObject:](nskeyedarchiver/archiveddata%28withrootobject_%29.md) use this key for the root object in the hierarchy of encoded objects. The [NSKeyedUnarchiver](nskeyedunarchiver.md) class method [unarchiveObjectWithData:](nskeyedunarchiver/unarchiveobject%28with_%29.md) looks for this root key as well.

## Declaration

```objectivec
extern NSString * const NSKeyedArchiveRootObjectKey;
```
