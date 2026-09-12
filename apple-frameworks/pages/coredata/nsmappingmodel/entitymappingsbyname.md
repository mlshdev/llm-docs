> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmappingmodel/entitymappingsbyname](https://developer.apple.com/documentation/coredata/nsmappingmodel/entitymappingsbyname)

# entityMappingsByName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity mappings for the mapping model, keyed by name.

## Declaration

```swift
var entityMappingsByName: [String : NSEntityMapping] { get }
```

## See Also

### Managing Entity Mappings

- [entityMappings](entitymappings.md): The entity mappings for the mapping model.

# entityMappingsByName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity mappings for the mapping model, keyed by name.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSEntityMapping *> * entityMappingsByName;
```

## See Also

### Managing Entity Mappings

- [entityMappings](entitymappings.md): The entity mappings for the mapping model.
