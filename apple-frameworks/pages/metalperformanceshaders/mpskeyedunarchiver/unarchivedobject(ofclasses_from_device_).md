> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpskeyedunarchiver/unarchivedobject(ofclasses:from:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpskeyedunarchiver/unarchivedobject(ofclasses:from:device:))

# unarchivedObject(ofClasses:from:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
class func unarchivedObject(ofClasses classes: Set<AnyHashable>, from data: Data, device: any MTLDevice) throws -> Any
```

# unarchivedObjectOfClasses:fromData:device:error: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (id) unarchivedObjectOfClasses:(NSSet<Class> *) classes fromData:(NSData *) data device:(id<MTLDevice>) device error:(NSError **) error;
```
