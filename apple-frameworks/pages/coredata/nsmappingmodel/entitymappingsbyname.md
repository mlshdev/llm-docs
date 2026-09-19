> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsmappingmodel/entitymappingsbyname

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
