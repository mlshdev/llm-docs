> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrserverattribute/init(readonlyattributewithid:initialvalue:requiredprivilege:)](https://developer.apple.com/documentation/matter/mtrserverattribute/init(readonlyattributewithid:initialvalue:requiredprivilege:))

# init(readonlyAttributeWithID:initialValue:requiredPrivilege:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
init?(readonlyAttributeWithID attributeID: NSNumber, initialValue value: [String : Any], requiredPrivilege: MTRAccessControlEntryPrivilege)
```

# initReadonlyAttributeWithID:initialValue:requiredPrivilege: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (instancetype) initReadonlyAttributeWithID:(NSNumber *) attributeID initialValue:(NSDictionary<NSString *,id> *) value requiredPrivilege:(MTRAccessControlEntryPrivilege) requiredPrivilege;
```
