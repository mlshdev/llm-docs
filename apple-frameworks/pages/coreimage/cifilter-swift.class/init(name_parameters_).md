> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/init(name:parameters:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/init(name:parameters:))

# init(name:parameters:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Creates a new filter of type ‘name’. The filter’s input parameters are set from the dictionary of key-value pairs. On OSX, any of the filter input parameters not specified in the dictionary will be undefined. On iOS, any of the filter input parameters not specified in the dictionary will be set to default values.

## Declaration

```swift
init?(name: String, parameters params: [String : Any]?)
```

# filterWithName:withInputParameters: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Creates a new filter of type ‘name’. The filter’s input parameters are set from the dictionary of key-value pairs. On OSX, any of the filter input parameters not specified in the dictionary will be undefined. On iOS, any of the filter input parameters not specified in the dictionary will be set to default values.

## Declaration

```objectivec
+ (CIFilter *) filterWithName:(NSString *) name withInputParameters:(NSDictionary<NSString *,id> *) params;
```
